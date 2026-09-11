# Chosen direction

> Your work. The one prototype direction you're taking into the MVP build, and why. This is what the spec is written against.

## The direction
- **Direction:** Decide
- **Figma link:** https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2227-54727

## Why this one

Decide answers the committed problem directly: it combines the quality of the available information with a recommendation to wait, wait for now, or take an alternative. It gives riders a decision they can act on when the information is uncertain or changing.

For the **Verification-Seeking Planner**, it absorbs the manual cross-checking she otherwise does across apps, displays, and memory. The UX review found the source breakdown and the alternative route especially useful when the sources conflict or Bus 37 cannot be tracked.

For the **Context-Dependent Rider**, it remains low-friction in the normal state and offers stronger guidance when a familiar journey is disrupted. The review found its time-boxed recommendation and immediately navigable alternative useful in that situation.

For the **Simplicity-First Waiter**, the recommendation itself is easy to act on, especially in the alternative-route state. The review also identified density and framing problems in the current screens. Those are changes to the information hierarchy, not a gap in the direction's core purpose.

## What the review flagged to carry in

- Show a short live status on the saved-stop card before the user taps the main action.
- Lead every decision screen with the recommendation and its clear arrival status.
- Replace the heading “Sources disagree” with a recommendation-led explanation of “what we know,” so the app does not foreground its own uncertainty.
- Make the supporting explanation secondary, such as through a “Why?” disclosure. This keeps the conclusion easy to scan while leaving the evidence available to riders who want to inspect it.

## What you're leaving behind

**Signal:** The confidence labels and refusal to show unsupported precision are valuable. The MVP will retain a compact equivalent, such as live, scheduled, or untrackable status, rather than build Signal's separate stop-focused flow. Signal's Expected and Unknown states would also need a decision recommendation and a more prominent alternative before they fully answer the committed problem.

**Shift:** The quiet-to-guidance escalation suits context-dependent travel, but it expands the MVP into a continuous journey across several states. Its quiet and resolved screens also lack the data-quality signal needed to establish trust. The MVP leaves that interaction model for later and focuses first on clear, evidence-backed decisions at the point riders need to choose what to do.
