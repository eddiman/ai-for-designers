# Prototype directions

> Your work. The 3 prototype directions you generated in Figma Make from your brief packet. Capture what each one is and link to it in Figma.

**Committed problem:** How might we make real-time bus information trustworthy enough that riders feel confident acting on it?

All three directions attack that same trust problem from a different angle. Each is a four-screen mobile flow. [Full prototype set in Figma](https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2227-54080).

---

## Direction 1 — Signal
- **Figma link:** https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2227-54726
- **What it is:** A stop-focused flow that replaces false precision with honest confidence states. From a nearby-stops list ("Where are you?" — Stortorget, Munkegata, Kongens gate) you open a stop detail dominated by a single coloured signal that names the *quality* of the data, not just the number. Three states of the same screen: **Confirmed** (green, live GPS, exact "4 min", "bus seen 2 stops away"), **Expected** (amber, schedule-only, "~12 min", "this estimate may not be accurate"), and **Unknown** (red, "?", "we cannot confirm this bus is coming", suggests Bus 15 instead). The departures list carries the same confirmed / estimated / scheduled / unknown labels per route.
- **How it answers the problem:** Rebuilds trust by never showing a number it can't back up. The colour and label tell the rider *how much* to trust the time, so a shown minute is one they can act on — and when the data is weak, the app says so plainly instead of pretending to be precise.

## Direction 2 — Decide
- **Figma link:** https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2227-54727
- **What it is:** An action-first flow built around one button — "What should I do?". From a home screen (greeting for Maja, saved stop Stortorget / Bus 37, recent routes) the button leads to one of three decision screens: **Wait** (2 of 2 sources agree, GPS-confirmed, bus 4 min away), **Wait — for now** (sources disagree — live app says 3 min, schedule 11 min, stop display no data — so "be ready to walk"), and **Take alternative** (Bus 37 untraceable for 9 min → take Bus 15 from Kongens gate, with a navigate action). The passive alternative at the bottom grows more prominent as certainty drops.
- **How it answers the problem:** Absorbs the manual cross-checking riders already do by hand. Instead of handing over raw data to interpret, it shows its sources and then commits to a recommendation — so the rider's confidence comes from a trustworthy decision, not from re-verifying the number themselves.

## Direction 3 — Shift
- **Figma link:** https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2227-54728
- **What it is:** A single continuous trip where the app's visual weight scales with the stakes. **Quiet mode** — a light, minimal card (37 → City Centre, 6 min) that makes no demands on attention. **Alert emerging** — the card gains an amber border and a discreet "Something changed with your bus / See →" strip; present but not interrupting. **Guidance mode** — tapping in flips the screen to dark: "Bus 37 delayed — expected in 14 min (was 6), traffic on Prinsens gate", three options (wait here, walk to Kongens gate for Bus 4, wait for Bus 15) and a navigate button. **Resolved** — back to the light, minimal card ("3 min · On its way").
- **How it answers the problem:** The visual weight of the app itself becomes the trust signal. When data is calm the app stays quiet and believable; when something breaks it steps forward and explains why. The rider learns to trust that a quiet screen really means "nothing to worry about" and a loud one really means "act now."
