# Session 3 — Prototyping with Figma Make, and a persona UX review

## What you'll learn

How to use your brief packet to generate prototype directions in Figma Make, then close the loop by running a persona-based UX review through Copilot and Figma. You'll connect the Figma MCP yourself (instructions below); the focus is the workflow and what it produces.

## What you start from

Continue from your own brief packet from Session 2 — `problem-definition.md`, `personas.md`, and `key-insights.md`. If you missed Session 2, pick up the premade versions in `premade/`. The session opens with a recap of which problem the reference packet committed to, how the reliability-vs-personalization tension was resolved, and which personas it reviews against.

## What you'll do

Work in order. Each step feeds the next, so check the output before moving on.

### 1. Generate 3 directions in Figma Make

Attach the problem definition, insights, and personas as files, and generate **3 prototype directions** for the bus experience. Attaching the files is what brings the prototypes back grounded in your actual research rather than generic. **Bonus:** go to https://designmd.app/ and pick a `design.md` you like and attach it too, or just describe in the prompt how you want the design to look.

Attach `problem-definition.md`, `key-insights.md`, and `personas.md`, then start from this prompt and adapt it:

> I've attached my problem definition, key insights, and personas from a research project on helping people catch the bus. Using these as the brief, design **3 distinct prototype directions** for a mobile bus app that each solve the committed problem in a different way.
>
> For each direction: give it a short name, generate the key screens as a clickable flow, and stay grounded in the attached research — the insights and personas, not generic bus-app conventions. Make the three genuinely different from each other (e.g. lean into the reliability-first take in one and the personalization take in another) so I have real alternatives to compare, not three versions of the same idea.

Don't accept the first result as final — react to what comes back. Ask it to push one direction further, pull two apart if they've converged, or fix a screen that doesn't match a persona's needs. The prototypes get better the more you steer. Note the name Figma Make gave each direction — you'll reuse those names in the next step. Capture them in `prototype-directions.md`.

### 2. Bring the designs into a Figma file

Copy the designs out of Figma Make and into a Figma design file. Depending on how Figma Make built the prototypes, you may get extra scaffolding — landing pages, wrappers, duplicated states. **Extract only the actual app screens**; drop the rest.

### 3. Number the screens and organize them by direction

Give each screen a number in the order a user moves through it, and place each direction's screens together in their own frame or section, named to match the direction name from Figma Make. So you end up with three labelled groups — one per direction — each holding its screens in flow order. This is what makes the file readable to the UX-review step: the reviewer can follow one direction's flow at a time and refer to screens by number. Ask Figma Make to write each direction's flow down to be used for a UX review and paste it in `app-flow.md`.

### 4. Run the persona UX review

With the Figma MCP connected (see below) and your three directions organized in the file, run the review in Copilot's Agent mode. Start from this prompt and adapt it:

> _[Link to the Figma section/frame containing the directions, or a link to each direction's frame]_
> Attached / connected is a Figma file with **3 prototype directions** for a bus app, each in its own named section with its screens numbered in flow order. Also attached are my `personas.md`, `problem-definition.md`, and `app-flow.md` (my written flow for each direction).
>
> Review all three directions **in character as each of my personas** — every persona reviews every direction. For each persona × direction, walk the numbered screens in order and note what that persona notices, struggles with, and wants, referring to screens by number. Stay true to each persona's evidence-grounded goals (e.g. the reliability-first rider vs. the personalization-seeking power user) — don't give generic feedback.
>
> Then pull it together into one **prioritized findings table**, highest-impact first, with columns: finding, which persona(s), which direction, severity, and whether to act on it. Write the full review and the table into `ux-review.md`.

Steer this too — if a persona's feedback reads generically, push back and ask it to ground the critique in that persona's specific goals and the evidence behind them.

### 5. Triage

Decide which findings are worth acting on, and which you're parking. Continue in the same chat so the review is still in context, and start from this prompt:

> From the prioritized findings table, help me triage. Group the findings into **act on now**, **later**, and **won't do**. For each, give a one-line reason tied to impact — how many personas it hurts, how severe, and whether it undermines the committed problem. Flag any finding that only one persona cares about but that would hurt another if we "fixed" it, since that's the reliability-vs-personalization tension resurfacing. Write the result into the triage section of `ux-review.md`.

The call is yours, not the model's — it proposes the grouping, you decide. Where you overrule it, note why; that reasoning is the point of the step.

## What you'll produce

- 3 prototype directions in Figma
- a written description of each direction's flow
- a persona-based UX review with prioritized findings

Capture these in the stub files in this folder — `prototype-directions.md`, `app-flow.md`, and `ux-review.md`.

## What you'll take away

When a generative tool is given your real problem and personas as structured files, the prototypes it returns are grounded in the research instead of generic, and you can pressure-test them straight away by reviewing against the same personas. Both halves — the generation and the review — depend on the Session 1–2 files being clean and portable.

## Tools

Figma Make; Figma MCP (local server); GitHub Copilot / agent. You set up the Figma MCP connection yourself — see below.

### Figma MCP instructions

Figma has two different Figma MCP servers: one that allows read and write (generate designs), and one read-only, that lets the AI see and understand the design you send it. We'll use the read-only version — also known as the **local** one, because it runs on your own machine as a localhost server.

**1. Turn on the local server in the Figma desktop app**

The local server lives in the Figma **desktop** app, not the browser — so open the file you want to work with there.

- Update to the latest Figma desktop app.
- Open a file you have edit-access to.
- Go to Dev Mode (bottom bar, look for the [</>] icon).
- Right sidebar -> MCP-section, click the preference-icon
- Set "Enabled"-toggle to on.
- You'll see a confirmation that the server is running at `http://127.0.0.1:3845/mcp`. Leave the desktop app open — the server only runs while it's running.
- You don't have to be in Dev Mode to use Figma MCP, you can either send the url from figma, or ask AI to see your selection.

**2. Add it to VS Code / GitHub Copilot**

Copilot's agent mode reads MCP servers from an `mcp.json` file. Add the Figma server there:

- In VS Code, open the Command Palette (`Cmd+Shift+P`) → **MCP: Add Server…**
- Choose **HTTP**, and paste the URL `http://127.0.0.1:3845/mcp`. Name it `figma`.
- Pick **Workspace** (writes `.vscode/mcp.json` in this folder) or **Global** (available everywhere).

Or add it by hand — create `.vscode/mcp.json` with:

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

**3. Verify it's connected**

- Open the Copilot Chat panel and switch to **Agent** mode.
- Click the tools icon — you should see the Figma tools (e.g. `get_design_context`, `get_screenshot`) listed and enabled.
- Select a frame in the Figma desktop app, then ask Copilot to describe or implement it. If it can read your selection, the round-trip is live.

> Troubleshooting: if the tools don't appear, confirm the Figma desktop app is still open with the server enabled, then restart the MCP server from the `mcp.json` file (there's a **Restart** action inline above the `figma` entry). The server is only reachable while the desktop app is running.