#  Git Stash Commands

```bash
git stash
```

Stash all tracked changes (staged + unstaged) and clean working directory

```bash
git stash push -m "message"
```

Stash changes with a custom message

```bash
git stash list
```

Show all stashes (latest is stash@{0})

```bash
git stash show
```

Show summary of latest stash

```bash
git stash show -p
```

Show full changes (diff) of stash

```bash
git stash apply
```

Apply latest stash without deleting it

```bash
git stash apply stash@{n}
```

Apply a specific stash

```bash
git stash pop
```

Apply latest stash and remove it from stash list

```bash
git stash pop stash@{n}
```

Apply specific stash and remove it

```bash
git stash drop stash@{n}
```

Delete a specific stash

```bash
git stash clear
```

Delete all stashes

```bash
git stash -u
```

Stash tracked + untracked files

```bash
git stash -a
```

Stash tracked + untracked + ignored files

```bash
git stash --keep-index
```

Stash only unstaged changes, keep staged changes intact

```bash
git stash --staged
```

Stash only staged changes

```bash
git stash -p
```

Interactively choose parts of files to stash

```bash
git stash branch <branch-name>
```

Create new branch and apply stash there

```bash
git stash apply --index
```

Apply stash and restore staged state as well

```
```
