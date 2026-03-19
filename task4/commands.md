# Create and switch to branch1
git checkout -b branch1

# Make changes and commit in branch1
git add .
git commit -m "changed app.jsx"

# Push branch1 to remote
git push -u origin branch1

# Switch to existing branch2
git checkout branch2

# Make changes and commit in branch2
git add .
git commit -m "changed app.jsx"

# Switch back to main branch
git checkout main

# Merge branch1 into main (no conflict)
git merge branch1

# Attempt to merge branch2 into main (conflict occurs)
git merge branch2

# Check status to see conflict
git status

# View differences
git diff

# Resolve conflict manually in file

# Stage resolved file
git add .

# Commit resolved merge
git commit -m "resolved merge"

# Verify merge is complete
git merge branch2

# Push changes to remote
git push

# View commit history
git log

<img width="553" height="244" alt="1 file changed," src="https://github.com/user-attachments/assets/322b7775-4cec-405d-97aa-9ccef2d61ea8" />
<img width="735" height="267" alt="function Appl" src="https://github.com/user-attachments/assets/2135ed71-c730-4788-9bee-47b5456d8202" />
<img width="298" height="162" alt="V GRAPH" src="https://github.com/user-attachments/assets/8e6b33d3-626b-4c74-bd38-75c48934c2e2" />


