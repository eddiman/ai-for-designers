# Session 1 — facilitator notes

Front-facing material for participants is in the session root `README.md`. This folder holds everything the facilitator needs and participants should not see verbatim.

## Run of show (~70 min)

- **0:00–0:10** — Frame the session and the scenario. Show the planted-tension warning: tell the room a tension has been planted between the interviews and the questionnaire, without saying where.
- **0:10–0:25** — Live demo: generic vs. directed on one interview; then the same two styles on the questionnaire data.
- **0:25–0:55** — Hands-on: each participant produces summaries of the interviews and the questionnaire, trying both styles on at least one source. Push them to ask whether each summary is usable, and what each style missed or added.
- **0:55–1:10** — Cross-reference: compare the interview summaries against the questionnaire summary. Where do they agree, conflict, leave gaps? This is where the planted tension should surface.

## Opening framing

Session 1 is the start of the course, so there's no prior recap. Instead, explain how the research pack was generated (see `premade-design-notes.md`) and state plainly that a tension has been planted, without revealing where.

## What the directed prompt does on the questionnaire

The directed prompt uses the same lens for both sources — "what frustrates people and what they most want improved" — so the bias shows up in how the data diverges, not in the wording. On the interviews this lens pulls Maja's app wishlist to the front. On the questionnaire the bias is quieter and worth calling out in the demo:

- With a fixed-question dataset, the directed lens mainly controls **which questions get foregrounded and how the coded open-text themes get framed**, not what the numbers say.
- "What people most want improved" leans the summary on **Q3** (accurate real-time arrival info ranks first) and can quietly underplay **Q5** (appetite for a feature-rich personal app). So the questionnaire's directed summary tilts toward reliability while the interviews' directed summary tilts toward the app.
- That opposite tilt is exactly what should surface at the cross-reference step. The point to make: neither prompt named reliability or an app, yet the framing still shaped which signal each summary carried.

## The triangulation step (where the session lands)

This is the payoff. Things to watch for and steer:

- **They choose their inputs first.** Before triangulating, each participant picks one summary per source — generic or directed — to carry forward. This is the session's thesis made concrete: framing is a decision you commit to on purpose. Don't let them dump every version into the chat; that skips the decision, which is the lesson.
- **The choice can be gamed, and that's worth naming.** Some will pick the summary that confirms what they already hoped to find (the directed interview summaries that lean on Maja's app wishlist, say). Call that out — selecting your inputs is itself a biased act, and the bias travels into Session 2. Picking different styles for different sources is fine; the point is deliberate choice, not uniformity.
- **The prompt has to hunt for conflict.** Participants who ask the model to "synthesize" or "summarize all of this" will get a blended answer that over-weights the most vivid interview (Maja) and reads as false consensus — the exact trap. Steer them to the conflict-seeking prompt: agree / conflict / gaps, each cited to its source.
- **The model papering over the tension is a feature, not a bug.** If someone's triangulation comes back "everyone basically agrees," don't rescue it — ask them to read across their own summaries and check. That moment, where the human catches what the smoothing missed, is the lesson. The human names the tension; the model's pass is a draft to interrogate.

Default to AI-assisted-then-verify, given the tight slot. If time allows, the stronger version is to have participants spot the conflict manually first, then run the prompt as a check and compare.

## Pre-setup

Microsoft Copilot 365 chat is org-provided with no setup. Confirm participants can sign in before the session. No other prerequisites.

## Design notes

The deliberate tension planted in the research pack — how the data was built, where the tension lives, and how it ties to the prompt-framing lesson — is documented in `premade-design-notes.md`. Do not share that file with participants; it would defeat the cross-reference exercise.
