# LEXSAS.com Website Design Specification

Date: 2026-07-04
Owner: Asım Serdar Yılmaz (ASY)
Design lead / final decision: orchestrating agent (this session)

## 1. Purpose and positioning

Personal consultancy website for lexsas.com. Positions ASY at the intersection of
law, regulation and AI: a senior in-house legal leader (Amazon Turkey Legal Director,
ex-eBay, ex-PMI, ex-White & Case) offering **informational consultancy** on legal
technology, AI governance and regulated digital markets.

**Canonical positioning (owner's LinkedIn, Founder of Lexsas, Mar 2026-present,
verbatim source; site copy aligns with this but rewrites without em-dashes):**
"An AI legal-tech venture focused on legal workflow automation and advisory.
I design and advise on AI-enabled tools that streamline legal and regulatory work:
intake, document and knowledge workflows, research, and compliance operations,
with privacy, IP and governance guardrails built in. Bridging 20+ years of
hands-on legal and regulatory leadership with practical, responsible AI adoption
for legal teams."

LEXSAS is therefore presented as a venture founded in 2026 by Asım Serdar Yılmaz,
who speaks in first person as its founder. The site itself must demonstrate the
expertise: restrained, precise, technically flawless.

## 2. Non-negotiable constraints

1. **Static, zero-JavaScript.** Pure HTML + one CSS file. No build step, no SSG, no
   frameworks, no analytics. Hosted on GitHub Pages with custom domain lexsas.com.
2. **Low maintenance.** Content written to stay valid for years. Articles added at most
   weekly by copying a template file and adding one list item.
3. **Bilingual.** English at root (`/`), Turkish under `/tr/`. Equivalent production,
   NOT literal translation. Every page has a language-toggle link to its counterpart
   and `hreflang` alternates.
4. **No em-dashes anywhere** (— or –). Use commas, periods, colons or parentheses.
   This is an absolute owner rule for all copy, both languages, including meta tags.
5. **Tone:** concrete, factual, quietly confident. No hype adjectives ("cutting-edge",
   "world-class", "passionate"), no marketing exclamation, no AI-sounding smoothness.
   Short sentences are fine.
6. **No bragging numbers (owner decision 2026-07-04).** No monetary amounts
   (USD/EUR/TL) and no percentage claims anywhere in site copy, both languages,
   including the article. Achievements are described qualitatively ("closed with no
   penalty", "materially reduced", "Turkey's first approved data transfer
   undertaking"). This is a consultancy site, not a CV or job-search page.
7. **Theme priority (owner decision 2026-07-04).** Legal Tech, AI and workflow
   automation for legal work are the lead theme of the whole site, starting with the
   hero and the first focus areas. Career history supports the theme; it does not
   lead. Detailed experience lives only on the About page.

## 3. Compliance guardrails (copy rules)

- Frame everything as **informational consultancy / advisory**, never as
  "avukatlık hizmeti" or solicitation of legal representation (TR attorney
  advertising restrictions). No "hire me as your lawyer" language. Contact CTA is
  neutral: "Get in touch" / "İletişime geçin".
- Footer disclaimer on every page (small text):
  - EN: content is for general information only; it is not legal advice and does not
    create an attorney-client relationship; views are personal and do not represent
    any current or former employer.
  - TR equivalent.
- Career facts (employers, roles) may be named as biography, exactly as on the CV.
  Outcome/impact descriptions must not attribute confidential matters to a named
  company beyond what the CV already states; prefer "for a global marketplace /
  a global technology company" phrasing in outcome cards.

## 4. Information architecture and file map

```
/index.html                                  EN home
/about.html                                  EN about + detailed CV
/insights.html                               EN articles index
/insights/genai-for-legal-teams.html         EN seed article
/contact.html                                EN contact
/tr/index.html                               TR home
/tr/hakkinda.html                            TR about + CV
/tr/yazilar.html                             TR articles index
/tr/yazilar/hukuk-ekiplerinde-uretken-yapay-zeka.html   TR seed article
/tr/iletisim.html                            TR contact
/404.html                                    bilingual minimal 404
/assets/css/site.css                         single stylesheet
/assets/brand/*                              logo set (already present)
/robots.txt, /sitemap.xml, /CNAME
```

Language toggle map (each page links exactly to its counterpart):

| EN | TR |
|---|---|
| /index.html | /tr/index.html |
| /about.html | /tr/hakkinda.html |
| /insights.html | /tr/yazilar.html |
| /insights/genai-for-legal-teams.html | /tr/yazilar/hukuk-ekiplerinde-uretken-yapay-zeka.html |
| /contact.html | /tr/iletisim.html |

All internal links are **root-relative** (`/about.html`, `/tr/yazilar.html`) so they
work identically at lexsas.com.

## 5. Design system

### Tokens (CSS custom properties)

```css
--paper:  #FCFCFA;   /* page background, warm off-white */
--ink:    #22272C;   /* primary text, matches logo X */
--muted:  #5B6570;   /* secondary text */
--line:   #E8E6E1;   /* hairline borders */
--card:   #FFFFFF;   /* card surfaces */
--blue:   #2E7CF6;  --red: #E8503A;  --yellow: #F5B301;  --green: #2FA05A;
```

The four brand colors appear ONLY in: (a) the logo mark, (b) a 2px "signature line"
(horizontal linear-gradient blue→red→yellow→green) directly under the header nav,
(c) optional 3px left-border accents on outcome cards (one brand color each, muted
use). Nowhere else. The site reads as monochrome ink-on-paper at first glance.

### Typography

- Headings: **"Source Serif 4"**, weights 500/600. Google Fonts.
- Body, nav, UI: **"Manrope"**, weights 400/500/600/700 (wordmark font). Google Fonts.
- Wordmark in header: lowercase "lexsas", Manrope 700, letter-spacing -0.02em,
  next to `lexsas-mark.svg` at 26px height.
- Scale: hero H1 `clamp(2.3rem, 5vw, 3.4rem)` serif 600, line-height 1.15;
  section H2 1.6rem serif 600; H3 1.12rem Manrope 600; body 1.0rem/1.7 Manrope 400;
  `.kicker` label: 0.78rem Manrope 700 uppercase letter-spacing 0.12em color var(--muted).
- Font loading: single Google Fonts `<link>` with preconnect; `font-display: swap`
  implied by `&display=swap`.

### Layout and components

- Shell max-width 1040px, side padding 24px. Generous vertical rhythm:
  sections separated by ~96px desktop / 64px mobile.
- **Header:** logo lockup left, nav right (Home, About, Insights, Contact + language
  toggle "TR" / "EN" styled as a small bordered pill). Sticky NOT required; static.
  Below header: the 2px signature gradient line, full width. Nav wraps on mobile
  (no hamburger, no JS).
- **Hero (home):** kicker, H1 (max 14 words), lede paragraph (max 3 sentences,
  `--muted`, max-width 58ch), one text CTA link with `→` arrow to /contact.html.
- **Credibility strip:** one hairline-bordered row, 4 short facts separated by
  vertical hairlines (e.g. "20+ years in-house", "Amazon · eBay · PMI · White & Case",
  "Statutory board director", "Ankara Bar"). Manrope 500, small.
- **Practice areas:** grid 3×2 (1col mobile), plain cards: hairline border 1px
  var(--line), radius 12px, padding 28px, background var(--card), NO shadows.
  H3 + 2 sentences.
- **Approach:** 3 cards in one row (1col mobile), each with a short serif statement
  (1.25rem) and 2 sentences; 3px left border accents: blue, yellow, green.
- **Experience band:** single centered block, max-width 62ch: short heading, one
  general paragraph (no figures), one text link with `→` arrow to the About page.
- **CV timeline (about):** vertical line 1px var(--line) on left, entries with a 9px
  ink dot, date range in `.kicker` style, role + company H3, 3-5 condensed bullets.
- **Articles index:** simple list, each item: date (kicker style), linked title
  (serif 1.3rem), one-line summary. Hairline separators. No cards, no thumbnails.
- **Article page:** measure 68ch, serif headings, body Manrope 1.05rem/1.8,
  date + reading time in kicker line, back-link to index.
- **Footer:** hairline top border, small logo mark, disclaimer paragraph (0.82rem,
  muted), "© 2026 LEXSAS · Istanbul" + LinkedIn link. Light, not dark.
- **Interactions:** links underline on hover (text-decoration-thickness 1.5px,
  underline-offset 3px); cards get border-color var(--muted) transition on hover.
  Focus-visible outlines 2px var(--blue). `prefers-reduced-motion` respected
  (there are barely any transitions anyway).
- **Responsive:** breakpoints 720px and 980px; everything single-column below 720px.
  No horizontal scroll ever.

### Meta / SEO (every page)

- `<html lang="en">` or `lang="tr">`; unique `<title>` ("Page · LEXSAS") and
  meta description; canonical URL on https://lexsas.com; `hreflang` alternate pair +
  `x-default` → EN; Open Graph (og:title, og:description, og:image =
  /assets/brand/lexsas-avatar-white-1024.png, og:type website/article);
  favicons: favicon-32, favicon-64 (icon), favicon-180 (apple-touch);
  JSON-LD `Person` schema on home + about (name, jobTitle "Legal & AI Governance
  Consultant", sameAs LinkedIn, alumniOf, knowsLanguage).

## 6. Page content skeletons

Copywriters produce final copy for BOTH languages following these skeletons.
Source of truth for facts: the owner's CV (provided in the task prompt).

### Home
1. Hero: positioning around Legal Tech, AI and workflow automation for legal work,
   backed by senior regulatory judgment. Not a CV pitch.
2. Credibility strip (4 short facts, no figures beyond "20+ years").
3. "Focus areas": 6 areas IN THIS ORDER:
   (1) Legal Tech & AI Workflow Automation, (2) AI Governance & Regulatory
   Compliance, (3) GenAI Transformation for Legal Teams (legal ops, build vs buy,
   adoption), (4) Data Protection & Data Sovereignty (KVKK/GDPR), (5) E-commerce &
   Platform Regulation (incl. payments touchpoints), (6) Competition & Digital
   Markets (incl. algorithmic accountability).
4. "Approach": 3 items, e.g. practitioner not vendor; guardrails that enable speed
   ("yes, if"); measurable pilots with human review. Copywriters refine.
5. Experience band: one general paragraph (20+ years in-house, global technology
   and marketplace businesses, regulated markets, board roles; NO company-by-company
   detail, NO figures) + link to About.
6. Latest insight teaser (links to seed article).
7. Contact CTA band.

### About
1. Narrative bio, 3-4 paragraphs: 20+ years, arc from White & Case to Amazon,
   regulated-markets thread, AI governance and legal innovation focus.
2. Full CV timeline: Amazon (2019-), eBay/GittiGidiyor (2012-2019), PMI Dubai/
   Lausanne (2008-2012), White & Case Ankara (2005-2008). 4-5 bullets each,
   condensed from CV, no confidential detail beyond CV, and per constraint 6 no
   monetary amounts or percentages: notable matters (first approved KVKK data
   transfer undertaking, payments licensing exemption model, competition file
   closed with no penalty, materially reduced administrative fine) are described
   qualitatively inside the relevant job's bullets.
3. Board & governance roles; Education (HBS Exec Ed, Mercy College MSc Internet
   Business, Ankara University Law); Courses (LSE AI Law Policy & Governance, WIPO
   series); Affiliations (Ankara Bar); Languages.

### Insights
Intro sentence (what the writing covers: AI, regulation, legal operations).
List with the one seed article.

### Seed article (~800-900 words, practitioner voice, first person)
EN: "What generative AI actually changes for in-house legal teams".
TR: "Hukuk ekiplerinde üretken yapay zeka: gerçekte ne değişiyor?"
Grounded in real experience (GenAI legal tooling on AWS Bedrock, ~30% workload
reduction target, outside counsel dependency). Structure: what does not change /
what actually changes (intake, knowledge retrieval, first drafts) / what to do about
it (guardrails, human review, measurable pilots). Concrete, skeptical of hype,
zero em-dashes.

### Contact
Short paragraph: what kinds of questions are welcome (advisory, speaking,
board/AI-governance). Email: serdar@lexsas.com (mailto link; requires domain
email forwarding via MX records at the DNS provider). LinkedIn:
https://www.linkedin.com/in/asimserdaryilmaz/. Location: Istanbul, Turkey.
No form (static site).

## 7. Build order

1. Scaffold agent (Sonnet): all HTML files with `{{TOKEN}}` placeholders + complete
   site.css per section 5. Placeholders named per skeleton (e.g. `{{HERO_H1}}`,
   `{{AREA_1_TITLE}}`).
2. Copy agents (Opus, parallel): `content/en-copy.md` and `content/tr-copy.md`,
   one `{{TOKEN}}: value` block per page, matching scaffold tokens exactly as listed
   in `content/tokens.md` (scaffold agent writes this token manifest).
3. Assembly agents (Sonnet, parallel per language): replace tokens with copy,
   verify no `{{` remains, verify toggle links + hreflang pairs.
4. Design lead review: visual pass via local preview, polish CSS, final QA
   (links, meta, no em-dash grep), commit.
