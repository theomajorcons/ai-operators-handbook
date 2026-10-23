# Acting-Agent Gate Sheet

An acting agent in the browser or desktop app does not describe the step, it
takes it: it clicks, types, moves files, sends messages. The output is an action
that has already happened in the real world, and some actions do not come back.
Run this sheet before you let an agent act on anything real.

**Goal:** Keep a fast tool that can really do things from doing the one thing you
did not want: put the controls where the risk is.

---

## 1. Practice on a safe target first

- [ ] Run the agent on a **test account, sandbox, or throwaway copy** of the
  files first, where a mistake costs nothing.
- [ ] Watch **what it actually clicks.** It is often not what you pictured, and
  the cheap place to find that out is a target with nothing to lose.

## 2. Give it the least access it needs

- [ ] Scope it to **one folder, one site, or a copy of the files**, not your
  whole account or your whole logged-in browser session.
- [ ] Least access bounds the **blast radius**: a bad or hijacked action can only
  reach the small surface you opened.

## 3. Gate the risky actions for a human

- [ ] Let low-stakes actions run free: reading a page, archiving, drafting a
  reply.
- [ ] Put a **pause-and-ask gate** on the one-way doors: **send, forward, pay,
  delete permanently, publish, post.** The agent shows the exact step and does
  nothing until you say yes.
- [ ] The gate is also your defense against a page that carries hidden
  instructions: even if the agent is fooled into *trying* a forward or a
  payment, a gated action still stops and asks.

## 4. Keep a log you can check

- [ ] Keep a **record of what the agent did**: what it clicked, moved, sent, or
  paused on.
- [ ] **Read the log after each run** to confirm the actions were the ones you
  wanted and to catch a bad one before it compounds.
- [ ] Speed never buys back an action you cannot see. Leave logging on.

---

## Before the agent touches anything real

- **Go** if all four controls are in place: practiced on a safe target, scoped to
  least access, risky actions gated, log on.
- **Hold** if any control is missing. A missing gate or an unscoped session is
  how a loose agent forwards an invoice or archives a contract.

**One-line rule of thumb:** *It acts, so treat it like it acts. Practice safe,
grant least access, gate the one-way doors, and read the log.*
