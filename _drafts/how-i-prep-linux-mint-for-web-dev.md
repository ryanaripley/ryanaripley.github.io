---
title: How I prep a Linux Mint installation for web development
---

If necessary, get my wireless card working using [this driver and accompanying instructions](https://github.com/gnab/rtl8812au).

Restart for the first time, and now you have wireless. On to the good stuff. 

First things first: let's get Mint looking snazzy

Switch themes to Linux Mint-Y Dark


Install the applications that are found in the official sources:

```sh
sudo apt-get install chromium-browser gimp inkscape
```

```sh
sudo apt-get install ruby-full git-all
```

Install Node

```sh
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```