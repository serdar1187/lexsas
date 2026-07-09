# Token manifest (structure owner: design lead)

Scaffold uses `{{TOKEN}}` placeholders. Copy files provide one value per token in
this exact format (blank line between entries; value may span multiple lines):

```
#### {{TOKEN_NAME}}
value text (plain text, or inline HTML like <a>, <em> where noted)
```

Rules for all values: no em-dashes, no en-dashes anywhere; no exclamation marks;
no hype adjectives; the owner's phone number must never appear; no monetary
amounts and no percentage claims anywhere (spec constraint 6); Legal Tech / AI /
workflow automation is the lead theme (spec constraint 7).

## Shared (used on every page)
- NAV_HOME, NAV_ABOUT, NAV_INSIGHTS, NAV_CONTACT: nav labels
- FOOTER_DISCLAIMER: 2-3 sentence disclaimer per spec section 3 (plain text)
- FOOTER_META: e.g. "© 2026 LEXSAS · Istanbul"

## Home (index)
- HOME_TITLE: <title> text; HOME_META_DESC: <=155 chars
- HOME_KICKER: tiny uppercase label (2-4 words)
- HERO_H1: max 12 words; HERO_LEDE: max 3 sentences
- HERO_CTA: short link text (arrow added by template)
- CRED_1..CRED_4: credibility strip facts, each <=6 words
- AREAS_H2: section heading
- AREA_1_TITLE..AREA_6_TITLE and AREA_1_BODY..AREA_6_BODY:
  six focus areas per spec section 6 (Legal Tech & AI Workflow Automation leads),
  body = 2 sentences each
- APPROACH_H2: section heading
- APPROACH_1_TITLE..APPROACH_3_TITLE: short serif statement (<=6 words)
- APPROACH_1_BODY..APPROACH_3_BODY: 2 sentences each
- EXP_H2: short heading; EXP_BODY: one general paragraph, 2-3 sentences, no
  company-by-company detail, no figures; EXP_LINK: link text to the About page
- INSIGHT_H2: heading; INSIGHT_DATE (e.g. "July 2026" / "Temmuz 2026");
  INSIGHT_TITLE; INSIGHT_SUMMARY (1 sentence); INSIGHT_MORE (link text)
- CTA_H2; CTA_BODY (1-2 sentences); CTA_LINK (link text)

## About
- ABOUT_TITLE; ABOUT_META_DESC
- ABOUT_KICKER; ABOUT_H1
- BIO_P1..BIO_P4: narrative bio paragraphs
- TIMELINE_H2
- JOB_0 (Lexsas, current): JOB_0_DATES ("2026-present" / "2026-günümüz"),
  JOB_0_ROLE (Founder / Kurucu), JOB_0_COMPANY (LEXSAS), JOB_0_B1..JOB_0_B3:
  three bullets from the canonical positioning in spec section 1
- JOB_1 (Amazon): JOB_1_DATES, JOB_1_ROLE, JOB_1_COMPANY, JOB_1_B1..JOB_1_B5
- JOB_2 (eBay/GittiGidiyor): JOB_2_DATES, JOB_2_ROLE, JOB_2_COMPANY, JOB_2_B1..JOB_2_B4
- JOB_3 (PMI): JOB_3_DATES, JOB_3_ROLE, JOB_3_COMPANY, JOB_3_B1..JOB_3_B4
- JOB_4 (White & Case): JOB_4_DATES, JOB_4_ROLE, JOB_4_COMPANY, JOB_4_B1..JOB_4_B4
- BOARD_H2; BOARD_BODY: 2-3 sentences on statutory board roles
- EDU_H2; EDU_1..EDU_3: "Program, Institution (years)" one line each
- COURSES_H2; COURSE_1..COURSE_3: one line each (LSE AI Law first)
- AFFIL_LINE: bar affiliation + languages, one line

## Insights index
- INSIGHTS_TITLE; INSIGHTS_META_DESC
- INSIGHTS_KICKER; INSIGHTS_H1; INSIGHTS_INTRO: 1-2 sentences
- ART_1_DATE; ART_1_TITLE; ART_1_SUMMARY (1 sentence)

## Seed article
- ARTICLE_TITLE; ARTICLE_META_DESC; ARTICLE_DATE; ARTICLE_READTIME
  (e.g. "6 min read" / "6 dk okuma")
- ARTICLE_BODY_HTML: full article body as HTML: <p>, <h2>, <ul>/<li> only,
  ~800-900 words, per spec section 6

## Contact
- CONTACT_TITLE; CONTACT_META_DESC
- CONTACT_KICKER; CONTACT_H1
- CONTACT_BODY: 2-3 sentences (what inquiries are welcome)
- CONTACT_EMAIL_LABEL (e.g. "Email"); CONTACT_LINKEDIN_LABEL; CONTACT_LOCATION_LABEL
- CONTACT_LOCATION_VALUE (e.g. "Istanbul, Turkey" / "İstanbul, Türkiye")

Fixed values (NOT tokens, scaffold hardcodes): email serdar@lexsas.com,
LinkedIn https://www.linkedin.com/in/asimserdaryilmaz/, wordmark "lexsas",
language toggle labels "EN"/"TR", canonical URLs on https://lexsas.com.
