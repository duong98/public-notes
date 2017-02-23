Homebrew is a package manager for macOS

# Using Homebrew
`brew install <package>` installs a specific package

`brew update` updates Homebrew's directory of formulae

`brew outdated` to see if any of your packages need to be updated

`brew upgrade <formula>` updates a package

`brew cleanup` removes older versions of packages installed

`brew list --versions` list what you have installed (versions)

# Homebrew Cask
`brew cask search` list all casks or **+** `<app name>` searches for an app like google-chrome

`brew cask install <app name>` installs specific app. No additional work needed, the app is install. Check installation with `open ~/Applications/"Google Chrome.app"`

`brew cask uninstall <app name>` uninstalls the app.

`brew cask list` lists all installed casks

`brew cask info <app name>`


# Suggested brew packages
```
brew install git
brew install yarn
brew install tree
brew install imagemagick
brew install zsh zsh-completions
brew install ssh-copy-id
brew install node
brew install net-snmp
brew install htop
brew install gedit
brew install speedtest_cli
brew install couchdb
brew install rbenv
```

# Suggested casks

### Quicklook plugins
```
brew cask install qlcolorcode
brew cask install qlstephen
brew cask install qlmarkdown
brew cask install quicklook-json
brew cask install qlprettypatch
brew cask install quicklook-csv
brew cask install betterzipql
brew cask install webpquicklook
brew cask install suspicious-package
```

### Apps
```
brew cask install atom
brew cask install airmail
brew cask install alfred
brew cask install android-file-transfer
brew cask install asepsis
brew cask install appcleaner
brew cask install caffeine
brew cask install cheatsheet
brew cask install doubletwist
brew cask install dropbox
brew cask install google-chrome
brew cask install google-drive
brew cask install google-hangouts
brew cask install flux
brew cask install iterm2
brew cask install latexian
brew cask install 1password
brew cask install pdftk
brew cask install spectacle
brew cask install superduper
brew cask install totalfinder
brew cask install transmission
brew cask install valentina-studio
brew cask install vlc
```
