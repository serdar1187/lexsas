/* ============================================================
   LEXSAS redesign concept ("Lexsas Kimi")
   Vanilla JS: i18n (EN/TR), word-split hero entrance, scroll
   reveals, signature progress line, scroll-synced focus index,
   FAQ accordion, subtle principle tilt. No dependencies.
   ============================================================ */

(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Copy dictionary (EN source mirrors index.html) ---------- */

  const I18N = {
    en: {
      "skip": "Skip to content",
      "nav.work": "Focus areas",
      "nav.approach": "Approach",
      "nav.experience": "Experience",
      "nav.insights": "Insights",
      "nav.contact": "Contact",

      "hero.kicker": "AI LEGAL TECH",
      "hero.title": "Legal workflow automation, with the guardrails built in",
      "hero.lede": "LEXSAS is the AI legal-tech venture I founded in 2026. I design and advise on tools that take the manual work out of legal and regulatory operations, from intake and document workflows to research and compliance, with privacy, IP and governance guardrails in place from the start.",
      "hero.cta": "Get in touch",
      "hero.cta2": "Explore focus areas",
      "hero.orbit1": "Legal tech",
      "hero.orbit2": "AI governance",
      "hero.orbit3": "Regulatory affairs",
      "hero.orbit4": "Corporate affairs",
      "hero.flow1": "Intake",
      "hero.flow2": "Review",
      "hero.flow3": "Research",
      "hero.flow4": "Compliance",
      "hero.sub1": "new matter",
      "hero.sub2": "human review",
      "hero.sub3": "deep research",
      "hero.sub4": "guarded output",
      "hero.tool1": "sources",
      "hero.tool2": "memory",
      "hero.tool3": "tools",
      "hero.seal.top": "LEGAL WORKFLOW AUTOMATION",
      "hero.seal.bottom": "GUARDRAILS BUILT IN · 2026",

      "cred.1": "20+ years in-house",
      "cred.3": "Statutory Board Director",
      "cred.4": "Ankara Bar",

      "wordmark.sub": "EST. 2026 · ISTANBUL · EN / TR",

      "work.kicker": "FOCUS AREAS",
      "work.title": "Six areas, one operating standard",
      "work.note": "From intake automation to competition defense, every engagement ships with its guardrails.",
      "work.a1.t": "Legal tech and AI workflow automation",
      "work.a1.d": "Designing and advising on AI-enabled tooling for legal work: intake, document and knowledge workflows, research and compliance operations. The aim is fewer manual steps without a lower standard of review.",
      "work.a2.t": "AI governance and regulatory compliance",
      "work.a2.d": "Privacy, IP and governance guardrails that ship with the tool rather than after it, alongside model oversight, human review and documentation. I work on the line between what a policy says and what a team can actually operate.",
      "work.a3.t": "GenAI transformation for legal teams",
      "work.a3.d": "Legal operations strategy for generative AI: where to start, what to build versus buy, and how responsible adoption actually happens. I have co-developed GenAI legal tooling in-house on AWS Bedrock and run the pilots that followed.",
      "work.a4.t": "Data protection and data sovereignty",
      "work.a4.d": "Cross-border data transfer and localisation questions under KVKK and GDPR, including how to keep transfers lawful when a regulator changes its position. I have executed a first-in-market data transfer undertaking under KVKK.",
      "work.a5.t": "E-commerce and platform regulation",
      "work.a5.d": "Marketplace and platform rules across consumer protection, advertising, intermediary liability and payments touchpoints. This includes licensing perimeter questions and the controls that keep a platform compliant at scale.",
      "work.a6.t": "Competition and digital markets",
      "work.a6.d": "Antitrust strategy for platforms, covering parity clauses, ranking practices and algorithmic accountability. I have led a competition defense on pricing algorithms through to file closure with no penalty.",

      "ap.kicker": "APPROACH",
      "ap.title": "How I work",
      "ap.p1.t": "Practitioner, not vendor",
      "ap.p1.d": "I have built and run these tools inside a legal team, not sold them. Advice starts from what a workflow actually looks like, not from a product roadmap.",
      "ap.p2.t": "Guardrails that enable speed",
      "ap.p2.d": "The useful answer is rarely a flat yes or no; it is yes, if. Well-designed controls let a team move quickly while protecting the business over the long term.",
      "ap.p3.t": "Measurable pilots, human review",
      "ap.p3.d": "Every AI deployment should begin as a pilot with a defined measure of success and a person owning the output. If it cannot show what it changed, it has not earned a wider rollout.",
      "ap.quote": "“The useful answer is rarely a flat yes or no; it is yes, if.”",
      "ap.quote.by": "The operating principle",

      "exp.kicker": "EXPERIENCE",
      "exp.title": "Twenty years across the table from regulators",
      "exp.lede": "I have spent 20+ years in-house with global technology and marketplace businesses, blending legal directorship with regulatory affairs, corporate affairs and public policy leadership, most of it in regulated markets.",
      "exp.body": "That includes statutory board roles and leading legal functions through investigations, licensing questions and market entry. What I say about AI stands on this practitioner ground.",
      "exp.f1": "Legal and regulatory leadership, in-house",
      "exp.f2": "Statutory board directorship",
      "exp.f3": "Ankara Bar",
      "exp.link": "Full background",
      "exp.href": "https://lexsas.com/about.html",

      "ins.kicker": "LATEST INSIGHTS",
      "ins.title": "Notes on law, regulation and AI",
      "ins.1.d": "July 2026",
      "ins.1.t": "The billable hour is running out of logic",
      "ins.1.s": "AI deflates the hour itself. Next generation firms price the work, not the time.",
      "ins.1.href": "https://lexsas.com/insights/beyond-the-billable-hour.html",
      "ins.2.d": "July 2026",
      "ins.2.t": "AI is quietly redrawing the legal industry",
      "ins.2.s": "Adoption doubled in a year. The advantage is shifting from headcount to judgment and workflow design.",
      "ins.2.href": "https://lexsas.com/insights/ai-reshaping-legal-industry.html",
      "ins.3.d": "July 2026",
      "ins.3.t": "Where a lawyer's hours actually go",
      "ins.3.s": "The average lawyer bills a fraction of the day. What workflow automation recovers, and how to start.",
      "ins.3.href": "https://lexsas.com/insights/where-legal-hours-go.html",

      "faq.kicker": "FAQ",
      "faq.title": "Common questions",
      "faq.1.q": "What does LEXSAS do?",
      "faq.1.a": "LEXSAS is an AI legal-tech venture focused on legal workflow automation and advisory. It designs AI-enabled tooling for legal and regulatory teams, from intake and document workflows to research and compliance operations, and advises on responsible adoption with privacy, IP and governance guardrails built in.",
      "faq.2.q": "Which areas does the advisory work cover?",
      "faq.2.a": "Legal technology and AI governance, regulatory affairs and corporate affairs in regulated digital markets, e-commerce and platform regulation, data protection under KVKK and GDPR, and competition questions in digital markets. Behind it sit 20+ years of in-house work as legal director and regulatory affairs leader with global technology, consumer and marketplace businesses.",
      "faq.3.q": "Who is behind LEXSAS?",
      "faq.3.a": "Asim Serdar Yilmaz, founder of LEXSAS and a senior legal and regulatory affairs leader with more than two decades in-house at Amazon, eBay and Philip Morris International, following private practice at White & Case.",
      "faq.4.q": "Do you work in English and Turkish?",
      "faq.4.a": "Yes. Advisory, writing and speaking are available in both languages, from Istanbul and remotely.",
      "faq.5.q": "Is this legal representation?",
      "faq.5.a": "No. LEXSAS provides informational consultancy on legal technology, AI governance and regulatory strategy. It is not a law firm and does not provide legal representation.",

      "ct.kicker": "CONTACT",
      "ct.title": "Let’s talk.",
      "ct.note": "Advisory on AI governance, regulated digital markets and legal operations. Speaking and board conversations are welcome, in English or Turkish.",

      "ft.disclaimer": "This site is for general information only. It is not legal advice and does not create an attorney-client relationship. All views are personal and do not represent any current or former employer.",
      "ft.rights": "© 2026 LEXSAS · Istanbul",
      "ft.top": "Back to top"
    },

    tr: {
      "skip": "İçeriğe atla",
      "nav.work": "Çalışma alanları",
      "nav.approach": "Yaklaşım",
      "nav.experience": "Deneyim",
      "nav.insights": "Yazılar",
      "nav.contact": "İletişim",

      "hero.kicker": "YAPAY ZEKA LEGAL-TECH GİRİŞİMİ",
      "hero.title": "Hukuki işi hızlandıran yapay zeka, güvenceler baştan kurulu",
      "hero.lede": "LEXSAS'ı 2026'da, hukuki ve regülatif işi hızlandıran yapay zeka destekli araçlar tasarlamak ve bu konuda danışmanlık vermek için kurdum. Talep karşılama, doküman ve bilgi iş akışları, araştırma ve uyum operasyonları üzerine çalışıyorum; gizlilik, fikri mülkiyet ve yönetişim güvencelerini baştan kuruyorum.",
      "hero.cta": "İletişime geçin",
      "hero.cta2": "Çalışma alanları",
      "hero.orbit1": "Hukuk teknolojisi",
      "hero.orbit2": "YZ yönetişimi",
      "hero.orbit3": "Regülasyon",
      "hero.orbit4": "Kurumsal ilişkiler",
      "hero.flow1": "Talep",
      "hero.flow2": "İnceleme",
      "hero.flow3": "Araştırma",
      "hero.flow4": "Uyum",
      "hero.sub1": "yeni talep",
      "hero.sub2": "insan incelemesi",
      "hero.sub3": "derin araştırma",
      "hero.sub4": "güvenceli çıktı",
      "hero.tool1": "kaynaklar",
      "hero.tool2": "bellek",
      "hero.tool3": "araçlar",
      "hero.seal.top": "HUKUKİ İŞ AKIŞI OTOMASYONU",
      "hero.seal.bottom": "GÜVENCELER BAŞTAN KURULU · 2026",

      "cred.1": "20+ yıl şirket içi hukuk",
      "cred.3": "Kanuni yönetim kurulu üyeliği",
      "cred.4": "Ankara Barosu",

      "wordmark.sub": "EST. 2026 · ISTANBUL · EN / TR",

      "work.kicker": "ÇALIŞMA ALANLARI",
      "work.title": "Altı alan, tek çalışma standardı",
      "work.note": "Talep otomasyonundan rekabet savunmasına, her iş güvenceleriyle gelir.",
      "work.a1.t": "Hukuk teknolojisi ve yapay zeka iş akışı otomasyonu",
      "work.a1.d": "Talep karşılama, doküman ve bilgi iş akışları, araştırma ve uyum operasyonlarını hızlandıran yapay zeka destekli araçlar tasarlıyorum. Tekrar eden işi sadeleştirip hukukçunun zamanını gerçekten muhakeme isteyen işlere ayırmayı hedefliyorum.",
      "work.a2.t": "Yapay zeka yönetişimi ve regülasyon uyumu",
      "work.a2.d": "Gizlilik, fikri mülkiyet ve yönetişim güvencelerini araçların tasarımına baştan yerleştiriyorum. Sorumluluk, insan incelemesi ve belgeleme içeren, denetime dayanıklı çerçeveler kuruyorum.",
      "work.a3.t": "Hukuk ekipleri için üretken yapay zeka dönüşümü",
      "work.a3.d": "Hukuk operasyonlarında kur ya da satın al kararını, benimseme yolunu ve ölçülebilir pilotları birlikte tasarlıyorum. Amaç, aracı değil, aracın çevresindeki disiplini kurmak.",
      "work.a4.t": "Kişisel verilerin korunması ve veri egemenliği",
      "work.a4.d": "KVKK ve GDPR çerçevesinde sınır ötesi veri aktarımı, taahhütname ve tasarımda mahremiyet konularında danışmanlık veriyorum. Veri egemenliği gereklerini pratik yollara bağlıyorum.",
      "work.a5.t": "E-ticaret ve platform regülasyonu",
      "work.a5.d": "Pazaryeri operasyonu, aracı sorumluluğu ve 5651 sayılı Kanun kapsamındaki bildir kaldır süreçleri üzerine çalışıyorum. Tüketici hukuku, reklam ve ödeme temas noktaları da bu alanın parçası.",
      "work.a6.t": "Rekabet ve dijital pazarlar",
      "work.a6.d": "Rekabet Kurumu incelemelerinde savunma stratejisi kuruyorum, fiyat paritesi, ürün paketleme ve sıralama uygulamaları gibi konularda çalışıyorum. Algoritmik hesap verebilirlik özel odak noktam.",

      "ap.kicker": "YAKLAŞIM",
      "ap.title": "Nasıl çalışıyorum",
      "ap.p1.t": "Satıcı değil, uygulayıcı gözü",
      "ap.p1.d": "Bir ürünü pazarlamak için değil, hukuk işinin içinden konuşuyorum. Neyin gerçekten işe yaradığını, hangi kısayolun sonradan risk biriktirdiğini uygulama deneyimiyle ayırt ediyorum.",
      "ap.p2.t": "Hızı mümkün kılan güvenceler",
      "ap.p2.d": "Yaklaşımım evet, şu koşulla mantığına dayanıyor. İyi kurulmuş güvenceler işi yavaşlatmaz, tam tersine güvenle hızlanmayı mümkün kılar.",
      "ap.p3.t": "Ölçülebilir pilotlar, insan incelemesi",
      "ap.p3.d": "Bir çözümün işe yarayıp yaramadığı hislerle değil, ölçülebilir pilotlarla anlaşılır. Aracın hiçbir çıktısı, bir hukukçunun incelemesinden geçmeden dışa çıkmaz.",
      "ap.quote": "“Faydalı cevap çoğu zaman düz bir evet ya da hayır değildir; evet, şu koşulla.”",
      "ap.quote.by": "Çalışma ilkesi",

      "exp.kicker": "DENEYİM",
      "exp.title": "Yirmi yıl, regülatörlerin karşısında",
      "exp.lede": "Yirmi yılı aşkın süredir küresel teknoloji ve pazaryeri şirketlerinde şirket içi hukuk, regülasyon, kurumsal ilişkiler ve kamu politikası liderliği yapıyorum; çoğu regüle pazarlarda.",
      "exp.body": "Bu süre boyunca kanuni yönetim kurulu görevleri üstlendim; soruşturmalar, lisans soruları ve pazara giriş süreçlerinde hukuk fonksiyonlarına liderlik ettim. Yapay zeka üzerine söylediklerim bu uygulama zeminine dayanıyor.",
      "exp.f1": "Şirket içi hukuk ve regülasyon liderliği",
      "exp.f2": "Kanuni yönetim kurulu üyeliği",
      "exp.f3": "Ankara Barosu",
      "exp.link": "Kariyer geçmişi",
      "exp.href": "https://lexsas.com/tr/hakkinda.html",

      "ins.kicker": "SON YAZILAR",
      "ins.title": "Hukuk, regülasyon ve yapay zeka üzerine notlar",
      "ins.1.d": "Temmuz 2026",
      "ins.1.t": "Saatlik ücretin mantığı tükeniyor",
      "ins.1.s": "Yapay zeka saatin kendisini değersizleştiriyor. Yeni nesil bürolar zamanı değil işi fiyatlıyor.",
      "ins.1.href": "https://lexsas.com/tr/yazilar/saatlik-ucretin-otesi.html",
      "ins.2.d": "Temmuz 2026",
      "ins.2.t": "Yapay zeka hukuk sektörünü sessizce yeniden çiziyor",
      "ins.2.s": "Benimseme bir yılda ikiye katlandı. Avantaj kadrodan muhakemeye ve iş akışı tasarımına kayıyor.",
      "ins.2.href": "https://lexsas.com/tr/yazilar/yapay-zeka-hukuku-yeniden-ciziyor.html",
      "ins.3.d": "Temmuz 2026",
      "ins.3.t": "Hukukçunun saatleri gerçekte nereye gidiyor",
      "ins.3.s": "Ortalama avukat günün küçük bir kısmını faturalandırabiliyor. Otomasyonun geri kazandırdıkları ve nereden başlamalı.",
      "ins.3.href": "https://lexsas.com/tr/yazilar/hukuki-isin-saatleri.html",

      "faq.kicker": "SSS",
      "faq.title": "Sık sorulan sorular",
      "faq.1.q": "LEXSAS ne yapar?",
      "faq.1.a": "LEXSAS, hukuki iş akışı otomasyonu ve danışmanlığa odaklanan bir yapay zeka legal-tech girişimidir. Hukuk ve regülasyon ekipleri için talep karşılamadan doküman ve bilgi iş akışlarına, araştırmadan uyum operasyonlarına uzanan yapay zeka destekli araçlar tasarlar; gizlilik, fikri mülkiyet ve yönetişim güvenceleri baştan kuruludur.",
      "faq.2.q": "Danışmanlık hangi alanları kapsıyor?",
      "faq.2.a": "Hukuk teknolojileri ve yapay zeka yönetişimi, regüle dijital pazarlarda regülasyon ve kurumsal ilişkiler, e-ticaret ve platform regülasyonu, KVKK ve GDPR kapsamında veri koruma ile dijital pazarlarda rekabet soruları. Arkasında küresel teknoloji, tüketici ve pazaryeri şirketlerinde yirmi yılı aşkın hukuk direktörlüğü ve regülasyon liderliği deneyimi var.",
      "faq.3.q": "LEXSAS'ın arkasında kim var?",
      "faq.3.a": "White & Case'te avukatlıkla başlayıp Amazon, eBay ve Philip Morris International'da yirmi yılı aşkın süre şirket içi hukuk ve regülasyon liderliği yapan Asım Serdar Yılmaz.",
      "faq.4.q": "Hangi dillerde çalışıyorsunuz?",
      "faq.4.a": "Türkçe ve İngilizce. Danışmanlık, yazı ve konuşmacılık İstanbul'dan ve uzaktan yürütülüyor.",
      "faq.5.q": "Bu bir avukatlık hizmeti mi?",
      "faq.5.a": "Hayır. LEXSAS hukuk teknolojileri, yapay zeka yönetişimi ve regülasyon stratejisi üzerine bilgilendirme amaçlı danışmanlık sunar; bir hukuk bürosu değildir ve hukuki temsil hizmeti vermez.",

      "ct.kicker": "İLETİŞİM",
      "ct.title": "Konuşalım.",
      "ct.note": "Yapay zeka yönetişimi, regüle dijital pazarlar ve hukuk operasyonları üzerine danışmanlık. Konuşma ve yönetim kurulu davetlerine de açığım, Türkçe ya da İngilizce.",

      "ft.disclaimer": "Bu sitedeki içerik yalnızca genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Sitenin kullanımı avukat-müvekkil ilişkisi doğurmaz. Buradaki görüşler kişiseldir ve mevcut ya da geçmiş hiçbir işvereni bağlamaz.",
      "ft.rights": "© 2026 LEXSAS · İstanbul",
      "ft.top": "Başa dön"
    }
  };

  /* ---------- Language handling ---------- */

  const langToggle = document.getElementById("langToggle");
  const heroTitle = document.getElementById("heroTitle");
  const expLink = document.getElementById("expLink");
  let currentLang = "en";

  function applyDict(lang) {
    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll(".insight-row[data-ins]").forEach((row) => {
      const href = dict[`ins.${row.getAttribute("data-ins")}.href`];
      if (href) row.setAttribute("href", href);
    });
    if (expLink && dict["exp.href"]) expLink.setAttribute("href", dict["exp.href"]);

    document.documentElement.setAttribute("lang", lang);
    langToggle.textContent = lang === "en" ? "TR" : "EN";
    langToggle.setAttribute(
      "aria-label",
      lang === "en" ? "Türkçe sürüme geç" : "Switch to English"
    );
    currentLang = lang;
    try { localStorage.setItem("lexsas-lang", lang); } catch (e) { /* private mode */ }
  }

  function setLang(lang, instant) {
    if (lang === currentLang && !instant) return;
    if (instant || reducedMotion) {
      applyDict(lang);
      splitHeroTitle();
      return;
    }
    document.body.classList.add("lang-swap");
    window.setTimeout(() => {
      applyDict(lang);
      splitHeroTitle();
      document.body.classList.remove("lang-swap");
    }, 190);
  }

  langToggle.addEventListener("click", () => {
    setLang(currentLang === "en" ? "tr" : "en", false);
  });

  /* ---------- Hero title: word-split blur entrance ---------- */

  function splitHeroTitle() {
    if (reducedMotion) return;
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

  /* ---------- Scroll reveals ---------- */

  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealIO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));

  /* ---------- Signature progress line ---------- */

  const progressBar = document.getElementById("progressBar");
  let progressTicking = false;

  function updateProgress() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    progressTicking = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!progressTicking) {
        window.requestAnimationFrame(updateProgress);
        progressTicking = true;
      }
    },
    { passive: true }
  );
  updateProgress();

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

  const workIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const area = entry.target;
        const idx = areas.indexOf(area);
        workNum.textContent = area.getAttribute("data-num");
        workSticky.style.setProperty("--acc", accents[area.getAttribute("data-accent")]);
        workBar.style.width = `${((idx + 1) / areas.length) * 100}%`;
      });
    },
    { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
  );
  areas.forEach((area) => workIO.observe(area));

  /* ---------- FAQ accordion (single open) ---------- */

  const faqItems = Array.from(document.querySelectorAll(".faq-item"));
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
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

  const onTrPath = window.location.pathname.startsWith("/tr");
  let stored = null;
  try { stored = localStorage.getItem("lexsas-lang"); } catch (e) { /* ignore */ }
  const initial = onTrPath ? "tr" : (stored || ((navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en"));
  if (initial !== "en") setLang(initial, true);

  splitHeroTitle();

  /* triggers the drawn-mark animation and orbit labels */
  window.requestAnimationFrame(() => document.body.classList.add("loaded"));
})();
