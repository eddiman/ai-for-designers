# App flow

> Your work. A written description of how the app flows — the path a user takes through it. This is what you hand to the persona UX review.

## Flow
## Direction 01 — Signal
Core idea: Replace false precision with honest confidence states. The app never shows a number it can't back up.

The flow starts at a stop list — nearby stops with their routes, nothing more. Tapping a stop moves to the stop detail, which is the heart of the direction: a single dominant signal (a coloured indicator + time) that names the quality of the data being shown, not just the data itself.

The stop detail has three states, each a distinct screen:

Confirmed — the bus has live GPS, was seen 2 stops away, the time shown is trustworthy. Green signal, exact number.
Expected — no GPS, the time comes from the schedule. Amber signal, a tilde prefix (~12 min) to signal it's an estimate, and a plain-language explanation of why.
Unknown — no data at all, last update was 9 minutes ago. Red signal, a question mark instead of a time, and a direct suggestion to consider an alternative.
The relationship between screens 1–3 is not a linear journey — they're the same stop detail screen under three different real-world conditions. A test participant would see one of them depending on what state the bus is in. The navigation dots in the prototype let the researcher move between conditions to show all three.

## Direction 02 — Decide
Core idea: The app absorbs the cross-checking work Maja does manually. Instead of showing her data to interpret, it shows her an action.

The flow starts on a home screen: a greeting, her saved stop (Stortorget, Bus 37), and a single large button — "What should I do?" This is the explicit design promise of the direction. Below it, a recent-routes list grounds the screen as a real app with history.

Tapping the button leads to one of three decision screens, each representing a different data situation:

Wait (sources agree) — two sources confirm the bus position. The app recommends "Wait," explains why in plain terms (sources agree, bus seen 2 stops away, no disruption), and shows an alternative passively at the bottom.
Wait for now (sources conflict) — the live app and schedule disagree. Rather than hiding the conflict, the app shows the breakdown and still gives a recommendation, but with a caveat: be ready to walk. The alternative becomes more prominent.
Take alternative (no data) — Bus 37 is untraceable. The app stops hedging and names the action directly: take Bus 15. The alternative is elevated to the primary recommendation, with a navigation button.
The three decision screens are the same question ("What should I do?") answered under different certainty levels. They're meant to show that the app's behaviour — not just its content — changes with the quality of the underlying data.

## Direction 03 — Shift
Core idea: The app's visual presence scales with the stakes. On a familiar trip it nearly disappears; when something goes wrong it steps forward.

The four screens form a single continuous journey — one trip, unfolding in time:

Quiet mode — Sofie's familiar commute. A single card: route number, destination, minutes. Nothing else. The app makes no demands on her attention.

Alert emerging — something has changed. The card acquires an amber border and a discreet strip at the bottom: "Something changed with your bus / See →." The app is present but hasn't interrupted her — she can ignore it or tap in.

Guidance mode — she taps in. The visual ground shifts from light to dark, the full disruption view appears: what happened (Bus 37 delayed, traffic on Prinsens gate), three options (wait, walk to an alternative stop, take a later bus), and a primary action button. The app now has full visual weight because the situation warrants it.

Resolved — she acted (or the bus caught up). The screen returns to the light, minimal card, now showing "3 min" and a small check mark. The app retreats.

The through-line is the visual weight of the app itself acting as a signal. A test participant would experience screens 0→1→2→3 in sequence as a single event, unlike the other two directions where screens represent different conditions rather than a single unfolding story.

## Notes
<!-- Anything the reviewer needs to understand the flow. -->
-
