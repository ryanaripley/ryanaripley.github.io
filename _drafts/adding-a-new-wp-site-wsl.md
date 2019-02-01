---
title: Adding a new local WordPress site using Windows Subsystem for Linux
---

## Pre-requisites

There are a few tools I'm using to make this process work. My primary development machine is a Lenovo laptop running Windows 10, and I have Windows Subsystem for Linux installed to provide a Ubuntu dev environment. I used [Dave Rupert's write up about his WSL process][rupert] when setting things up, a few twists and turns aside. 

## File permissions

Jumping back and forth between editing files with Ubuntu (through the command line and Node) and editing them with Windows (using VSCode) means that I've had to deal with some issues related to file permissions. Most noticably, I run into a file permissions error when trying to install or update plugins using the WordPress admin. Rather then 


## Unresolved issues







 [rupert]: https://daverupert.com/2018/04/developing-on-windows-with-wsl-and-visual-studio-code/
[prognotes]: https://prognotes.net/2016/08/configuring-local-lamp-stack-web-development/
[wp-cli]: https://wp-cli.org/