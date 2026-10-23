# Context Comparison Map

Claude only acts on what's actually in front of it, but "in front of it" comes
from more than one place. These are the six ways context reaches Claude, how
long each one lasts, and when to reach for which. Mixing them up is the usual
reason a rule "won't stick" or a saved detail shows up where you didn't expect.

> Exact names, availability, and behavior vary by plan and account type
> (personal vs. workplace). Check your own settings to confirm what applies to
> you. **Reviewed: 2026-10-15.**

---

## The six at a glance

| Context type | What it is | Persists across chats? | Scope (where it applies) | When to use it |
| --- | --- | --- | --- | --- |
| **Current-chat context** | Everything you've typed, pasted, or attached in *this* conversation | No, gone when the chat ends | This one chat only | The default. Anything one-off: a task, a draft, a question for right now. |
| **Project context** | Files, instructions, and knowledge attached to a Claude **Project** | Yes, but only *inside that Project* | Every chat started inside that Project | Recurring work with a shared background: one client, one codebase, one ongoing effort. |
| **Standing instructions** | Rules you write on purpose (tone, format, the role you want) | Yes | Across all your chats (account-wide), until you change them | Stable preferences you want *every* time: "keep answers short," "write in British English." |
| **Memory** | Context Claude saves **on its own** as it notices topics while you chat | Yes (where available) | Across your chats; Projects have their *own* separate memory | You don't choose to use it; you *review* it. Read it, keep what's useful, delete what you don't want kept. |
| **Connectors** | Live links to outside systems (email, calendar, files, tools) Claude can read or act on | Connection persists; the data is fetched fresh each time | Whatever the connector exposes, wherever it's enabled | When the task genuinely needs live outside data or an action taken in another system, and you've confirmed it's authorized. |
| **File-based knowledge** | Notes, docs, or a vault you keep yourself and hand to Claude (paste, attach, or via a connector) | Yes, it lives in *your* files, not in Claude | Wherever you choose to bring it in | Durable knowledge *you* own and control: a second brain of small, linked notes Claude can read when you point it at them. |

---

## How to tell them apart

- **Did Claude save it, or did you?** Memory is saved *by Claude*; standing
  instructions and file-based knowledge are written *by you*.
- **Where does it apply?** Current-chat = here only. Project = inside that
  Project. Standing instructions = everywhere. Memory = across chats (Projects
  separate). File-based knowledge = wherever you bring it.
- **Is the data live or stored?** Connectors fetch *fresh* each time; everything
  else is text that was already captured.

## The safety line (applies to all six)

None of these is a vault. Credentials (passwords, API keys, tokens, ID numbers)
go in **none** of them, and aren't pasted into a chat either. Other sensitive
data (health, financial, other people's details, confidential work) only when
you're **authorized**, in an **approved environment**, and sharing the
**minimum necessary**.

---

**Bottom line:** most context is one-chat and temporary. Projects, standing
instructions, memory, and your own files are the parts that carry across chats,
so a new conversation is rarely a blank slate once you've set those up.
