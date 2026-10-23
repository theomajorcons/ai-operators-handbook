# Automation safety checklist

Threat model
* What could go wrong:
* Who could abuse it:
* Data touched (public / internal / private):
* Can it access sensitive data (customer, employee, financial)? Y/N, and who approved:

Controls
* Outside content treated as data: Y/N
* Credentials in a secrets manager, narrowly scoped, revocable: Y/N
* Retention and deletion rule:
* Limits: actions / rate / spend / network:
* Unattended behavior defined: Y/N
* Can it change permissions or sharing settings? Y/N (if yes, human gate)
* Can it run code that nobody reviewed? Y/N (if yes, human gate or block)
* Human gate on: send / spend / delete / publish / sensitive data / permission changes / unreviewed code / people:
* Structural controls in place (not just "treat input as data"): least privilege / human gates / limits: Y/N
* Log is privacy-aware: sensitive content redacted, no credentials or full message bodies stored: Y/N
* Log location, who may read it, retention period, and who reviews it how often:
* Alert threshold:

Stop and recovery
* Kill switch, tested on (date):
* Restore or rollback drill, run on (date), result:
* Owner:
* Incident steps (have all ready; order to fit the incident and your policy, not a fixed sequence): Stop and revoke / Preserve evidence / Tell the owner / Contain / Restore / Postmortem
  - Rule of thumb: harm still active, stop and revoke first; system already halted, preserving evidence before you change things can matter more.
* Policy or legal check done: Y/N
