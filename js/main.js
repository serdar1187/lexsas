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

      "cred.1": "20+ years in legal and regulatory work",
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
      "work.a4.d": "Cross-border data transfer and localisation questions under KVKK and GDPR, including undertakings and the practical controls needed when regulatory expectations change.",
      "work.a5.t": "E-commerce and platform regulation",
      "work.a5.d": "Marketplace and platform rules across consumer protection, advertising, intermediary liability and payments touchpoints. This includes licensing perimeter questions and the controls that keep a platform compliant at scale.",
      "work.a6.t": "Competition and digital markets",
      "work.a6.d": "Antitrust strategy for platforms, covering parity clauses, ranking practices, pricing algorithms and the controls needed for accountable digital markets.",

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
      "exp.lede": "I bring more than 20 years of legal and regulatory experience, most of it in-house, across global technology, consumer and marketplace businesses. That experience combines legal directorship with regulatory affairs, corporate affairs and public policy in regulated markets.",
      "exp.body": "That includes statutory board roles and leading legal functions through investigations, licensing questions and market entry. What I say about AI stands on this practitioner ground.",
      "exp.f1": "Legal and regulatory leadership, in-house",
      "exp.f2": "Statutory board directorship",
      "exp.f3": "Ankara Bar",
      "exp.link": "Full background",
      "exp.href": "https://lexsas.com/about.html",

      "ins.kicker": "LATEST INSIGHTS",
      "ins.title": "Notes on law, regulation and AI",
      "ins.1.d": "July 2026",
      "ins.1.t": "When an AI workflow fails: an incident protocol for legal teams",
      "ins.1.s": "A short response path for ownership, evidence, containment and restart when an AI-assisted legal workflow goes wrong.",
      "ins.1.href": "https://lexsas.com/insights/ai-incident-response-legal-teams.html",
      "ins.2.d": "July 2026",
      "ins.2.t": "The EU AI Act on 2 August 2026: what actually applies",
      "ins.2.s": "The adopted Digital Omnibus sets new high-risk application dates in 2027 and 2028; as of 18 July 2026 it awaited publication and entry into force. Article 50 duties become applicable on 2 August.",
      "ins.2.href": "https://lexsas.com/insights/eu-ai-act-august-2026.html",
      "ins.3.d": "July 2026",
      "ins.3.t": "AI citation errors: a verification protocol for legal teams",
      "ins.3.s": "An independent database listed more than 1,770 cases as of 18 July 2026 in which courts or tribunals addressed generative-AI hallucinations or, in some entries, alleged AI use. A five-step verification protocol.",
      "ins.3.href": "https://lexsas.com/insights/ai-citation-verification.html",

      "faq.kicker": "FAQ",
      "faq.title": "Common questions",
      "faq.1.q": "What does LEXSAS do?",
      "faq.1.a": "LEXSAS is an AI legal-tech venture focused on legal workflow automation and advisory. It designs AI-enabled tooling for legal and regulatory teams, from intake and document workflows to research and compliance operations, and advises on responsible adoption with privacy, IP and governance guardrails built in.",
      "faq.2.q": "Which areas does the advisory work cover?",
      "faq.2.a": "Legal technology and AI governance, regulatory affairs and corporate affairs in regulated digital markets, e-commerce and platform regulation, data protection under KVKK and GDPR, and competition questions in digital markets. The work is grounded in more than 20 years of legal and regulatory experience, most of it in-house, across global technology, consumer and marketplace businesses.",
      "faq.3.q": "Who is behind LEXSAS?",
      "faq.3.a": "Asim Serdar Yilmaz, founder of LEXSAS and a senior legal and regulatory affairs leader with more than 20 years of experience, most of it in-house, following private practice at White & Case.",
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

      "cred.1": "20+ yıl hukuk ve regülasyon deneyimi",
      "cred.3": "Kanuni yönetim kurulu üyeliği",
      "cred.4": "Ankara Barosu",

      "wordmark.sub": "EST. 2026 · ISTANBUL · EN / TR",

      "work.kicker": "ÇALIŞMA ALANLARI",
      "work.title": "Altı alan, tek çalışma standardı",
      "work.note": "Talep otomasyonundan rekabet savunmasına kadar her çalışmada gerekli güvenceleri baştan kuruyorum.",
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
      "ap.p1.t": "Ürün satışı değil, uygulama deneyimi",
      "ap.p1.d": "Bir ürünü pazarlamak için değil, hukuk işinin içinden konuşuyorum. Neyin gerçekten işe yaradığını, hangi kısayolun sonradan risk biriktirdiğini uygulama deneyimiyle ayırt ediyorum.",
      "ap.p2.t": "Hızı mümkün kılan güvenceler",
      "ap.p2.d": "Yaklaşımım, “evet, şu koşulla” ilkesine dayanıyor. İyi tasarlanmış güvenceler işi yavaşlatmak yerine güvenli biçimde hızlandırabilir.",
      "ap.p3.t": "Ölçülebilir pilotlar, insan incelemesi",
      "ap.p3.d": "Bir çözümün işe yarayıp yaramadığı hislerle değil, ölçülebilir pilotlarla anlaşılır. Aracın hiçbir çıktısı, bir hukukçunun incelemesinden geçmeden dışa çıkmaz.",
      "ap.quote": "“Faydalı cevap çoğu zaman düz bir evet ya da hayır değildir; evet, şu koşulla.”",
      "ap.quote.by": "Çalışma ilkesi",

      "exp.kicker": "DENEYİM",
      "exp.title": "Düzenlemeye tabi pazarlarda yirmi yılı aşkın deneyim",
      "exp.lede": "Hukuk ve regülasyonda yirmi yılı aşkın deneyimim var; bu sürenin çoğu küresel teknoloji, tüketici ve pazaryeri şirketlerinde, şirket içinde geçti. Hukuk direktörlüğünü regülasyon, kurumsal ilişkiler ve kamu politikası liderliğiyle birleştirdim.",
      "exp.body": "Bu süre boyunca kanuni yönetim kurulu görevleri üstlendim; soruşturmalar, lisans soruları ve pazara giriş süreçlerinde hukuk fonksiyonlarına liderlik ettim. Yapay zeka üzerine söylediklerim bu uygulama zeminine dayanıyor.",
      "exp.f1": "Şirket içi hukuk ve regülasyon liderliği",
      "exp.f2": "Kanuni yönetim kurulu üyeliği",
      "exp.f3": "Ankara Barosu",
      "exp.link": "Kariyer geçmişi",
      "exp.href": "https://lexsas.com/tr/hakkinda.html",

      "ins.kicker": "SON YAZILAR",
      "ins.title": "Hukuk, regülasyon ve yapay zeka üzerine notlar",
      "ins.1.d": "Temmuz 2026",
      "ins.1.t": "Yapay zeka iş akışı aksadığında: hukuk ekipleri için olay müdahale protokolü",
      "ins.1.s": "Yapay zeka destekli bir hukuk iş akışı aksadığında sorumluluğu, kayıtların korunmasını, sınırlamayı ve yeniden başlatmayı düzenleyen kısa bir müdahale protokolü.",
      "ins.1.href": "https://lexsas.com/tr/yazilar/hukuk-ekiplerinde-yapay-zeka-olay-mudahalesi.html",
      "ins.2.d": "Temmuz 2026",
      "ins.2.t": "AB Yapay Zeka Tüzüğü: 2 Ağustos 2026'da uygulanmaya başlayanlar",
      "ins.2.s": "Kabul edilen Dijital Omnibus, yüksek riskli sistemler için 2027 ve 2028'de yeni uygulama tarihleri belirliyor; 18 Temmuz 2026 itibarıyla yayımlanmayı ve yürürlüğe girmeyi bekliyor. Madde 50 yükümlülükleri 2 Ağustos'ta uygulanmaya başlıyor.",
      "ins.2.href": "https://lexsas.com/tr/yazilar/ab-yapay-zeka-tuzugu-agustos-2026.html",
      "ins.3.d": "Temmuz 2026",
      "ins.3.t": "Yapay zeka kaynaklı atıf hataları: hukuk ekipleri için doğrulama protokolü",
      "ins.3.s": "Bağımsız bir veritabanı, 18 Temmuz 2026 itibarıyla mahkemelerin ya da diğer yargı mercilerinin üretken yapay zeka halüsinasyonlarını veya bazı kayıtlarda yalnızca ileri sürülen yapay zeka kullanımını ele aldığı 1.770'ten fazla vakayı listeliyordu. Beş adımlık doğrulama protokolü.",
      "ins.3.href": "https://lexsas.com/tr/yazilar/yapay-zeka-atif-dogrulama.html",

      "faq.kicker": "SSS",
      "faq.title": "Sık sorulan sorular",
      "faq.1.q": "LEXSAS ne yapar?",
      "faq.1.a": "LEXSAS, hukuki iş akışı otomasyonu ve danışmanlığa odaklanan bir yapay zeka legal-tech girişimidir. Hukuk ve regülasyon ekipleri için talep karşılamadan doküman ve bilgi iş akışlarına, araştırmadan uyum operasyonlarına uzanan yapay zeka destekli araçlar tasarlar; gizlilik, fikri mülkiyet ve yönetişim güvenceleri baştan kuruludur.",
      "faq.2.q": "Danışmanlık hangi alanları kapsıyor?",
      "faq.2.a": "Hukuk teknolojileri ve yapay zeka yönetişimi, düzenlemeye tabi dijital pazarlarda regülasyon ve kurumsal ilişkiler, e-ticaret ve platform regülasyonu, KVKK ve GDPR kapsamında veri koruma ile dijital pazarlarda rekabet soruları. Bu çalışmalar, 20 yılı aşkın hukuk ve regülasyon deneyimine dayanıyor; bu sürenin çoğu küresel teknoloji, tüketici ve pazaryeri şirketlerinde, şirket içinde geçti.",
      "faq.3.q": "LEXSAS'ın arkasında kim var?",
      "faq.3.a": "LEXSAS'ın kurucusu Asım Serdar Yılmaz, White & Case'te başlayan kariyerinde Amazon ve eBay dahil küresel şirketlerde 20 yılı aşkın hukuk ve regülasyon deneyimi edindi; bu sürenin çoğu şirket içinde geçti.",
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
    if (langToggle && langToggle.tagName === "BUTTON") {
      langToggle.textContent = lang === "en" ? "TR" : "EN";
      langToggle.setAttribute(
        "aria-label",
        lang === "en" ? "Türkçe sürüme geç" : "Switch to English"
      );
    }
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

  if (langToggle && langToggle.tagName === "BUTTON") {
    langToggle.addEventListener("click", () => {
      setLang(currentLang === "en" ? "tr" : "en", false);
    });
  }

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

  if (progressBar) {
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
      progressTicking = false;
    };
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
  const initial = onTrPath ? "tr" : "en";
  if (initial !== "en") setLang(initial, true);

  splitHeroTitle();

  /* triggers the drawn-mark animation and orbit labels */
  window.requestAnimationFrame(() => document.body.classList.add("loaded"));
})();
