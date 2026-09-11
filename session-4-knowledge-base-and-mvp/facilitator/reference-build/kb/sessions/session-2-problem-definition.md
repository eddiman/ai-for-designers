Below are **5 candidate problem framings**, ranked by how strongly your evidence supports solving them first.

***

# Ranked candidate problem framings

## 1. Rebuild trust in real-time arrival information

**Rank: #1 — strongest evidence support**

### How Might We

**How might we make real-time bus information trustworthy enough that riders feel confident acting on it?**

### Why this should be solved first

This is the clearest cross-source pattern. Both the interviews and questionnaire point to unreliable real-time information as the central pain point.

### Evidence

**Observed**

* All three interview participants — **Maja, Geir, and Sofie** — described incorrect or misleading real-time information, including wrong countdowns, ghost buses, and uncertainty about whether the bus is actually coming. *(interview-summaries.md)*
* Questionnaire respondents showed the same issue at scale:
  * 31% said they “don’t know if the bus is coming”
  * 26% reported schedule mismatch
  * 17% reported incorrect real-time information  
    Together, this means about **74% of frustration is tied to timing reliability**. *(questionnaire-summary.md)*
* 55% of questionnaire respondents said they do **not trust real-time information**. *(questionnaire-summary.md)*

**Inferred**

* If users do not trust the information, then improving any other part of the experience may have limited value because people will still hesitate, double-check, or ignore the system.

***

## 2. Reduce uncertainty at the stop

**Rank: #2 — very strong evidence support**

### How Might We

**How might we reduce the uncertainty riders feel while waiting, especially when the bus is delayed, missing, or unclear?**

### Why this should be solved first

The problem is not only that buses are late. The deeper issue is that users are left unable to make decisions.

### Evidence

**Observed**

* Interviewees said that **“not knowing” is worse than waiting** and described anxiety, stress, and poor decision-making under uncertainty. *(Maja, Geir, Sofie — interview-summaries.md)*
* 79% of questionnaire respondents said they mainly want to reliably know when the bus will arrive. *(questionnaire-summary.md)*
* Open questionnaire responses described waiting without information as especially frustrating. *(questionnaire-summary.md)*

**Inferred**

* The key design job is not simply to show a countdown, but to help users answer:  
  **“Should I wait, walk, switch route, call someone, or leave later?”**

***

## 3. Help users make confident travel decisions when information is imperfect

**Rank: #3 — strong evidence support**

### How Might We

**How might we help riders decide what to do when the bus information is uncertain or changing?**

### Why this is slightly lower than #1 and #2

This framing is strongly supported, but it is one step downstream from the core issue. It focuses on decision support rather than the root trust problem.

### Evidence

**Observed**

* Maja checks multiple sources to verify what is happening. *(interview-summaries.md)*
* Sofie adds buffer time because she cannot fully rely on the system. *(interview-summaries.md)*
* Geir distrusts displays after previous bad experiences. *(interview-summaries.md)*
* Interviews revealed coping behaviors such as leaving early, taking earlier buses, and double-checking information. *(interview-summaries.md)*

**Inferred**

* Users are already building their own decision-support system through workarounds.
* A design opportunity is to reduce the amount of manual checking and guessing users have to do.

***

## 4. Support different user types without forcing everyone into an advanced app

**Rank: #4 — moderate evidence support**

### How Might We

**How might we give riders the level of support they need without making the experience feel too complex or app-dependent?**

### Why this matters

Your evidence shows a real tension: some users want proactive help, while others want simplicity and reliability above all else.

### Evidence

**Observed**

* Maja wanted a more personalized, proactive, smart assistant-like experience with notifications and guidance. *(interview-summaries.md)*
* Geir preferred simple, minimal solutions and rejected unnecessary app complexity. *(interview-summaries.md)*
* Sofie preferred simple tools but needed more guidance for unfamiliar trips. *(interview-summaries.md)*
* Questionnaire respondents were divided on apps:
  * 34% positive
  * 38% negative  
    *(questionnaire-summary.md)*

**Inferred**

* The design should probably be layered:
  * basic trustworthy information for everyone
  * optional proactive support for users who want it
* However, this should likely come **after** the reliability/trust problem is addressed.

***

## 5. Reduce the mental effort of planning and monitoring bus trips

**Rank: #5 — weaker but still meaningful evidence support**

### How Might We

**How might we reduce the mental effort riders spend checking, interpreting, and compensating for unreliable bus information?**

### Why this is valuable but probably not first

This is a strong qualitative insight, especially from the interviews, but it is less directly quantified in the questionnaire.

### Evidence

**Observed**

* Maja described having to “mentally run the system” and reconstruct her journey herself. *(interview-summaries.md)*
* Interviewees described stress, anxiety, and frustration caused by uncertainty. *(Maja, Geir, Sofie — interview-summaries.md)*
* The questionnaire confirms widespread frustration but does not deeply measure cognitive load. *(questionnaire-summary.md)*

**Inferred**

* The system is offloading work onto riders.
* A good solution should reduce checking, guessing, and planning burden.
* But because this is mostly interview-based, it is less strongly supported than the trust/reliability framings.

***

# Overall ranking

1. **Rebuild trust in real-time arrival information**  
   Strongest support across all interviews and questionnaire data.

2. **Reduce uncertainty at the stop**  
   Strong support across both qualitative and quantitative evidence.

3. **Help users make confident travel decisions when information is imperfect**  
   Strong behavioral evidence, especially from interviews.

4. **Support different user types without forcing everyone into an advanced app**  
   Important, but more about solution strategy than the first problem to solve.

5. **Reduce the mental effort of planning and monitoring bus trips**  
   Valuable qualitative insight, but less directly measured at scale.

***

# The problem you picked may be the wrong one to solve first

Since the triangulation highlights a tension between **advanced/personalized tools** and **basic trust in information**, the problem would be wrong to solve first if it is framed around something like:

> “How might we build a smarter, more personalized bus assistant?”

or

> “How might we improve the app experience for bus riders?”

That would be a weaker first problem for four reasons.

***

## 1. It starts with a solution channel, not the core problem

If the picked problem is app- or assistant-focused, it assumes the answer is a digital feature. But your strongest evidence says the real issue is **trust in timing information**, not lack of features.

**Evidence**

* Real-time accuracy was the dominant improvement need in the questionnaire at 47%. *(questionnaire-summary.md)*
* Apps/features were much lower at 14%. *(questionnaire-summary.md)*
* Geir and Sofie both preferred simple, minimal solutions rather than more app complexity. *(interview-summaries.md)*

**Why that matters**
A smarter app built on untrusted data may simply become a more polished version of the same broken experience.

***

## 2. It overweights Maja’s needs and underweights the broader evidence

Maja’s desire for proactive, personalized support is important, but it is not the dominant pattern across all sources.

**Evidence**

* Maja wanted proactive notifications, “leave now” guidance, and smart assistance. *(interview-summaries.md)*
* Geir explicitly preferred simple tools and relied more on physical displays. *(interview-summaries.md)*
* Sofie preferred simplicity, especially for familiar trips. *(interview-summaries.md)*
* Questionnaire sentiment toward apps was mixed: 34% positive, 38% negative. *(questionnaire-summary.md)*

**Why that matters**
Solving first for the power-user case risks designing for the most articulate or feature-positive participant rather than the strongest cross-source need.

***

## 3. It may ignore the largest quantified frustration

The questionnaire shows that timing reliability dominates frustration. A first design problem should match the strongest measured pain point.

**Evidence**

* 31% do not know if the bus is coming. *(questionnaire-summary.md)*
* 26% experience schedule mismatch. *(questionnaire-summary.md)*
* 17% cite incorrect real-time information. *(questionnaire-summary.md)*
* Together, around 74% of frustration relates to timing reliability. *(questionnaire-summary.md)*

**Why that matters**
If the first problem does not directly address reliability, uncertainty, or trust, it is less evidence-led.

***

## 4. It risks adding complexity before repairing confidence

The interviews show that users already experience stress, checking behavior, and mental load. Adding more features could increase the burden if the underlying information remains questionable.

**Evidence**

* Maja checks multiple sources and mentally reconstructs journeys. *(interview-summaries.md)*
* Sofie adds buffer time. *(interview-summaries.md)*
* Geir distrusts displays after previous failed experiences. *(interview-summaries.md)*

**Why that matters**
The first design move should reduce effort, not introduce another thing users must interpret or verify.

***

# Recommended first problem framing

The strongest first framing is:

## **How might we make real-time bus information trustworthy enough that riders feel confident deciding whether to wait, leave, or choose another option?**

This combines the two strongest evidence-backed needs:

1. **Trustworthy real-time information**
2. **Reduced uncertainty for decision-making**

It avoids prematurely committing to an app, assistant, notification system, or display redesign. Those can become solution directions later — but the first problem to solve should be **confidence in what is happening now**.
