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
- `git branch -d <branch>` after your pull is accepted
- `git branch -vv` check which branch you're pushing to
- `git remove origin add <empty repo link>` add a new remote

##### fix errors and delete git markers
- `git add .` and `git commit` enter notes regarding conflict
- `git push origin <branch> -u`
