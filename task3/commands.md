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
