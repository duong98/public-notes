_NOTE: the text inside the <brackets> indicate custom text that you must change_

# Git version control process

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

### Branches
- `git branch -d <branch>` after your pull is accepted
- `git branch -vv` check which branch you're pushing to

### Remotes
- `git remote add origin <empty repo link>` add a new remote
- add additional remotes with `git remote add <remote name>`

### Commits
- `git show head` show most recent commit changes
- `git log` show log of changes
- `git checkout HEAD <filename>` un-stages file changes
- `git rm -rf --cached` remove all cached in staging area

##### fix errors and delete git markers
- `git add .` and `git commit` enter notes regarding conflict
- `git push origin <branch> -u`

---

# For Beginners:
## Clone repo
`git clone <repo link>`
`git add .` add files to staging
`git commit -m '<commit message>'` commit files in staging
`git push`

## 'Upload' repo initially
This is for when your files 
`git init` initialize the repo
`git remote add origin <github or bitbucket link>`
`git add .` add to staging
`git commit -m '<commit message>'` commit files in staging
`git push --set-upstream origin master`
