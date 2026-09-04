# Spec

> Your work. The spec for the MVP, written from the knowledge base. What it does, for whom, and where it stops.

## What we're building

An MVP of the **Decide** bus-information experience. For a rider's saved stop, it presents a short current status and lets the rider ask what to do. It returns one clear recommendation — **Wait**, **Wait for now**, or **Take alternative** — alongside a compact indication of the information's status and supporting detail that can be opened when wanted. When the rider's usual bus cannot be relied on, the experience presents a confirmed alternative as the primary next step.

The MVP must help a rider decide whether to wait, leave, or choose another option. It must not imply that a time or recommendation is more certain than the available information supports.

## Scope

### Entry point: saved stop and current status

- Show one saved stop and route as the entry point, following the Decide direction's Stortorget / Bus 37 example.
- Show a short status before the rider taps for a recommendation. The chosen-direction review change calls for a live status at this point.
- Use a compact status that makes the state understandable, such as **live**, **scheduled**, or **untrackable**, rather than presenting an unsupported precise time.

### Decision states

Support the three information conditions defined by the Decide direction:

1. **Wait:** Sources agree, GPS confirms the bus is two stops away, and no disruption is reported. Present the recommendation and arrival status first.
2. **Wait for now:** The available sources differ. Present a time-boxed recommendation and a relevant alternative. Describe the supporting detail as **What we know**, rather than leading with “Sources disagree”.
3. **Take alternative:** The usual bus is untrackable. Present an alternative bus and its status as the primary recommendation, with an action to navigate to its stop.

### Information hierarchy

- Put the recommendation and clear status before explanatory detail on every decision screen.
- Make the explanation of the recommendation available through a secondary disclosure, such as **Why?**. This preserves the source and confidence detail for riders who want to inspect it without making it the primary interaction.
- Keep the normal entry point and the recommendation easy to scan. Do not require a feature-heavy or personalized setup to understand the next action.

### Intended users and outcomes

- **Verification-Seeking Planner:** Can see a recommendation and inspect the information supporting it, reducing the need to manually cross-check sources.
- **Simplicity-First Waiter:** Can quickly see whether the bus is coming and what action the experience recommends, without being led by a headline about conflicting sources or a dense explanation.
- **Context-Dependent Rider:** Receives minimal information in the normal case and more decision support when the usual journey becomes uncertain or disrupted.

## Out of scope (for now)

- The separate **Signal** stop-focused flow, including its dedicated Confirmed, Expected, and Unknown stop-detail screens. The MVP retains only the compact status needed to make Decide's recommendations understandable.
- The **Shift** continuous journey, including quiet mode, emerging alerts, guidance mode, and resolved mode.
- Always-on proactive notifications, routine learning, or a personalized assistant. The committed problem does not prescribe these, and the research shows that some riders prefer simple, low-demand support.
- A physical stop-display redesign or a cross-channel physical-and-digital information system.
- Features beyond the chosen decision flow, including a full journey-planning or route-search experience.
- Any claim that the MVP is connected to live transit data or that it can calculate real-world recommendations. The KB does not define a data source, reliability model, or decision logic for doing so.

## Grounded in

- **Committed problem:** [committed-problem.md](kb/decisions/committed-problem.md) establishes that the first problem to solve is trustworthy current information and a rider's ability to act on it.
- **Research evidence:** [research-insights.md](kb/learnings/research-insights.md) records broken trust in real-time information, the greater harm of uncertainty, and riders' existing cross-checking and buffering behaviours.
- **Persona needs:** [personas.md](kb/design/personas.md) and [persona-needs.md](kb/stories/persona-needs.md) define the need for decision-ready information, a simple trustworthy answer, and support that scales with uncertainty.
- **Chosen direction:** [chosen-direction.md](chosen-direction.md) selects Decide and commits to the saved-stop status, recommendation-led screens, “What we know” framing, and secondary explanation.
- **Design flow:** [prototype-directions-and-flows.md](kb/design/prototype-directions-and-flows.md) defines the three Decide conditions: Wait, Wait for now, and Take alternative.
- **UX-review findings:** [persona-ux-review.md](kb/learnings/persona-ux-review.md) identifies the Decide direction's home-screen, conflict-framing, and explanation-density issues that this MVP addresses.

## Confirmed build decisions

These decisions resolve the previously open implementation questions for this MVP. They are fixed demonstration choices, not new research findings.

| Decision | MVP choice |
| --- | --- |
| Stack and location | Static HTML, CSS, and JavaScript in `app/`. No framework or external dependency is required. |
| Information source | Fixed demonstration scenarios only. The MVP must clearly identify this context and must not claim to show live transit data. |
| Saved-stop scenario | Stortorget / Bus 37 is a fixed scenario. There is no saved-stop configuration or persistence in the MVP. |
| Wait rule and status | **Wait** when two sources agree, GPS indicates Bus 37 is two stops away, and there is no disruption. Show this as a fixed high-confidence demonstration condition, not a live claim. |
| Wait for now rule and status | **Wait for now** when the fixed sources differ: live-app example 3 min, schedule example 11 min, and no stop-display data. Show **What we know** as the supporting context and use a compact uncertain status. |
| Take alternative rule and status | **Take alternative** when Bus 37 has been untrackable for 9 minutes. Show Bus 15 at Kongens gate as the fixed confirmed alternative in the demonstration. |
| State selection | A visible, clearly labelled scenario selector lets a reviewer switch between the three fixed conditions. |
| Alternative action | Open an in-app route preview for Kongens gate. It shows a 6-minute walk, Bus 15, and the next step. It does not use an external map or routing service. |
