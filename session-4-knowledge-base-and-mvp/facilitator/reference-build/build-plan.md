# Build plan

> Your work. The MVP broken into small increments. Each one is something you can build and verify on its own, with no one-shotting of whole features.

## Pre-build decision gate

The MVP cannot truthfully claim to provide live, real-world travel advice until the unresolved questions in [spec.md](spec.md) are answered. Record these decisions before starting Increment 1:

1. The app's technology stack and where the runnable app will live.
2. Whether the MVP uses fixed demonstration scenarios, a specific transit-data source, or another source of information.
3. The evidence criteria for **live**, **scheduled**, and **untrackable** status.
4. The rules that select **Wait**, **Wait for now**, and **Take alternative**.
5. How a reviewer reaches each of the three states during the MVP demonstration.
6. What the alternative-route action does, and whether Stortorget / Bus 37 is a fixed scenario or a configurable saved stop.

Do not invent these decisions during the build. Update [spec.md](spec.md) when they are confirmed, then use those decisions in the increments below.

**Decision-gate record:** The decisions are recorded in [spec.md](spec.md): the static app is in `app/`; it uses fixed demonstration scenarios; Stortorget / Bus 37 and Bus 15 at Kongens gate are fixed; the prototype examples define the three recommendation states; the reviewer will use a visible scenario selector; and the alternative action will open a 6-minute in-app route preview.

## Increments

1. **Create the approved project shell.** Scaffold the approved stack with one runnable screen and no bus-decision behaviour. Record the actual stack, structure, and commands in the app's `AGENTS.md` after this increment, as required by the Session 4 workflow.

2. **Add the agreed scenario and state selection.** Represent the one saved-stop scenario and the three agreed information conditions. Add only the agreed way for a reviewer to reach each condition; do not present the data as live unless the source decision supports that claim.

3. **Build the saved-stop entry point.** Show the saved stop and route with a short, compact status before the rider asks what to do. Include the action that opens the current condition's recommendation.

4. **Build the Wait recommendation.** For the agreed high-confidence condition, show **Wait** as the primary recommendation, with the approved arrival and status information ahead of explanation.

5. **Add the Wait explanation disclosure.** Add the secondary **Why?** interaction to the Wait recommendation. It reveals the supporting evidence without competing with the recommendation.

6. **Build the Wait for now recommendation.** For the agreed uncertain condition, show **Wait for now** as the primary recommendation, its time-boxed caveat, and the relevant alternative. Use **What we know** for the supporting context rather than a “Sources disagree” headline.

7. **Add the Wait for now explanation disclosure.** Add the secondary **Why?** interaction to the uncertain recommendation. It reveals the agreed source and confidence detail without changing the primary recommendation.

8. **Build the Take alternative recommendation.** For the agreed untrackable condition, show **Take alternative** as the primary recommendation, including the alternative bus and its status. Add the agreed action for reaching the alternative stop.

9. **Check the complete three-state decision flow.** Review the saved-stop entry and all three recommendation states together. Correct only integration issues that prevent the agreed scenario mechanism, recommendation hierarchy, status labels, explanation disclosures, or alternative action from working as specified.

## Order rationale

The plan resolves the product and technical assumptions before any build work, because status labels and recommendations cannot be implemented faithfully without them. The project shell comes next because every visible state needs a runnable home. The scenario mechanism then gives each later increment a controlled condition to build and verify against.

The saved-stop screen is built before recommendations so the home-screen UX-review finding can be checked independently. The three decision states are then added one at a time, with the optional explanation added separately for each state. This keeps the recommendation-first hierarchy testable and avoids delivering a feature-heavy flow all at once. The final increment checks that the small, individually verified pieces work together without adding new product scope.

## Build status

The pre-build decision gate and Increments 1 and 2 are verified. No later increment has been built. Increments 3–9 are planned only.

## Implementation record

### Increment 1: Create the approved project shell

**Status:** Verified.

**Files added:**

- `app/index.html`: a single static project-shell page.
- `app/styles.css`: the styles for the shell page.
- `app/AGENTS.md`: the app structure, run instructions, verification instruction, and KB read rule.

**Files changed:**

- `spec.md`: recorded the confirmed fixed-demo decisions required before the build.
- `build-plan.md`: recorded the resolved decision gate and this implementation result.

**What now works:**

Opening `app/index.html` displays one static “Project shell ready” screen. It requires no install or build step. It contains no bus data, scenario selector, recommendation, live-data claim, route preview, or other decision behaviour; those belong to later increments.

### Increment 2: Add the agreed scenario and state selection

**Status:** Verified 2026-09-11. See the verification record in [verification-plan.md](verification-plan.md).

**Files added:**

- `app/script.js`: the three fixed demonstration conditions and the selector behaviour.

**Files changed:**

- `app/index.html`: replaces the shell-only content with a visible demonstration-condition selector and condition preview.
- `app/styles.css`: adds selector, preview, status, and responsive layout styles.
- `app/AGENTS.md`: records the JavaScript file and the revised verification steps.
- `build-plan.md`: records the verified first increment and this implementation result.

**What now works:**

Opening `app/index.html` presents a clearly labelled fixed-demo selector. Selecting **High confidence**, **Information uncertain**, or **Untrackable** updates the condition name, compact status, and fixed supporting detail for Stortorget / Bus 37. The Untrackable condition also identifies Bus 15 at Kongens gate as the fixed alternative. The page identifies every condition as static demonstration data and offers no recommendation, saved-stop entry experience, route preview, or live-data claim.
