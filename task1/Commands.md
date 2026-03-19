Git is initiated : git init

files are created and commited to main 
commands used: 
i)touch <filename>
ii)git add .
iii) git commit -m "message"
iv) git push


Output:

<img width="588" height="401" alt="image" src="https://github.com/user-attachments/assets/32cdc1a0-c050-4482-b27e-e0d357e31e7e" />

New branch created and did changes and merged to main

commands used:
i) git checkout -b <branchname>
ii) git merge <branch>

verified the commit history

commands used:
i) git log

Output:

<img width="697" height="276" alt="image" src="https://github.com/user-attachments/assets/c82fa5f8-f266-407a-b1a5-9eddd8d8e2c5" />


# 🔹 Git Reset Commands

```bash
git reset file.txt
```

Unstage file (remove from staging area)

<img width="640" height="319" alt="image" src="https://github.com/user-attachments/assets/42dfa3c0-c9ad-4d7e-ad88-179df0dc0708" />

```bash
git reset
```

Unstage all files

```bash
git reset --soft HEAD~1
```

Remove last commit, keep changes staged
<img width="594" height="158" alt="image" src="https://github.com/user-attachments/assets/3a6ce9b7-9733-4088-9797-456b32a39299" />
<img width="761" height="104" alt="image" src="https://github.com/user-attachments/assets/0a0b0182-2220-4648-b500-380460586952" />


```bash
git reset HEAD~1
```

Remove last commit, keep changes in working directory (unstaged)
<img width="627" height="261" alt="image" src="https://github.com/user-attachments/assets/fc7faec7-24e6-4117-b442-82bc38d7f297" />
<img width="581" height="216" alt="image" src="https://github.com/user-attachments/assets/680a5786-b065-408f-88bd-be2f2c74a172" />
<img width="710" height="177" alt="image" src="https://github.com/user-attachments/assets/65c9ddb2-311b-43de-89ee-0879b7923591" />

```bash
git reset --hard HEAD~1
```

Remove last commit and delete all changes

<img width="615" height="264" alt="image" src="https://github.com/user-attachments/assets/c8aa3123-0640-476f-a9dd-53fe7cec2aa9" />
<img width="758" height="325" alt="image" src="https://github.com/user-attachments/assets/03284dae-c41c-4e01-a5aa-a8784157feb7" />



```bash
git reset --hard HEAD
```

Discard all local changes and reset to last commit

```bash
git reset --soft <commit>
```

Move to specific commit, keep all changes staged

```bash
git reset --mixed <commit>
```

Move to commit, keep changes in working directory

```bash
git reset --hard <commit>
```

Move to commit and delete all changes

```bash
git reset -p file.txt
```

Interactively unstage parts of a file

````

---

# Git Revert Commands

```bash
git revert HEAD
````

Create a new commit that undoes the last commit
<img width="498" height="89" alt="image" src="https://github.com/user-attachments/assets/466d947d-6c39-4d69-902f-676849402bf5" />
<img width="582" height="205" alt="image" src="https://github.com/user-attachments/assets/a20c8896-e211-4581-aaf2-3263781576ad" />


```bash
git revert <commit>
```

Revert a specific commit

```bash
git revert HEAD~1
```

Revert the previous commit

```bash
git revert -n HEAD
```
<img width="526" height="219" alt="image" src="https://github.com/user-attachments/assets/3bcb4730-ebff-494f-aeb5-1bda464db45b" />

Apply revert changes without creating a commit

```bash
git revert -n <commit-range>
```

Revert multiple commits without committing

