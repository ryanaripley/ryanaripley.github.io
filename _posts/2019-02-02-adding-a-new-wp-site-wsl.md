---
title: Adding a new local WordPress site using WSL
tags: 
  - WordPress
  - WSL
x_colors: "['#DE4815', '#CECB95', '#0F4885', '#061B37']"
accent_color: "#DE4815"
---

Having switched to a Lenovo Flex 14 running Windows 10 as my primary development machine, I've had to adjust my process for building WordPress themes and plugins locally.

## Pre-requisites

There are a few tools I'm using to make this process work. My primary development machine is a Lenovo laptop running Windows 10, and I have Windows Subsystem for Linux installed to provide an Ubuntu dev environment. I used [Dave Rupert's write up about his WSL process][rupert] when setting things up, a few twists and turns aside. Rather than fighting around with XAMPP or some similar tool, I set up the LAMP stack directly within WSL. This requires installing **Apache**, **MySQL**, and **PHP**. I also lean heavily on [WP-CLI][wp-cli] to install WordPress and its plugins. 

Using WSL for my LAMP stack means that I need to start up Apache and MySQL each time I reboot. To do so, I run the following commands in WSL:

```bash
sudo service apache2 start
sudo service mysql start
```

Both services need to be running before I begin the following steps.

### Note on file permissions

Jumping back and forth between editing files with Ubuntu (through WSL) and editing them with Windows (using VSCode) means that I've had to deal with some issues related to file permissions. Most noticeably, my local WP environment doesn't have proper permission to add or remove plugins. The easy solution for me was to simply use the [WP-CLI][wp-cli] for all WP configuration.

### 1. Create and enable the Apache site config file

First of all, I copy the default Apache site config file so that I'll be able to edit it for the new local site. (In the code below, `newsite` is just a stand-in for whatever I decide to name the new site.) Notice how I include the local TLD `.localhost` in the config file name:

```bash
sudo cp /etc/apache2/sites-available/000-default.conf  /etc/apache2/sites-available/newsite.localhost.conf
```

**Important**: you cannot edit WSL config files with a Windows file editor (such as VS code). This cannot be overemphasized. [Directly creating or modifying files within the WSL filesystem could cause data corruption and break your WSL install][ms-developer]. I use Nano to edit the config file in the terminal:

```
sudo nano  /etc/apache2/sites-available/newsite.localhost.conf
```

In Nano, I update the config file for the new site. For all of my local sites, I use the top level domain `.localhost`. Ally my projects are in a 'Sites' directory in my Window's user folder. To access the Windows file structure from WSL, you precede all paths with `/mnt/c/`, for instance, to get into the C drive.  

Here is how I update the Apache site config file:

```apache
DocumentRoot /mnt/c/Users/ryana/Sites/newsite
ServerName newsite.localhost
<Directory /mnt/c/Users/ryana/Sites/newsite>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Require all granted
</Directory>
```

To save the config file, I press `ctrl + x` in Nano and save my changes. Now that the Apache site config file has been created, I enable it:
  
```bash
sudo a2ensite newsite.locahost.conf
```

## 2. Add new site to the Windows hosts file
 
The site config file has been created and enabled, but I need to add it to my list of hosts. Here's where things get a little dicey. Typically, on a pure Linux box, the hosts file could be found here: `/etc/hosts`. When you use WSL, this file gets automatically generated based on the Windows hosts file. From the WSL bash, Windows hosts file can be found here: `/mnt/c/Windows/System32/drivers/etc/`. 

Luckily, this file can be edited within Windows itself without the aforementioned problems with breaking WSL. You could use file explorer to find the folder and edit the hosts file, or open the file in the command line with the text editor of your choice (mine is VS code):

```bash
code /mnt/c/Windows/System32/drivers/etc/
```

This will open up my editor, and I can add the new site to the list:

```apache
127.0.0.1       localhost
127.0.1.1       SKYWALKER.localdomain   SKYWALKER
127.0.0.1       newsite.localhost
```

(Yes, I named my computer is named Skywalker.) When you save this file, you will get an error that you don't have sufficient permission. In VS Code, I have the option to try saving it as an administrator. A quick type of my password, and the file is saved.

Finally, I reload apache:

```bash
service apache2 reload
```

### 3. Create MySQL database for WordPress

Before I can download and install WordPress, I need a database. Back to the WSL command line: 

```bash
mysql -u root -p
CREATE DATABASE newsite;
exit
```

This creates a database called `newsite` with a password and username both set to `root`. Obviously terribly insecure for a production server, but this config is only for local development, so I like to keep things simple.

## 4. Download and install WordPress

Now I use [WP-CLI][wp-cli] to do the heavy lifting for downloading and installing WordPress. Here is how I would run the install using the database I just created:

```bash
wp core download 
wp config create --dbname=newsite --dbuser=root --dbpass=root
wp core install --url=newsite.localhost --title="Name of New Site" --admin_user=admin --admin_password=password --admin_email=admin@example.com --skip-email
```

## Did it work?

Unless something when terribly wrong, I should now be able to head over to `newsite.localhost` in any browser and find a fresh WP install waiting for me. I can now use the WP-CLI to install any plugins or themes that I want, or import a WP export file.


[rupert]: https://daverupert.com/2018/04/developing-on-windows-with-wsl-and-visual-studio-code/
[prognotes]: https://prognotes.net/2016/08/configuring-local-lamp-stack-web-development/
[wp-cli]: https://wp-cli.org/
[ms-developer]: https://blogs.msdn.microsoft.com/commandline/2016/11/17/do-not-change-linux-files-using-windows-apps-and-tools/