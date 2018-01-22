

# Bash
- [10 Things I wish I'd known about Bash](https://zwischenzugs.com/2018/01/21/ten-more-things-i-wish-id-known-about-bash/) ([discuss](https://news.ycombinator.com/item?id=16198974))



# ZSH

```sh
hostcolor=197
zstyle ':vcs_info:git*' formats "%{$fg[blue]%}#%b%{$reset_color%}"
PROMPT='%~${vcs_info_msg_0_} %F{$hostcolor}> %f'
```
