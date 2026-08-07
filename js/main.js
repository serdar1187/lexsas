/* ============================================================
   LEXSAS redesign concept ("Lexsas Kimi")
   Vanilla JS: word-split hero entrance, scroll reveals,
   signature progress line, scroll-synced focus index,
   FAQ accordion. No dependencies.

   Language switching is not done here. Every page ships a plain
   anchor to its twin, so the URL, the canonical and the hreflang
   pair can never disagree with what is on screen.
   ============================================================ */

/* Scripting announces itself, first statement in the file, ahead of anything
   that can throw. The reveal system and the drawn mark start in their finished
   state and are only wound back once this class is set, so a blocked, missing,
   proxied or aborted script leaves the page fully readable instead of blank. */
document.documentElement.classList.add("js");

(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const heroTitle = document.getElementById("heroTitle");
  const heroArt = document.getElementById("heroArt");

  /* ---------- Hero title: word-split entrance ---------- */

  function splitHeroTitle() {
    if (!heroTitle || reducedMotion) return;
    const text = heroTitle.textContent.replace(/\s+/g, " ").trim();
    heroTitle.textContent = "";
    heroTitle.classList.remove("split", "on");
    const words = text.split(" ");
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "hw";
      span.style.setProperty("--d", `${0.12 + i * 0.075}s`);
      span.textContent = word;
      heroTitle.appendChild(span);
      if (i < words.length - 1) heroTitle.appendChild(document.createTextNode(" "));
    });
    heroTitle.classList.add("split");
    void heroTitle.offsetWidth; /* reflow so the transition runs */
    heroTitle.classList.add("on");
  }

  /* ---------- Scroll reveals, and the hero metamorphosis ----------
     One observer for both. A reveal only has to break the edge of the viewport;
     the hero canvas has to be substantially on screen before its sequence
     starts, because it is an argument, not a decoration, and on a stacked
     layout it sits below the fold. On a desktop load the canvas is already in
     view at the first callback, so it starts at once. */

  /* The .js class above is what hides a reveal, so a browser that gets this
     far without IntersectionObserver must not be left with hidden content:
     everything is shown at once instead of on scroll. */
  const hasRevealIO = "IntersectionObserver" in window;
  const revealIO = hasRevealIO
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            if (entry.target === heroArt) {
              const root = entry.rootBounds;
              const enough =
                entry.intersectionRatio >= 0.5 ||
                (root && root.height > 0 && entry.intersectionRect.height >= root.height * 0.5);
              if (!enough) return;
              entry.target.classList.add("play");
            } else {
              entry.target.classList.add("in");
            }
            revealIO.unobserve(entry.target);
          });
        },
        { threshold: [0.12, 0.5], rootMargin: "0px 0px -6% 0px" }
      )
    : null;

  /* A long list fades once, as a block, rather than row by row. Row by row, a
     fourteen-row index handed its last row a .65s delay on top of a .8s fade,
     so a row that had been on screen for a second and a half was still at
     opacity 0 and the list read as still loading. Where a container holds four
     or more revealing rows the reveal is promoted to the container and the
     rows are handed back their own opacity, along with the per-row delay they
     no longer need. Below four the stagger is short enough to be choreography
     and is left alone; the cap in the stylesheet holds it at .2s either way.

     Nothing here is load-bearing. Without this script the rows never had the
     class taken away and were never hidden in the first place. */
  document
    .querySelectorAll(".insight-list, .insight-index, .faq-list, .timeline")
    .forEach((group) => {
      const rows = group.querySelectorAll(".reveal");
      if (rows.length < 4) return;
      rows.forEach((row) => {
        row.classList.remove("reveal");
        row.style.removeProperty("--d");
      });
      group.classList.add("reveal");
    });

  if (revealIO) {
    document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));
    if (heroArt) revealIO.observe(heroArt);
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    if (heroArt) heroArt.classList.add("play");
  }

  /* ---------- Signature progress line ---------- */

  const progressBar = document.getElementById("progressBar");
  let progressTicking = false;

  if (progressBar) {
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
      progressTicking = false;
    };
    const scheduleProgress = () => {
      if (!progressTicking) {
        window.requestAnimationFrame(updateProgress);
        progressTicking = true;
      }
    };
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    /* A rotation, a resize or a reveal finishing changes the scrollable height,
       so the ratio has to be recomputed then too, not only on the next scroll. */
    window.addEventListener("resize", scheduleProgress, { passive: true });
    window.addEventListener("pageshow", scheduleProgress);
    if (typeof ResizeObserver === "function") {
      new ResizeObserver(scheduleProgress).observe(document.documentElement);
    }
    updateProgress();
  }

  /* ---------- Focus areas: scroll-synced index ---------- */

  const workSticky = document.querySelector(".work-sticky");
  const workNum = document.getElementById("workNum");
  const workBar = document.getElementById("workBar");
  const areas = Array.from(document.querySelectorAll(".area"));
  /* Read from the stylesheet, not retyped from it. These four hexes used to sit
     here as literals, which made js/main.js a second, silent home for the brand
     palette: an edit to css/style.css would have left the progress bar on the
     old colours with nothing to show it had been missed. */
  const rootStyle = getComputedStyle(document.documentElement);
  const accent = (name) => rootStyle.getPropertyValue(`--${name}`).trim();

  if (areas.length && workSticky && workNum && workBar) {
    const workIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const area = entry.target;
          const idx = areas.indexOf(area);
          workNum.textContent = area.getAttribute("data-num");
          const acc = accent(area.getAttribute("data-accent"));
          if (acc) workSticky.style.setProperty("--acc", acc);
          workBar.style.width = `${((idx + 1) / areas.length) * 100}%`;
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
    );
    areas.forEach((area) => workIO.observe(area));
  }

  /* ---------- FAQ accordion (single open) ---------- */

  const faqItems = Array.from(document.querySelectorAll(".faq-item"));
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-q");
    if (!btn) return;
    /* The static HTML ships no aria-expanded, because with no script the button
       opens nothing and a control announcing "collapsed" over an answer that is
       on screen would be stating the opposite of what the reader has. The state
       is written here, at the moment the control becomes a control, and before
       any handler exists, so there is no window in which it is announced
       without one. It reads the class rather than assuming, so a page that
       ever ships an answer open still announces itself correctly. */
    btn.setAttribute("aria-expanded", item.classList.contains("open") ? "true" : "false");
    /* The static HTML ships these buttons disabled for the same reason. With
       no script the CSS opens every answer and hides the icon, but a plain
       button still takes a tab stop and still announces as an operable
       control, so a keyboard or screen reader user met five buttons that did
       nothing. Disabled keeps them out of the tab order and honest about it;
       the attribute comes off here, in the same breath as aria-expanded. */
    btn.removeAttribute("disabled");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach((other) => {
        other.classList.remove("open");
        const otherBtn = other.querySelector(".faq-q");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* The desktop-only 3D tilt on the principle cards is gone. Two reasons, and
     either would have been enough: it explained nothing, which on a brand whose
     whole argument is restraint makes it a borrowed gesture, and it never ran,
     because ".js .reveal.in { transform: none }" outranks the .principle rule
     that consumed the --rx and --ry it was writing. It was a mousemove handler
     on every card, feeding two custom properties nothing read. */

  /* ---------- Init ---------- */

  splitHeroTitle();

  /* triggers the drawn-mark animation and orbit labels */
  window.requestAnimationFrame(() => document.body.classList.add("loaded"));
})();
