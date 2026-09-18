# Session 4: reference build

Facilitator-only. This is the worked example of Session 4, produced by running the session's own steps end to end. Use it to demonstrate from, to answer "what should mine look like?", and to compare a participant's output against. Do not hand it to participants before they have done the work, since finished answers replace the thinking the session is trying to produce.

It mirrors the participant layout exactly, so every path a participant sees in the session `README.md` has an equivalent here:

| Here | A participant's equivalent |
|---|---|
| `kb/` | `session-4-knowledge-base-and-mvp/kb/` |
| `chosen-direction.md` | the stub at the session root |
| `spec.md` | the stub at the session root |
| `build-plan.md` | the stub at the session root |
| `verification-plan.md` | the stub at the session root |
| `app/` | `session-4-knowledge-base-and-mvp/app/` |

## What it commits to

The **Decide** direction, with the saved-stop status, recommendation-led screens, "What we know" framing, and the secondary "Why?" disclosure carried in from the UX review. `chosen-direction.md` has the reasoning, including what the other two directions were set aside for.

## State of the build

Plain HTML, CSS, and JavaScript in `app/`, opened directly in a browser. The pre-build decision gate and increment 1 are verified; increment 2 is built and awaiting verification. Increments 3–9 are planned and not built, as `build-plan.md` records.

The required Session 4 outcome for a participant is **one** verified increment, so this reference is already past the bar it sets. Further increments are stretch work.

## A caution when demonstrating

This was built in a dry run, and it shows in places: the reference `app/AGENTS.md` does not carry the conventions section that step 7 asks participants to produce, and `verification-plan.md` still has increment 2 marked as not started. Both record what actually happened, which makes them useful to show. A participant who sees a half-verified plan understands the loop better than one who sees a tidy fiction.
