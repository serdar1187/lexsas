# CLAUDE.md

Bilingual static site for **lexsas.com**: the AI legal-tech venture site of Asım Serdar
Yılmaz. Served by GitHub Pages straight from `master` (no build step, zero JavaScript).
Design spec: `docs/superpowers/specs/2026-07-04-lexsas-website-design.md`.

## Deployment

- `git push origin master` → GitHub Pages rebuilds in ~40-60s. Verify with
  `curl -s -o /dev/null -w "%{http_code}" https://lexsas.com/<page>`.
- **`.nojekyll` must never be deleted.** Without it Jekyll runs, Liquid chokes on the
  `{{TOKEN}}` placeholders in `content/*.md`, and every build fails.
- `CNAME` (content: `lexsas.com`) must stay. If the TLS cert ever gets stuck on
  `*.github.io`, unbind/rebind the custom domain via `gh api` PUT `/repos/.../pages`
  (cname="" then cname=lexsas.com); GitHub auto-commits CNAME changes, so `git pull` after.

## Content rules (owner's hard constraints)

1. **No em-dashes anywhere** (site copy, code comments, commit messages to the owner).
   Use commas, semicolons or colons instead.
2. **No monetary or percentage figures about the owner's own career** (no "$20M deals").
   Cited third-party statistics in articles are fine and should carry a source link in
   the `.article-sources` block.
3. Legal Tech AI / workflow automation topics lead; career detail lives on About only.
4. This is informational consultancy, **not legal representation**: keep the footer
   disclaimer on every page; no attorney-advertising language; the owner's phone number
   must never appear. Public contact: serdar@lexsas.com.
5. Canonical positioning = the LinkedIn "Founder of Lexsas" entry (AI legal-tech venture,
   legal workflow automation and advisory, guardrails built in).

## Structure and i18n

- English pages at the root, Turkish mirrors under `tr/` (index/hakkinda/yazilar/iletisim,
  articles under `tr/yazilar/`). Every page pair carries `hreflang` en/tr/x-default links,
  a `lang-toggle` nav link to its twin, and its own canonical + og:url.
- Turkish copy is **equivalent production, not literal translation** (owner is a native
  speaker and rejects calques).
- `sitemap.xml`, `llms.txt` and `robots.txt` must be updated whenever pages are added.

## Design system

- Paper `#FCFCFA`, ink `#22272C`, muted `#5B6570`, line `#E8E6E1`. Brand colors (blue
  `#2E7CF6`, red `#E8503A`, yellow `#F5B301`, green `#2FA05A`) appear ONLY in the logo,
  the 2px signature gradient line, and card left-border accents. Restraint is the brand.
- Source Serif 4 for headings, Manrope for body. No JavaScript anywhere.
- Illustrations are hand-drawn brand SVGs (`assets/img/hero-workflow.svg`,
  `assets/img/time-dissolve.svg`); do not add stock imagery or "10 colorful images".

## SEO / AI-discoverability layer (keep in sync)

- Every page has a JSON-LD `@graph`: Organization + Person + WebSite + a page-type node
  (Article on articles, FAQPage on both home pages). The `knowsAbout` keyword list is
  duplicated across pages; change it everywhere or nowhere.
- `robots.txt` explicitly welcomes AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).
- `llms.txt` is the AI-agent site summary; add new articles to it.

## Adding an article (the one recurring task)

1. Copy an existing article pair (e.g. `insights/beyond-the-billable-hour.html` +
   `tr/yazilar/saatlik-ucretin-otesi.html`) and replace: title (5 places incl. JSON-LD
   name/headline), description (3 places), canonical/hreflang/og:url URLs, lang-toggle
   href, kicker (date + read time), body, `datePublished`.
2. Keep bodies short (~200 words); end with a `.article-sources` block listing sources.
3. Add an `.article-item` entry (newest first) to `insights.html` and `tr/yazilar.html`;
   optionally update the home-page `insight-teaser` on both languages.
4. Add both URLs to `sitemap.xml` (with `lastmod`) and the EN one to `llms.txt`.
5. Validate before pushing: JSON-LD parses, no em-dash character anywhere, canonicals
   point at the page itself.

## Not committed (gitignored)

- `docs/cv-source.md`: sensitive CV source. Never commit, never surface the phone number.
- `lexsas-tools/`: a NESTED, SEPARATE private repo (github.com/serdar1187/lexsas-tools)
  holding brand/profile materials. Never commit its contents to this repo: everything
  committed here becomes a public URL on lexsas.com.

## Owner

Communicates in Turkish; reply in Turkish. Wants Claude to act as orchestrator/design
lead using Sonnet/Opus subagents for research and bulk work, with strategic, design and
content decisions made by Claude and outcomes reported for approval.
