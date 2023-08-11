# GIT
- _**Disclaimer**: This section is not an official resource and is for educational purposes only. The codes may be wrong or not suitable for a non-educational environment._

### Connect an offline folder 2 git repo
~~~git
git init
git add .
git remote add origin <Remote repository URL>
git pull origin master
~~~
### Merge 2 git repos
[link](https://medium.com/altcampus/how-to-merge-two-or-multiple-git-repositories-into-one-9f8a5209913f)
~~~markdown
git remote add -f repo2merge git@github.com:https://github.com/sh-navid/Headlines
git merge repo2merge/master --allow-unrelated-histories
~~~
### Merge a subdirectory of another repository with git
--
### Add username and email to git
~~~markdown
git config --global user.name "uname"
git config --global user.email "email"
~~~



-----



## Concepts
- Config
    - List git configuration
        - `git config --list`
- Log
    - `git log`
    - `git log --pretty=oneline`
    - `git log --pretty=oneline --abbrev-commit`
- Review
    - `git show <hash>`
        - `+` is added and `-` is removed lines
- Status
    - `git status`
    - `git status -s`
- Add
    >> To update what will be committed
    - `git add .`
    - `git add <file>`
- Restore
    >> To discard changes in working directory
    - `git restore <file>`
- Pull
    >> Copies changes from remote repository
    - `git pull`
- Push
    >> Sends changes to remote repository
    - `git push`
    - `git push --force`
    - `git push origin master`
- Clone
    - `git clone <url> <dir>`
- Checkout to
- Fetch
- Commit
    >> Puts changes into local repository
    - `git commit -m "Message"`
    - Usual
        - Commit
        - Commit Staged
        - Commit All
    - Delete
        - Delete current commit
            - `git reset --soft HEAD~1`
        - Delete current commit and data
            - `git reset --hard HEAD~1`
        - Delete until specific commit
            ~~~git
                git log --pretty=oneline --abbrev-commit
                git reset --hard <commit hash>
            ~~~
    - Amend
        - Commit [link](https://stackoverflow.com/a/179147/2227070)
            >> Allowing you to change the commit message of the most recent commit
            - `git commit --amend -m "New Message"`
        - Commit Staged
        - Commit All 
    - Signed Off
        - Commit
            >> You can see `Signed-off-by <name>` under the commit
            - `git commit -s -m "New Message By Signer"`
            - `git log`
        - Commit Staged
        - Commit All
    - Undo Last Commit
    - Commit and Sync
        >> 1.Commit, 2.Pull, 3.Push
- Change
    - Stage All Changes
    - Unstage All Changes
    - Discard All Changes
- Stage
    >> Is the step prior to the commit
- Stash
    >> Commit creates a new save point on a branch; where as a stash reverts to a previous save point.
    >> Commit is global, stash is local
    >> Stash can be seen as temporary space to store your partial changes
    - `git stash`
    - `git stash list`
    - `git stash pop`
        - `git checkout --ours|--theirs <filename>`
        - `git add .` | `git merge`
        - `git push`
- Branch
    - List all branches
        - `git branch`
    - Create
        - `git checkout -b <name>`
        - `git push --set-upstream origin <name>`
    - Change Branch
        - `git checkout <name>`
    - Merge branch to master
        - `git checkout master`
        - `git merge <branch-name>`
        - `git push`
    - Remove a branch
        - `git branch -d <local-branch>`
        - `git push origin -d <remote-branch>`
- Diff
    - `git diff`
- Tag
    >> Tag is similar to branch but its immutable
- Head
    >> Pointer to the latest commit of branch

<pre>
                            Working Directory
                                    ||
                                    \/
                            Staging Area
                                    ||
                                    \/
                            Remote Repository
</pre>
___
<pre>
            Workspace          Index            Local            Remote
                          (Staging Area)        Repo             Repo
                |-----------`commit -a`---------->|                |
                |                |                |                |
                |-----`add`----->|----`commit`--->|-----`push`---->|
                |                |                |                |
                |<-------------------pull/rebase-------------------|
                |                |                |                |
                |                |                |<----`fetch`----|
                |                |                |                |
                |<-------`checkhout head`---------|                |
                |                |                |                |
                |<--`checkout`---|                |                |
                |                |                |                |
                |<----------`diff head`-----------|                |
                |                |                |                |
                |<----`diff`-----|                |                |

</pre>

[source](https://stackoverflow.com/a/30039242/2227070)

## Terms
- Unstaged
    >> Are changes that are not tracked by the Git
- Workspace (Working directory)
    >> Folder of our codes
- Local Repository
- Remote Repository
- Compare and pull request

## Complete Samples
### Commit
~~~git
    git pull
    git add <file> <file>
    git commit -m 'Message'
    git push
~~~
### Connect an offline folder 2 git repo
~~~git
    git init
    git add .
    git remote add origin <remote-repo-url>
    git pull origin master
~~~
### Merge 2 git repos
[link](https://medium.com/altcampus/how-to-merge-two-or-multiple-git-repositories-into-one-9f8a5209913f)
~~~markdown
    git remote add -f <repo2merge> git@github.com:https://github.com/<user>/<repo>
    git merge <repo2merge>/master --allow-unrelated-histories
~~~
### Merge a subdirectory of another repository with git
--
### Add username and email to git
~~~markdown
    git config --global user.name "<username>"
    git config --global user.email "<email>"
~~~