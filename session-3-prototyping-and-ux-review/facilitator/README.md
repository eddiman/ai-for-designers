# Session 3 — facilitator notes

Front-facing material for participants is in the session root `README.md`. This folder holds the facilitator-only guidance.

## Recap (open the session with this)

Walk through the reference brief packet: which problem it committed to, how the reliability-vs-personalization tension was resolved, and which personas it reviews against. Returning participants use this as a model; drop-ins need it to use the premade packet.

## Pre-setup (important)

The read-only Figma MCP is a localhost server running in each participant's own Figma desktop app, wired into their own VS Code `mcp.json`. You cannot pre-wire it for them — they set it up on their own machines, and the participant `README.md` carries the steps. Your job is to have the whole path tested first and to lead them through it.

- Build and test the full round-trip in advance on your own machine: Figma Make generation → into Figma → persona UX review.
- Know the failure modes before the room hits them: the server is only reachable while the Figma desktop app is open, and the tools do not appear in Copilot until the `figma` entry in `mcp.json` is restarted.
- Requires the BSD application to be approved. Confirm this well ahead.

## Run the MCP setup in lockstep

Work through the setup in the participant `README.md` step by step with the room, on your own screen, and pause until everyone's server is reachable at `http://127.0.0.1:3845/mcp` before starting the review. A single missed step blocks the whole review, so run it alongside them rather than leaving them to it.

Keep the setup visible rather than hiding it. Seeing how the connection is wired, with one example of it in use, is worth more than arriving at a room where it already works — and the lockstep pass is what catches anyone left unsure.

## To verify before committing this session

- Does Figma Make currently accept attached files to inform a generation?
- Is the Copilot↔Figma review flow reproducible end to end?

Both need a dry run before this session is locked in.
