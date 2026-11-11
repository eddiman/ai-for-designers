window.DECKS = window.DECKS || {};

window.DECKS["session-2"] = [
  {
    kind: "cover",
    eyebrow: "Session 2",
    title: "From summaries to a problem definition and personas",
    lead: "Turn synthesized research into a design brief packet the downstream tools can read.",
    meta: ["Microsoft Copilot 365 chat", "session-2-problem-definition-and-personas/"]
  },

  {
    kind: "statement",
    eyebrow: "What this session is about",
    text: "Three artifacts: the key insights, *one* committed problem definition, and a small set of evidence-grounded personas. Saved as clean files, because everything later reads them."
  },

  {
    kind: "list",
    eyebrow: "What you start from",
    title: "Your worked evidence",
    lead: "If you were here for Session 1, continue from your own work. If you missed it, the premade versions in `premade/` are ready to use as they are.",
    items: [
      { label: "Your triangulation note", text: "the main input, since it already did the cross-source combining" },
      { label: "Your chosen summaries", text: "the one named under **Inputs I chose** for each source, pasted in and labelled by source, so you can pull specific quotes" }
    ],
    callout: {
      tone: "go",
      title: "Combining sources in one chat is fine now",
      text: "“One source, one chat” was about keeping *raw* sources apart. Everything here is already worked and vetted, so you are past that stage."
    }
  },

  {
    kind: "list",
    eyebrow: "What counts as done",
    title: "Core, and stretch",
    items: [
      { label: "Core, for everyone:", text: "three to five insights, one committed problem with your reply to the model's case against it, and two or three personas labelled as hypotheses." },
      { label: "Stretch, if you get there:", text: "find the insight with the weakest evidence, or argue for the runner-up problem. The steps are in the session README." }
    ],
    callout: {
      tone: "go",
      title: "The core is what Session 3 attaches",
      text: "You are not behind if you finish the core and stop."
    }
  },

  {
    kind: "table",
    eyebrow: "How you'll work",
    title: "Two ways to structure the chats",
    lead: "The session has three exercises: key insights, the problem definition, and personas. Both ways of running them are valid, so choose deliberately.",
    cols: ["", "One chat for all three exercises", "A fresh chat for each exercise"],
    rows: [
      ["For", "The thread carries: insights feed the problem, the problem feeds the personas", "Clean context each time, so each task reads the evidence fresh"],
      ["For", "Fewer restarts and less re-pasting", "Forces you to re-state what you carry forward, which sharpens it"],
      ["Against", "The chat fills up. By the personas exercise, the model also reads its own argument against your problem, which can pull the personas away from the research", "You have to paste the evidence in again, along with what you are building on"]
    ]
  },

  {
    kind: "statement",
    eyebrow: "Whichever you pick",
    text: "Ask, read, propose a change, ask again. The more of that loop you work yourself, the better you understand the material."
  },

  {
    kind: "exercise",
    n: 1,
    title: "Key insights",
    lead: "Distill the triangulation note and your chosen summaries into the handful of insights the rest of the course builds on.",
    steps: [
      {
        title: "Paste in your evidence",
        text: "Paste in the content of `triangulation.md`, then the chosen summary for each source, labelled with its source: `Maja`, `Geir`, `Sofie` or `Questionnaire`. **Inputs I chose** in `triangulation.md` names which summary to use."
      },
      {
        title: "Ask for the key insights",
        text: "Run this prompt in the same chat.",
        prompt: "From the triangulation note and summaries, give me the 3–5 key insights that should drive the design. For each, cite the specific evidence and label it as observed (said or measured) or inferred."
      },
      {
        title: "Save the insights",
        text: "Save each insight in `key-insights.md`, filling in **Insight**, **Evidence**, and **Observed / inferred**. Check the evidence behind each one: does it say what the insight claims?"
      }
    ],
    doneItems: [
      "Three to five insights, no more",
      "Every one cites specific evidence",
      "You checked that the evidence says what the insight claims",
      "Observation and inference are labelled apart"
    ],
    why: "These are the portable takeaways everything downstream references. They scope the problem definition here, and in Sessions 3–4 they feed the prototypes and the knowledge base."
  },

  {
    kind: "exercise",
    n: 2,
    title: "Problem definition",
    lead: "Generate framings, rank them by evidence, commit to one, then have the model argue against it.",
    steps: [
      {
        title: "Generate the candidates",
        text: "Work from the evidence and the insights you just wrote. Run this prompt.",
        prompt: "Generate 5 candidate problem framings for what to solve first, each with a How-Might-We statement and the evidence that supports it."
      },
      {
        title: "Rank the framings",
        text: "In the same chat, run this prompt. It spells out every line of the answer, and the lines follow the headings in `problem-definition.md`.",
        prompt: "Rank the 5 problem framings from your previous answer by how much of my evidence supports each one. Put the best-supported framing first. Use only the evidence I have given you. Do not merge, reword or add framings.\n\nWrite one block for each of the 5 framings, numbered 1 to 5, in exactly this layout. Fill in every line.\n\n### 1. [Short name of the framing]\n**Problem:** [the framing, as you wrote it]\n**How-Might-We:** [its How-Might-We statement]\n**Evidence that supports it:**\n- [Source], [observed or inferred]: [the finding, with the quote or figure]\n**Evidence against it, or missing:**\n- [Source]: [what argues against the framing, or what the evidence does not cover]\n**Why this rank:** [one or two sentences comparing it with the framings next to it in the ranking]\n\nRules:\n- [Source] is one of: Maja, Geir, Sofie, Questionnaire.\n- Write one bullet per finding, and as many bullets as the evidence needs.\n- Write \"observed\" when the source said it or the questionnaire measured it. Write \"inferred\" when it is a conclusion drawn from the sources.\n- If nothing argues against a framing, write \"- None found\" under \"Evidence against it, or missing\".\n- If two framings have about the same support, say so under \"Why this rank\".\n\nStop after block 5. Do not add a summary or a recommendation."
      },
      {
        title: "Commit to one",
        text: "Pick *one* framing from the ranked list. Write it as a single clear problem statement under **The committed problem** in `problem-definition.md`, with its How-Might-We under **How-Might-We** and its evidence under **Evidence that supports it**.",
        callout: {
          title: "Narrowing is the point",
          text: "“Commit to a single problem” means picking one framing from the ranked list, rather than blending three of them or keeping all of the above."
        }
      },
      {
        title: "List the framings you rejected",
        text: "Under **Candidates considered and rejected**, list the framings you did not pick and why, so the choice is traceable. The ranking's **Evidence against it, or missing** and **Why this rank** lines are a starting point for the reasons, which you write in your own words."
      },
      {
        title: "Red-team your pick",
        text: "*Red-teaming* borrows a term from security: a red team attacks a plan to expose its weaknesses. Paste your committed problem into this prompt and run it.",
        prompt: "The problem I picked is: [paste your committed problem]. Argue why it is the wrong one to solve first."
      },
      {
        title: "Write your reply",
        text: "Do you concede and re-scope the problem, or hold your ground, and on what evidence? Save the model's argument and your reply under **Red-team** in `problem-definition.md`.",
        callout: {
          title: "That reply is the judgement this exercise trains",
          text: "Pasting the critique and moving on lets the model have the last word, which defeats the purpose."
        }
      }
    ],
    doneItems: [
      "One problem, picked from the ranked list",
      "The framings you rejected, and why",
      "The model's argument against your pick, and *your* response to it",
      "You can say why this problem won over the others"
    ],
    why: "You cannot design for everything. Ranking by evidence makes the choice defensible rather than a hunch, and the single committed problem is what scopes Session 3."
  },

  {
    kind: "exercise",
    n: 3,
    title: "Personas",
    lead: "Create **2–3 personas**, each grounded in specific evidence, each labelled as a hypothesis.",
    steps: [
      {
        title: "Ask for the personas",
        text: "With your evidence and committed problem in the chat, run this prompt.",
        prompt: "From this evidence and the committed problem, propose 2–3 personas. Ground each in specific interview or questionnaire signals, label each as a hypothesis, and note what we still don't know about them."
      },
      {
        title: "Check the split",
        text: "Check that the personas follow the split the triangulation named: the power user who wants a smart, proactive assistant, and the simplicity-first rider who wants only reliable basics. If the model turned each interviewee into a persona, ask it to rebuild them around that split."
      },
      {
        title: "Save the personas",
        text: "Save them in `personas.md`, filling in **Hypothesis**, **Grounded in**, and **What we still don't know** for each."
      }
    ],
    doneItems: [
      "`personas.md` has two or three personas",
      "Each persona draws on more than one source",
      "Each is labelled a hypothesis, with its open questions",
      "None of them is one interviewee with a new name",
      "Every trait traces to evidence, or is listed as unknown"
    ],
    why: "Session 3 runs a UX review *in character as these personas*. You will be making design calls in their voice, so each one has to be tied to evidence."
  },

  {
    kind: "table",
    eyebrow: "What you'll produce",
    title: "A design brief packet",
    lead: "Three files the rest of the course consumes, in the order you produce them.",
    cols: ["File", "Holds"],
    rows: [
      ["`key-insights.md`", "3–5 insights, each anchored in evidence and labelled observed or inferred"],
      ["`problem-definition.md`", "The single committed problem, the rejected candidates, the red-team argument, and your response"],
      ["`personas.md`", "2–3 evidence-grounded personas, each labelled as a hypothesis"]
    ],
    note: "Plain markdown with clean headings and short bullets, so they attach cleanly to Figma Make and Copilot in Session 3."
  },

  {
    kind: "statement",
    eyebrow: "What you'll take away",
    text: "AI produces framings and personas quickly, and each one needs an evidence anchor and a hypothesis label before you rely on it. You pick the problem and the personas to commit to."
  },

  {
    kind: "cover",
    session: "session-3",
    eyebrow: "Next",
    title: "Session 3",
    lead: "Prototyping with Figma Make, then a UX review in character as the personas you just wrote.",
    meta: ["Bring all three files", "Premade versions exist if you miss a session"]
  }
];
