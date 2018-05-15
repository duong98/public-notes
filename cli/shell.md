# Bash resources
- [10 Things I wish I'd known about Bash](https://zwischenzugs.com/2018/01/21/ten-more-things-i-wish-id-known-about-bash/) ([discuss](https://news.ycombinator.com/item?id=16198974))
- [Do things safely in Bash](https://github.com/anordal/shellharden/blob/master/how_to_do_things_safely_in_bash.md)

## Useful Unix commands
- `ls -a` list *all* files in current directory
- `cd <directory>` change directory
- `pwd` print working directory (…where am I?)
- `grep`
- `sed`
- `awk`
- `curl`
- `/bin/bash` change shell
- `chsh -s /bin/zsh` set default shell

## Useful commands on macOS
- `lsof -i tcp:3000` search all PIDs using a specific port
- `diskutil list` see all disks and partitions
- `defaults write com.apple.finder AppleShowAllFiles YES` shows hidden files/`NO` to hide
- `defaults write -g ApplePressAndHoldEnabled -bool false` turns off special characters popup
- `networksetup listallhardwareports` to view all hardware port names

## Useful commands for GNU Linux
- `sudo apt-get update && time sudo apt-get dist-upgrade` to upgrade the distro
- `setterm -blank 0` turn off the terminal black screen saver
- `chmod +x /path/to/script.sh` to give execute permission and `./script.sh` to run
- [reading system sensors](http://askubuntu.com/questions/15832/how-do-i-get-the-cpu-temperature)

#### Setting up Swap
1. `touch /swapfile`
1. `fallocate -l 1g /swapfile`
1. `chmod 600 /swapfile`
1. `mkswap /swapfile`
1. `swapon /swapfile`

- `echo '/swapfile none swap sw 0 0' >> /etc/fstab` to reuse swapfile on restart
- turn off the swapfile with `swapoff /swapfile`
- [More information](https://github.com/DevMountain/Hosting-demo-postgres#swap----optional)

## Command-Line Apps
- [Keybase](https://keybase.io/docs/command_line)
- mopidy + mopidy-spotify + ncmpcpp = music on the cli
- RTV for reddit
- [more CLI apps](https://github.com/herrbischoff/awesome-command-line-apps)


## iTerm2 Themes
- [Gruvbox Vim](https://github.com/morhetz/gruvbox)
- [Gruvbox assorted, including iTerm](https://github.com/morhetz/gruvbox-contrib)

## Aliases
- [OSX](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/osx)


# ZSH
### Resources
- [Reference Card](http://www.bash2zsh.com/zsh_refcard/refcard.pdf)
- [zsh lovers](http://grml.org/zsh/zsh-lovers.html)

```sh
hostcolor=197
zstyle ':vcs_info:git*' formats "%{$fg[blue]%}#%b%{$reset_color%}"
PROMPT='%~${vcs_info_msg_0_} %F{$hostcolor}> %f'
```

### Configurations
- [Oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
- [Prezto](https://github.com/sorin-ionescu/prezto)



# chown

`cut -d: -f1 /etc/group` to view complete list of chown groups
