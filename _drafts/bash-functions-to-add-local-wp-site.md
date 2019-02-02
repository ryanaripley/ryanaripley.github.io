---
title: Bash functions to automate local WP set-up
x_colors: "['#061B37', '#0F4885', '#CECB95', '#DE4815']"
accent_color: "#DE4815"
tags: 
  - WordPress
  - WSL
---

## But that was so much typing...

Having set up a few local sites this way, I got sick of the repetition and created a few bash aliases/functions to help automate the process. Here's the first bash function that takes a string for my new site name and takes care of all the Apache config:

<!--more-->

```bash
function new_site () {
  if [ -z $1 ]
  then
    # If no site name is specified, do nothing
    echo "Please specify a site name."
  else
    # Copy site config file from template from the default:
    sudo cp /etc/apache2/sites-available/000-default.conf  /etc/apache2/sites-available/$1.localhost.conf
    # Open Nano to edit the config file:
    sudo nano  /etc/apache2/sites-available/$1.localhost.conf
    sudo a2ensite $1.localhost.conf               # Enable new site
    service apache2 reload                        # Reload Apache 
    cd /mnt/c/Windows/System32/drivers/etc        # Move to the hosts file's directory
    code hosts                                    # Open hosts file in VS code
    cd /mnt/c/Users/ryana/Sites                   # Move to my sites folder
    mkdir $1                                      # Create a folder for new site
    cd $1                                         # Move to new site folder
    echo "New site '$1' created. Next, add the database before you 'install_wp'"
  fi
}
```

With this Bash function, all I would need to do to create a new site called "Foobar" is run `newsite foober` and all the Apache config is run for me.

I haven't found a simple way to automate creating the database, so next I do this:

```bash
mysql -u root -p
CREATE DATABASE newsite;
exit
```

Before using this bash function to install WordPress:

```bash
function install_wp () {
  if [ -z $1 ]
  then
    echo "Please specify site name."
  else
    wp core download
    wp config create --dbname=$1 --dbuser=root --dbpass=root
    wp core install --url=$1.localhost --title="$1" --admin_user=admin --admin_password=password --admin_email=admin@example.com --skip-email
  fi
}
```

This function allows me to run `install_wp foobar` to finalize 