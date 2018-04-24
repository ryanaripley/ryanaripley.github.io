---
title: Linux pros and cons, January 2017 edition
x_colors: "['#000000', '#191e33', '#5464AB', '#191e33', '#000000']"
accent_color: '#5464AB'
tags: 
  - Linux
---
The most recent design of this site (launched early 2017) was primarily designed and developed on an HP ProBook running the Chromixium Linux distro. Here are a few observations. 

## Linux pros
 
- **Linux distros can make the most of old hardware.** Whereas my 2011 MacBook pro can barely chug along running the latest macOS, an HP ProBook of similar vintage with 1/3 the memory feels downright snappy running Chromixium. And for all the grumbling and cursing I do about Gimp, I could have 10 images resized using Gimp on Linux in the time it takes me to open Photoshop 2017 on my 2011 MacBook. 
- **Using the terminal reminds me of putting on a warm pair of socks.** The command line feels like a 1st-class citizen in Linux. It seems like I spent less time installing software than on macOS (I'm looking at you, Xcode), and most of the software I needed was available with apt-get. And the best option for using Unix-based dev tools on Windows is to [install a Linux subsystem][windows], which comes with its own set of problems--blog post to come on that...
- **Consistent tech stack.** The setup I'm using to develop is more similar to the tech stack of the server to which I will eventually deploy. This is more true when working on LAMP sites like WordPress. This redesign of my site is built with Jekyll hosted on GitHub Pages, so no server tomfoolery required. 

## Linux cons

- **I'm abstracted from the typical user.** The flip side of having a dev stack that matches my production environment is that I'm building and testing websites on an OS that matches very few of my users. Time will tell how much of an issue this is.
- **No native Google Drive.** Not having folders synced up with the cloud is a drawback. I find myself doing a lot of downloading and re-uploading. Dropbox does work, so if I had gone down the Dropbox path rather than Drive, it wouldn't be an issue.
- **No Creative Cloud.** Honestly, not having Photoshop and Illustrator isn't as much of a hassle when it comes to design since I've started using [CodePen][codepen] as my primary design tool. When I miss Photoshop is when I need to do any photo editing and resizing. I played around with the web-based PS-clone [Pixlr][pixlr], but have been more often reaching for [Gimp][gimp].

[codepen]: http://codepen.io/
[gimp]: https://www.gimp.org/
[pixlr]: https://pixlr.com/editor/
[windows]: https://msdn.microsoft.com/en-us/commandline/wsl/about
