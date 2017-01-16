---
title: Making Gimp, well, less gimpy
tags: 
  - Linux
  - Gimp
---
Because I'm the first person ever to think of that pun.

### 1. Hide layer boundaries

Edit > Preferences > Image Window > Appearance > uncheck "Show layer boundaries"

By default, Gimp highlights the boundaries of the current layer boundaries. It makes whatever you're working on look terrible and is one of the most disorienting differences when moving from Photoshop to Gimp.

### 2. Set layer or path as active

Edit > Preferences > Tool Options > Move Tool > check "Set layer or path as active"

The Gimp move tool (Shotcut "M") is another frustrating change from Photoshop. By default, clicking and moving grabs whatever layer your cursor is immediately above--usually the background layer. When you choose the option to "set layer path as active," the move tool click-and-drag will only move the selected layer. You can hold shift to toggle the behavior, which is nice for switching to a new layer or adjusting a guideline.

### Get the shortcuts set up just how you like them

- By fault, redo is `Ctrl + Y`, but I'm a `Shift + Ctrl + Z` man myself
- I think zoom in and zoom out should be `Ctrl + +` and `Ctrl + -`, respectively
