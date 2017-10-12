---
title: Creating bash aliases on bash on Ubuntu on Windows
---

Opening up the Ubunto terminal, you start in the root folder of the Linux subsystem. `ls -a` to take a look at what you have. Notice the file `.bash_aliases`. This is where the aliases can be created. 

Important note: I learned the hard way that editing this file directly (i.e., finding it in Windows Explorer and editing it with a text editor) could break your Ubuntu install. It has to do with the Linux subsystem no longer being able to recognize configuration files once they are edited directy in Window. So, to edit this file, I used Nano. 