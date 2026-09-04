# MVP app instructions

## Current state

This is a dependency-free static HTML, CSS, and JavaScript project for the Bus Decisions MVP. Increments 1–2 provide a project shell and a visible selector for three fixed demonstration conditions. It does not contain a saved-stop entry screen, decision recommendations, route navigation, or live transit data.

## Structure

- `index.html`: the single entry page
- `styles.css`: the page styles
- `script.js`: the fixed demonstration conditions and selector behaviour

## Run

Open `index.html` directly in a browser. No install or build step is required.

For a local HTTP server, from this directory run:

```text
npx --yes serve .
```

Then open the local URL printed by the server.

## Verification

Open the page and select each demonstration condition. Confirm the selected condition, status, and fixed detail change without browser errors. Refer to [../verification-plan.md](../verification-plan.md) before proceeding to another increment.

## Knowledge base

Before making substantial changes, read [../kb/AGENTS.md](../kb/AGENTS.md), [../kb/overview.md](../kb/overview.md), and the relevant curated KB records.
