# MVP app instructions

## Current state

This is a dependency-free static HTML, CSS, and JavaScript project for the Bus Decisions MVP. Increments 1–2 provide a project shell and a visible selector for three fixed demonstration conditions. It does not contain a saved-stop entry screen, decision recommendations, route navigation, or live transit data.

## Structure

- `index.html`: the single entry page
- `styles.css`: the page styles
- `script.js`: the fixed demonstration conditions and selector behaviour

## Run

Open `index.html` directly in a browser. There is no install step, no build step, and no package manager.

## Stack rules

Plain HTML, CSS, and JavaScript only. Do not add a framework, a build step, a CSS library, or any dependency. If a task seems to need one, pick the simplest option that keeps the app opening directly in a browser and say what you picked.

## Verification

Open the page and select each demonstration condition. Confirm the selected condition, status, and fixed detail change without browser errors. Refer to [../verification-plan.md](../verification-plan.md) before proceeding to another increment.

## Knowledge base

Before making substantial changes, read [../kb/AGENTS.md](../kb/AGENTS.md), [../kb/overview.md](../kb/overview.md), and the relevant curated KB records.
