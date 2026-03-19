## Git Restore

### Restore file (discard changes)

```bash
git restore file.txt
```
<img width="667" height="265" alt="V GIT" src="https://github.com/user-attachments/assets/a1cceb6c-a680-41ec-8eec-0ea510ad9d6d" />

<img width="617" height="261" alt="EXPLORER" src="https://github.com/user-attachments/assets/bd0c79ff-6a09-4ff9-8159-00618bcdc964" />

👉 Restores file to last commit (HEAD)


---

### Unstage file

```bash
git restore --staged file.txt
```
<img width="600" height="366" alt="Your branch is" src="https://github.com/user-attachments/assets/8ae4e1ed-4c06-4bc6-9b5f-0d4e6d349c1c" />

👉 Opposite of `git add`
👉 Changes still remain in file

---

### Restore from previous commit

```bash
git restore --source=HEAD~1 file.txt
```
<img width="311" height="283" alt="EXPLORER" src="https://github.com/user-attachments/assets/d9c0005e-5d4e-4542-83b9-f8f90beb1fc4" />

<img width="361" height="226" alt="EXPLORER" src="https://github.com/user-attachments/assets/e77acb6e-dec9-400c-bad1-8d399473debc" />


👉 Gets file from older commit

---

### Restore all files

```bash
git restore .
```

---

### Restore full project from old commit

```bash
git restore --source=HEAD~1 .
```

⚠️ Deletes files not present in that commit

---

### Safe version (keep extra files)

```bash
git restore --source=HEAD~1 --overlay .
```

---


##  Patch Mode 

```bash
git restore -p file.txt
```

<img width="649" height="239" alt="-p-SourceHEAD~1 t1lez txt" src="https://github.com/user-attachments/assets/cb747053-9927-444e-9f65-febbcc6cea70" />

👉 Interactive restore (choose changes)

---

### From specific commit

```bash
git restore -p --source=HEAD~1 file.txt
```

---

### Options inside patch

| Key | Meaning       |
| --- | ------------- |
| y   | apply change  |
| n   | skip          |
| q   | quit          |
| a   | apply all     |
| d   | skip all      |
| e   | edit manually |

---

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

