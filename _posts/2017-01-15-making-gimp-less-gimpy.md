---
title: Making Gimp, well, less gimpy
tags: 
  - Linux
  - Gimp
hero-gradient: 
  - '#50412f'
  - '#725c43'
---
Having done most of my web development work recently on Linux, I've had to begrudgingly turn toward [Gimp][gimp] as a Photoshop replacement. It's a difficult transition, but here are a few things that made it easier.

### 1. Switch to Single-Window Mode

**Windows > Single-Window Mode**

Be default, each toolbar in Gimp shows up in its own window. It's bothersome, but quickly fixed. By default, Gimp saves your current window setup on exit, so once you make this change it should stick. If not, check to make sure **Edit > Preferences > Windows Management > "Save window positions on exit"** is checked.

### 2. Hide layer boundaries

**Edit > Preferences > Image Window > Appearance > uncheck "Show layer boundaries"**

By default, Gimp highlights the boundaries of the current layer. In yellow. It makes whatever you're working on look terrible and is one of the most disorienting differences when moving from Photoshop to Gimp.

### 3. Set layer or path as active

**Edit > Preferences > Tool Options > Move Tool > check "Set layer or path as active"**

The Gimp move tool (shortcut "M") is another frustrating change from Photoshop. By default, clicking and dragging grabs whatever layer your cursor is immediately above--usually the background layer. When you choose the option to "set layer path as active," the move tool click-and-drag will only move the selected layer. You can hold shift to toggle the behavior, which is nice for switching to a new layer or adjusting a guideline.

### 4. Get the shortcuts set up just how you like them

**Edit > Keyboard Shortcuts**

- By fault, redo is `Ctrl + 'Y'`, but I'm a `Shift + Ctrl + 'Z'` man myself
- I think zoom in and zoom out should be `Ctrl + '+'` and `Ctrl + '-'`, respectively

[gimp]: https://www.gimp.org/