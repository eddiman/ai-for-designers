---
title: AI for Designers
version: 1.3
status: draft
audience: designers — UI, UX, and Service, all in the same room
format: 4 sessions, ~60–90 min each, bi-weekly (Sessions 3–4 likely need more time)
last-updated: 2026-06-29
supersedes: ai-for-designers-v1.2.md (kept for history)
---

# AI for Designers

> Terminology: I call each meeting a **session**; the whole four-part thing is the **course**. (The earlier notes used "course" for each meeting.)

## What changed from v1.2

v1.2 seeded each session from the plan and left the runnable detail to be filled in. v1.3 captures **Session 1 as it now actually runs**:

- The generic-vs-directed comparison is a fixed **three-step flow per source** — generic, then directed in the same chat, then "analyze the differences between them" — applied to each interview *and* to the questionnaire, with the exact prompts written out.
- The directed prompt uses the **same topical lens** on both sources ("what frustrates people and what they most want improved"), so the planted tension emerges from the data rather than from the prompt wording.
- Triangulation now starts with the participant **choosing one summary per source** to carry forward — committing to a framing whose bias travels onward — then runs a **conflict-seeking** prompt, with the human naming the tension and treating the model's pass as a draft.
- Each session folder now separates **front-facing material** (session root, plus stub files for the artifacts) from **facilitator notes** (`facilitator/`) and the **catch-up pack** (`premade/`).

Sessions 2–4 are unchanged from v1.2 and still need the same fleshing-out into runnable detail.

## What changed from v1.1

v1.1 organized the four sessions around the design process (Discover → Define → Develop → Deliver) and listed where AI helps in each phase, with separate guidance per role. v1.2 kept that arc underneath but changed how the course is run:

- **One running scenario.** Every session works the same project — helping people catch the bus — so the group builds a single thread from raw research through to a working MVP.
- **Your own work carries forward; premade data is the on-ramp.** If you attend the whole course, each session builds on the artifacts *you* made in the previous one, so by the end the bus-app project is genuinely yours — that ownership is the point. For anyone who missed a session, each session also ships with a known-good premade version of the previous artifact, so they can drop in for a single topic without having committed to the whole course. Everyone finishes a session with the same *kind* of artifact in the same format; the content varies because it reflects each person's own choices.
- **All three roles in the same room.** UI, UX, and Service designers go through the same sessions on the same scenario. There are no separate role tracks. The aim is for each role to see the full end-to-end flow and where AI touches their part and the parts on either side of them.
- **Files are the currency.** From Session 1 onward, output is saved as portable files (markdown or PDF). Later sessions attach these files to Figma Make and Copilot, so anything left in a chat window cannot move forward.
- **A different back half.** Session 3 moves to Figma Make plus a round-trip into Copilot/Figma for a persona-based UX review. Session 4 builds an actual MVP in Copilot from a project knowledge base, using a deliberate spec → plan → verify → iterate loop.

## How this course works (the backbone)

Read this before the session plans — it explains the moving parts.

**Continuity, and ownership.** If you attend the course, you carry your own artifacts forward. Your Session 1 summaries feed your Session 2 framing, which feeds your Session 3 prototypes, and so on, so the bus-app project you end up with is built from your own decisions. That ownership is deliberate — it is what makes people feel they belong to the course rather than watching a demo. Everyone leaves each session with the same kind of artifact in the same format, so the facilitator can teach to that shape, while the content differs from person to person.

**The on-ramp for drop-ins.** Not everyone can commit to four sessions. So each session also ships with a known-good premade version of the previous artifact. Anyone who missed last time, or is dropping in for one topic, picks up the premade version and continues from there with no catch-up cost. The two paths run side by side in the same room.

**The recap does double duty.** Each session opens with a short account of what the reference artifact contains and *why* — which prompt style was used, what was kept, what was thrown out, what tension is carried forward. For returning participants it is a model for justifying their own work; for drop-ins it is the context they need to use the premade version.

**Roles stay together on purpose.** A Service designer should see what happens when their research becomes a prototype; a UI designer should see the research that justified the screen they are polishing. Running one shared thread is how each role gets that visibility.

**Each session folder separates three things.** The session root holds the front-facing course material and a stub file for every artifact the participant produces. A `facilitator/` subfolder holds the run of show, steering notes, and any design secrets (such as where the planted tension lives) that participants must not see verbatim. A `premade/` subfolder holds the catch-up pack for drop-ins.

## The scenario and the base problem

The project is a way to help people catch the bus. We need a concrete thing to prototype and build by the end, so the course resolves to a **bus app MVP** in Sessions 3–4. The framing of the *research question*, though, should stay open early on.

A leading research question produces leading research, which is the exact bias Session 1 is meant to expose. So the opening question is deliberately broad:

> "How do people plan and catch buses today, and where does it go wrong?"

This keeps the solution open. The "timetable vs. app" question then shows up as one of the *findings* rather than the premise, and the deeper tension can surface honestly:

- the questionnaire (the broad, shallow signal) shows most people mainly want **reliable, real-time arrival info**;
- a vocal minority in the interviews (the narrow, deep signal) wants a **full personal app** with saved routes and notifications.

That tension — does the value sit in reliability or in personalization — is the thread that runs through every session and becomes the real question for the MVP: what should we actually build first.

## Premade catch-up materials (the facilitator builds these once)

These are the known-good versions handed to anyone who missed the previous session, so they can continue without having done the prior work. Returning participants use their own output instead. Session 1 is the exception — its research pack is the shared starting data for everyone.

| For session | Premade version | What it demonstrates |
|---|---|---|
| 1 | Research pack: 3 fake interview transcripts + a questionnaire dataset with a results table (**everyone** starts here) | A deliberate, defensible tension planted between the interviews and the questionnaire |
| 2 | Reference summaries + a triangulation note from the Session 1 data | A clean, source-attributed synthesis that separates what was said from what was inferred |
| 3 | `problem-definition.md`, `personas.md`, `key-insights.md` | A committed problem and 2–3 evidence-grounded personas, formatted to attach to tools |
| 4 | The chosen prototype direction + a persona UX review | One direction selected, with the reasoning written down |

## Principles we carry through every session

1. Use AI across the whole project. The early research and framing is where designers most underuse it, so we start there.
2. Keep what was said separate from what you concluded. AI tends to blend the two; you keep them apart.
3. Anchor every output in evidence. Treat AI's summaries, personas, and findings as hypotheses until something confirms them.
4. Give the tool a clear contract and structured context — files, then a knowledge base. Vague input produces vague output.
5. Move in small, verified steps. The human owns the decisions and the accountability for whatever ships.

---

## Session 1 — Research synthesis: how prompt framing changes what you learn

**Learning goal:** See how the framing of a summarization prompt changes the research you get back, keep observation separate from interpretation, and learn to choose a framing on purpose and triangulate across sources before trusting a pattern.

**Starting point:** everyone starts from the same research pack — 3 interview transcripts and a questionnaire dataset. Session 1 is the start, so there is no prior recap; instead the facilitator explains how the data was generated and says plainly that a tension has been planted, without saying where.

**The two prompt styles (used on every source):**

- **Generic:** "Summarize this interview." / "Summarize this questionnaire."
- **Directed (a topical lens, not an answer):** for interviews, "…focusing on how they catch the bus today, what frustrates them, and what they wish existed"; for the questionnaire, "…focusing on what frustrates people about catching the bus today and what they most want improved."

The directed prompt deliberately uses the same lens on both sources, so the divergence between them comes from the data, not from the wording. Neither style is the right one — the skill is knowing which mode you are in and choosing it on purpose.

**The per-source flow (one chat session per source):**

1. Run the generic prompt; save the summary.
2. In the same chat, run the directed prompt; save that summary.
3. Ask the model "Analyze the summaries and highlight the differences between them"; save the analysis.

Run this for each of the three interviews and for the questionnaire. The questionnaire gets the same care as the interviews — it is the broad signal the interviews are measured against, not a footnote.

**Choose, then triangulate:**

- For each source, the participant picks the *one* summary (generic or directed) to carry forward, guided by the differences analysis. They need not pick the same style for every source. This commits them to a framing whose bias travels onward.
- Put the four chosen summaries in one chat and run a conflict-seeking prompt: "Compare these summaries. Where do the sources agree, where do they conflict or point in different directions, and where are the gaps only one source raises? Cite the specific source for each point."
- The participant interrogates that pass — did it surface a real conflict or flatten everything into consensus, did it lean on the most vivid interview — and names the central tension themselves. The model's pass is a draft.

**Run of show (~70 min):**
- **0:00–0:10** — Frame the session and the scenario. Show the planted-tension warning.
- **0:10–0:25** — Live demo: the three-step flow on one interview, then on the questionnaire.
- **0:25–0:55** — Hands-on: each participant runs the flow across the interviews and the questionnaire.
- **0:55–1:10** — Choose inputs, then triangulate. This is where the planted tension should surface.

**Concrete output (the artifacts, each stubbed in the session folder):**
- `interview-summaries.md` — per interview: the generic summary, the directed summary, and the model's differences analysis, with quotes attributed to the source.
- `questionnaire-summary.md` — the same three parts for the questionnaire.
- `triangulation.md` — the inputs chosen (which summary per source, and why), plus where the sources agree, conflict, and leave gaps, with the central tension named.

**Takeaway:** Prompt framing is a research-design decision made before you read the output. A generic prompt gives a low-bias first pass that can read bland; a directed prompt gives relevance and can smuggle your assumptions into a summary that looks neutral. Choose which you want each time, commit to one framing per source on purpose, and confirm any pattern across more than one source — and against your own reading — before you trust it.

**Tool:** Microsoft Copilot 365 chat (org-provided, no setup).

---

## Session 2 — From summaries to a problem definition and personas

**Learning goal:** Turn the synthesized research into one committed problem definition and a small set of evidence-grounded personas, and save them as files that downstream tools can read. This is the v1.1 "Define" work, plus personas, plus file discipline.

**Starting point + recap:** if you were here for Session 1, you continue from your own summaries and triangulation note; if you missed it, take the premade reference versions and carry on. Either way the session opens with a recap that explains which prompt style produced the reference summaries and why (for example, a directed prompt focused on reliability, frequency, and trust, because those recurred across sources), what the central tension is, and why the summaries are solid enough to build on.

**The work:**
- Generate candidate problem framings and How-Might-We statements from the evidence. Ask AI to rank them by how much evidence actually supports each one. Commit to a single problem and have AI red-team it ("argue why this is the wrong problem to solve first").
- Create **2–3 personas**, each grounded in specific evidence from the research, each labelled as a hypothesis, each noting what we still do not know about them.
- Save everything as files: `problem-definition.md`, `personas.md`, `key-insights.md`, formatted so they can be attached in Figma Make and Copilot.

**On "Create personas?" — yes, and here is the reason.** Personas earn their place because Session 3 runs a UX review *in character as these personas*. That makes them a required, working input rather than a deliverable for its own sake, which is also why they have to be tied to evidence and treated as hypotheses.

**Concrete output:** a "design brief packet" — three files (problem definition, personas, key insights) that the rest of the course consumes.

**Takeaway:** AI produces problem framings and personas quickly, and each one needs an evidence anchor and a hypothesis label before you rely on it. The human picks the single problem and the personas to commit to. Save the results as clean files, because every later session reads them as input.

**Tool:** Copilot 365 chat. (Confirm the GitHub Copilot / BSD application is moving, since Sessions 3–4 need it.)

---

## Session 3 — Prototyping with Figma Make, and a persona UX review

**Learning goal:** Use the brief packet to generate prototype directions in Figma Make, then close the loop by running a persona-based UX review through Copilot and Figma. The plumbing is pre-wired; the lesson is the workflow and what it produces.

**Starting point + recap:** continue from your own brief packet from Session 2, or pick up the premade `problem-definition.md`, `personas.md`, and `key-insights.md` if you missed it. The recap explains which problem the reference packet committed to, how the reliability-vs-personalization tension was resolved, and which personas it reviews against.

**The work:**
- **Figma Make:** attach the problem definition, insights, and personas as files, and generate **3 prototype directions** for the bus experience. The point of attaching files is that the prototypes come back grounded in the actual research rather than generic.
- **Round-trip to Copilot / Figma (pre-wired):** bring the designs into a Figma file, describe the flow of the app, and run a UX review in character as the Session 2 personas. Collect prioritized findings.
- **Triage:** decide which findings are worth acting on.

**Pre-setup (important):** the Copilot↔Figma connection (the Figma MCP plugin and the agent) must be working before the session. As you noted, the learning here is to *show* the capability, not to teach people how to wire it up. Build and test the full round-trip in advance.

**Concrete output:** 3 prototype directions in Figma, a written description of the app flow, and a persona-based UX review with prioritized findings.

**Takeaway:** when a generative tool is given your real problem and personas as structured files, the prototypes it returns are grounded in the research instead of generic, and you can pressure-test them straight away by reviewing against the same personas. Both steps depend on the Session 1–2 files being clean and portable.

**Tools:** Figma Make; Figma MCP plugin; GitHub Copilot / agent (all pre-wired). Requires the BSD application to be approved.

**To verify before committing this session:** does Figma Make currently accept attached files to inform a generation, and is the Copilot↔Figma review flow reproducible end to end? Both need a dry run.

---

## Session 4 — A project knowledge base and an MVP build

**Learning goal:** Stand up a project knowledge base from everything produced so far, then build a working MVP in Copilot using a disciplined loop, without one-shotting whole features.

**Starting point + recap:** continue from your own prototype direction and UX review from Session 3, or take the premade chosen direction and review if you missed it. The recap explains why the reference direction won.

**The work:**
- **Knowledge base:** use a scaffolding skill to create the KB structure, then populate it from the existing insights, personas, problem definition, prototype decisions, and project settings. The KB becomes the durable context the build tool reads, so the research and design work from Sessions 1–3 is finally reusable by code.
- **MVP build in Copilot:** from the KB, write a spec, make a build plan, and define how you will verify each piece works. Build in small increments, verify each one, and iterate. The explicit anti-pattern is one-shotting — asking the tool to produce a whole feature in a single prompt and hoping it holds together.

**Concrete output:** a project knowledge base, and a running MVP of the bus app built incrementally with a verification plan attached.

**Takeaway:** a generative build tool becomes reliable when it has a structured knowledge base to read and a loop that goes spec → plan → small build → verify → iterate. Verifying each small step is what separates a working MVP from a confident-looking mess. The knowledge base is the thing that lets a build tool actually use the research and design decisions from the earlier sessions.

**Tools:** GitHub Copilot / Copilot agent in VS Code (BSD); the KB scaffolding skill.

**Pre-setup:** the KB scaffolding skill and a working Copilot build environment, ready before the session. The KB itself is set up from a separate scaffolding prompt supplied later — leave it as a placeholder until that arrives.

---

## Tools and prerequisites

| Tool | Sessions | Notes |
|---|---|---|
| Microsoft Copilot 365 chat | 1, 2 | Org-provided, no setup |
| GitHub Copilot / agent | 3, 4 | **Requires a BSD application — start it the day the course is announced** |
| Figma Make | 3 | Confirm current support for attached files |
| Figma MCP plugin | 3, 4 | Pre-wired by the facilitator; may need IT/security sign-off |
| KB scaffolding skill | 4 | Needs to exist before Session 4 — see open decisions |

The pre-setup burden grows session to session. Sessions 1–2 are zero-setup for participants. Sessions 3–4 depend on a working pipeline the facilitator prepares in advance.

## Open decisions

- **Session 1 output format.** Markdown files assumed, since Figma Make and Copilot consume them later. Confirm markdown vs. PDF vs. something else.
- **Session 4 build — hands-on or guided?** Designers building an MVP themselves is ambitious. Decide whether they build hands-on, pair up, or watch a guided build while focusing on the spec/verify discipline.
- **The KB scaffolding skill.** Session 4 assumes a reusable skill that sets up the knowledge base and ingests prior artifacts. Does this exist, or does building it become part of the prep (or its own Skill Lab)?
- **Session length.** Sessions 3–4 likely run past 75 minutes. Decide whether to extend them or split.
- **Double Diamond framing.** v1.1 made the Discover→Deliver arc explicit. v1.2 onward leans on a workflow/pipeline instead. Decide whether to keep an explicit process map or drop it.
- **FigJam board.** The board currently reflects the v1.1 phase mapping. Decide whether to update it to the current scenario and session flow.
