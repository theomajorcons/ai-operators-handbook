# First session checklist

Safe launch (do these in order):
1. Make or pick a small, non-sensitive folder: mkdir practice then cd practice. Not your home folder, not a folder full of files that matter.
2. git status shows a clean folder (or git init, git add hello.md, then git diff --staged to review exactly what you are about to commit, then git commit -m "first" to start tracking).
3. Launch asking-first: claude --permission-mode manual  (verified against the official CLI reference on 2026-10-18: https://code.claude.com/docs/en/cli-usage; manual is an alias for default)
4. Trust prompt: Claude Code asks whether you trust this folder. Say yes only for a folder you chose and know. (If unsure, say no and point it at your practice folder.)
5. The folder narrows the work, it is not a hard sandbox. Once you approve an action, Claude can touch files in the folder, so your safety is the permission prompts and your own review, not the folder wall. For true containment of what commands can reach, use the sandboxing feature (on native Windows that means running under WSL2, the supported isolation route; native Windows itself provides no sandbox).

Before:
* I am in a practice folder, not home.
* Git is set up and my last commit is clean.
* I know the permission mode I am in (Manual asks before acting).

During:
* One small task, written clearly.
* I read every proposed change before approving.

After:
* git status
* git diff  (read it)
* Keep: git add filename (name the files you mean to keep), then git diff --staged (read exactly what you're about to commit), then git commit -m "message"
* Undo unstaged edits to one tracked file: git restore filename
* Undo unstaged edits to tracked files: git restore .   (careful: it discards those edits, and it does not delete new untracked files or undo staged changes)
* Unstage something: git restore --staged filename
* New files Claude created show as untracked in git status. Review and delete them yourself.

## Log
| Task | What changed | Kept or undone |
| --- | --- | --- |
| | | |
