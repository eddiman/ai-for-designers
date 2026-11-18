window.DECKS = window.DECKS || {};

/* The full-day workshop: the introduction, the setup, and all four sessions in
   one deck, built from the other decks when the page loads. A slide edited in a
   session deck changes here too. Only the slides that assume the sessions run
   on separate days are skipped or changed, by the `id` they carry in their own
   deck. This file has to load after every deck it reads from. */

(function () {
  var D = window.DECKS;

  function extend(base, fields) {
    return Object.assign({}, base, fields);
  }

  function byId(deckId, id) {
    var deck = D[deckId] || [];
    for (var i = 0; i < deck.length; i++) if (deck[i].id === id) return deck[i];
    console.warn("workshop: no slide with id \"" + id + "\" in " + deckId);
    return null;
  }

  // One deck's slides as a section. `skip` lists ids to leave out, `change`
  // maps an id to the fields to replace or to a function returning the new
  // slide, and `after` maps an id to slides to insert after that one.
  function from(deckId, opts) {
    opts = opts || {};
    var skip = opts.skip || [];
    var change = opts.change || {};
    var after = opts.after || {};
    var used = {};
    var slides = [];

    (D[deckId] || []).forEach(function (s) {
      var id = s.id;
      if (id) used[id] = true;
      if (id && skip.indexOf(id) !== -1) return;
      var c = id && change[id];
      slides.push(c ? (typeof c === "function" ? c(s) : extend(s, c)) : s);
      if (id && after[id]) slides = slides.concat(after[id]);
    });

    // A renamed or removed id would otherwise fail without a sign.
    skip.concat(Object.keys(change), Object.keys(after)).forEach(function (id) {
      if (!used[id]) console.warn("workshop: no slide with id \"" + id + "\" in " + deckId);
    });

    return { kind: "section", session: deckId, slides: slides };
  }

  var agenda = {
    kind: "list",
    eyebrow: "Full-day workshop",
    title: "Agenda",
    items: [
      { label: "Setup", text: "VS Code, the course files, Microsoft 365 Copilot, and the Figma MCP" },
      { label: "Session 1", text: "Research synthesis" },
      "Break",
      { label: "Session 2", text: "Problem definition and personas" },
      "Lunch",
      { label: "Session 3", text: "Figma Make, a persona UX review, and triage" },
      "Break",
      { label: "Session 4", text: "A knowledge base and an MVP build, ending with one increment built and verified" },
      "Wrap-up"
    ]
  };

  // The Figma MCP setup moves from the start of Session 3 into the setup, so
  // a connection problem shows up while there is still time to fix it.
  var mcp = byId("session-3", "figma-mcp");
  var mcpSetup = mcp && extend(mcp, {
    n: 9,
    lead: "The persona review in Session 3 needs Copilot to read your Figma file. Figma's read-only server runs locally, in the Figma desktop app, and we set it up together.",
    why: "Without this connection, Copilot cannot see your screens in the Session 3 review, and the review has nothing to walk through. The server runs on your own machine, so everyone sets up their own."
  });

  window.DECKS["workshop"] = [
    from("intro", {
      change: {
        cover: {
          eyebrow: "Full-day workshop",
          meta: ["Four sessions in one day", "UI · UX · Service, same room"]
        },
        "how-it-works": function (s) {
          return extend(s, {
            items: s.items.map(function (item) {
              return item.label === "Missing a session does not break you."
                ? extend(item, { label: "Falling behind does not break you." })
                : item;
            })
          });
        },
        "what-we-ask": {
          items: [
            { label: "Stay for the whole day.", text: "Each session builds on the one before, so the work accumulates." },
            { label: "Say when you are stuck.", text: "Tool friction is expected and almost always a one-minute fix, so say something early." },
            { label: "Keep the Figma desktop app open.", text: "The Figma connection you set up before Session 1 only works while the app is running, and Session 3 depends on it." }
          ]
        },
        next: {
          lead: "Download the files, open the course folder in VS Code, check Microsoft 365 Copilot, and connect Figma before Session 1."
        }
      },
      after: { cover: [agenda] }
    }),

    from("session-0", {
      skip: ["cover", "later-sessions", "next"],
      change: {
        bring: {
          eyebrow: "For the whole day",
          title: "What you need today",
          items: [
            { label: "Your laptop.", text: "Use the machine you will work on all day." },
            { label: "VS Code installed.", text: "Download it from `code.visualstudio.com/download`, install it, and open it once." },
            { label: "Microsoft 365 Copilot access.", text: "Sessions 1 and 2 use the browser chat with your work account." },
            { label: "Permission to download a ZIP.", text: "The course files come from the Download button on the presentation home page." },
            { label: "The Figma desktop app, updated.", text: "With access to Figma Make and a Figma file you can edit." },
            { label: "GitHub Copilot in VS Code.", text: "Sessions 3 and 4 use it in Agent mode." }
          ],
          callout: {
            tone: "stop",
            title: "Say now if something is missing",
            text: "Sessions 3 and 4 need Figma and GitHub Copilot. If your access is not in place, tell the facilitator during the setup, so there is time to pair you with someone."
          }
        },
        "setup-order": function (s) {
          return extend(s, { title: "Nine exercises before Session 1", steps: s.steps.concat(["connect Figma"]) });
        },
        "readiness-gate": function (s) {
          return extend(s, {
            title: "Do not start Session 1 until all six are true",
            items: s.items.concat(["Copilot in VS Code can read your open file in Figma."])
          });
        }
      },
      after: { "copilot-check": mcpSetup ? [mcpSetup] : [] }
    }),

    from("session-1", {
      change: {
        next: { eyebrow: "Break", meta: ["Your files carry forward"] }
      }
    }),

    from("session-2", {
      change: {
        "start-from": {
          lead: "Continue from your own Session 1 work. If you could not finish it, the premade versions in `premade/` are ready to use as they are."
        },
        next: { eyebrow: "Lunch", meta: ["Your three files carry forward", "Keep the Figma desktop app open"] }
      }
    }),

    from("session-3", {
      skip: ["figma-mcp"],
      change: {
        "start-from": {
          note: "If you could not finish Session 2, the premade versions in `premade/` are ready to attach as they are."
        },
        next: { eyebrow: "Break", meta: ["Your three outputs carry forward", "Nothing to install"] }
      }
    }),

    from("session-4")
  ];
})();
