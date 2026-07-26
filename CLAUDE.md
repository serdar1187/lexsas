# CLAUDE.md

Bilingual static site for **lexsas.com**: the AI legal-tech venture site of Asım Serdar
Yılmaz. Served by GitHub Pages straight from `master`, no build step.
Design spec: `docs/superpowers/specs/2026-07-04-lexsas-website-design.md` (written before
the 2026-07-27 rebuild; where it and this file disagree, this file is current).

## Deployment

- `git push origin master` → GitHub Pages rebuilds in ~40-60s. Verify with
  `curl -s -o /dev/null -w "%{http_code}" https://lexsas.com/<page>`.
- **`.nojekyll` must never be deleted.** Without it Jekyll runs, Liquid chokes on the
  `{{TOKEN}}` placeholders in `content/*.md`, and every build fails.
- `CNAME` (content: `lexsas.com`) must stay. If the TLS cert ever gets stuck on
  `*.github.io`, unbind/rebind the custom domain via `gh api` PUT `/repos/.../pages`
  (cname="" then cname=lexsas.com); GitHub auto-commits CNAME changes, so `git pull` after.
- **Everything committed here becomes a public URL.** Before pushing a new directory, ask
  whether it should be reachable at `lexsas.com/<dir>/`. This has bitten the repo once.
- **`git status` before every push.** Fonts and `tr/feed.xml` once sat untracked while 49
  pages linked them; a push would have served 404s for both font families.

## Content rules (owner's hard constraints)

1. **No em-dashes anywhere** (site copy, code comments, commit messages to the owner).
   Use commas, semicolons or colons instead. The generated pages under `admin/` and
   `rapor/` come from a separate project and are exempt.
2. **No monetary or percentage figures about the owner's own career** (no "$20M deals").
   Cited third-party statistics in articles are fine and must carry a source link in the
   `.article-sources` block **and** a matching entry in the JSON-LD `citation` array.
3. Legal Tech AI / workflow automation topics lead; career detail lives on About only.
4. This is informational consultancy, **not legal representation**: keep the footer
   disclaimer on every page; no attorney-advertising language; the owner's phone number
   must never appear. Public contact: serdar@lexsas.com. Service copy describes advisory,
   governance and controls; it never describes acting for a client in a proceeding.
5. Canonical positioning = the LinkedIn "Founder of Lexsas" entry (AI legal-tech venture,
   legal workflow automation and advisory, guardrails built in), blended with the owner's
   regulatory affairs, corporate affairs and public policy leadership.
6. **The owner's CURRENT employer is never named on this site** (advertising-restriction
   sensitivity): describe it generically as "a global group in a highly regulated
   industry". Historical employers (Amazon, eBay, PMI, White & Case) may be named as
   past roles with closed date ranges.
7. **A cited source must actually contain the claim.** Open the page before citing it. If
   the figure lives in a report but the linkable page is only a summary, attribute the
   report by name, authors and date in the sentence itself.

## Structure and i18n

- English pages at the root, Turkish mirrors under `tr/` (index/hakkinda/yazilar/iletisim,
  articles under `tr/yazilar/`, LinkedIn posts under `tr/linkedin-gonderileri/`). Every
  page pair carries `hreflang` en/tr/x-default links, a `lang-toggle` link to its twin,
  and its own canonical + og:url.
- **Language is switched by plain links between two static trees.** There is no runtime
  translation. A client-side dictionary existed until 2026-07-27, never actually ran, and
  was overwriting authored Turkish copy on `/tr/` paths; it is deleted. Do not reintroduce
  it: per-page static HTML is what makes hreflang and canonical honest.
- Turkish copy is **equivalent production, not literal translation** (owner is a native
  speaker and rejects calques). Watch for dictionary calques in legal terms: write the
  phrase a Turkish practitioner uses, not the one a dictionary returns.
- Turkish pages carry Turkish accessible names: `aria-label="LEXSAS ana sayfa"` on the
  brand, `"Ana"` on the primary nav, `"Diğer yazılar"` on the article nav.
- Two RSS feeds: `feed.xml` is English only, `tr/feed.xml` is Turkish only, and each page
  points at its own language's feed.
- `sitemap.xml`, `llms.txt`, `llms-full.txt` and both feeds must be updated whenever pages
  are added or bodies change.

## Design system

- Paper `#FCFCFA`, ink `#22272C`, muted `#5B6570`, line `#E8E6E1` (also `--hairline`).
  Brand colors (blue `#2E7CF6`, red `#E8503A`, yellow `#F5B301`, green `#2FA05A`) appear
  ONLY in the logo, the 2px signature gradient line, and non-text card accents. Restraint
  is the brand.
- **Brand colours never carry text.** All four fail WCAG AA on paper at label sizes; yellow
  measures 1.85:1. Accents live on rules, borders and bars, which have no contrast duty.
- Source Serif 4 (roman + a latin italic for case names) and Manrope, both self-hosted from
  `assets/fonts/` under the SIL Open Font License, declared at the top of `css/style.css`.
  No Google Fonts request: the site argues for data governance and should not leak every
  visitor's IP to a third party. Metric-matched fallbacks are cut from Times and Helvetica,
  not Georgia: measures are in `ch`, and `ch` scales with the fallback, so `size-adjust`
  alone cancels out.
- One stylesheet, `css/style.css`, ordered base → responsive → print. One small script,
  `js/main.js` (~7KB): reveal observer, FAQ accordion, reading progress, hero gating.
- **JavaScript is an enhancement and must never be load-bearing.** `.reveal` is visible by
  default and hidden only under the `js` class, which an inline head script sets. If the
  script fails to load, every page must still read completely. Test by blocking
  `/js/main.js` with scripting still enabled, not just by disabling scripting.
- Illustrations are hand-drawn brand SVGs, inline in the page. Do not add stock imagery.

## SEO / AI-discoverability layer (keep in sync)

- Every page has a JSON-LD `@graph`: Organization + Person + WebSite + a page-type node
  (Article on articles, FAQPage on both home pages). The `knowsAbout` keyword list is
  duplicated across pages; change it everywhere or nowhere.
- `robots.txt` explicitly welcomes AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).
  There is no `Disallow`. Pages that should stay out of results carry a `noindex` meta
  instead, because a disallowed page is never fetched and so its `noindex` is never read.
- `llms.txt` is the AI-agent site summary and `llms-full.txt` the page-by-page dump; both
  must match the live pages.

## Adding an article (the one recurring task)

1. Copy an existing article pair (e.g. `insights/beyond-the-billable-hour.html` +
   `tr/yazilar/saatlik-ucretin-otesi.html`) and replace: title (5 places incl. JSON-LD
   name/headline), description (3 places), canonical/hreflang/og:url URLs, lang-toggle
   href, kicker, body, `datePublished` and `dateModified`.
2. Keep the h1 and lede **inside** the `article` element, so the article's outline starts
   at its own heading.
3. Keep bodies short (~200 words); end with the `.article-end` mark, then the
   `.article-dateline` line, then `.article-sources`.
4. The dateline prints `datePublished` and, when it differs, `dateModified`, read from that
   page's own JSON-LD. **Bump `dateModified` and the dateline whenever the visible text
   changes.** The line is a document-control claim; a stale date makes it a false one.
5. Add an entry (newest first) to `insights.html` and `tr/yazilar.html`; optionally update
   the home-page teaser on both languages.
6. Add both URLs to `sitemap.xml` (with `lastmod`), the EN one to `llms.txt`, the bodies to
   `llms-full.txt`, and an item to the matching language's feed.
7. Validate before pushing: JSON-LD parses, `citation` matches the visible sources, no
   em-dash anywhere, canonicals point at the page itself, English dates read "23 July 2026".

## Related repositories

- `lexsas-tools/`: a NESTED, SEPARATE private repo (github.com/serdar1187/lexsas-tools)
  holding brand and profile materials. Gitignored. Never commit its contents here.
- `izleme-paneli` (github.com/serdar1187/izleme-paneli, local: `~/Documents/izleme-paneli`)
  publishes the encrypted daily internal report into **this** repo at `rapor/` and `admin/`,
  which is why those directories exist and are live. Their pages carry `noindex`, and the
  meta tag lives in that project's templates so a daily publish does not drop it. Do not
  edit those files here; edit the templates there.
- `docs/cv-source.md`: sensitive CV source. Gitignored. Never commit, never surface the
  phone number.

## Owner

Communicates in Turkish; reply in Turkish. Wants Claude to act as orchestrator and design
lead, delegating research and bulk work to subagents, with strategic, design and content
decisions made by Claude and outcomes reported for approval. Claude referees what the
subagents propose rather than accepting it: findings need file:line evidence, and claims
that cannot be verified mechanically are dropped.
