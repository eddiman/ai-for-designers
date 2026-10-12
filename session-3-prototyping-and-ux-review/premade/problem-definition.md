# Problem definition

> Your work. The single problem you commit to. Generate candidate framings and How-Might-We statements, rank them by how much evidence supports each, pick one, then red-team it.

## The committed problem
<!-- One clear statement of the problem you're solving first. -->
Riders are not told clearly when their bus is delayed, cancelled or disrupted, so they wait without information and cannot decide whether to wait, leave or take another option.

## How-Might-We
<!-- The committed problem phrased as an HMW. -->
How might we clearly communicate delays, cancellations and disruptions so passengers know whether to wait, leave or consider another option?

## Evidence that supports it
<!-- Point to specific findings from the Session 1 summaries and triangulation. -->
- Maja, observed: She says passengers receive too little guidance during disruptions.
- Geir, observed: He waited more than 20 minutes for a bus that never arrived because no disruption information was provided.
- Sofie, observed: She cannot tell whether a bus is delayed or cancelled.
- Questionnaire, measured: There are 16 open-text mentions of clearer disruption and cancellation communication.
- Questionnaire, measured: There are 22 mentions of reducing waiting without information.
- Questionnaire, observed: One respondent writes, "If it's cancelled, tell me."

## Candidates considered and rejected
<!-- The other framings you generated, and why you didn't pick them. -->
The ranking put five framings in this order: (1) knowing whether and when the bus is coming, (2) clear delay, diversion and cancellation messages, (3) fast checking of a route riders already know, (4) accurate information at the stop as well as on the phone, and (5) proactive, personalised help for daily commuters. I committed to the second.

- **Riders cannot tell whether their bus is coming or when it will arrive** (ranked 1). HMW: How might we help riders know whether their bus is coming and when it will arrive, with information they can trust? It has the most measured support of all five (31%, 17%, 23% against 55%, 47%, 79%), and the committed problem is part of it. I did not take it as the whole problem because much of it depends on how accurate the predictions are, which a design cannot fix alone. Its evidence still applies, and the red-team reply below folds the part about unreliable predictions into the committed problem.
- **Riders already know their route but still check it by hand and add buffer time** (ranked 3). HMW: How might we let riders check the status of a route they already know in a few seconds, without searching for the journey again? The starting point is broad, but the questionnaire supports it only through the summary's conclusion, with no figure. The sources also split on how to make checking fast: Maja wants saved routes, while Geir and Sofie do not. Committing to it now would force the personalisation decision before the evidence can settle it.
- **Many riders check at the stop, where the information is often wrong** (ranked 4). HMW: How might we make sure riders who rely on stop displays and printed timetables get the same accurate information as riders who use an app, with nothing to install or set up? Only Geir supports it directly, Sofie only second-hand through her grandmother, and no source says the app and the stop display give different information. That consistency is an inference from my own insight 5. I keep the stop as a place the committed problem has to reach.
- **Daily commuters have to monitor and interpret travel information on their own** (ranked 5). HMW: How might we help daily commuters manage their regular trips without having to monitor, compare and interpret information themselves? Only Maja and a minority of the questionnaire support it (14% chose it, 34% would use such an app), and Geir, Sofie and 38% of respondents argue against it. It stays as a persona hypothesis to review against.

## Red-team: why this might be the wrong problem to solve first
<!-- AI's argument against your choice, and your response to it. -->
**The model's argument**

1. **The survey gives it the least support of the two strongest framings.** All four sources mention disruptions, but in the Questionnaire the support comes only from open text: 16 mentions of clearer communication about disruptions and cancellations, and 22 mentions of less waiting without information. Of the five open-text themes the Questionnaire lists, disruption communication has the fewest mentions. Confidence that the bus is coming has 39 mentions and more accurate real-time predictions has 28. The closed questions point the same way: 47% chose accurate real-time arrival information as their single improvement, and "Not knowing if the bus is actually coming" is the top frustration at 31%. No closed question asked about disruption messages, so the survey cannot show how many riders would put them first.
2. **A disruption message only works if riders trust the system that sends it.** Only 23% trust the real-time information they get, and 55% distrust it. One respondent says "I've stopped believing" the app's estimates. Sofie lost trust after a bus shown in the app never arrived before her exam, and Geir says the stop displays show buses that never arrive. A delay or cancellation message comes from that same information system. If riders have learned not to believe it, they may keep waiting or keep adding buffer time even after the message arrives. The evidence does not test this directly, but it suggests the trust problem in framing 1 has to be solved before a message from that system will change what riders do.
3. **Riders experience a missing bus the same way whatever the cause.** Geir's summary files the signs that show buses that never arrive under unreliable real-time information, and his wait of more than 20 minutes under disruptions. For the person at the stop, both are the same experience: a bus they were told to expect does not come. Maja describes the same thing when a bus "disappears from displays, or fails to arrive". Treating disruption as a separate problem could mean building a message layer on top of arrival times that are still wrong.
4. **The evidence shows uncertainty on ordinary days, but not how often disruptions happen.** Maja often leaves earlier than necessary and Sofie often takes an earlier bus than she needs, both because they do not fully trust the information. In the Questionnaire, 26% name buses arriving earlier or later than scheduled as their main frustration, and the comment "Standing in the rain not knowing if I've already missed it is the worst part" is about arrival times. None of the sources says how often disruptions or cancellations happen.
5. **"Take another option" depends on a research gap.** Geir supports the need to decide, since he would have made different travel decisions with accurate disruption information. What the other option is, and how to present it, has not been researched. Suggesting alternative routes during a disruption comes from Maja alone, and the triangulation lists it as a gap. The key insights say alternative-route suggestions "remain a research gap rather than a validated requirement."
6. **It starts with the question the sources disagree on most.** A disruption message needs a channel. Maja wants proactive notifications with control over how often they come, Sofie wants a phone message only for cancellations and disruptions, and Geir dislikes push notifications and wants clear messages at the stop with nothing to set up. The Questionnaire asks about notifications only together with favourites, so it cannot tell these positions apart. Framing 1 can begin with the information itself and leave the question of how to deliver it until later.

The model added that these points are about what to solve first and do not show the problem is unimportant: all four sources raise disruption communication, none argues against it, and Geir's wait is the most specific incident in the interviews. It suggested treating the problem as part of trustworthy arrival status, as insight 2 already does.

**My reply**

I keep the problem, and narrow what it covers in three places.

- I keep it because it is the moment where not knowing costs the rider a decision. Geir waited more than 20 minutes for a bus that never came, Sofie cannot tell delayed from cancelled, and Maja is left guessing whether to wait or find another option. All four sources raise it and none argues against it. Framing 1 has more survey support, but a design can do the most at the point where the normal service breaks down and the rider has to choose.
- Point 3 changes the scope. A bus that disappears from the display or never arrives is the same experience as a cancellation, so "disrupted" here includes a bus whose live position is lost, and the status has to say when a prediction can no longer be trusted. That also answers part of point 2: the message has to show how current and how certain the information is, or riders who distrust the system will ignore it. With that scope, the problem also covers ordinary days when a bus is late without an announcement, which answers point 4.
- Point 5 changes what I promise. The design helps riders decide whether to wait or leave. Suggesting another route stays a hypothesis to test, since only Maja raises it.
- On point 6 I hold my ground. The status comes first, where riders already look, in the app and at the stop. Notifications stay opt-in, and the channel question stays open until it can be tested with riders.

## Stretch: the runner-up problem (optional)
<!-- Only if you did this stretch test: the model's answer, and whether it changes your mind and why. Leave the committed problem above as it is. -->
