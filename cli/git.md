# Git Resources
- [Git Flight Rules](https://github.com/k88hudson/git-flight-rules)

# Git Notes

*NOTE: the text inside the < brackets \> indicate custom text that you must change. [argument] represent optional arguments*

## Git Commands for collaboration

1. `git pull` from master, or from branch `git pull origin <branch>`
2. `git checkout -b <branch>` i.e. login component
3. work on branch
4. `git add files`, `git commit -m '<description>'` use description to describe your branch's work
  * Save work with `git push origin <branch> -u`
5. `git checkout master`
6. `git pull`
7. `git checkout <branch>`
8. `git merge master` fix conflicts
9. `git push origin <branch> -u` github origin, set to branch
10. open pull request via Github repo


## Other commands

- `git log` see project history
  - `--oneline`, `--stat`, `--author=""`, `--grep=""`, `--graph --decorate --oneline`
- `git clone <project url> -b <branch name> --single-branch` clones a specific branch

### Branches
- `git branch -d <branch>` after your pull is accepted
- `git branch -vv` check which branch you're pushing to

### Remotes
- `git remote add origin <empty repo link>` add a new remote
- add additional remotes with `git remote add <remote name>`

### Stash
- `git stash [save "message"]` save changes to your working copy, then revert changes (like if you're not ready to commit, but need to save)
- `git stash list` view all stashes + messages or `git stash show [-p]` to view diff
- `git stash pop` re-apply recent stashed changes (`stash@{0}`) OR `git stash apply` to apply to working copy _and_ keep them in your stash (to apply to other branches...)
- `git stash pop [stash@{2}]` pop specific stash
- `git stash drop [stash]` delete stash, `git stash clear` delete all
- `git stash branch` create branch from stash

**NOTE: Git won't stash changes made to untracked or ignored files.** This includes new files never staged.
- `git stash -u` includes untracked files
- `git stash -a` includes untracked + ignored files

### Commit
- `git show head` show most recent commit changes
- `git log` show log of changes
- `git checkout HEAD <filename>` un-stages file changes
- `git rm -rf --cached` remove all cached in staging area

[Learn to squash](https://gist.github.com/patik/b8a9dc5cd356f9f6f980) your commits before merging.

##### fix errors and delete git markers
- `git add .` and `git commit` enter notes regarding conflict
- `git push origin <branch> -u`

### Submodules
- `git submodule add <url> <directory>` adds a submodule to your repo

---

# For Beginners:
## Clone repo
1. `git clone <repo link>`
2. `git add .` add files to staging
3. `git commit -m '<commit message>'` commit files in staging
4. `git push`

## 'Upload' repo initially
When you start a repo on your local machine first
1. `git init` initialize the repo or `git init <directory>`
2. `git remote add origin <github or bitbucket link>`
3. `git add .` add to staging
4. `git commit -m '<commit message>'` commit files in staging
5. `git push --set-upstream origin master`

[Altassian: Learn Git](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

[A simple guide](http://rogerdudler.github.io/git-guide/)

---

# .gitignore
[ignore patterns](https://www.atlassian.com/git/tutorials/gitignore)

edit your global git ignore for some common files you want git to ignore
Create/edit the file `~/.gitignore` and add the following text:
```
# Folder view configuration files
.DS_Store
Desktop.ini

# Thumbnail cache files
._*
Thumbs.db

# Files that might appear on external disks
.Spotlight-V100
.Trashes

# Compiled Python files
*.pyc

# Compiled C++ files
*.out

# Application specific files
venv
node_modules
.sass-cache
```

Have git always use this git ignore in addition to local gitignores with `git config --global core.excludesfile '~/.gitignore'`

See my global `.gitignore` from my dotfiles [here](https://github.com/brettinternet/dotfiles/blob/master/.gitignore).

---

## Advanced
`git config --global credential.helper osxkeychain` to enable git password caching, [described here](https://help.github.com/articles/set-up-git/)


### Initializing
- `git init --bare <directory>` omits the working directory. Conventionally create bare git directories with `.git` in the name. Used more for storage rather than development. No edits/commits.

## Not Git
...but relevant.

Change the base url of a gist to `cdn.rawgit.com`
