Prototype Flow Instructions
1. Next Nudge
Concept: A proactive assistant for regular riders like Maja. It learns a familiar journey and only interrupts when something changes.

Flow
Start: Today screen

Show Maja’s usual Tuesday journey: Bus 9 from Home to Central.
Display one prominent alert: “Your 08:14 bus is delayed.”
Explain the practical impact: “Leave 9 minutes later than usual.”
Reinforce that notifications are selective: “We’ll stay quiet unless this changes.”
Tap the delay alert

Navigate to the Live bus status screen.
Show:
Status: Delayed by 9 minutes
Recommended departure time: Leave at 08:12
New estimated arrival at the stop: 08:23
Confidence level: High confidence
Time of the latest update
A simple stop timeline
Tap “See my choices”

Navigate to the Decision options screen.
Present:
Wait for Bus 9 as the lowest-effort recommendation
Walk to Oak Avenue for Bus 3 as a possible faster option
Clearly label alternative routes as suggestions rather than guarantees.
Tap either choice

Confirm the selection by returning to the Today screen.
The prototype can show the selected plan as the active journey.
What to test
Does the alert help riders change their departure time confidently?
Is “Leave at 08:12” more useful than simply saying the bus is delayed?
Do alternative-route suggestions reduce uncertainty or create more work?
Does the promise of fewer notifications make personalisation acceptable?
2. Truth First
Concept: A no-account, no-setup status checker for riders like Geir and Sofie who want reliable basics without extra features.

Flow
Start: Nearby departures

Automatically show the nearest stop: Pine Street, Stop 1042.
List nearby buses using plain operational states:
Bus 9: Delayed 9 minutes
Bus 12: Live signal lost
Bus 3: On time — tracked
Avoid presenting scheduled times as though they are live estimates.
Tap Bus 9

Navigate to the Confirmed delay screen.
Lead with the direct answer: “Yes. It’s coming.”
Show:
Best estimate: 14 minutes
Vehicle is moving
Last live-location update
Scheduled time versus current estimate
Confidence based on recent vehicle data
Give a plain decision statement: “Wait if 14 minutes works for you.”
Tap “Done”

Return to the nearby departures list.
Tap Bus 12

Navigate to the Uncertain status screen.
Lead with: “We can’t confirm this bus.”
Explain:
The live vehicle signal was lost
When and where it was last seen
The scheduled time is not a live estimate
Give direct guidance: “Don’t rely on the countdown.”
Tap “Check again”

Return to or refresh the nearby departures screen.
In a higher-fidelity prototype, simulate either:
Live tracking returning, or
The status remaining uncertain.
What to test
Do riders understand the difference between delayed and uncertain?
Does showing the evidence behind an estimate improve trust?
Is “Yes, it’s coming” more reassuring than a countdown alone?
Does openly admitting uncertainty help riders decide whether to leave?
3. Stop Signal
Concept: A continuation of the physical bus stop on the rider’s phone. It serves stop-first riders without requiring an account or saved route.

Flow
Start: Connect to a stop

Explain: “Take this stop with you.”
Offer two ways to connect:
Scan stop code
Enter the four-digit stop number
Show the example stop number: 1042
Reassure users: “Nothing is saved after you leave.”
Tap “Scan stop code” or the stop number

Navigate to the Pine Street stop board.
Show the same routes and terminology as the physical display:
Bus 9: Delayed — bus is moving
Bus 12: Uncertain — signal lost
Bus 3: On time — tracked
Include a confirmation message: “Same update as the stop display.”
Show when the board was last updated.
Tap Bus 9

Navigate to the Wait-or-leave guidance screen.
Lead with: “Wait about 14 minutes.”
Clarify:
The bus is delayed but still moving
It is not currently reported as cancelled
Traffic added approximately 9 minutes
Best current estimate: 08:23
Tap “Close stop status”

End the session and return to the initial connection screen.
Do not retain the stop or ask the rider to create an account.
Optional prototype branch: Tap Bus 12

Show:
“We cannot confirm whether this bus is coming.”
Last known vehicle location
Time since the signal was lost
Guidance not to rely on the scheduled countdown
What to test
Do riders understand that the phone and stop display use the same information?
Does scanning feel easier than downloading, searching, or creating an account?
Is the status language understandable at a glance?
Does temporary, no-account access work for simplicity-first riders?
Would riders trust the physical display more if it showed the same certainty states?
Suggested Prototype Navigation
Use three entry cards on a prototype index screen:

Next Nudge — Proactive routine assistant
Truth First — No-setup status checker
Stop Signal — Continue from the bus stop
For each concept:

Wire every primary card and button.
Add a visible back action on detail screens.
Let testers move through the flow without instructions from the facilitator.
Keep prototype data consistent: Bus 9, Pine Street, 9-minute delay, estimated arrival at 08:23.
Test each direction independently rather than asking participants to combine features across concepts.