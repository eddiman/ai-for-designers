# Persona UX review

> The UX review run in character as the three Session 2 personas, across all three prototype directions, with prioritized findings and a triage of what's worth acting on.

---

## Review in character

Each persona reviews all three directions. Screens are referred to by number as they appear in each direction's flow.

### Direction 1 — Signal

Four screens: Screen 01 is the nearby-stop list; Screens 02–04 are the same stop-detail screen under three data conditions: Confirmed (green · live GPS), Expected (amber · schedule only), and Unknown (red · no data).

**As the Verification-Seeking Planner**

- **Screen 01.** The stop list is a clean entry point. She immediately checks that Bus 37 is listed under Stortorget and taps in.
- **Screen 02 (Confirmed).** This is the screen that earns her trust. "CONFIRMED · 4 min" is backed by two lines of evidence — "Live GPS tracking · Updated just now" and "Bus seen 2 stops away · Tracking active." She reads both lines, because they're exactly what she'd have opened a second app to verify. The departures list is an added bonus: seeing "confirmed" vs. "estimated" labels next to Bus 37 and Bus 15 lets her size up her fallback without leaving the screen. She pockets her phone.
- **Screen 03 (Expected).** She reads the tilde, the amber signal, and "Schedule only · No GPS signal available" — she understands and appreciates the honesty. Then she waits for the next piece of information: *what should I do?* It never comes. The screen delivers transparency without decision support. She knows the estimate might be wrong but has no basis to decide whether to wait or walk. She opens Ruter.
- **Screen 04 (Unknown).** "We cannot confirm this bus is coming" is the most honest sentence she has read in a transit app. The passive suggestion strip — "Consider an alternative — Bus 15 arrives in ~18 min" — is present but small, sitting in a bordered box that looks like a footnote. She notices it, but it raises questions it doesn't answer: where is Bus 15's stop? How far is the walk? Does she have enough time? Without a follow-through action, the suggestion is a nudge without a path.

**As the Simplicity-First Waiter**

- **Screen 01.** The stop list is clear. He confirms Bus 37 is at Stortorget. Taps.
- **Screen 02 (Confirmed).** Large number, green dot, "CONFIRMED." He reads the headline and stops. The two evidence lines are easy to ignore and he ignores them. The screen does exactly what he needs. He waits.
- **Screen 03 (Expected).** The amber dot and "~12" register quickly. "Schedule only" confirms what he already suspects — that digital information might be wrong. He's not distressed by the honesty; he's just back where he started, relying on habit and his own judgment. He looks up to watch the road.
- **Screen 04 (Unknown).** The red dot and "?" land before he reads anything. He registers alarm, then reads "We cannot confirm this bus is coming." This confirms his existing distrust. He looks for the alternative suggestion — it's there, but the bordered box is easy to overlook when the big red signal has already caught his eye. He may not see Bus 15 as an option before deciding to look at the physical display.

**As the Context-Dependent Rider**

- **Screen 01.** A usable entry point for both familiar and unfamiliar trips. She taps Stortorget.
- **Screen 02 (Confirmed).** On a familiar commute: she sees the green dot and "4 min" and stops reading. Done. On an unfamiliar trip: the evidence lines help her understand what she's seeing.
- **Screen 03 (Expected).** The data-quality signal works — she understands this is an estimate. But she needs a nudge about what to do. For a familiar trip with a tight schedule, she's left doing the calculation herself. The screen is transparent without being useful at the moment it matters.
- **Screen 04 (Unknown).** She's in an uncertain situation and the app offers a passive suggestion without stepping forward. This is the moment the direction's promise breaks down for her: when the stakes are highest, the app is at its most reticent.

---

### Direction 2 — Decide

Four screens: Screen 01 is the home screen with a saved stop and a "What should I do?" CTA; Screens 02–04 are the same question answered under three data conditions: sources agree (Wait), sources disagree (Wait — for now), and no data (Take alternative).

**As the Verification-Seeking Planner**

- **Screen 01.** "Good morning, Maja" + her saved stop + a single large CTA. This is an app that knows her context before she has to explain it. The recent routes confirm it learns from her travel history. She taps immediately.
- **Screen 02 (Wait — sources agree).** This screen did her cross-checking work. "2 of 2 sources agree · Bus detected 2 stops away via GPS · No disruption on route 37" — she'd normally assemble these signals from three separate apps. Seeing them synthesised into one confident recommendation is the clearest payoff this direction offers. The passive alternative at the bottom is a safety net, not a distraction. She trusts this screen without reservation.
- **Screen 03 (Sources disagree).** The source breakdown — Live app: 3 min, Schedule: 11 min, Stop display: no data — is exactly what she'd reconstruct manually when things don't add up. The app has named the conflict she'd have discovered herself, added a hedge ("be ready to walk in 5 min"), and surfaced an alternative with a navigation CTA. This is the most useful screen in the entire prototype for her. The only residual friction: "Sources disagree" as a label feels alarming before she reads the explanation, though once she reads the breakdown she understands.
- **Screen 04 (Take alternative).** Direct and confident. "Bus 37 is not trackable — last data 9 min ago" is concrete grounds for the recommendation. "Confirmed" next to Bus 15 in the best-option card is the key reassurance. "Navigate to Bus 15 stop" removes the final decision step she'd normally handle herself. She acts.

**As the Simplicity-First Waiter**

- **Screen 01.** A greeting and a large button are not what he expected from a transit app. He expected to see a departure time. "What should I do?" sounds like the app is asking him a question rather than giving him information. He may tap it, but with lower confidence than if the card had shown a time directly. The recent routes list is noise to him.
- **Screen 02 (Wait — sources agree).** He reads "Wait. Bus 37 in 4 min." and stops. The WHY WE'RE CONFIDENT section is three bullet points he doesn't need. He doesn't care about the mechanism — he cares about the conclusion. The explanation doesn't cause harm, but it makes the screen denser than it needs to be for him.
- **Screen 03 (Sources disagree).** The header "SOURCES DISAGREE" reactivates his existing distrust. His mental model is: if an app's sources don't agree, the app is broken. The three-source breakdown is unfamiliar framing — he doesn't think of his experience in terms of "live app vs. schedule vs. stop display." "Be ready to walk if nothing arrives in 5 min" creates time pressure that feels stressful rather than empowering. He may just leave the stop.
- **Screen 04 (Take alternative).** This is his best screen in this direction. A clear recommendation, one option shown with a confirmed tag, one action button. He can act on this even without trusting the underlying reasoning. The simplicity here is what Screens 02 and 03 were missing for him.

**As the Context-Dependent Rider**

- **Screen 01.** The saved-stop card and single CTA are low-friction for daily use. She doesn't need to configure anything for a familiar trip. On familiar days she taps once and acts; on unfamiliar days the same interaction still works. The recent routes give her confidence the app is tracking her actual patterns.
- **Screen 02 (Wait — sources agree).** She reads "Wait" and puts her phone away. The detail is available if she wants it; it doesn't demand engagement. The right balance for a familiar-trip state.
- **Screen 03 (Sources disagree).** This is the screen built for her disruption scenario. When her familiar trip hits a problem, the source breakdown explains what happened, the "for now" framing gives her a time-boxed plan, and the alternative is immediately navigable. This is exactly the level of guidance she wants when her routine fails.
- **Screen 04 (Take alternative).** When the system decides she should bail, it gives her a navigation action. Actionable and clear. She trusts it for an unfamiliar alternative route.

---

### Direction 3 — Shift

Four screens forming a single continuous journey: Screen 01 (quiet mode, all is well), Screen 02 (alert emerging, something changed), Screen 03 (guidance mode, disruption confirmed and options shown), Screen 04 (resolved, bus is back on track).

**As the Verification-Seeking Planner**

- **Screen 01 (Quiet mode).** One card: "37 → City Centre · 6 min." She reads the number and immediately asks the question this direction does not answer in this state: is this live data or a schedule estimate? There is no signal. The trust gap that the entire course problem is built around lives right here. She opens Ruter to verify before she can relax.
- **Screen 02 (Alert emerging).** The amber border and "Something changed with your bus / See →" are subtle. She's an engaged user — she notices and taps. The vague wording frustrates her: she wants to know *what changed* before tapping deeper. A preview of the change in the alert strip would give her enough context to decide whether it's urgent.
- **Screen 03 (Guidance mode).** This is where the direction pays off for her. The delay amount (was 6 min, now 14 min), the reason (traffic congestion, Prinsens gate), and three differentiated options with times and methods — this is the structured information she needs when her plan changes. The pre-selected "Walk to Kongens gate / Bus 4" recommendation is grounded. She would want to know if Bus 4's "9 min" is live or estimated before committing to a 6-minute walk.
- **Screen 04 (Resolved).** "On its way / 3 min" with a check mark. The disruption is over. But the quiet card carries the same data-quality gap as Screen 01 — she doesn't know if "3 min" is confirmed GPS or schedule. After a delay event, she especially wants confirmation that the tracking is reliable again.

**As the Simplicity-First Waiter**

- **Screen 01 (Quiet mode).** This is the closest to a physical display he's seen in the entire prototype. One route, one number. He's satisfied at a glance. The white background and absence of clutter are the opposite of what frustrates him in most apps. His one unvoiced need: some signal that the number is trustworthy, not just present.
- **Screen 02 (Alert emerging).** The amber border is easy to overlook outdoors, especially if ambient light washes out the screen or he's only glancing. The "Something changed with your bus / See →" text is at the bottom of the card in a small strip. If he's already standing up to board because the bus was 6 minutes away, he may have moved before noticing the change. This is the highest-risk moment in the entire prototype for him.
- **Screen 03 (Guidance mode).** Three options with clear times and travel methods. The green-highlighted row acts as a de facto recommendation. He can parse this faster than Direction 2's source breakdown because there are no explanatory bullet points — just options. The commitment required (leaving the current stop, walking 6 minutes to a different bus) is the only sticking point: he needs to trust the recommendation enough to walk away from a stop he knows.
- **Screen 04 (Resolved).** Back to the minimal card. "On its way · ✓ · 3 min." He glances and waits. This is as close to perfect as any screen gets for him.

**As the Context-Dependent Rider**

- **Screen 01 (Quiet mode).** This direction was designed around her default state. On a familiar commute the app nearly disappears. She glances at "6 min" and returns to her podcast. The design matches her low-demand mode exactly. Her only residual concern: on a day when she's less certain about timing, the lack of data-quality context means she can't tell if the number is reliable without tapping further.
- **Screen 02 (Alert emerging).** The amber border is a gentle, non-intrusive signal. She notices it if she checks, can ignore it if she's comfortable with the risk. This is the right design for someone who doesn't want constant notifications but still wants the option to know. One gap: "Something changed" is too vague to help her assess whether this requires action.
- **Screen 03 (Guidance mode).** When she taps in, the information is structured and the options are ranked. The app steps forward visually (dark mode, full screen) in proportion to the situation — which is exactly the direction's design promise. She appreciates having three options rather than one forced recommendation; she can apply her own judgment about whether walking 6 minutes in the current conditions is the right call.
- **Screen 04 (Resolved).** The return to quiet confirms the disruption is over without demanding attention. She sees "On its way" and relaxes. The continuity between the quiet mode screens makes the resolution feel natural.

---

## Prioritized findings

Ordered highest-impact first across all personas and directions.

| Finding | Which persona(s) | Which direction | Severity | Act on it? |
|---|---|---|---|---|
| Quiet-mode card (Screens 01 and 04) shows no data-quality signal — users cannot tell if the number is confirmed GPS or a schedule estimate, which is the core trust problem the direction is meant to solve | All three | 3 | Critical | Yes — add a minimal inline indicator (a coloured dot or a "live" / "scheduled" label) that doesn't break the minimal aesthetic |
| "Expected" and "Unknown" states (Screens 03–04) explain data quality but give no action recommendation — users understand the situation but are left to decide on their own | Verification-Seeking Planner, Context-Dependent Rider | 1 | High | Yes — add a lightweight inline recommendation ("consider leaving now" / "Bus 15 is your best option") to close the gap between transparency and decision support |
| Alert strip in Screen 02 is easy to miss — the amber border is subtle at a glance outdoors, and "Something changed" gives no preview of the severity | Simplicity-First Waiter, Context-Dependent Rider | 3 | High | Yes — increase the visual weight of the alert and add a brief delta label in the strip (e.g. "Delayed — now 14 min") so the change is readable without tapping |
| Unknown-state alternative suggestion (Screen 04) is in a small passive strip — easy to overlook after the large red "?" has already alarmed the user | Simplicity-First Waiter | 1 | High | Yes — elevate the alternative to a primary action button in the Unknown state, matching the visual weight of Direction 2's "Navigate to Bus 15 stop" CTA |
| "Sources disagree" label in Screen 03 surfaces the app's uncertainty in a way that reactivates distrust for users who are already skeptical of digital information | Simplicity-First Waiter | 2 | Medium | Yes — lead with the recommendation and reframe the breakdown section as "what we know" rather than naming the conflict in the heading |
| "Why we're confident" section (Screens 02–03) over-explains for users who only want the conclusion; three bullet points of reasoning add density without adding value for simple users | Simplicity-First Waiter | 2 | Medium | Yes — make the reasoning section secondary (e.g. a collapsible "why?" disclosure) so the conclusion is the dominant element |
| Home screen (Screen 01) shows no live status before tapping — users who want a quick read need to commit a tap before they learn anything about their bus | Verification-Seeking Planner | 2 | Medium | Yes — add a short status indicator on the MY STOP card (e.g. "4 min · live") so the home screen delivers signal before the CTA is pressed |
| Guidance mode (Screen 03) primary CTA commits the user to walking to a new stop and a new bus in one tap — no confirmation step for users who distrust the recommendation | Simplicity-First Waiter | 3 | Medium | Consider — a brief preview (stop name on a map, walking time confirmed) before navigating would lower the commitment barrier without breaking the one-tap flow for confident users |
| Resolved state (Screen 04) drops all data-quality context — after a delay event, "On its way · 3 min" carries the same trust gap as quiet mode with added user anxiety | Verification-Seeking Planner | 3 | Medium | Yes — restore an inline live/confirmed indicator on the resolved card; a green dot is enough |
| Stop list (Screen 01) adds a navigation tap before any useful information appears — for regular users on their daily route this is pure friction | Simplicity-First Waiter, Context-Dependent Rider | 1 | Low | Consider — surface a recently used or saved stop as a default entry point to allow the detail screen to open directly |
|  |  |  |  |  |

## Triage
<!-- Which findings you'll act on, and which you're parking. -->
-
