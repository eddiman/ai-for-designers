# Presentation

The on-screen deck for the course. One landing page plus a deck per session, meant to be projected while you facilitate. The session `README.md` files stay the detailed instruction set, for you to follow, for someone taking the course alone, or for handing to an agent. This is the version the room looks at.

## The decks

Six in all, split into two groups on the landing page.

| Deck | Route | Use it for |
|---|---|---|
| **Introduction** | `#/intro` | Opening the course. What it is, the running project, how the four sessions hang together, the three moves that carry through all of them, and what the course is not. |
| **Session 0** | `#/session-0` | Requirements and setup. What each session needs, what to sort before Session 1, the readiness check, the tooling walkthrough, and the artifact journey. |
| Sessions 1–4 | `#/session-1` … `#/session-4` | The sessions themselves, one deck each. |

Session 0 has no folder of its own in the repository. It exists only as this deck, since it produces no artifacts. The same is true of the introduction.

Run the introduction and Session 0 back to back at the start of Session 1. The introduction closes by pointing at Session 0, and Session 0 closes by pointing at Session 1, so the three run as one sequence without touching the landing page.

## Published

Live at **https://ai-for-designers-course.netlify.app**

The Netlify site is connected to this repository, so every push to `main` rebuilds and republishes it. There is no build command; Netlify just serves the `presentation/` directory, which `netlify.toml` at the repository root sets as the publish directory. Nothing else in the repository is published.

The deck is kept out of search results by three things: `robots.txt`, an `X-Robots-Tag: noindex` header in `_headers`, and a meta robots tag in `index.html`. Anyone with the address can still open it, so treat the URL as shareable but not indexed.

To deploy without pushing (useful while editing slides), run `netlify deploy --prod` from the repository root.

## Run it

Open `index.html` in a browser. There is no install step, no build step, and no package manager, just plain HTML, CSS, and JavaScript, the same rule the Session 4 MVP follows.

Double-clicking the file works. If you would rather serve it, anything static will do:

```text
python3 -m http.server 8000
```

The one thing that needs the network is the IBM Plex Sans webfont from Google Fonts. Without a connection it falls back to the system sans, and every layout still holds. If you are presenting somewhere with no wifi, load the page once beforehand so the font is cached.

## Presenting

| Key | Does |
|---|---|
| `→` `↓` `Space` `PageDown` or **click the slide** | Next slide |
| `←` `↑` `PageUp` `Backspace` | Previous slide |
| `Home` / `End` | First / last slide |
| `F` | Toggle fullscreen |
| `O` | Slide overview, click any slide to jump |
| `Esc` | Close the overview, or go back to the session list |

In fullscreen the control bar fades out until you move the pointer.

## Links to a single slide

Every slide has its own address, so you can link a colleague straight to one:

```text
index.html#/session-4          → session 4, first slide
index.html#/session-4/6        → session 4, slide 6
index.html#/                   → the session list
```

Slide numbers are the ones shown in the control bar and the overview, counting from 1. They shift if you add or remove a slide, so treat a deep link as a bookmark rather than a permanent reference.

## Theme

Taken from the OT light theme in Figma, file `sbCntnu1vvMCYwhdAZu5tP`, node `2245-2894`. IBM Plex Sans, 14px base, 1.333 perfect-fourth scale, 1.5 line height. The tokens are CSS custom properties at the top of `styles.css`, named to match the Figma variables, so a change in Figma maps to one line here.

Each session carries one of the semantic colours so a glance tells you which deck is on screen:

| Deck | Accent |
|---|---|
| Introduction | Black `#000000` |
| Session 0: Before we start | Red `#FF1744` |
| Session 1: Research synthesis | Green `#00E676` |
| Session 2: Problem definition and personas | Yellow `#FFC400` |
| Session 3: Prototyping and UX review | Purple `#651FFF` |
| Session 4: Knowledge base and MVP | Blue `#304FFE` |

## Editing the content

Slides are data. Each deck is an array in its own file under `content/`, so `intro.js`, `session-0.js`, `session-1.js` and so on, and `content/sessions.js` holds the landing-page metadata, including which group each deck sits in. Add, remove, or reorder by editing the array; there is no HTML to touch. A new deck needs three things: a file in `content/`, an entry in `sessions.js`, and a `<script>` line in `index.html`.

A slide is an object with a `kind` and the fields that kind uses. Text fields accept `**bold**`, `*emphasis*`, and `` `code` ``.

| `kind` | Fields | Use it for |
|---|---|---|
| `cover` | `eyebrow`, `title`, `lead`, `meta[]` | Session opener and closer. Full-bleed accent colour. |
| `statement` | `eyebrow`, `text` | One big idea, with nothing competing with it. |
| `map` | `title`, `lead`, `steps[]`, `active` | The progress map. `active` highlights one step by index. |
| `list` | `eyebrow`, `title`, `lead`, `items[]`, `ordered`, `check` | Bullets. An item is a string, or `{label, text}`. |
| `step` | `n`, `title`, `lead`, `doItems[]`, `doneItems[]`, `why` | A numbered step, laid out as Do this now / You are done when / Why this matters. |
| `prompt` | `eyebrow`, `title`, `text` | A prompt to show or read out. Monospace, preserves line breaks. |
| `table` | `eyebrow`, `title`, `lead`, `cols[]`, `rows[][]` | Comparisons and file lists. |

Any slide also takes an optional `callout: {tone, title, text}`, where `tone` is `go` (green), `stop` (red), or omitted (yellow), and an optional `note`, which renders small at the foot of the slide as a facilitator cue.

The prose on the slides follows the writing style set out in the root `AGENTS.md`, including no em dashes and no "not X, but Y" constructions. The `prompt` bodies are the exception: their line breaks and wording are tuned for the tool the participant pastes them into, so edit them for what the tool needs rather than for how they read.

## Layout notes

A slide is a fixed 16:9 box that scales to fit the window, with type sized in container-query units. What you see on your laptop is what lands on the projector, at any resolution. Below 720px wide the box gives up the aspect ratio and stacks instead, so the decks stay readable on a phone.

Content that overflows a slide is clipped rather than scrolled. That is deliberate: an overlong slide is visibly wrong while you are editing it, instead of being quietly cut off while you present. If a slide overflows, split it.

If you want to check fit across a whole deck at once, measure the bottom of the last rendered element against the slide's `clientHeight`. Comparing `scrollHeight` with `clientHeight` reports a false overflow of up to about 27px, because `scrollHeight` includes the slide's bottom padding.
