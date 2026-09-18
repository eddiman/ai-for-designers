window.DECKS = window.DECKS || {};

window.DECKS["session-3"] = [
  {
    kind: "cover",
    eyebrow: "Session 3",
    title: "Prototyping and a persona UX review",
    lead: "Generate three directions from your brief packet, then pressure-test them in character as your personas.",
    meta: ["Figma Make", "Figma MCP (local server)", "GitHub Copilot agent"]
  },

  {
    kind: "statement",
    eyebrow: "What this session is about",
    text: "Attaching your real research is what makes the prototypes yours rather than generic. Then the same personas that shaped them become the reviewers that test them."
  },

  {
    kind: "list",
    eyebrow: "First, together",
    title: "Connect the Figma MCP",
    lead: "The read-only Figma server runs on **your own machine**, so you set it up. We do it together, step by step.",
    items: [
      { label: "In Figma desktop", text: "Dev Mode → right sidebar → MCP section → preferences → Enabled" },
      { label: "Confirm", text: "the server answers at `http://127.0.0.1:3845/mcp`" },
      { label: "In VS Code", text: "Command Palette → **MCP: Add Server…** → HTTP → that URL → name it `figma`" },
      { label: "Verify", text: "Copilot Chat → Agent mode → tools icon shows `get_design_context`" }
    ],
    callout: {
      tone: "stop",
      title: "Two things that will bite",
      text: "It only runs while the Figma **desktop** app is open, and the tools appear in Copilot only after you restart the `figma` entry in `mcp.json`."
    }
  },

  {
    kind: "list",
    eyebrow: "What you start from",
    title: "Your brief packet",
    items: [
      { label: "`problem-definition.md`", text: "the one committed problem" },
      { label: "`key-insights.md`", text: "the evidence-anchored takeaways" },
      { label: "`personas.md`", text: "the 2–3 hypotheses you will review in character as" }
    ],
    note: "If you missed Session 2, the premade versions in `premade/` are ready to attach as they are."
  },

  {
    kind: "step",
    n: 1,
    title: "Generate 3 directions in Figma Make",
    lead: "Attach the files as files. That is what brings the prototypes back grounded in your research.",
    doItems: [
      "Attach `problem-definition.md`, `key-insights.md`, `personas.md`.",
      "Ask for **3 distinct directions**, each solving the committed problem a different way.",
      "Steer the result: push one further, pull two apart if they converged.",
      "Fill in `prototype-directions.md`: name, Figma link, what it is, how it answers the problem."
    ],
    doneItems: [
      "Three directions that are genuinely different from each other",
      "Each has key screens as a clickable flow",
      "`prototype-directions.md` is filled in, not a note-to-self"
    ],
    why: "Step 4 attaches that file to the UX review, where it gives the reviewer the *intent* behind each direction alongside the screen-by-screen path."
  },

  {
    kind: "prompt",
    eyebrow: "Step 1",
    title: "Three directions",
    text:
      "I've attached my problem definition, key insights, and personas from a\nresearch project on helping people catch the bus. Using these as the brief,\ndesign 3 distinct prototype directions for a mobile bus app that each solve\nthe committed problem in a different way.\n\nFor each direction: give it a short name, generate the key screens as a\nclickable flow, and stay grounded in the attached research, meaning the\ninsights and personas rather than generic bus-app conventions. Make the three\ngenuinely different from each other so I have real alternatives to compare.",
    note: "Bonus: pick a `design.md` from designmd.app and attach it too, or describe the look you want in the prompt."
  },

  {
    kind: "step",
    n: 2,
    title: "Bring the designs into a Figma file",
    lead: "Figma Make often adds scaffolding: landing pages, wrappers, and duplicated states.",
    doItems: [
      "Copy the designs out of Figma Make into a Figma design file.",
      "Extract **only the actual app screens**. Drop the rest."
    ],
    doneItems: [
      "Every frame in the file is a real app screen",
      "No wrappers or landing pages left behind"
    ],
    why: "The reviewer in step 4 reads this file. Scaffolding in it becomes noise in the review."
  },

  {
    kind: "step",
    n: 3,
    title: "Number the screens and group by direction",
    lead: "Three labelled groups, each holding its screens in flow order.",
    doItems: [
      "Number each screen in the order a user moves through it.",
      "Put each direction's screens in their own frame or section, named to match the direction.",
      "Ask Figma Make to write out each direction's flow, and paste it into `app-flow.md`."
    ],
    doneItems: [
      "Three named groups matching the names in `prototype-directions.md`",
      "Screens numbered in flow order",
      "`app-flow.md` uses the same names and numbers as the Figma file"
    ],
    why: "This is what makes the file readable to the review step: the reviewer can take one direction at a time and refer to screens by number."
  },

  {
    kind: "step",
    n: 4,
    title: "Run the persona UX review",
    lead: "Copilot Agent mode, with the Figma MCP connected and your files attached.",
    doItems: [
      "Link the Figma section holding the directions.",
      "Attach `personas.md`, `problem-definition.md`, `app-flow.md`, `prototype-directions.md`.",
      "Ask for **every persona × every direction**, walking the numbered screens in order.",
      "Then ask for one prioritized findings table.",
      "Push back on any feedback that reads generically."
    ],
    doneItems: [
      "Every persona reviewed every direction",
      "Findings refer to screens by number",
      "A prioritized table: finding, persona(s), direction, severity, act on it?"
    ],
    why: "The personas shaped the prototypes, so holding the prototypes to those same personas is what closes the loop."
  },

  {
    kind: "prompt",
    eyebrow: "Step 4",
    title: "The persona review",
    text:
      "[Link to the Figma section containing the directions]\n\nAttached is a Figma file with 3 prototype directions for a bus app, each in\nits own named section with screens numbered in flow order. Also attached are\nmy personas.md, problem-definition.md, app-flow.md, and\nprototype-directions.md.\n\nUse app-flow.md for the mechanical path through each direction's screens, and\nprototype-directions.md for the intent behind each. Hold each direction to\nwhat it is trying to do, and not only to what is on screen.\n\nReview all three directions in character as each of my personas, so that\nevery persona reviews every direction. For each persona × direction, walk the\nnumbered screens in order and note what that persona notices, struggles with,\nand wants, referring to screens by number. Stay true to each persona's\nevidence-grounded goals, and don't give generic feedback.\n\nThen pull it together into one prioritized findings table, highest-impact\nfirst, with columns: finding, which persona(s), which direction, severity, and\nwhether to act on it. Write the full review and the table into ux-review.md."
  },

  {
    kind: "step",
    n: 5,
    title: "Triage",
    lead: "Same chat, so the review is still in context. Decide what is worth acting on.",
    doItems: [
      "Ask for the findings grouped into **act on now**, **later**, and **won't do**.",
      "Require a one-line reason tied to impact for each.",
      "Ask it to flag findings that only one persona cares about but would hurt another if “fixed”.",
      "Overrule it where you disagree, and note why."
    ],
    doneItems: [
      "Every finding is in one of the three groups",
      "The triage section of `ux-review.md` is written",
      "Your reasoning is recorded where you overruled the model"
    ],
    why: "A finding only one persona cares about, that would hurt another if fixed, is the reliability-versus-personalization tension resurfacing."
  },

  {
    kind: "statement",
    eyebrow: "A word before you run the review",
    text: "This is early design critique and hypothesis generation. Its findings are *not* user evidence and do not replace usability testing with real people.",
    callout: {
      tone: "go",
      title: "What it is good for",
      text: "It surfaces problems you would not have spotted on your own, and pulls the prototype closer to the committed problem."
    }
  },

  {
    kind: "list",
    eyebrow: "What you'll produce",
    title: "Three outputs",
    items: [
      { label: "3 prototype directions in Figma", text: "with `prototype-directions.md` describing each" },
      { label: "`app-flow.md`", text: "the screen-by-screen path through each direction" },
      { label: "`ux-review.md`", text: "the persona review, the prioritized findings, and your triage" }
    ]
  },

  {
    kind: "statement",
    eyebrow: "What you'll take away",
    text: "Given your real problem and personas as structured files, a generative tool returns prototypes grounded in the research, and you can pressure-test them straight away against the same personas."
  },

  {
    kind: "cover",
    eyebrow: "Next",
    title: "Session 4",
    lead: "A project knowledge base, and one verified increment of a working MVP.",
    meta: ["Bring all three outputs", "Nothing to install"]
  }
];
