#  Git Stash Commands

```bash
git stash
```
<img width="699" height="334" alt="taskh s touch" src="https://github.com/user-attachments/assets/84221f9c-ade4-4431-a1f1-bf80ab0b6299" />

Stash all tracked changes (staged + unstaged) and clean working directory

```bash
git stash push -m "message"
```
<img width="672" height="76" alt="Pasted Graphic 1" src="https://github.com/user-attachments/assets/a51a2ca0-4b62-49ba-8ec6-8055ba36749a" />

Stash changes with a custom message

```bash
git stash list
```
<img width="672" height="76" alt="Pasted Graphic 1" src="https://github.com/user-attachments/assets/a51a2ca0-4b62-49ba-8ec6-8055ba36749a" />

Show all stashes (latest is stash@{0})

```bash
git stash show
```
<img width="513" height="93" alt="•applegapp les-MacBook-Air taskb   git stash list" src="https://github.com/user-attachments/assets/ada79404-d8d2-4040-90f5-94f3d30dd351" />

Show summary of latest stash

```bash
git stash show -p
```

Show full changes (diff) of stash

```bash
git stash apply
```
<img width="570" height="247" alt="use git restore stilet discard changes in working" src="https://github.com/user-attachments/assets/10a55a60-da80-48c7-b21f-81287e00d6d0" />

Apply latest stash without deleting it

```bash
git stash apply stash@{n}
```
<img width="662" height="263" alt="app leApples-MacBook-Alr" src="https://github.com/user-attachments/assets/0a7630ac-f59b-4469-b53a-e3bed80a7555" />

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
<img width="591" height="111" alt="apple@Apples-MacBook-Air task6" src="https://github.com/user-attachments/assets/2387846a-892f-48ec-898d-bca8ce333d93" />

Delete a specific stash

```bash
git stash clear
```
<img width="486" height="61" alt="appLe@Apples-MacBook-Air task  git stash clear" src="https://github.com/user-attachments/assets/3d09b866-f154-489e-a605-de491846b517" />


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
<img width="679" height="381" alt="in branch s-MacBook Air task   git status" src="https://github.com/user-attachments/assets/477c9c21-7e82-4a1e-bc66-6cc39c4cd24d" />

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
