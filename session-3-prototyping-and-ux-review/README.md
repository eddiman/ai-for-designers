# Session 3: Prototyping with Figma Make, and a persona UX review

## What you'll learn

How to use your brief packet to generate prototype directions in Figma Make, then close the loop by running a persona-based UX review through Copilot and Figma. You'll connect the Figma MCP yourself, with the facilitator walking the room through it step by step and the instructions below. The focus is the workflow and what it produces.

## What you start from

Continue from your own brief packet from Session 2: `problem-definition.md`, `personas.md`, and `key-insights.md`. If you missed Session 2, pick up the premade versions in `premade/`. The session opens with a recap of which problem the reference packet committed to, how the reliability-against-personalization tension was resolved, and which personas it reviews against.

## What counts as done

**Core, for everyone:** three prototype directions in a Figma file grouped by direction, `prototype-directions.md` and `app-flow.md` filled in, and `ux-review.md` with the persona review, the prioritized findings, and your triage. You do not need to polish all three directions. That is what Session 4 builds its knowledge base from.

**Stretch, if you get there:** one refinement pass on a single direction to address its "act on now" findings, then a review of the revised version. The steps are under **Stretch: refine one direction** after step 5.

You are not behind if you finish the core and stop. The core is what this session asks for.

## What you'll do

Work in order. Each step feeds the next, so check the output before moving on.

---

## Before you start: connect the Figma MCP

The persona review in step 4 runs in Copilot, and Copilot needs to read your Figma file to do it. The Figma MCP is the connection between the two: a small server that runs inside the Figma desktop app and lets Copilot see your designs. The facilitator walks the room through the setup at the start of the session.

Figma has two different Figma MCP servers: one that allows read and write (generate designs), and one read-only, that lets the AI see and understand the design you send it. We'll use the read-only version, also known as the **local** one, because it runs on your own machine as a localhost server.

**Do this now**

**1. Turn on the local server in the Figma desktop app**

The local server lives in the Figma **desktop** app, so open the file you want to work with there rather than in the browser.

- Update to the latest Figma desktop app.
- Open a file you have edit access to.
- Go to Dev Mode (bottom bar, look for the [</>] icon).
- In the right sidebar, find the MCP section and click the preferences icon.
- Set the **Enabled** toggle to on.
- You'll see a confirmation that the server is running at `http://127.0.0.1:3845/mcp`. Leave the desktop app open, since the server only runs while it's running.
- You don't have to be in Dev Mode to use Figma MCP, you can either send the url from figma, or ask AI to see your selection.

**2. Add it to VS Code / GitHub Copilot**

Copilot's agent mode reads MCP servers from an `mcp.json` file. Add the Figma server there:

- In VS Code, open the Command Palette (**Cmd+Shift+P** on Mac, **Ctrl+Shift+P** on Windows) → **MCP: Add Server…**
- Choose **HTTP**, and paste the URL `http://127.0.0.1:3845/mcp`. Name it `figma`.
- Pick **Workspace** (writes `.vscode/mcp.json` in this folder) or **Global** (available everywhere).

Or add it by hand, creating `.vscode/mcp.json` with:

```json
{
  "servers": {
    "figma": {
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

**3. Check the connection**

- Open the Copilot Chat panel and switch to **Agent** mode.
- Click the tools icon and look for the Figma tools (for example `get_design_context`, `get_screenshot`), listed and enabled.
- Select a frame in the Figma desktop app, then ask Copilot to describe it.

> Troubleshooting: if the tools don't appear, confirm the Figma desktop app is still open with the server enabled, then restart the MCP server from the `mcp.json` file (there's a **Restart** action inline above the `figma` entry). The server is only reachable while the desktop app is running.

**You are done when**

- The Figma desktop app shows the server running at `http://127.0.0.1:3845/mcp`.
- The tools list in Copilot's Agent mode shows the Figma tools.
- Copilot can describe a frame you selected in the Figma desktop app.

**Why this matters**

Without this connection, Copilot cannot see your screens in step 4, and the review has nothing to walk through. The server runs on your own machine, so everyone sets up their own.

**If the tool asks a technical question**

If VS Code asks whether to trust or start the `figma` server, or asks for permission to run a Figma tool, allow it. Those prompts check that you want Copilot to read from Figma. For anything else, ask the facilitator before you answer.

---

## 1. Generate 3 directions in Figma Make

Attaching your problem definition, insights, and personas as files is what brings the prototypes back grounded in your own research.

**Do this now**

1. In Figma Make, attach `problem-definition.md`, `key-insights.md`, and `personas.md`.
2. Start from this prompt and adapt it:

> I've attached my problem definition, key insights, and personas from a research project on helping people catch the bus. Using these as the brief, design **3 distinct prototype directions** for a mobile bus app that each solve the committed problem in a different way.
>
> For each direction: give it a short name, generate the key screens as a clickable flow, and stay grounded in the attached research, meaning the insights and personas rather than generic bus-app conventions. Make the three genuinely different from each other (for example, lean into the reliability-first take in one and the personalization take in another) so I have alternatives worth comparing instead of three versions of the same idea.

3. React to what comes back rather than accepting the first result as final. Ask it to push one direction further, pull two apart if they've converged, or fix a screen that doesn't match a persona's needs.
4. Once you're happy with the three, fill in `prototype-directions.md`, one entry per direction with its name, **Figma link**, **What it is**, and **How it answers the problem**.

**Bonus:** go to https://designmd.app/ and pick a `design.md` you like and attach it too, or describe in the prompt how you want the design to look.

**You are done when**

- You have three directions that solve the committed problem in different ways.
- Each direction has its key screens as a clickable flow.
- `prototype-directions.md` has all three entries filled in, each with its Figma link.

**Why this matters**

The prototypes get better the more you steer, so treat the first result as a starting point. `prototype-directions.md` is attached to the UX review in step 4, where it gives the persona reviewer the *intent* behind each direction (what it's trying to do) alongside `app-flow.md`'s screen-by-screen path. That is why it has to be filled in before you move on.

---

## 2. Bring the designs into a Figma file

Depending on how Figma Make built the prototypes, you may get extra scaffolding: landing pages, wrappers, duplicated states.

**Do this now**

1. Copy the designs out of Figma Make and into a Figma design file.
2. Keep only the app screens, and delete the landing pages, wrappers, and duplicated states.

**You are done when**

- Every frame in the file is one of the app's screens.
- No wrappers or landing pages are left.

**Why this matters**

The reviewer in step 4 reads this file. Any scaffolding left in it becomes noise in the review.

---

## 3. Number the screens and group by direction

**Do this now**

1. Number each screen in the order a user moves through it.
2. Put each direction's screens together in their own frame or section, named to match the direction name in `prototype-directions.md`.
3. Ask Figma Make to write out each direction's flow, for example:

> Describe each direction's flow to be used for a UX review, write it out in the chat here.

<img width="594" height="735" alt="image" src="https://github.com/user-attachments/assets/97e4095d-505e-4b1e-9937-27e50291656b" />

4. Paste each flow into `app-flow.md` under its direction, using the same direction names and screen numbers as in the Figma file.

**You are done when**

- The Figma file has three named groups, matching the names in `prototype-directions.md`.
- The screens in each group are numbered in flow order.
- `app-flow.md` has one flow per direction, with the same names and numbers as the Figma file.

**Why this matters**

This is what makes the file readable to the UX review: the reviewer can follow one direction's flow at a time and refer to screens by number. The review in step 4 is run *against* the written flows in `app-flow.md`, so that file has to be filled in before you move on.

---

## 4. Run the persona UX review

Before you run the review, know what kind of result it gives you. This is early design critique and hypothesis generation: the model reviews your directions in character as your personas. That surfaces problems you would not have spotted on your own, and pulls the prototype closer to the committed problem. Its findings are not user evidence and do not replace usability testing with users, so treat each one as a hypothesis.

**Do this now**

1. Check that the Figma desktop app is open and the Figma tools still show in Copilot (see **Before you start**).
2. In VS Code, open Copilot Chat in **Agent** mode.
3. Attach `personas.md`, `problem-definition.md`, `app-flow.md`, and `prototype-directions.md`.
4. Start from this prompt, put the link to your Figma section (or to each direction's frame) at the top, and adapt it:

> _[Link to the Figma section/frame containing the directions, or a link to each direction's frame]_
> Attached / connected is a Figma file with **3 prototype directions** for a bus app, each in its own named section with its screens numbered in flow order. Also attached are my `personas.md`, `problem-definition.md`, `app-flow.md` (my written flow for each direction), and `prototype-directions.md` (what each direction is and how it's meant to answer the problem).
>
> Use `app-flow.md` for the mechanical path through each direction's screens, and `prototype-directions.md` for the intent behind each direction. Hold each direction to what it's *trying* to do, and not only to what's on screen.
>
> Review all three directions **in character as each of my personas**, so that every persona reviews every direction. For each persona × direction, walk the numbered screens in order and note what that persona notices, struggles with, and wants, referring to screens by number. Stay true to each persona's evidence-grounded goals (for example, the reliability-first rider and the personalization-seeking power user), and don't give generic feedback.
>
> Then pull it together into one **prioritized findings table**, highest-impact first, with columns: finding, which persona(s), which direction, severity, and whether to act on it. Write the full review and the table into `ux-review.md`.

5. Read the review. If a persona's feedback reads generically, push back and ask it to ground the critique in that persona's specific goals and the evidence behind them.

**You are done when**

- `ux-review.md` has a review from every persona of every direction.
- The findings refer to screens by number.
- The **Prioritized findings** table is filled in, highest impact first.

**Why this matters**

The personas shaped the prototypes, so holding the prototypes to those same personas is what closes the loop.

**If the tool asks a technical question**

Copilot may ask for permission before it runs a Figma tool or edits `ux-review.md`. Allow it. If it says it cannot reach Figma, check that the desktop app is open, then restart the `figma` entry in `mcp.json` as described in **Before you start**.

---

## 5. Triage

Decide which findings are worth acting on, and which you're parking.

**Do this now**

1. Continue in the same chat, so the review is still in context, and run this prompt:

> From the prioritized findings table, help me triage. Group the findings into **act on now**, **later**, and **won't do**. For each, give a one-line reason tied to impact: how many personas it hurts, how severe it is, and whether it undermines the committed problem. Flag any finding that only one persona cares about but that would hurt another if we "fixed" it, since that's the reliability-against-personalization tension resurfacing. Write the result into the triage section of `ux-review.md`.

2. Read the grouping. Where you disagree, move the finding and write down why in the **Triage** section of `ux-review.md`.

**You are done when**

- Every finding is in one of the three groups: act on now, later, or won't do.
- The **Triage** section of `ux-review.md` is written.
- Wherever you overruled the model, your reason is written down.

**Why this matters**

The call is yours. The model proposes the grouping and you decide, and the reasons you give where you overrule it are the point of the step. A finding that only one persona cares about, and that would hurt another if fixed, is the reliability-against-personalization tension resurfacing.

---

## Stretch: refine one direction

**Do this now**

1. Pick one direction, ideally the one with the most **act on now** findings in your triage.
2. In Figma Make, ask it to address those findings in that direction only:

> Here are the "act on now" findings from my UX review for the [direction name] direction: [paste the findings]. Revise that direction to address them, and keep everything else the same. Do not change the other two directions. List which screens you changed and which finding each change addresses.

3. Copy the revised screens into your Figma file as a new section named after the direction with **v2** added, numbered in flow order. Leave the original section where it is.
4. In Copilot Agent mode, continue in the review chat if you still have it, or attach the same files as in step 4. Then review the revised direction:

> [Link to the v2 section] Review this revised version of the [direction name] direction in character as each of my personas, the same way as the earlier review. For each "act on now" finding, say whether the revision fixed it, made it worse, or left it unchanged, and note any new problem it introduced. Write the result into the stretch section of `ux-review.md`.

5. Under the result, write a line in your own words: which findings the revision fixed, and whether you would take the revised version into Session 4.

**You are done when**

- Your Figma file has the revised direction in its own section, next to the original.
- The stretch section of `ux-review.md` says, for each "act on now" finding, whether the revision fixed it.
- `prototype-directions.md`, `app-flow.md`, and the rest of `ux-review.md` are unchanged.

**Why this matters**

One refinement pass completes the loop the review started: you act on the findings and check whether the change helped the personas. It also shows whether a fix for one persona created a problem for another, which is the reliability-against-personalization tension again.

**If the tool asks a technical question**

Same as step 4.

---

## What you'll produce

- 3 prototype directions in Figma
- a written description of each direction's flow
- a persona-based UX review with prioritized findings

Capture these in the stub files in this folder: `prototype-directions.md`, `app-flow.md`, and `ux-review.md`.

## What you'll take away

When a generative tool is given your own problem and personas as structured files, the prototypes it returns are grounded in the research, and you can pressure-test them straight away by reviewing against the same personas. Both halves, the generation and the review, depend on the Session 1–2 files being clean and portable.

## Tools

Figma Make; Figma MCP (local server); GitHub Copilot / agent. You set up the Figma MCP connection on your own machine, since the server runs locally and so it has to be yours. The facilitator leads this step by step at the start of the session, and the instructions are under **Before you start: connect the Figma MCP** above.
