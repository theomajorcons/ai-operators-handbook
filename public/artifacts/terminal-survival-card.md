# Terminal survival card

pwd              where am I (PowerShell: also works, or Get-Location)
ls (or dir)      what is here
cd name          go in
cd ..            go up
mkdir name       make a folder
Create a file    Mac/Linux: touch hello.md     PowerShell: New-Item hello.md
Edit a file      macOS/Linux: nano hello.md     Windows: notepad hello.md
                 optional, if installed: code hello.md
                 (in nano: Ctrl+O then Enter saves, Ctrl+X exits)
git init         start tracking this folder
git add hello.md stage one file by name (safer than git add .)
git status       what changed (also lists new untracked files)
git diff --staged read exactly what the next commit will save
git commit -m "message"   save a point
git diff         how unstaged changes look
git restore file undo unstaged edits to one tracked file
git restore --staged file   unstage a file

First commit fails with "Please tell me who you are"? Set identity. For a
practice repo, leave off --global so it applies to this folder only:
git config user.name "Your Name"
git config user.email "you@example.com"
then commit again. Adding --global applies the name and email to every repo
on your computer, including ones you may share, so scope it to the folder
while you practice.

Limits to know:
* git restore only affects tracked files. It does not remove new untracked files.
* Edits you have not committed are gone for good after restore. Commit first.

Rules:
* Practice in a folder you made for practice.
* Commit before big changes.
* Secrets never go in committed or shared files.
* Folder names with spaces need quotes: cd "my notes"
* If lost, run pwd.

## Practice log
| Command | What it did | Error and fix |
| --- | --- | --- |
| | | |
