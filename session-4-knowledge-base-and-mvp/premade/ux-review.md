# Persona UX review

## Scope and evidence

Reviewed the [Prototypes section in Figma](https://www.figma.com/design/sbCntnu1vvMCYwhdAZu5tP/AI-Testing?node-id=2263-6559) through the local desktop MCP, using section and individual-screen screenshots and layer metadata. The three sections are Next Nudge, Truth First, and Stop Signal, each containing Screens 1, 2, and 3. This is a persona-based design critique. The first-person reactions below are simulated hypotheses grounded in the supplied personas, not quotations from participants or new user evidence. Severity describes the likely consequence if a hypothesis is confirmed, not its certainty.

The review uses [personas.md](premade/personas.md) for goals and evidence, [problem-definition.md](premade/problem-definition.md) for the disruption-communication problem, [app-flow.md](../session-4-knowledge-base-and-mvp/premade/app-flow.md) for navigation, and [prototype-directions.md](../session-4-knowledge-base-and-mvp/premade/prototype-directions.md) for each concept's intent. The problem-definition file has an empty committed-problem field and an HMW about communicating disruptions so passengers can decide whether to wait, leave, or consider another option. The personas and directions use broader trust framings. I use the explicit disruption HMW as the review criterion while assessing each direction's particular response to it; I do not replace the unfinished problem statement.

Screens were inspected, but prototype interactions were not executed. Returns, refreshes, scanning, stop-number entry, and selected-plan changes are assessed against the written path, with unverified behavior identified below. The claim that phone and physical display share information cannot be checked without the physical-display design and its data source.

### Numbered screen map

| Direction | Screen 1 | Screen 2 | Screen 3 | Written continuation not shown as a separate screen |
| --- | --- | --- | --- | --- |
| Next Nudge | Today, usual trip and delay alert | Bus 9 status and leave-time recommendation | Wait or walk choices | Selecting either choice returns to Today with the selected plan |
| Truth First | Nearby departures | Bus 9 confirmed delay | Nearby departures again, visually repeating Screen 1 | Tap Bus 12 for uncertain-status detail, then Check again; that detail is absent from this section |
| Stop Signal | Scan or enter a stop number | Pine Street, Stop 1042 board | Bus 9 wait-or-leave guidance | Close stop status returns to Screen 1 without retaining the stop; optional Bus 12 detail is absent |

The written directions describe four-screen flows, but the inspected sections each contain three numbered frames. The walkthroughs preserve the Figma numbers, use the written flow to interpret the returns and branches, and do not invent a fourth screen.

## Persona 1: The Verification-Seeking Planner

This hypothesis is grounded in Maja's cross-checking of sources and reconstruction of journeys, alongside the broader evidence of leaving early and adding buffers. Proactive guidance is an inferred preference, conditional on reliable data. This reviewer wants to understand why an action is recommended and reduce the need to verify it elsewhere.

### Next Nudge

1. **Screen 1, Today.** I notice that my usual Bus 9 journey is already identified and that the alert translates the delay into leaving nine minutes later. That could save me reconstructing the journey across several sources. I struggle with acting on that instruction before seeing how recently the bus was tracked or how my walk to Pine Street was calculated. I want a short basis for the recommendation and an easy way to correct the assumed trip. The selective-notification promise is useful if loss of confidence also triggers an update.

2. **Screen 2, live bus status.** I notice the concrete leave time, Pine Street at 08:23, Central at 08:41, and an update twenty seconds ago. Those details help me compare the journey with my plans. I struggle with an unexplained "High confidence" label: fresh location data supports the bus estimate, but does not by itself explain why leaving at 08:12 gives me enough time. I want the walking-time and buffer assumptions, plus what happens if tracking stops or the bus recovers time after I decide to leave later.

3. **Screen 3, choices.** I notice that waiting is described as least effort and walking to Oak Avenue might get me there four minutes earlier. The disclaimer makes the alternative's uncertainty explicit. I still have to reconstruct Bus 3's departure, destination arrival, walking deadline, and tracking evidence before I can choose. I want comparable timing and evidence for both options. Following the written return to Screen 1, I would check that my selected route and leave time replace the original plan; that confirmation is not shown or verified here.

**Direction assessment:** The proactive recommendation addresses my manual planning effort, but its reasoning is incomplete at the moment I would act. I would test whether explaining the leave-time assumptions and making the alternative comparable reduces cross-checking, while keeping the concise Today screen.

### Truth First

1. **Screen 1, nearby departures.** I notice that Bus 12 has no countdown when its live signal is lost, while Bus 9 and Bus 3 have distinct status labels. That is useful evidence that the app separates uncertainty from delay. I struggle with judging the freshness of the list before opening a bus, and "Near me" does not show how I would correct the stop if location is wrong. I want a concise update age and a way to select the stop I intend to use, without an account or saved journey.

2. **Screen 2, confirmed delay.** I notice a vehicle-location timestamp and separate scheduled and estimated times. This gives me something to check rather than a bare countdown. I then find that 08:15 to 08:23 is eight minutes, while the screen says nine minutes delayed. The phone clock also reads 9:41, making "08:08:40, less than a minute ago" and a fourteen-minute wait inconsistent with the visible time. I want one coherent scenario clock and a clear relationship between fresh tracking and the statement "Yes. It's coming."

3. **Screen 3, returned departures.** Following Done, I notice that the list repeats Screen 1, including Bus 12's lost signal. I next follow the written path by selecting Bus 12, but no uncertain-detail screen is available to inspect. I cannot verify when or where it was last seen, what the schedule means, or what Check again would change. I want that evidence and an explicit remaining-uncertain state, so I can judge whether further checking helps rather than returning to another app.

**Direction assessment:** Separating scheduled and live information fits my verification goal without requiring a personal assistant. The inconsistent times and missing uncertainty explanation undermine that benefit. I would test whether coherent evidence lets me act without independently reconstructing the status.

### Stop Signal

1. **Screen 1, connect to a stop.** I notice scan and stop-number routes, with no sign-in and nothing saved after leaving. That could let me inspect a specific stop without setting up another service. I struggle to tell whether 1042 is an example or an editable number, and the camera and entry states are not shown. I want an explicit stop-entry step and confirmation of the stop I connected to. I would not expect this stop-first concept to learn my commute or alert me before I reach the stop.

2. **Screen 2, stop board.** I notice the named stop and separate moving, uncertain, and tracked statuses. "Same update as the stop display" could reduce checking two displays, provided the claim is supported. I struggle with "Updated now": it gives the board's apparent freshness without saying how old each vehicle's evidence is. I want to distinguish a freshly refreshed board from a recently observed bus, particularly for Bus 12. Seeing the same unsupported estimate twice would not resolve my doubt.

3. **Screen 3, wait-or-leave guidance.** I notice a fourteen-minute recommendation, 08:23 estimate, and a traffic explanation. I struggle with "it's safe to leave knowing this is not a cancellation" when the supporting text only says the driver has not reported a cancellation or diversion. Those statements have different certainty. I also cannot reconcile 08:23 with the 9:41 phone clock. I want a dated vehicle observation and a bounded status statement. On Close stop status, I expect the written return to Screen 1 and no retained stop, but that behavior is unverified.

**Direction assessment:** Continuing the stop display on my phone suits verification at the stop, but shared information needs visible freshness and limits. I would test whether this reduces cross-source checking without treating agreement between two displays as independent confirmation.

## Persona 2: The Simplicity-First Waiter

This hypothesis is grounded in Geir's reliance on physical displays, distrust after failed waits, and explicit rejection of unnecessary app complexity, with Sofie's preference for simple tools on familiar trips. It does not establish low technical ability or an accessibility impairment. This reviewer wants a readable answer about whether the bus is coming, with little setup or interpretation.

### Next Nudge

1. **Screen 1, Today.** I notice a single delay alert instead of a long list of features, and the route summary gives me the revised arrival time. I struggle with entering an experience that already knows a named rider and a usual trip when I only want to check the bus at my stop. Optional personalisation is promised in the direction description, but its controls or a basic route-checking entry are not shown. I want to know that I can decline routine learning and notifications, without being asked to manage a profile before getting status information.

2. **Screen 2, live bus status.** I notice "bus is moving," the stop time, and a recent update, which answer more of my question than the first alert. I struggle with the largest instruction being "Leave at 08:12" when I might already be standing at Pine Street. I want the bus arrival answer to stay easy to find and the leave instruction to be clearly conditional on being at home. I can return through Today; I do not need to open See my choices just to finish checking.

3. **Screen 3, choices.** I notice that waiting is recommended as least effort, while the seven-minute walk offers only a four-minute earlier arrival. I would likely keep the familiar option; the app should let me do that without further decisions. I struggle with the pre-existing checkmark on Wait for Bus 9 because I cannot tell whether it is a recommendation or an already confirmed choice. I want a clear acknowledgement if I select it and a return to the simple status. The visible prototype question adds reading unrelated to catching the bus.

**Direction assessment:** The concise status and optional choices could serve me, but routine-based entry is a weaker fit than the other directions. That is a fit limitation rather than a reason to turn Next Nudge into a stop board. Optional personalisation should be demonstrable within its intended concept.

### Truth First

1. **Screen 1, nearby departures.** I notice that I can see routes immediately without sign-in. Bus 12 has a lost-signal label instead of a misleading number, and Bus 9's wait is prominent. I struggle to read the much smaller operational labels that tell me whether to believe those numbers. I want the uncertainty and delay explanations readable at a glance, since the large countdown alone cannot answer whether a bus will appear. This is a readability hypothesis from the screenshot, not a measured contrast or accessibility failure.

2. **Screen 2, confirmed delay.** I notice the direct answer and the sentence telling me to wait if fourteen minutes works for me. Those are close to the reliable basics I want. I struggle when the supporting times contradict the nine-minute delay, and the 9:41 clock contradicts both the wait and the recent vehicle timestamp. I do not want to calculate which number is right. I want a consistent estimate with a short, readable reason to believe it, while keeping Done as a straightforward return to the list.

3. **Screen 3, returned departures.** I notice that I am back at the same list after Done. Following the written flow, I would tap Bus 12 because its dash still leaves me wondering whether the bus is coming. The intended "We can't confirm this bus" answer, last-seen information, and Check again action are not present in the inspected section. I want that plain explanation so I do not repeat the experience of waiting more than twenty minutes without useful disruption information. I do not need alternative-route planning to answer this question.

**Direction assessment:** No-account access and direct status answers match my goals. The missing Bus 12 detail prevents assessment of the scenario most closely related to Geir's failed wait. Test understanding of delayed versus unconfirmed before adding more features.

### Stop Signal

1. **Screen 1, connect to a stop.** I notice that the physical stop can lead directly to a phone view, with no sign-in. The number-entry alternative gives me another route if I prefer not to use the camera. I struggle with what pressing the number row does: it displays 1042 but does not show entry or confirmation. I want to reach the matching board in one short sequence and recover easily from a wrong number or denied camera permission. This is an unshown interaction, not evidence that scanning fails.

2. **Screen 2, stop board.** I notice the familiar routes, stop number, and claim that this is the same update as the display. That continuity fits how I already get bus information. I struggle with small status text under much larger wait numbers, especially when the lost-signal bus is represented by a dash. I want "uncertain" and its explanation readable without opening every row. I also want the app to acknowledge stale information: the display's past failures mean sameness alone cannot restore trust.

3. **Screen 3, wait-or-leave guidance.** I notice the clear fourteen-minute answer and a prominent estimate. I struggle with being told I can leave knowing it is not a cancellation, because the lower text says only that none was reported. I want a short answer that preserves that uncertainty without making me interpret the reporting system. Close stop status sounds like a clear ending, and I would expect the promised return to Screen 1 without a saved stop; I cannot verify that return or deletion from these frames.

**Direction assessment:** This direction best follows my existing stop-first behavior. Its success depends on readable status information and a dependable, limited claim about service state. It should preserve temporary access rather than add accounts or routine learning to address other personas' needs.

## Persona 3: The Context-Dependent Rider

This hypothesis is grounded in Sofie's distinction between familiar and unfamiliar trips, preference for simple tools, and use of buffer time. Extra support during disruptions or unfamiliar journeys is inferred; the evidence does not establish a preference for automatic context detection. This reviewer wants to choose when to see more guidance.

### Next Nudge

1. **Screen 1, Today.** I notice that the normal trip stays quiet until something changes. That fits a familiar journey where I want minimal information. I struggle with whether today's usual trip is the one I am taking: the named routine is assumed, and I cannot see a way to change it or control what counts as an interruption. I want to confirm or correct the trip and choose notifications, particularly on a day with a different destination. I do not need the app to infer my context automatically.

2. **Screen 2, live bus status.** I notice a specific leave time and the arrival at Central, which could help when a disruption changes my plan. I struggle with whether the leave time includes the buffer I normally add or just an assumed eleven-minute walk to the stop. "High confidence" does not explain that distinction. I want a compact explanation of the walking and buffer assumptions, available when I need it, while keeping this screen short for my familiar commute. The back action lets me stop before exploring alternatives.

3. **Screen 3, choices.** I notice that extra guidance is behind See my choices rather than forced onto Today. That is a useful response to changing needs. I struggle with the Oak Avenue option when the area is unfamiliar: seven minutes of walking does not tell me the route, departure deadline, or whether Bus 3 reaches my destination. I want optional walking and boarding details plus a comparable arrival estimate. After choosing, I want the return to Today to identify the active journey clearly; the changed state is not shown.

**Direction assessment:** Progressive access to choices fits my varying need for help. The alternative needs enough detail to support an unfamiliar journey, while the default should remain concise. Test user-controlled trip and notification settings rather than assuming that routine detection is welcome.

### Truth First

1. **Screen 1, nearby departures.** I notice a compact list that is sufficient when I know my route, including a clear refusal to give Bus 12 a live countdown. I struggle on an unfamiliar journey because the nearest stop, route number, and destination name do not establish that this is the stop or direction I need. I want a simple way to choose or confirm a stop and travel direction. That should support correct status checking within Truth First's scope, without turning it into an always-on journey assistant.

2. **Screen 2, confirmed delay.** I notice that opening the bus gives me more explanation only when I ask for it. "Wait if 14 minutes works for you" leaves the decision with me. I struggle with comparing that wait to my plans when the delay arithmetic and the phone clock disagree with the estimate. I want coherent timing and an estimate whose limits are understandable. This direction explicitly serves riders who know their route, so a complete unfamiliar-trip planner is outside its promise; basic stop and direction confirmation still supports correct use.

3. **Screen 3, returned departures.** I notice that Done brings me back to the compact overview. If a familiar trip becomes uncertain, I would now follow the written Bus 12 branch for more help. The duplicated list gives no inspectable detail about the lost signal and no refresh result. I want an explanation of what is unknown and what to do if it stays unknown. Support should expand for this disruption without requiring personalisation or permanently expanding the routine view.

**Direction assessment:** The list-to-detail structure fits my preference for lightweight information with more explanation on demand. The missing uncertainty branch interrupts that progression. Support for a wholly unfamiliar itinerary is a scope limitation to test, not automatically a defect to fix here.

### Stop Signal

1. **Screen 1, connect to a stop.** I notice that entering the number can tie my phone to a specific physical stop without saving it. That could help in an unfamiliar place where nearby-stop guesses are confusing. I struggle to see the entered-number and scan-confirmation states, so I cannot tell how I would detect a wrong connection. I want a brief confirmation naming the stop and its travel direction before relying on the board, with a simple retry or number-entry route if scanning is unavailable.

2. **Screen 2, stop board.** I notice the stop identity and Change control, plus separate statuses for moving, uncertain, and tracked buses. On a familiar trip, that could be enough. On an unfamiliar trip, I struggle with knowing whether the listed destination and Bus 9 are the service I need; a stop number alone does not answer that. I want optional route or boarding context rather than a fuller default screen. For Bus 12, the optional uncertainty branch is not present, so the extra explanation I might need cannot be assessed.

3. **Screen 3, wait-or-leave guidance.** I notice the wait estimate and traffic explanation, which address the disruption without presenting unsolicited route alternatives. I struggle with the certainty of the cancellation statement and with relating 08:23 to the 9:41 clock. I want consistent timing, qualified service status, and optional route detail if I am unsure where this bus goes. Close stop status should explicitly end this temporary stop view; the written return to Screen 1 and lack of retention are unverified, so I cannot assess whether the session ending matches the privacy promise.

**Direction assessment:** Temporary stop access can keep familiar travel simple and provide local context in an unfamiliar place. Test an optional layer of route information within that concept, while preserving the quick board and avoiding inferred personalisation.

## Prioritized findings

High: likely to cause an unsupported travel decision or prevent the direction's central trust task. Medium: adds verification work, limits contextual use, or leaves an intended control or outcome unverified. Low: adds distraction without blocking the core task. Rows are ordered by likely decision consequence, then breadth across personas. Observed design inconsistencies are separated from unshown states and persona-fit hypotheses. No Critical issue is assigned because these screenshots do not establish a safety-critical failure.

| Finding | Which persona(s) | Which direction | Severity |
| --- | --- | --- | --- |
| **F1. Cancellation certainty exceeds the stated evidence.** Screen 3 says the rider can leave knowing this is not a cancellation, while the supporting explanation says only that the driver has not reported one. Preserve the distinction between no report and confirmed service status; test whether riders understand the remaining uncertainty. | Verification-Seeking Planner; Simplicity-First Waiter; Context-Dependent Rider | Stop Signal, Screen 3 | High |
| **F2. The Bus 12 uncertainty task cannot be reviewed end to end.** Screens 1 and 3 label its lost signal, but Screen 3 repeats the list instead of providing the written uncertain-status detail. Add the last-seen evidence, schedule warning, and Check again outcome, including a still-uncertain state, to test the central wait-or-leave scenario. | Verification-Seeking Planner; Simplicity-First Waiter; Context-Dependent Rider | Truth First, Screens 1 and 3, intended Bus 12 branch | High |
| **F3. Scenario times contradict one another.** All three directions show a 9:41 phone clock alongside earlier journey times. Truth First Screen 2 also labels 08:08:40 as less than a minute ago, and 08:15 to 08:23 is eight minutes rather than its stated nine-minute delay. Align clock, scheduled time, estimate, countdown, and update age so riders can judge freshness and timing without recalculating. | Verification-Seeking Planner; Simplicity-First Waiter; Context-Dependent Rider | Next Nudge, Screens 1-3; Truth First, Screens 1-3, especially 2; Stop Signal, Screens 2-3 | High |
| **F4. The leave-later instruction lacks a visible basis and an inspectable fallback.** Screens 1-2 recommend leaving at 08:12 for an 08:23 stop arrival without explaining walking time or buffer; fresh tracking alone does not establish the personal departure time. Show those assumptions and test what guidance replaces the instruction if tracking is lost or the bus recovers time. | Verification-Seeking Planner; Context-Dependent Rider; Simplicity-First Waiter when already at the stop | Next Nudge, Screens 1-2 | High |
| **F5. Display agreement is presented without vehicle-level freshness.** Screen 2's "Same update as the stop display" and "Updated now" do not establish when each bus was last observed; Screen 3 lacks a vehicle timestamp. Distinguish board refresh from vehicle evidence, and verify the shared-source claim against the physical display before treating it as support for the guidance. | Verification-Seeking Planner; Simplicity-First Waiter; Context-Dependent Rider | Stop Signal, Screens 2-3 | High |
| **F6. The alternative requires the rider to reconstruct the journey.** Screen 3 offers a seven-minute walk and a four-minute earlier arrival without Bus 3's departure, explicit destination arrival, walking deadline, or tracking evidence. Provide comparable evidence and optional walking or boarding detail so the alternative reduces planning effort and supports unfamiliar travel. | Verification-Seeking Planner; Context-Dependent Rider | Next Nudge, Screen 3 | Medium |
| **F7. Optional personalisation and correction of the assumed trip are unshown.** Screens 1-2 assume a named rider's usual trip; the description promises optional personalisation and notifications, but no control or changed-trip state is visible. Demonstrate those choices within the proactive concept. Do not infer that Maja wants routine learning merely because she cross-checks information. | Simplicity-First Waiter; Context-Dependent Rider; Verification-Seeking Planner | Next Nudge, Screens 1-2 and intended setup | Medium |
| **F8. Essential status evidence is visually secondary to large time estimates.** Small operational labels and update text on Truth First Screens 1-3 and Stop Signal Screens 2-3 may make the uncertainty harder to read than the countdown. Test at intended phone size and in stop-use conditions; improve those labels if needed. No measured contrast or accessibility violation is established here. | Simplicity-First Waiter; Context-Dependent Rider; Verification-Seeking Planner | Truth First, Screens 1-3; Stop Signal, Screens 2-3 | Medium |
| **F9. The selected-plan outcome is unverified and the initial checkmark is ambiguous.** Screen 3 marks Wait for Bus 9 before an observed selection; no changed Today state is shown. Clarify recommendation versus selection and demonstrate the return with the chosen route and leave time, including the walking alternative. | Verification-Seeking Planner; Simplicity-First Waiter; Context-Dependent Rider | Next Nudge, Screen 3 and return to Screen 1 | Medium |
| **F10. Scan and number-entry recovery cannot be assessed.** Screen 1 offers both methods but shows neither camera permission handling nor editable-number, invalid-number, or wrong-stop confirmation states. Demonstrate a short path to the named board and a fallback without sign-in; do not assume the unseen interaction fails. | Simplicity-First Waiter; Context-Dependent Rider; Verification-Seeking Planner | Stop Signal, Screens 1-2 | Medium |
| **F11. Stop and travel-direction confirmation need testing outside familiar routes.** Truth First's Near me control has no shown correction outcome; Stop Signal has a stop identity and Change control but no shown route detail. Test whether optional stop or route clarification prevents checking the wrong service, while keeping both concepts concise and avoiding a required journey planner. | Context-Dependent Rider; Verification-Seeking Planner | Truth First, Screens 1 and 3; Stop Signal, Screens 1-3 | Medium |
| **F12. The optional lost-signal explanation is absent.** Screen 2 distinguishes Bus 12 from delayed buses, but the written optional branch with last-known location, signal age, and schedule warning is not in the section. Add it if the direction is to be tested for uncertainty as well as confirmed delay; keep it separate from the main three-screen path. | Verification-Seeking Planner; Simplicity-First Waiter; Context-Dependent Rider during disruption | Stop Signal, Screen 2, optional Bus 12 branch | Medium |
| **F13. Temporary access promises have no inspectable ending state.** Screens 1 and 3 promise no retention and offer Close stop status, but the return and storage behavior were not executed. Verify that closing returns to Screen 1 and ends the stop session as described; do not infer a privacy failure from absent frames. | Simplicity-First Waiter; Context-Dependent Rider; Verification-Seeking Planner | Stop Signal, Screen 3 and return to Screen 1 | Medium |
| **F14. A facilitator test question sits inside the rider's decision screen.** The "Prototype question" on Screen 3 asks the tester whether alternatives reduce uncertainty, potentially directing their response before they choose. Move it to facilitator material so observations concern the journey choice rather than the prompted evaluation. | Verification-Seeking Planner; Simplicity-First Waiter; Context-Dependent Rider | Next Nudge, Screen 3 | Low |

## Triage

These are proposed priorities, not participant decisions. The criterion is the stated disruption HMW: communicating delays, cancellations, and disruptions so passengers can decide whether to wait, leave, or consider another option. The committed-problem field remains unfinished. Persona reactions remain hypotheses; an unshown interaction requires verification before it is treated as a failure.

### Act on now

- **F1, cancellation certainty:** High severity, affects all 3 personas, and directly undermines the disruption problem by presenting absence of a cancellation report as confirmation; qualify the guidance to match the available evidence.
- **F2, Truth First uncertainty branch:** High severity, affects all 3 personas, and prevents assessment of the central wait-or-leave task when tracking is lost; add the intended explanation and both recovered and still-uncertain refresh outcomes.
- **F3, inconsistent scenario times:** High severity, affects all 3 personas across all directions, and undermines decisions based on delay, arrival, and freshness; align the scenario clock, estimates, schedule, countdowns, and update ages before further testing.
- **F4, leave-time basis and fallback:** High severity, affects 2 personas directly and the Simplicity-First Waiter when already at the stop, and undermines an actionable disruption recommendation; expose walking and buffer assumptions and demonstrate guidance when confidence changes.
- **F5, vehicle-level freshness:** High severity, affects all 3 personas, and undermines Stop Signal's trust claim by confusing a refreshed board with recent vehicle evidence; show vehicle update age and qualify the shared-display claim until its source is verified.
- **F6, incomplete alternative comparison:** Medium severity, affects 2 personas, and weakens the "consider another option" part of the problem; make departure, destination arrival, and tracking evidence comparable, with walking detail available on demand.
- **F8, status readability:** Medium severity, potentially affects all 3 personas, and could obscure the distinction between delayed and uncertain; check at intended phone size and improve essential status text if the readability hypothesis is confirmed.
- **F9, selected-plan confirmation:** Medium severity, affects all 3 personas, and leaves the result of a disruption decision unclear; distinguish recommendation from selection and demonstrate the changed Today state for both choices.
- **F12, Stop Signal uncertainty detail:** Medium severity, affects all 3 personas during lost-signal use, and leaves a central disruption state unexplained; add the optional branch so the stop-first concept can be tested for uncertainty as well as confirmed delay.
- **F14, embedded prototype question:** Low severity, affects the test experience of all 3 personas, and does not directly undermine disruption communication but may bias the evidence used to judge it; move the question to facilitator material before testing.

### Later

- **F7, personalisation controls and trip correction:** Medium severity, affects all 3 personas, and can undermine guidance when the assumed trip is wrong; demonstrate opt-out and correction before testing changed-trip use, after the status and recommendation fixes, without expanding routine learning or notifications.
- **F10, connection recovery states:** Medium severity, affects all 3 personas, and can block access to disruption information, although no failed connection was observed; verify the basic scan and number-entry paths first, then add permission, invalid-number, and wrong-stop recovery when testing Stop Signal's entry workflow.
- **F11, stop and travel-direction clarification:** Medium severity, affects 2 personas, and can undermine disruption decisions if they check the wrong service; test minimal stop correction and optional route context in unfamiliar-trip use after the core status flows, without adding a full journey planner.
- **F13, temporary-session ending:** Medium severity, affects all 3 personas, and concerns the temporary-access promise more directly than disruption communication; verify return and storage behavior when an interactive implementation is available, since static frames do not establish a retention failure.

### Won't do

No finding is rejected in full: all 14 identify either a discrepancy against the intended flow, a trust risk, or a focused verification need. The following interpretations of findings are excluded because they would expand or contradict the directions' intent.

- **F7, remove Next Nudge's proactive concept to suit the Simplicity-First Waiter:** The underlying finding is Medium severity and affects all 3 personas, but this particular response serves 1 persona's preference while removing potentially useful disruption support for the Planner and Context-Dependent Rider; keep personalisation optional instead, with its benefit still to be tested.
- **F11, add a required unfamiliar-trip planner to Truth First or Stop Signal:** The underlying finding is Medium severity and affects 2 personas, but a full unfamiliar-trip planner primarily responds to the Context-Dependent Rider and could burden the Simplicity-First Waiter; retain optional stop and route clarification because required planning exceeds the disruption problem and both concepts' intent.

### Persona tensions

No table finding is exclusive to one persona, so there is no supported single-persona finding to flag as such. The narrower requests below could nevertheless create a conflict if implemented without limits.

- **F11, unfamiliar-trip guidance:** The Context-Dependent Rider's request for more help could add steps and reading for the Simplicity-First Waiter if made mandatory; keep the default status view concise and offer route context on demand.
- **F7, personalisation:** Removing routine support to accommodate the Simplicity-First Waiter could reduce the Planner's inferred benefit from proactive guidance, while requiring routine learning or notifications could burden the Waiter and Context-Dependent Rider; demonstrate user choice and test the inferred benefit.
- **F4-F6 and F8, evidence versus reading effort:** The Planner and Context-Dependent Rider need enough evidence to act, while the Waiter needs a quick answer; make status, uncertainty, and freshness readable in the main view, with calculations and walking detail available on demand.

## My decisions