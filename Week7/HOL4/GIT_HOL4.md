# Week 7 - Git HOL 4

## Objective
Learn how to use a `.gitignore` file to prevent unnecessary files and folders from being tracked by Git.

## Commands Executed

```bash
touch .gitignore
echo "This is a temporary log." > sample.log
git status
git add .gitignore Week7/HOL4/GIT_HOL4.md
git commit -m "Week 7 HOL 4 - Added .gitignore"
git push origin main
```

## Outcome

- Created a `.gitignore` file.
- Configured Git to ignore log files, IDE files, build folders, and Node modules.
- Verified that ignored files do not appear in `git status`.
- Successfully committed and pushed the changes.