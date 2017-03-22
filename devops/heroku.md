# Heroku CLI

Heroku makes deploying hosted apps easy.

[Heroku CLI setup](https://devcenter.heroku.com/articles/heroku-cli)

### Installation

macOS Homebrew: `brew install heroku`

There seems to be a bug that required me to restart after install Heroku CLI before being able to successfully run any heroku commands without a 509 error.

`heroku apps`

`heroku create <app name>` and then `git remote -v` to see newly create remote to heroku
