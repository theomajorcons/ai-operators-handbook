# Impact tracker (all times in minutes unless stated)

| Run | Before (min) | After incl. review and fixes (min) | Errors found | Output usable without rework? Y/N |
| --- | --- | --- | --- | --- |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

Time calculations
* Average before (min) = A
* Average after (min) = B
* Minutes saved per run = A - B
  (B already includes per-run review and fixes, so this saving is net of per-run cleanup; do not subtract review again)
* Runs per week = R
* Gross hours saved per week = (A - B) x R / 60
* Ongoing maintenance per week (hours) = M
  (upkeep labor: fixing drift, re-running evals, tweaking the workflow; a recurring weekly cost, separate from per-run review; count it in hours, it does not disappear just because the AI run is fast)
* Net hours saved per week = gross hours saved per week - M
* Setup hours = S
* Net time payback (weeks) = if net hours saved per week > 0: S / net hours saved per week; otherwise: no time payback (upkeep wipes out the weekly saving)
* Error rate = runs with errors / total runs
* Rework rate = runs marked N / total runs

Money calculations (use one currency)
* Labor value per hour ($) = V
* Productivity time value per week = gross hours saved per week x V
  (Note: this is the value of time freed up, not cash in hand; counts only if that time is redirected to paid or billable work)
* Ongoing maintenance cost per week ($) = M x V
  (the maintenance hours above, monetized at your rate; this is labor counted in hours, then converted to dollars, not a separate cash line)
* Actual cash savings per week = any direct cost reductions (licenses replaced, vendor fees cut, etc.)
* Tool cost per week ($)
* Net benefit per week = productivity time value + actual cash savings - tool cost - ongoing maintenance cost
* One time setup cost = S x V
* Payback in weeks = if net benefit per week > 0: setup cost / net benefit per week; otherwise: no payback (costs exceed benefits)

Check: does the net benefit stay positive if the error rate doubles? Y/N
