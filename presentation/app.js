/* ==========================================================================
   AI for Designers — presentation runtime
   Hash routing (#/session-4/6), keyboard and button navigation, fullscreen,
   and a slide overview. Plain JavaScript, no build step: open index.html.
   ========================================================================== */

(function () {
  "use strict";

  var DECKS = window.DECKS || {};
  var SESSIONS = window.SESSIONS || [];

  var el = {
    landing: document.getElementById("landing"),
    sessionList: document.getElementById("session-list"),
    deck: document.getElementById("deck"),
    slide: document.getElementById("slide"),
    progress: document.getElementById("progress"),
    countNow: document.getElementById("count-now"),
    countAll: document.getElementById("count-all"),
    prev: document.getElementById("btn-prev"),
    next: document.getElementById("btn-next"),
    fullscreen: document.getElementById("btn-fullscreen"),
    overviewBtn: document.getElementById("btn-overview"),
    overview: document.getElementById("overview"),
    overviewList: document.getElementById("overview-list"),
    overviewTitle: document.getElementById("overview-title")
  };

  var state = { sessionId: null, index: 0 };

  /* ---------------------------------------------------------------- helpers */

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Minimal inline formatting: **bold**, `code`, and *emphasis*.
  function fmt(s) {
    return escapeHtml(s)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[\s(])\*([^*]+)\*/g, "$1<em>$2</em>");
  }

  function h(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function copyButton(text) {
    var button = h("button", "copy-button", "Copy");
    button.type = "button";
    button.setAttribute("aria-label", "Copy prompt");
    button.addEventListener("click", function (e) {
      e.stopPropagation();

      function copied() {
        button.textContent = "Copied";
        button.classList.add("copy-button--copied");
        window.setTimeout(function () {
          button.textContent = "Copy";
          button.classList.remove("copy-button--copied");
        }, 1600);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(copied).catch(function () {
          fallbackCopy(text, copied);
        });
      } else {
        fallbackCopy(text, copied);
      }
    });
    return button;
  }

  function fallbackCopy(text, onSuccess) {
    var input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    if (document.execCommand("copy")) onSuccess();
    document.body.removeChild(input);
  }

  function session(id) {
    for (var i = 0; i < SESSIONS.length; i++) if (SESSIONS[i].id === id) return SESSIONS[i];
    return null;
  }

  // A deck lists each exercise once, with its steps. Expanding it gives the
  // slides the room sees: an opener, one slide per step, and a done check.
  var EXPANDED = {};

  function slides(id) {
    if (!EXPANDED[id]) EXPANDED[id] = expand(DECKS[id] || []);
    return EXPANDED[id];
  }

  function expand(deck) {
    var total = deck.filter(function (s) {
      return s.kind === "exercise" && s.n != null;
    }).length;
    var out = [];
    deck.forEach(function (s) {
      if (s.kind !== "exercise") {
        out.push(s);
        return;
      }
      out.push({ kind: "exercise-intro", exercise: s, total: total, callout: s.callout, note: s.note });
      (s.steps || []).forEach(function (step, i) {
        out.push({ kind: "exercise-step", exercise: s, step: step, index: i, callout: step.callout, note: step.note });
      });
      out.push({ kind: "exercise-done", exercise: s, callout: s.checkpoint });
    });
    return out;
  }

  function exerciseName(ex) {
    return ex.n != null ? "Exercise " + ex.n : ex.label || "Exercise";
  }

  // Short label for the overview: strip inline markers, then truncate.
  function shortLabel(s) {
    var t;
    if (s.kind === "exercise-intro") {
      t = exerciseName(s.exercise) + ": " + s.exercise.title;
    } else if (s.kind === "exercise-step") {
      t = (s.exercise.n != null ? s.exercise.n + "." + (s.index + 1) + " " : "Step " + (s.index + 1) + ": ") + s.step.title;
    } else if (s.kind === "exercise-done") {
      t = exerciseName(s.exercise) + ": you are done when";
    } else {
      t = s.title || s.text || s.kind;
    }
    t = String(t).replace(/[`*]/g, "");
    return t.length > 58 ? t.slice(0, 57).replace(/\s+\S*$/, "") + "…" : t;
  }

  /* -------------------------------------------------------------- rendering */

  function renderItems(items, opts) {
    opts = opts || {};
    var list = h(opts.ordered ? "ol" : "ul", "items" + (opts.check ? " items--check" : ""));
    items.forEach(function (item) {
      var li = document.createElement("li");
      if (typeof item === "string") {
        li.innerHTML = "<span>" + fmt(item) + "</span>";
      } else {
        li.innerHTML =
          '<span class="items__label">' + fmt(item.label) + "</span><span>" + fmt(item.text) + "</span>";
        if (item.copyText) li.appendChild(copyButton(item.copyText));
      }
      list.appendChild(li);
    });
    return list;
  }

  function renderCallout(c) {
    var tone = c.tone ? " callout--" + c.tone : "";
    var node = h("div", "callout" + tone);
    if (c.title) node.appendChild(h("strong", "callout__title", fmt(c.title)));
    node.appendChild(h("span", null, fmt(c.text)));
    return node;
  }

  function renderMap(steps, active) {
    var list = h("ol", "map");
    steps.forEach(function (step, i) {
      var on = active != null && active === i;
      list.appendChild(h("li", "map__step" + (on ? " map__step--active" : ""), fmt(step)));
      if (i < steps.length - 1) list.appendChild(h("li", "map__arrow", "→"));
    });
    return list;
  }

  // Long prompts get smaller type so more of them is visible without scrolling.
  function renderPrompt(text) {
    var long = text.length > 520 || text.split("\n").length > 9;
    var wrap = h("div", "prompt-wrap");
    wrap.appendChild(h("pre", "prompt" + (long ? " prompt--long" : ""), escapeHtml(text)));
    wrap.appendChild(copyButton(text));
    return wrap;
  }

  function renderParagraphs(text, cls, root) {
    [].concat(text).forEach(function (p) {
      root.appendChild(h("p", cls, fmt(p)));
    });
  }

  // "Step 2 of 6" with one mark per step, so the room can see how far in it is.
  function renderStepProgress(count, index) {
    var node = h("div", "step-progress");
    node.appendChild(h("span", "step-progress__label", "Step " + (index + 1) + " of " + count));
    var marks = h("ol", "step-progress__marks");
    marks.setAttribute("aria-hidden", "true");
    for (var i = 0; i < count; i++) {
      marks.appendChild(h("li", i < index ? "is-done" : i === index ? "is-current" : null));
    }
    node.appendChild(marks);
    return node;
  }

  var renderers = {
    cover: function (s, root) {
      root.classList.add("slide--cover");
      if (s.eyebrow) root.appendChild(h("p", "eyebrow", fmt(s.eyebrow)));
      root.appendChild(h("h1", null, fmt(s.title)));
      if (s.lead) root.appendChild(h("p", "lead", fmt(s.lead)));
      if (s.meta && s.meta.length) {
        var meta = h("div", "slide__meta");
        s.meta.forEach(function (m) {
          meta.appendChild(h("span", null, fmt(m)));
        });
        root.appendChild(meta);
      }
    },

    statement: function (s, root) {
      root.classList.add("slide--statement");
      if (s.eyebrow) root.appendChild(h("p", "eyebrow", fmt(s.eyebrow)));
      root.appendChild(h("p", "statement", fmt(s.text)));
    },

    map: function (s, root) {
      if (s.eyebrow) root.appendChild(h("p", "eyebrow", fmt(s.eyebrow)));
      if (s.title) root.appendChild(h("h2", null, fmt(s.title)));
      if (s.lead) root.appendChild(h("p", "lead", fmt(s.lead)));
      root.appendChild(renderMap(s.steps, s.active));
    },

    list: function (s, root) {
      if (s.eyebrow) root.appendChild(h("p", "eyebrow", fmt(s.eyebrow)));
      if (s.title) root.appendChild(h("h2", null, fmt(s.title)));
      if (s.lead) root.appendChild(h("p", "lead", fmt(s.lead)));
      if (s.items) root.appendChild(renderItems(s.items, { ordered: s.ordered, check: s.check }));
    },

    // Opener: what the exercise is, its steps in order, and what it is for.
    "exercise-intro": function (s, root) {
      var ex = s.exercise;
      root.classList.add("slide--exercise");
      var eyebrow = ex.n != null && s.total > 1 ? exerciseName(ex) + " of " + s.total : exerciseName(ex);
      root.appendChild(h("p", "eyebrow", fmt(eyebrow)));
      root.appendChild(h("h2", null, fmt(ex.title)));
      if (ex.lead) root.appendChild(h("p", "lead", fmt(ex.lead)));
      if (ex.map) root.appendChild(renderMap(ex.map.steps, ex.map.active));

      var grid = h("div", "step-grid");
      var left = h("div", "step-block");
      left.appendChild(h("h3", "step-block__title", "Steps"));
      left.appendChild(
        renderItems(
          (ex.steps || []).map(function (st) {
            return st.title;
          }),
          { ordered: true }
        )
      );
      grid.appendChild(left);
      if (ex.why) {
        var right = h("div", "step-block");
        right.appendChild(h("h3", "step-block__title", "What this exercise is for"));
        right.appendChild(h("p", null, fmt(ex.why)));
        grid.appendChild(right);
      }
      root.appendChild(grid);
    },

    // One step: the instruction, and the prompt to run if the step has one.
    "exercise-step": function (s, root) {
      var ex = s.exercise;
      var st = s.step;
      root.classList.add("slide--exercise-step");
      var top = h("div", "step-top");
      top.appendChild(h("p", "eyebrow", fmt(exerciseName(ex) + ": " + ex.title)));
      top.appendChild(renderStepProgress((ex.steps || []).length, s.index));
      root.appendChild(top);

      var head = h("div", "step-head");
      head.appendChild(h("span", "step-number", String(s.index + 1)));
      head.appendChild(h("h2", null, fmt(st.title)));
      root.appendChild(head);

      if (st.text) renderParagraphs(st.text, "step-text", root);
      if (st.items) root.appendChild(renderItems(st.items, { ordered: st.ordered }));
      if (st.prompt) root.appendChild(renderPrompt(st.prompt));
      if (st.after) renderParagraphs(st.after, "step-text", root);
    },

    // The check at the end of an exercise, before the room moves on.
    "exercise-done": function (s, root) {
      var ex = s.exercise;
      root.classList.add("slide--exercise-done");
      root.appendChild(h("p", "eyebrow", fmt(exerciseName(ex) + ": " + ex.title)));
      root.appendChild(h("h2", null, "You are done when"));
      root.appendChild(renderItems(ex.doneItems || [], { check: true }));
    },

    table: function (s, root) {
      if (s.eyebrow) root.appendChild(h("p", "eyebrow", fmt(s.eyebrow)));
      if (s.title) root.appendChild(h("h2", null, fmt(s.title)));
      if (s.lead) root.appendChild(h("p", "lead", fmt(s.lead)));
      var table = document.createElement("table");
      if (s.cols) {
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        s.cols.forEach(function (c) {
          tr.appendChild(h("th", null, fmt(c)));
        });
        thead.appendChild(tr);
        table.appendChild(thead);
      }
      var tbody = document.createElement("tbody");
      s.rows.forEach(function (row) {
        var tr = document.createElement("tr");
        row.forEach(function (cell) {
          tr.appendChild(h("td", null, fmt(cell)));
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      root.appendChild(table);
    }
  };

  function renderSlide() {
    var deck = slides(state.sessionId);
    var s = deck[state.index];
    var root = el.slide;
    root.className = "slide";
    root.innerHTML = "";
    if (!s) return;

    // A slide can take another session's accent, e.g. the "Next" cover.
    if (s.session) root.setAttribute("data-session", s.session);
    else root.removeAttribute("data-session");

    (renderers[s.kind] || renderers.list)(s, root);
    if (s.callout) root.appendChild(renderCallout(s.callout));
    if (s.note) root.appendChild(h("p", "slide__note", fmt(s.note)));

    el.countNow.textContent = String(state.index + 1);
    el.countAll.textContent = String(deck.length);
    el.progress.style.width = deck.length ? ((state.index + 1) / deck.length) * 100 + "%" : "0";
    el.prev.disabled = state.index === 0;
    el.next.disabled = state.index === deck.length - 1;

    var meta = session(state.sessionId);
    var slideName = shortLabel(s) || "slide " + (state.index + 1);
    var parts = [meta ? meta.short : null, slideName];
    if (slideName !== "AI for Designers") parts.push("AI for Designers");
    document.title = parts.filter(Boolean).join(" — ");
    renderOverview();
  }

  function renderOverview() {
    if (el.overview.hidden) return;
    var deck = slides(state.sessionId);
    var meta = session(state.sessionId);
    el.overviewTitle.textContent = (meta ? meta.short + " — " : "") + deck.length + " slides";
    el.overviewList.innerHTML = "";
    deck.forEach(function (s, i) {
      var li = document.createElement("li");
      var btn = h("button", "overview__item");
      btn.type = "button";
      btn.setAttribute("aria-current", i === state.index ? "true" : "false");
      btn.appendChild(h("span", "overview__item-n", String(i + 1)));
      btn.appendChild(h("span", "overview__item-t", shortLabel(s)));
      btn.addEventListener("click", function () {
        go(state.sessionId, i);
        closeOverview();
      });
      li.appendChild(btn);
      el.overviewList.appendChild(li);
    });
  }

  function renderLanding() {
    el.sessionList.innerHTML = "";
    var groups = [];
    SESSIONS.forEach(function (s) {
      var name = s.group || "Sessions";
      var g = null;
      for (var i = 0; i < groups.length; i++) if (groups[i].name === name) g = groups[i];
      if (!g) {
        g = { name: name, items: [] };
        groups.push(g);
      }
      g.items.push(s);
    });

    groups.forEach(function (g) {
      var section = h("section", "sessions-group");
      section.appendChild(h("h2", "sessions-group__title", fmt(g.name)));
      var grid = h("div", "sessions");
      g.items.forEach(function (s) {
        var a = h("a", "session-card");
        a.href = "#/" + s.id;
        a.setAttribute("data-session", s.id);
        a.appendChild(h("span", "session-card__n", s.short));
        a.appendChild(h("h3", "session-card__title", fmt(s.title)));
        a.appendChild(h("p", "session-card__lead", fmt(s.lead)));
        a.appendChild(h("p", "session-card__meta", slides(s.id).length + " slides · " + s.tool));
        grid.appendChild(a);
      });
      section.appendChild(grid);
      el.sessionList.appendChild(section);
    });
  }

  /* ---------------------------------------------------------------- routing */

  function go(sessionId, index) {
    var deck = slides(sessionId);
    if (!deck.length) {
      location.hash = "#/";
      return;
    }
    index = Math.max(0, Math.min(index, deck.length - 1));
    location.hash = "#/" + sessionId + "/" + (index + 1);
  }

  function next() {
    var deck = slides(state.sessionId);
    if (state.index < deck.length - 1) go(state.sessionId, state.index + 1);
  }

  function prev() {
    if (state.index > 0) go(state.sessionId, state.index - 1);
  }

  function route() {
    var raw = (location.hash || "#/").replace(/^#\/?/, "");
    var parts = raw.split("/").filter(Boolean);
    var sessionId = parts[0];

    if (!sessionId || !slides(sessionId).length) {
      state.sessionId = null;
      el.deck.hidden = true;
      el.landing.hidden = false;
      document.body.removeAttribute("data-session");
      document.title = "AI for Designers — presentation";
      closeOverview();
      return;
    }

    var index = parts[1] ? parseInt(parts[1], 10) - 1 : 0;
    if (isNaN(index)) index = 0;
    var deck = slides(sessionId);
    index = Math.max(0, Math.min(index, deck.length - 1));

    if (state.sessionId !== sessionId) closeOverview();
    state.sessionId = sessionId;
    state.index = index;
    document.body.setAttribute("data-session", sessionId);
    el.landing.hidden = true;
    el.deck.hidden = false;
    renderSlide();
  }

  /* --------------------------------------------------------------- controls */

  function openOverview() {
    if (!state.sessionId) return;
    el.overview.hidden = false;
    el.overviewBtn.textContent = "Close overview";
    el.overviewBtn.setAttribute("aria-expanded", "true");
    renderOverview();
  }

  function closeOverview() {
    el.overview.hidden = true;
    el.overviewBtn.textContent = "Session overview";
    el.overviewBtn.setAttribute("aria-expanded", "false");
  }

  function toggleOverview() {
    if (el.overview.hidden) openOverview();
    else closeOverview();
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (el.deck.requestFullscreen) {
      el.deck.requestFullscreen().catch(function () {});
    }
  }

  document.addEventListener("fullscreenchange", function () {
    var on = !!document.fullscreenElement;
    el.deck.classList.toggle("deck--fullscreen", on);
    el.fullscreen.textContent = on ? "Exit fullscreen" : "Fullscreen";
  });

  el.next.addEventListener("click", next);
  el.prev.addEventListener("click", prev);
  el.fullscreen.addEventListener("click", toggleFullscreen);
  el.overviewBtn.addEventListener("click", toggleOverview);

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
    if (typing) return;

    if (e.key === "Escape") {
      if (!el.overview.hidden) {
        closeOverview();
      } else if (!document.fullscreenElement && state.sessionId) {
        location.hash = "#/";
      }
      return;
    }

    if (!state.sessionId) return;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case "PageDown":
      case " ":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "ArrowUp":
      case "PageUp":
      case "Backspace":
        e.preventDefault();
        prev();
        break;
      case "Home":
        e.preventDefault();
        go(state.sessionId, 0);
        break;
      case "End":
        e.preventDefault();
        go(state.sessionId, slides(state.sessionId).length - 1);
        break;
      case "f":
      case "F":
        e.preventDefault();
        toggleFullscreen();
        break;
      case "o":
      case "O":
        e.preventDefault();
        toggleOverview();
        break;
    }
  });

  // Show the control bar while the pointer is moving, then fade it in fullscreen.
  var idle;
  document.addEventListener("mousemove", function () {
    el.deck.classList.add("deck--active");
    clearTimeout(idle);
    idle = setTimeout(function () {
      el.deck.classList.remove("deck--active");
    }, 2200);
  });

  window.addEventListener("hashchange", route);

  renderLanding();
  route();
})();
