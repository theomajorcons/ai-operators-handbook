# Spreadsheet Check Sheet

Claude writes a clean formula whether or not it sums the right column. A number
carries authority a sentence does not: it lands in a report, a decision, a
client email, and nobody can tell by looking that the SUM skipped a column. Run
this sheet on any data task before the number leaves your hands.

**Goal:** Give Claude the context a data task needs, then prove the computation
is right instead of trusting that it looks right.

---

## 1. Give context in

- [ ] **Column meanings.** Say what each column is, especially abbreviated or
  ambiguous headers (`amt` is quoted, `closed` is the amount that actually
  closed, `st` is status where only `won` counts).
- [ ] **Sample rows.** Paste a few real rows so Claude sees the actual shape and
  the edge cases: a blank, a `lost` row, a stray text value in a number column.
- [ ] **Output shape.** Ask for one clear thing: a single formula, a new column,
  a pivot, or a plain-English read.

## 2. Keep sensitive data out

- [ ] Strip, mask, or aggregate anything your data rules forbid (salaries,
  client names, health or deal details) **before** you paste or upload.
- [ ] "Full picture" never overrides the data rules. Claude cannot un-see what
  you give it.

## 3. Try a small slice first

- [ ] Run the new formula or transformation on ten rows before ten thousand.
- [ ] Eyeball those rows. A mistake now costs a handful of rows, not the sheet.

## 4. Check the computation out

- [ ] **Recompute one row by hand** (or on a calculator) and confirm Claude's
  formula gives the same answer.
- [ ] **Reconcile a total** against a number you already trust: last period's
  figure, a control count, a known subtotal.
- [ ] A formula that parses is well-formed, not correct. Correctness is a
  separate question these two checks answer.

## 5. Re-runnable work gets an eval

- [ ] If you will run this task again (monthly report, recurring clean-up), keep
  a couple of rows with known-correct answers.
- [ ] Re-run them after any change to confirm the formula still holds.

---

## Then decide

- **Use it** if the recompute and the reconcile both matched.
- **Fix it** if a check missed but the task is sound: fix the formula or the
  context and re-check.
- **Drop and re-ask** with better context if Claude guessed a column wrong, or
  if you cannot reconcile a total the decision depends on.

**One-line rule of thumb:** *Context in, numbers checked out. Tell Claude what
the columns mean, then recompute a row and reconcile a total before you trust the
number.*
