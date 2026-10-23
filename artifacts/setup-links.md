# Setup Links: getting ready for Level 3

Level 3 moves out of the chat window and into **Claude Code**, which runs in
your computer's terminal. This sheet points you to the official places to get
the pieces you need. Install from these sources, not from a random search
result; tools like Git and Node are common targets for fake download sites.

> **Links change. The official source is the authority.** URLs and plan names
> move over time. If a link here is dead, go to the product's official site and
> follow its current download or docs path. **Links checked: 2026-10-15.**

---

## 1. A terminal (already on your computer)

You don't install this; every OS ships one.

- **Mac:** Terminal (in Applications → Utilities), or install
  [iTerm2](https://iterm2.com/) if you want more.
- **Windows:** PowerShell or Windows Terminal (Windows Terminal is in the
  Microsoft Store and preinstalled on Windows 11).
- **Linux:** your distribution's terminal app (GNOME Terminal, Konsole, etc.).

*Quick self-check:* open it and type `pwd` (Mac/Linux) or `pwd` / `cd`
(PowerShell) and press Enter. If it prints a folder path, you're set.

---

## 2. Git: version control / your undo

- **Official site:** <https://git-scm.com/downloads>
- One-line why: Git saves snapshots of a folder so you can undo mistakes; the
  bridge lesson and Claude Code both lean on it.

*Quick self-check:* run `git --version`. A version number means it's installed.
*If missing:* download the installer for your OS from the link above and accept
the defaults. On Mac, running `git --version` may offer to install the Xcode
command line tools; let it.

---

## 3. Claude Code: the tool Level 3 teaches

- **Setup / install guide (start here):** <https://code.claude.com/docs/en/setup>
- **Official docs:** <https://docs.claude.com/en/docs/claude-code/overview>
- One-line why: this is the terminal tool that works directly on your files; the
  rest of Level 3 is built around it.

Open the setup guide first and follow the instructions **for your platform**. It
recommends a **native installer** (Mac, Windows, and Linux each have their own),
so for most people this is the whole install, no Node required. The exact
command changes between releases, which is why the official guide, not this
sheet, is the authority on how to install today.

*Quick self-check:* after following the setup guide, run the version command it
lists. If it prints a version, the install worked.
*If missing or erroring:* re-read the setup guide for your platform rather than
guessing at a command.

> **A note on the practice folder, on native Windows:** the folder you launch
> Claude Code in narrows where it works, but on native Windows it is **not a
> sandbox** at all; native Windows provides no OS-level containment here. Once
> you approve an action, Claude can reach files in that folder, and the folder
> wall alone will not stop it. Your real safety is the permission prompts and
> your own review of each change, not the folder boundary. **If you want real
> isolation, the supported route is WSL2** (the Windows Subsystem for Linux),
> where Claude Code's sandboxing works; run it there rather than natively. See
> the docs for the current WSL2 setup.

---

## 4. Node.js: only if you use the optional npm install route

- **Official site:** <https://nodejs.org/en/download>
- One-line why: the native installer in step 3 does **not** need Node. You only
  need Node if you deliberately choose the npm install path instead. If you do,
  choose the **LTS** (long-term support) build.

*Quick self-check:* if you went the npm route, run `node --version` and
`npm --version`. Two version numbers means you're ready.
*If missing (and you need it):* install the LTS build from the link above, then
reopen your terminal (new terminals pick up the new install).

---

## 5. An account and plan with the access you need

Claude Code runs against your Claude account, and the exact features and limits
depend on your plan and whether it's a personal or workplace account.

- **Plans and pricing:** <https://www.anthropic.com/pricing>
- **Sign in / account settings:** <https://claude.ai/>

*Quick self-check:* can you sign in to your account, and does your plan cover
Claude Code? If you're on a workplace account, confirm with whoever administers
it that Claude Code is allowed before you start.
*If unsure:* check your account's plan page, and for a workplace account ask your
admin; don't assume access until you've confirmed it.

---

**Bottom line:** terminal (already there) → Git → Claude Code (native installer
for your platform) → an account/plan that covers it. Node.js is only needed if
you choose the optional npm install route. Install each from its official source
above, run the quick self-check, and you're ready for the next lesson.
