Below are **3 persona hypotheses** grounded in the triangulation evidence and aligned to the committed problem:

> **Committed problem:**  
> **How might we make real-time bus information trustworthy enough that riders feel confident deciding whether to wait, leave, or choose another option?**

***

# Persona hypothesis 1: The Verification-Seeking Planner

## Persona hypothesis

**A rider who wants to make the “right” travel decision, but does not trust one source enough — so they cross-check apps, maps, memory, and timing patterns before acting.**

This persona is close to **Maja**.

## Core need

They need **trustworthy, decision-ready information** that reduces the need to manually verify everything.

## Evidence

### Observed

* Maja checks multiple sources because she does not fully trust the available information. *(Maja — interview-summaries.md)*
* Maja was described as “mentally running the system” and reconstructing journeys herself. *(Maja — interview-summaries.md)*
* Interviews more broadly revealed coping behaviors such as double-checking information, leaving early, and taking earlier buses. *(interview-summaries.md)*
* The questionnaire shows that 55% of respondents do not trust real-time information. *(questionnaire-summary.md)*

### Inferred

* This user is not asking for “more information” in general; they need **information they can confidently act on**.
* They may value proactive guidance, but only if it is based on reliable underlying data.

## Design implication

Prioritize features like:

* confidence indicators
* clear “last updated” status
* explanation of uncertainty
* suggested action: “wait,” “walk,” “take alternative,” “leave later”
* cross-source consistency shown in one place

## What we still do not know

* How much verification is habitual versus caused by recent bad experiences.
* Whether this persona would trust an app if it explained uncertainty transparently.
* How often they travel under time pressure versus casually.
* Whether their behavior represents many riders or mainly higher-engagement users like Maja.

***

# Persona hypothesis 2: The Simplicity-First Waiter

## Persona hypothesis

**A rider who does not want a complex travel assistant or feature-heavy app. They mainly want a simple, reliable answer: “Is the bus coming, and when?”**

This persona is close to **Geir**, with some overlap from **Sofie**.

## Core need

They need **simple, visible, trustworthy real-time information** without extra complexity.

## Evidence

### Observed

* Geir relies heavily on physical displays. *(Geir — interview-summaries.md)*
* Geir distrusts displays after previous bad experiences. *(Geir — interview-summaries.md)*
* Geir explicitly prefers simple, minimal solutions and rejects unnecessary app complexity. *(Geir — interview-summaries.md)*
* Sofie also prefers simple tools, especially for familiar trips. *(Sofie — interview-summaries.md)*
* Questionnaire respondents were mixed or skeptical toward apps:
  * 34% positive
  * 38% negative  
    *(questionnaire-summary.md)*
* Apps/features were a much lower priority than real-time accuracy:
  * real-time accuracy: 47%
  * apps/features: 14%  
    *(questionnaire-summary.md)*

### Inferred

* This user may disengage if the solution feels like “another app to manage.”
* Trust may need to be rebuilt through basic reliability before advanced functionality becomes valuable.

## Design implication

Prioritize:

* clear stop displays
* minimal app screens
* no unnecessary personalization requirements
* plain-language status: “on time,” “delayed,” “not trackable,” “cancelled”
* consistency between physical and digital information

## What we still do not know

* Whether this persona avoids apps because of preference, accessibility, habit, or previous poor experiences.
* Whether they would use digital tools if they were simpler and more trustworthy.
* How important physical displays are across age groups or travel frequency.
* Whether distrust is mainly toward displays, apps, or the transport operator overall.

***

# Persona hypothesis 3: The Context-Dependent Rider

## Persona hypothesis

**A rider whose information needs change depending on whether the trip is familiar or unfamiliar. They want minimal information on routine journeys, but more guidance when plans change or the route is unfamiliar.**

This persona is close to **Sofie**.

## Core need

They need **the right amount of guidance for the situation** — not always a full assistant, but support when uncertainty increases.

## Evidence

### Observed

* Sofie distinguishes between familiar trips, where she needs minimal information, and unfamiliar trips, where she needs more guidance. *(Sofie — interview-summaries.md)*
* Sofie adds buffer time because she cannot fully rely on the system. *(Sofie — interview-summaries.md)*
* Sofie prefers simple tools but still needs support when travel is less familiar. *(Sofie — interview-summaries.md)*
* 79% of questionnaire respondents said they want to reliably know when the bus will arrive. *(questionnaire-summary.md)*
* Open questionnaire responses described waiting without information as especially frustrating. *(questionnaire-summary.md)*

### Inferred

* This user may not want constant proactive notifications, but they may value them during disruption, unfamiliar routes, poor weather, or time-sensitive journeys.
* Their need is not fixed; it changes with confidence, context, and stakes.

## Design implication

Prioritize adaptive support:

* quiet/default mode for familiar trips
* extra guidance when uncertainty or disruption is detected
* “need help deciding?” option rather than always-on advice
* route alternatives only when relevant
* explain whether the bus is being actively tracked

## What we still do not know

* What counts as a “familiar” versus “unfamiliar” trip for users.
* Which contexts trigger the need for more support: time pressure, transfers, weather, darkness, location, delays.
* Whether users want the system to infer context automatically or let them choose.
* How common this persona is in the questionnaire population.

***

# Recommended persona set to carry forward

I would carry forward these **three hypothesis personas**:

1. **The Verification-Seeking Planner**  
   Needs confidence and reduced mental effort.

2. **The Simplicity-First Waiter**  
   Needs clear, trustworthy basics without app complexity.

3. **The Context-Dependent Rider**  
   Needs lightweight information most of the time, but stronger guidance when uncertainty rises.

Together, they map well to the central design tension:

> Users agree that trust and reliability matter most, but they differ in how much support they want layered on top of that.
