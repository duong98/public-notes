# Terminal and shell setup

## iTerm2


## Themes
[Gruvbox Vim](https://github.com/morhetz/gruvbox)

[Gruvbox assorted, including iTerm](https://github.com/morhetz/gruvbox-contrib)

## Aliases
[OSX](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/osx)


# zsh

### Resources
- [Reference Card](http://www.bash2zsh.com/zsh_refcard/refcard.pdf)
- [zsh lovers](http://grml.org/zsh/zsh-lovers.html)


```sh
hostcolor=197
zstyle ':vcs_info:git*' formats "%{$fg[blue]%}#%b%{$reset_color%}"
PROMPT='%~${vcs_info_msg_0_} %F{$hostcolor}> %f'
```


### .zshrc
```sh
# ZSH
# =====================

ZSH=$HOME/.oh-my-zsh
ZSH_THEME="sorin"
plugins=(
  brew
  colorize
  git
  colored-man
  github
  vagrant
  virtualenv
  osx
  zsh-syntax-highlighting
  )
source $ZSH/oh-my-zsh.sh

HYPHEN_INSENSITIVE="true"
# enable command auto-correction:
# ENABLE_CORRECTION="true"
COMPLETION_WAITING_DOTS="true"
# DISABLE_UNTRACKED_FILES_DIRTY="true"
export LANG=en_US.UTF-8

hostcolor=197
zstyle ':vcs_info:git*' formats "%{$fg[blue]%}#%b%{$reset_color%}"
PROMPT='%~${vcs_info_msg_0_} %F{$hostcolor}> %f'

# Path
# =====================
export PATH="$(brew --prefix coreutils)/libexec/gnubin:/usr/local/bin:$PATH"
export PATH=/usr/local/bin/git:$PATH
export PATH=/usr/local/Cellar/bash:$PATH  # Brew version of Bash
export PATH=/usr/local/sbin:$PATH # Brew sbin
export PATH=~/.rbenv/shims:$PATH: # Add rbenv
export PATH=~/.rbenv/plugins/rbenv-aliases/bin:$PATH # Add rbenv-aliases plugin
export PATH="$HOME/.rbenv/bin:$PATH"
export PATH="$HOME/.rbenv/shims/gem:$PATH"
export PATH="$HOME/.rbenv/versions/1.9.3-p545/bin:$PATH"
export USER_NAME=""
eval "$(rbenv init -)"

export PATH=/usr/local/Cellar:$PATH # Brew upgrades and binaries

export MANPATH="/usr/local/man:$MANPATH"
export SSH_KEY_PATH="~/.ssh/rsa_id"

export PATH=/usr/local/bin:$PATH

# iTerm2
# =====================
source ~/.iterm2_shell_integration.`basename $SHELL`

test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"
```
