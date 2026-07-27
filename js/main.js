/* ============================================================
   LEXSAS redesign concept ("Lexsas Kimi")
   Vanilla JS: word-split hero entrance, scroll reveals,
   signature progress line, scroll-synced focus index,
   FAQ accordion, subtle principle tilt. No dependencies.

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
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const heroTitle = document.getElementById("heroTitle");
  const heroArt = document.getElementById("heroArt");

  /* ---------- Hero title: word-split blur entrance ---------- */

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

  const revealIO = new IntersectionObserver(
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
  );
  document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));
  if (heroArt) revealIO.observe(heroArt);

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
  const accents = {
    blue: "#2E7CF6",
    red: "#E8503A",
    yellow: "#F5B301",
    green: "#2FA05A"
  };

  if (areas.length && workSticky && workNum && workBar) {
    const workIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const area = entry.target;
          const idx = areas.indexOf(area);
          workNum.textContent = area.getAttribute("data-num");
          const accent = accents[area.getAttribute("data-accent")];
          if (accent) workSticky.style.setProperty("--acc", accent);
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

  /* ---------- Principle tilt (desktop only) ---------- */

  if (finePointer && !reducedMotion) {
    document.querySelectorAll(".principle").forEach((card) => {
      const MAX = 3.2;
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--ry", `${(px * MAX * 2).toFixed(2)}deg`);
        card.style.setProperty("--rx", `${(-py * MAX * 2).toFixed(2)}deg`);
      });
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* ---------- Init ---------- */

  splitHeroTitle();

  /* triggers the drawn-mark animation and orbit labels */
  window.requestAnimationFrame(() => document.body.classList.add("loaded"));
})();
