# Verification plan

> Your work. How you'll verify each increment actually works before moving on. This is what separates a working MVP from a confident-looking mess.

## Per-increment checks

| Increment | How I'll verify it works | Verified? |
|---|---|---|
| Pre-build decision gate | Confirm that the six decisions listed in [build-plan.md](build-plan.md) are recorded in [spec.md](spec.md): stack and app location; information source; status criteria; recommendation rules; state-selection method; and alternative action plus saved-stop scope. Confirm that none is left as an implementation assumption. | Verified |
| 1. Create the approved project shell | From a clean checkout or fresh install, follow the commands recorded in the app's `AGENTS.md`. Confirm the app starts without an error and shows one runnable screen. Confirm no bus recommendation, live-data claim, or out-of-scope feature has been added. | Verified |
| 2. Add the agreed scenario and state selection | Use the agreed review mechanism to reach the high-confidence, uncertain, and untrackable conditions. For each condition, confirm the stop, route, status, evidence, and alternative information match the decisions recorded in [spec.md](spec.md). Confirm the interface does not label demonstration data as live unless the chosen source is live. | Verified |
| 3. Build the saved-stop entry point | Open the initial screen. Before selecting the action, confirm that the saved stop, route, and compact status are visible and understandable. Select the action and confirm it opens the recommendation for the currently selected condition. | Not started |
| 4. Build the Wait recommendation | Select the high-confidence condition, open the recommendation, and confirm **Wait** is the most prominent element. Confirm the approved arrival information and status appear before any supporting explanation. Confirm the screen does not lead with conflicting-source language. | Not started |
| 5. Add the Wait explanation disclosure | In the Wait state, confirm the recommendation remains visible and dominant while **Why?** is closed. Open **Why?** and confirm the agreed evidence appears. Close it and confirm the primary recommendation is unchanged. | Not started |
| 6. Build the Wait for now recommendation | Select the uncertain condition and open the recommendation. Confirm **Wait for now** is primary, its approved time-boxed caveat is visible, and the relevant alternative appears. Confirm the supporting section is labelled **What we know** and not “Sources disagree”. | Not started |
| 7. Add the Wait for now explanation disclosure | In the Wait for now state, confirm the recommendation, caveat, and alternative remain visible while **Why?** is closed. Open **Why?** and confirm it reveals only the agreed source and confidence detail. Close it and confirm no recommendation or alternative has changed. | Not started |
| 8. Build the Take alternative recommendation | Select the untrackable condition and open the recommendation. Confirm **Take alternative** is primary, the alternative bus and its approved status are visible, and the usual bus is clearly described using the agreed untrackable status. Activate the alternative action and confirm it performs exactly the navigation or preview behaviour decided in the pre-build gate. | Not started |
| 9. Check the complete three-state decision flow | Starting from the saved-stop entry, use the agreed mechanism to test Wait, Wait for now, and Take alternative in sequence. Confirm each state retains a compact status, recommendation-first hierarchy, and appropriate optional explanation. Re-run the approved start and test checks after the integration changes. | Not started |

## Notes

- If a check fails, record the failure, the increment returned to, and the re-verification result here before moving on.

### Increment 2: verified 2026-09-11

Opened `app/index.html` and reached all three conditions through the visible selector. Checked each against the confirmed build decisions in [spec.md](spec.md):

| Condition | Status shown | Supporting detail | Matches spec |
|---|---|---|---|
| High confidence | Confirmed tracking | Two sources agree, GPS sees Bus 37 two stops away, no disruption | Yes |
| Information uncertain | Information uncertain | App example 3 min, schedule example 11 min, no stop-display data | Yes |
| Untrackable | Untrackable | Bus 37 without data for 9 minutes; Bus 15 at Kongens gate as the confirmed alternative | Yes |

- The stop and route read "Stortorget / Bus 37" and match the spec and the KB.
- No live-data claim anywhere. The page says it does not show live transit information, and each condition repeats that its data is static.
- Selecting a condition updates the name, status, and detail with no browser errors, and selecting a previous condition returns it unchanged.
- `aria-pressed` follows the selected button and the preview is an `aria-live` region, so the change is announced rather than only shown.

Two observations, neither a failure against this increment:

- In the uncertain condition the status line repeats the heading word for word ("Information uncertain" twice). Worth varying when increment 6 gives that state its real content.
- The supporting detail is not yet labelled **What we know**. That is increment 6's requirement, and this increment only has to show the fixed detail.
