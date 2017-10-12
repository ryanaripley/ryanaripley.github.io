---
title: How I prep a Linux Mint installation for web development
---

If necessary, get my wireless card working using [this driver and accompanying instructions](https://github.com/gnab/rtl8812au).

I restart for the first time, and now I have wireless. On to the good stuff. 

## Applications

Next I grab a few of the applications I need that are found in the official sources:

```sh
sudo apt-get update
sudo apt-get install chromium-browser gimp inkscape vlc
```

Install [Sublime Text](http://askubuntu.com/questions/172698/how-do-i-install-sublime-text-2-3)

```sh
sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install sublime-text-installer
```

And [Install Spotify](https://www.spotify.com/us/download/linux/)

```sh
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886
echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update
sudo apt-get install spotify-client
```

Once these applications are installed, I set them as my preferred Apps. In `System Settings > Preferred Applications`, I choose the following:
- Web: **Chromium Web Browser**
- Plain Text and Source Code: **Sublime Text**
- Video: **VLC media player**
- Photos: **GIMP Image Editor**

## Appearance

Now, I can start using Chromium, Spotify, and the other apps while I move on to making Mint look a bit more modern.

I like the [Ultra-Flat icon theme](http://www.noobslab.com/2015/01/make-linux-more-elegant-with-ultra-flat.html), which I install like this:

```sh
sudo add-apt-repository ppa:noobslab/icons
sudo apt-get update
sudo apt-get install ultra-flat-icons ultra-flat-icons-orange ultra-flat-icons-green
```

Once that's installed, I update my `System Settings`:
- In Backgrounds, I choose a nice photo from the Serena or Sarah folders
- In Themes, switch Window borders, Controls, and Desktop to **Linux Mint-Y Dark** and Icons to **Ultra-Flat-Orange**
- In Panel, I select both `Use customized panel size` and `Allow Cinnamon to scale panel text and icons` and crank the Panel height up to about 3/4 of the slider

## Web development environment

Now that things are looking a bit better, I move on to the dev environment. 

Install Ruby, Git and ZSH:

```sh
sudo apt-get install ruby-full git-all zsh
```

Install Node:

```sh
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Install Jekyll and Bundler:

```sh
sudo gem install jekyll bundler
```

And some node packages:
```sh
sudo npm install gulp-cli -g
```

Next, I install [Sublime Text package control](https://packagecontrol.io/installation)

And then I install the Ayu theme (`Ctrl+Shift+P`, then `Package Control: Install Package`, then find `Ayu` theme). Once it's installed, I throw in my settings file along with my other default settings:

```json
{
	"color_scheme": "Packages/ayu/ayu-dark.tmTheme",
	"theme": "ayu-dark2.sublime-theme",
	"ignored_packages":
	[
		"Vintage"
	],
	"font_size": 13,
	"tab_size": 2,
	"margin": 2,
	"word_wrap": true
}
```

Install [Oh-My-Zsh](https://github.com/robbyrussell/oh-my-zsh)

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Next, I create a `Sites` directory in my home folder, and add it to my Nemo (Mint's default file manager) sidebar by clicking and dragging it below `Documents`. Into this folder, I clone my dagr-themes git repo:

```sh
git clone https://github.com/ryanaripley/dagr-themes
```

I do a couple of things with that repo. First, I install the fonts that are included. Then, I copy dagr.zsh-theme to oh-my-zsh themes folder:

```
cp ~/Sites/dagr-themes/dagr.zsh-theme ~/.oh-my-zsh/themes
```
And install the Inconsolata Powerline font. I then change my default mono font to this in System Settings > Fonts. This will be important for the next step, in which we get oh-my-zsh configured. 

Configure my ZSH settings with `subl ~/.zshrc`.

I change the theme to my theme to Dagr:

```
ZSH_THEME="dagr"
```

And set up my bash aliases:

```
alias edit_profile="subl ~/.zshrc"
alias reload_profile=". ~/.zshrc"
alias bjek="bundle exec jekyll serve --livereload"
```

## Other tweaks and fixes

### Get Google Drive (sort of) working

[Based on this tutorial](http://tutorialforlinux.com/2016/07/02/google-drive-client-quickstart-for-linux-mint-18-sarah-lts/)


### [Install Google Chrome](http://askubuntu.com/questions/510056/how-to-install-google-chrome)

```sh
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
sudo apt-get update 
sudo apt-get install google-chrome-stable
```

### Other Sublime packages to install
- SCSS
- Babel
- Emmet


