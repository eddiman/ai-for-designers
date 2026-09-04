# Persona UX-review findings

The supplied review tests all three prototype directions in character as the three persona hypotheses. The findings below preserve the review's priority and recommendation. They are review outputs, not validated usability-test results.

## Findings to act on

| Priority | Finding | Direction | Personas affected | Review recommendation |
| --- | --- | --- | --- | --- |
| Critical | Quiet and resolved cards show no data-quality signal, so riders cannot tell whether a time is live or scheduled. | Shift | All three | Add a minimal inline `live` / `scheduled` indicator or coloured dot. |
| High | Expected and Unknown states explain data quality but do not help riders decide what to do. | Signal | Verification-Seeking Planner; Context-Dependent Rider | Add a lightweight action recommendation. |
| High | The alert strip can be missed and does not state the severity of the change. | Shift | Simplicity-First Waiter; Context-Dependent Rider | Increase alert weight and add a brief change label, such as “Delayed — now 14 min”. |
| High | The Unknown-state alternative is too passive after the red unknown signal. | Signal | Simplicity-First Waiter | Elevate the alternative to a primary action. |
| Medium | “Sources disagree” reactivates distrust for simplicity-first users. | Decide | Simplicity-First Waiter | Lead with the recommendation and call the details “what we know”. |
| Medium | The explanation of confidence is denser than simple users need. | Decide | Simplicity-First Waiter | Make the reasoning secondary, for example behind a “why?” disclosure. |
| Medium | The Decide home screen requires a tap before showing live status. | Decide | Verification-Seeking Planner | Add a short status to the saved-stop card. |
| Medium | The Shift guidance CTA commits a rider to a new stop and bus in one tap. | Shift | Simplicity-First Waiter | Consider a brief route or walking preview before navigation. |
| Medium | The Shift resolved state drops data-quality context after a disruption. | Shift | Verification-Seeking Planner | Restore a minimal live or confirmed indicator. |
| Low | Signal's stop list adds a navigation tap for regular riders. | Signal | Simplicity-First Waiter; Context-Dependent Rider | Consider a saved or recently used stop as the default entry. |

## Direction-level pattern

- **Signal** makes data quality clear. The review finds that its weakest states need an actionable next step and a more prominent alternative.
- **Decide** is particularly useful for the Verification-Seeking Planner and Context-Dependent Rider when information conflicts or is missing. The review finds that the interface can over-explain or surface the conflict too starkly for the Simplicity-First Waiter.
- **Shift** fits the Context-Dependent Rider's need for quiet, escalating support, but its quiet and resolved states lack the confidence signal required by the committed problem.

## Triage status

The review table marks individual findings as `Yes` or `Consider`. Its final `Triage` section is blank, so the project has not recorded which changes it will carry into the MVP.

## Source

[Raw persona UX review](../sessions/session-3-ux-review.md)