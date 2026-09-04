# Prototype directions and flows

All three directions address the committed problem. Each is a four-screen mobile prototype. No direction is selected in the supplied artifacts.

## Direction 1 — Signal

**Concept:** Replace false precision with honest confidence states. The app shows the quality of the data as well as the time.

**Flow:** A nearby-stop list leads to a stop detail shown in one of three conditions:

- **Confirmed:** Live GPS, bus seen two stops away, a green signal, and an exact time.
- **Expected:** Schedule-only data, an amber signal, an estimated time prefixed with `~`, and a plain-language explanation.
- **Unknown:** No data, a red signal and question mark rather than a time, with an alternative bus suggested.

The three detail screens represent conditions at the same stop, not a linear journey. The direction seeks to rebuild trust by refusing to present an unsupported precise number.

**Prototype:** [Figma direction 1](https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2227-54726)

## Direction 2 — Decide

**Concept:** Reduce manual cross-checking by showing an action recommendation alongside the information used to make it.

**Flow:** A home screen shows Maja's saved stop and a “What should I do?” action. It leads to three versions of the decision screen:

- **Wait:** Two sources agree, GPS confirms the bus is two stops away, and no disruption is reported.
- **Wait — for now:** The live app, schedule, and stop display disagree; the recommendation includes a time-boxed caveat and a more prominent alternative.
- **Take alternative:** The usual bus has been untraceable for nine minutes; a confirmed alternative and navigation action are primary.

The direction adapts its recommendation as certainty falls, seeking to give confidence through a decision rather than through a raw number alone.

**Prototype:** [Figma direction 2](https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2227-54727)

## Direction 3 — Shift

**Concept:** Scale the app's visual presence with the stakes of the trip.

**Flow:** A single familiar trip unfolds in sequence:

1. **Quiet mode:** A minimal route, destination, and minutes card.
2. **Alert emerging:** An amber border and a discreet change alert.
3. **Guidance mode:** A disruption view explains the delay and offers three actions, including an alternative route.
4. **Resolved:** The app returns to a minimal card when the trip is back on track.

The direction seeks to make a quiet screen mean that nothing needs attention, while a stronger screen signals that action may be needed.

**Prototype:** [Figma direction 3](https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2227-54728)

## Sources

- [Prototype-directions artifact](../sessions/session-3-prototype-directions.md)
- [App-flow artifact](../sessions/session-3-app-flow.md)
- [Persona UX review](../learnings/persona-ux-review.md)