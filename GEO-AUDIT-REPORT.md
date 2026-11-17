# GEO Audit Report: IMATEC – Imaging Technology

**Audit Date:** 17 November 2026
**URL:** https://www.imatec.co.za/
**Business Type:** Local Business / Trade Services hybrid (B2B fuser & hot roller recoating workshop in Centurion, Gauteng, plus printer/copier parts, consumables and service-equipment supply to the SA trade)
**Pages Analyzed:** 7 (the full sitemap)

---

## Executive Summary

**Overall GEO Score: 42/100 (Poor)**

Technically, imatec.co.za works well for AI systems. It is server-rendered on Vercel and fast (LCP under 1s, CLS 0). It is fully open to every AI crawler and already ships LocalBusiness, Service, BreadcrumbList and FAQPage JSON-LD. The score is held back by what is *not* on the site and *not* about the site:
- The site gives almost no quotable facts: no turnaround times, prices, coating materials or founding year.
- No named people or reviews appear anywhere.
- Third-party presence is close to nothing, and the brand name collides with several other "Imatec" companies, one in Syria with the identical name "IMATEC (Imaging Technology)".

IMATEC currently does not appear for realistic buyer queries such as "fuser roller recoating South Africa". Most of the fixes need facts from the client rather than new code.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 38/100 | 25% | 9.5 |
| Brand Authority | 18/100 | 20% | 3.6 |
| Content E-E-A-T | 35/100 | 20% | 7.0 |
| Technical GEO | 86/100 | 15% | 12.9 |
| Schema & Structured Data | 46/100 | 10% | 4.6 |
| Platform Optimization | 47/100 | 10% | 4.7 |
| **Overall GEO Score** | | | **42/100** |

> The schema score uses a rubric adapted for a local service business. The generic GEO rubric gives 35/100, because 30 of its points are reserved for Article and Person schema on editorial content this site does not have. On the generic rubric the overall score would be 41.

### What's working
- **Crawler access:** `robots.txt` is `Allow: /` for all agents. GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended and CCBot each receive the identical 200 response, so no firewall or bot layer blocks them.
- **Rendering:** with JavaScript disabled, the main content, meta tags and JSON-LD are all present in the raw HTML (753 words on the homepage).
- **Page basics:** every page has a self-referencing canonical, exactly one H1, a logical heading order, a real 404 for unknown paths, and redirects to www.
- **FAQ markup:** the FAQPage schema is built from the same data as the visible accordion, so it always matches what is on the page.
- **Content quality:** the "recoat vs replace" guidance on /fuser-roller-recoating is honest and useful. It is the strongest content on the site.

---

## Critical Issues (Fix Immediately)

1. **Almost no third-party evidence about the business** (Brand Authority).
   - None found: Google reviews, LinkedIn company page, YouTube, trade press, Reddit or forum mentions.
   - Directory listings (Brabys, Snupit, SAYellow, ThinkLocal and others) exist, but none has reviews.
   - Without this, AI models cannot confirm what IMATEC is, so they don't recommend it.
   - **Fix:** claim or verify a Google Business Profile (category "Printer repair service", the Centurion address, hours, photos) and collect reviews from trade customers.
2. **Brand-name collisions.** "IMATEC" searches go to:
   - IMAtec S.à r.l. in Luxembourg, which also owns `linkedin.com/company/imatec`.
   - IMATEC (Imaging Technology) in Damascus, Syria: same full name, sells medical imaging equipment.
   - Nanjing Imatec Imaging in China (inkjet media).
   - Imatec in New Zealand.

   **Fix:**
   - Always write the name as "IMATEC – Imaging Technology, Centurion, South Africa".
   - Create a LinkedIn page with a distinct slug, such as `imatec-south-africa`.
   - Add every real profile to schema `sameAs`.
   - Fix the footer logo text, which renders as "IMA TEC" and splits the name.
3. **No privacy policy or POPIA notice** (site-wide).
   - The forms collect name, phone and email under a "(POPIA)" consent checkbox, but no policy is linked.
   - **Fix:** add `/privacy` (responsible party, purpose, retention, Information Officer, data-subject rights) and `/terms`, and link both from the forms and the footer.
4. **The "30+ years" claim has no evidence on the site** (/, /about, /fuser-roller-recoating).
   - The founding year is still PENDING in `config/site.ts`.
   - **Fix:** confirm the founding year and history with the client, state them on /about, and add `foundingDate` to the schema.

## High Priority Issues

5. **The site gives almost no quotable facts.**
   - The only number on the site is "30+ years".
   - Turnaround, price ranges or savings, coating material (PTFE/PFA/silicone), recoat limits and roller volumes are all missing.
   - FAQ answers defer to "depends… we'll quote".
   - **Fix:** rewrite each answer to lead with a fact (see *AI Citability* below).
6. **No named people or credentials** (/about).
   - **Fix:** name the owner and key technicians, with roles and years of experience. Add a team photo and Person schema.
7. **No proof of experience on the recoating page.**
   - **Fix:** add 3–5 anonymised case examples (machine, fault, before/after photo, lead time compared with importing a new roller) and a high-level process: strip, prep, coat, cure, grind, test.
8. **No testimonials or reviews** (site-wide).
   - **Fix:** add dealer and technician quotes, and embed the Google Business Profile rating once it exists.
9. **Contact details are inconsistent.**
   - Directories show 012 653 0428 and `imatec@netactive.co.za`. The site shows 082 808 5623 and `dorette@imatec.co.za`.
   - `config/site.ts` still marks the phone, email, unit number and legal name as PENDING.
   - **Fix:** finalise one set of details, then update the site, the schema and every directory listing to match.
10. **Address in schema doesn't match the page.**
    - The schema `streetAddress` is "187 Edison Crescent" without "Hennopspark", because `lib/jsonld.ts` ignores `site.address.suburb`.
    - **Fix:** in `lib/jsonld.ts`, set `streetAddress` to "187 Edison Crescent, Hennopspark" and `addressRegion` to "Gauteng".
11. **Missing security headers.**
    - Only HSTS is sent, and without `includeSubDomains` or `preload`.
    - **Fix:** add `async headers()` to `next.config.js` with `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` and the full HSTS value. Add CSP in report-only mode first, because GTM and the inline JSON-LD and RSC scripts need allowing.
12. **No Bing signals.**
    - There is no `msvalidate.01` tag and no IndexNow key file. ChatGPT search and Copilot rely on Bing's index.
    - **Fix:** verify the site in Bing Webmaster Tools (import from Search Console), add an IndexNow key file and ping on deploy.
13. **Weak entity graph in schema.**
    - `sameAs` lists only Facebook and Instagram.
    - There is no WebSite node, the Vacu-Tec and Mr McKenic ranges are typed as `Service`, and there is no OfferCatalog.
    - **Fix:** see the snippets under *Schema* below.
14. **Missing from generic recoating answers.**
    - The topic is dominated by copytechnet forum threads and Katun's white paper arguing against recoated rollers, and IMATEC has no published rebuttal.
    - **Fix:** publish a dated, authored explainer with a real comparison table.

## Medium Priority Issues

15. **Thin pages:** /printer-copier-parts (~225 words), /vacu-tec (~250), /mr-mckenic (~170), /about (~320). Add:
    - a compatibility table by brand and series
    - Vacu-Tec model specs (filter type, toner-safe rating, capacity, warranty)
    - one sentence per Mr McKenic product: what it does, can size, where it is used.
16. **No llms.txt (404).** Publish `public/llms.txt`, or an `app/llms.txt/route.ts` generated from `config/services.ts`, listing the key URLs with one-line summaries.
17. **Sitemap lastmod is the build time.** `app/sitemap.ts` uses `new Date()` for every URL. Use real per-page updated dates, and show "Last updated" on the service pages.
18. **Homepage LCP is a CSS background image.** `components/sections/hero.tsx` loads it with `bg-[url(...)]` (94–99KB JPEG), so it gets no optimisation or preload. Move it to `next/image` with `fill priority`.
19. **Short or unbranded titles.**
    - The homepage title has no "IMATEC".
    - "About · IMATEC" and "Contact · IMATEC" are 14–16 characters.
    - Fix them in the `buildMetadata` calls in `app/page.tsx`, `app/about/page.tsx` and `app/contact/page.tsx`.
20. **Contradictory claims.**
    - Vacu-Tec is described as both "our product" and a range IMATEC "supplies".
    - The scope is given as both "Africa" and "the SA trade".
    - "Genuine Mr McKenic" is still on hold pending proof of agency (`config/pages.ts:222`).
    - The OEM logo strip's alt text ("parts supported by IMATEC") could read as an endorsement.
21. **Repeated copy.** The FAQ answers are duplicated between the home and recoating pages, and one CTA block repeats on 5 pages. Make each page's copy unique.
22. **Geo signals missing in schema.** There is no `geo`, `hasMap`, `openingHoursSpecification` or `contactPoint`. The map URL already exists on /contact, so `hasMap` can be added now. Add hours and coordinates once the client confirms them.
23. **No off-site presence for the sub-brands.** Vacu-Tec returns nothing, and Mr McKenic results point to retailers abroad.
24. **No video.** Recoating is a visual process; a short workshop video on YouTube would support Gemini and AI Overviews.

## Low Priority Issues

25. robots.txt has a non-standard `Host:` line. Remove it from `app/robots.ts`, and optionally add explicit Allow groups for the AI bots.
26. The 404 page sends conflicting robots meta tags. Remove `robots: {index:true, follow:true}` from `app/layout.tsx`.
27. Six of seven pages use the same OG image, and the homepage og:image:alt repeats "IMATEC: IMATEC". Fix the prefix in `lib/metadata.ts`.
28. Meta descriptions are short: Mr McKenic 116 characters, Vacu-Tec 119, About 127 (target 140–160).
29. 15–19 tap targets per page are under 24px in mobile emulation, likely in the footer or inline links.
30. Logo is SVG only; add a raster PNG `ImageObject`. Add `speakable`, and `AboutPage`/`ContactPage` page types.
31. The recoat-vs-replace comparison is in cards rather than an HTML `<table>`.

---

## Category Deep Dives

### AI Citability (38/100)

The structure is good: the FAQs use question-style H3 headings and the paragraphs are short. The substance is thin: there are almost no numbers, specifications or self-contained answers.

**Strongest passages**
- **About 62/100.** It defines the term and stands on its own, but gives no data:
  > "A fuser roller is a machined shaft, bearings and seals beneath its working surface. Recoating renews that surface, so the whole component keeps running instead of being replaced."
- **About 55/100.** The "Often worth recoating / Better to replace" lists are genuinely useful guidance.
- **About 50/100.** The supported-brands list (Ricoh · Canon · Konica Minolta · Kyocera · Xerox · HP · Sharp · Toshiba · Lexmark) fits "who recoats Ricoh rollers in SA" queries.

**Weakest passages and rewrites**

The X, Y, N and R___ values below are placeholders for the client's real figures.

| Current (score) | Rewrite |
|---|---|
| "How long does recoating take? Turnaround depends on the roller and current workload…" (~15) | "Most fuser rollers are recoated and returned within X–Y working days of reaching our Centurion workshop; courier to and from Gauteng adds 1–2 days." |
| "Is recoating cheaper…? …a cost-effective alternative… we'll quote yours" (~25) | "Recoating typically costs X–Y% of a new OEM roller, from R___ for A4 desktop rollers to R___ for production machines." |
| Vacu-Tec: "A service vacuum made by people who service the machines…" (~12) | Model names, toner-rated filter class, wattage, capacity, price and warranty. |
| Mr McKenic: a bare product list (~15) | One sentence per product: what it does, can size, where it is used. |
| About: "The people who know this equipment" (~20) | "IMATEC (Imaging Technology) was founded in 19XX in Centurion, Gauteng, and has recoated over N fuser rollers for X dealers in South Africa and neighbouring countries." |

**FAQs to add**
- What coating do you use?
- How many times can a roller be recoated?
- Which symptoms mean a roller needs recoating? (offset, ghosting, wrinkles, peeling)
- Fuser roller vs pressure roller vs fuser film: what's the difference?

### Brand Authority (18/100)

| Platform | Status |
|---|---|
| Wikipedia / Wikidata | Absent. An article is unlikely to be warranted, but a Wikidata item is achievable. |
| Google Business Profile | Not found in search; unverified. A Maps listing may exist but doesn't surface in web search. |
| Facebook | Present (`facebook.com/fuserrollers`); activity not checked. |
| Instagram | Linked (`instagram.com/imatec.co.za`); activity not checked. |
| LinkedIn | Absent. The `imatec` slug belongs to the Luxembourg company. |
| YouTube / Reddit / forums | Absent. Recoating discussions on copytechnet and Reddit never mention IMATEC. |
| SA directories | Listed on Brabys, Snupit, SAYellow, Yellosa, ThinkLocal and AfricanAdvice, with older contact details and no reviews. |
| Trade press | Absent. Engineering News and ITWeb already rank for these topics. |
| Vacu-Tec / Mr McKenic | No third-party footprint. |

### Content E-E-A-T (35/100)

| Dimension | Score | Evidence |
|---|---|---|
| Experience | 9/25 | "30+ years" and "our own workshop" are claimed, with one lathe photo. No cases, before/after images or turnaround figures. |
| Expertise | 7/25 | No named person or credential. The roller-anatomy text and the recoat-vs-replace guidance are the only depth signals. |
| Authoritativeness | 7/25 | No founding year, testimonials, client logos, memberships or media mentions. |
| Trustworthiness | 12/25 | Full street address, phone, email, HTTPS/HSTS and a POPIA checkbox. No privacy policy or terms, no hours, no registration or VAT number, no dates. |

**Main content per page:** / ~895 words · /fuser-roller-recoating ~849 · /about ~319 · /vacu-tec ~249 · /printer-copier-parts ~225 · /contact ~168 · /mr-mckenic ~167.

The copy reads as AI-drafted and then edited by a person. The voice and the honest caveats are good, but signature phrases repeat across pages and specifics are rare.

**Guides that would build topical authority**, organised as a hub on /fuser-roller-recoating with each guide linking back to it:
- Signs your fuser roller is worn
- Recoat vs replace: cost and lead-time comparison
- Recoatable rollers by brand and series
- Fuser roller vs pressure roller vs fuser film
- How to package and courier a roller to us
- Cleaning fuser rollers safely (links to the Mr McKenic cleaner)
- Choosing a toner-safe service vacuum (links to Vacu-Tec)

### Technical GEO (86/100)

| Area | Score | Notes |
|---|---|---|
| Server-side rendering | 95 | Static/SSR on Vercel; content in raw HTML |
| Meta & indexability | 85 | `index, follow` everywhere; short titles |
| Crawlability | 80 | Open robots.txt; build-time lastmod; no llms.txt |
| Security headers | 70 | HSTS only |
| Core Web Vitals (lab) | 85 | LCP 520–832ms, CLS 0; hero background not optimised |
| Mobile | 85 | Correct viewport, no horizontal scroll; small tap targets |
| URL structure | 95 | Clean slugs; single 308 redirects |
| Response & status | 90 | Real 404s |

**Page weight:** homepage HTML is 168KB raw / 19.8KB with Brotli. JavaScript is about 164KB with Brotli, the normal Next.js baseline.

### Schema & Structured Data (46/100)

| Page | JSON-LD types |
|---|---|
| / | LocalBusiness, FAQPage (5 Q) |
| /fuser-roller-recoating | LocalBusiness, Service, BreadcrumbList, FAQPage (7 Q) |
| /printer-copier-parts, /vacu-tec, /mr-mckenic | LocalBusiness, Service, BreadcrumbList |
| /about, /contact | LocalBusiness, BreadcrumbList |

All blocks parse and are present in the initial HTML.

**Source files:**
- `lib/jsonld.ts` builds every block.
- `app/layout.tsx` injects LocalBusiness on every page.
- `components/sections/faq-accordion.tsx` adds FAQPage.
- The page and hero components add Service and BreadcrumbList.

Google limits FAQ rich results to government and health sites, so these won't show in search. Keep the markup anyway; it still feeds AI answers.

**Snippet A: LocalBusiness fixes** (merge into `localBusinessJsonLd()` in `lib/jsonld.ts`)

```json
{
  "@type": ["LocalBusiness", "Store"],
  "@id": "https://www.imatec.co.za/#business",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "187 Edison Crescent, Hennopspark",
    "addressLocality": "Centurion",
    "addressRegion": "Gauteng",
    "postalCode": "0157",
    "addressCountry": "ZA"
  },
  "hasMap": "https://maps.google.com/maps?q=187%20Edison%20Crescent%2C%20Hennopspark%2C%20Centurion%2C%20Gauteng%2C%200157%2C%20South%20Africa",
  "geo": { "@type": "GeoCoordinates", "latitude": "[REPLACE]", "longitude": "[REPLACE]" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "telephone": "+27828085623",
    "email": "dorette@imatec.co.za",
    "areaServed": "ZA",
    "availableLanguage": "en"
  },
  "hasOfferCatalog": { "@id": "https://www.imatec.co.za/#catalog" },
  "brand": [{ "@id": "https://www.imatec.co.za/vacu-tec#brand" }],
  "sameAs": [
    "https://www.facebook.com/fuserrollers/",
    "https://www.instagram.com/imatec.co.za",
    "[REPLACE: LinkedIn / Google Business Profile URLs once live]"
  ]
}
```

The telephone and email here are the values currently on the site. Both are still PENDING in `config/site.ts`, so check them with the client before shipping.

**Snippet B: WebSite node** (add to `app/layout.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.imatec.co.za/#website",
  "url": "https://www.imatec.co.za",
  "name": "IMATEC",
  "alternateName": "IMATEC – Imaging Technology",
  "inLanguage": "en-ZA",
  "publisher": { "@id": "https://www.imatec.co.za/#business" }
}
```

**Snippet C: Brand + OfferCatalog** (render on /vacu-tec, /mr-mckenic and /printer-copier-parts)

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": "https://www.imatec.co.za/vacu-tec#brand",
    "name": "Vacu-Tec",
    "description": "Service vacuum cleaners designed for copier and printer technicians.",
    "url": "https://www.imatec.co.za/vacu-tec"
  },
  {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": "https://www.imatec.co.za/#catalog",
    "name": "IMATEC parts, consumables and service equipment",
    "itemListElement": [
      { "@type": "Offer", "seller": { "@id": "https://www.imatec.co.za/#business" },
        "itemOffered": { "@type": "Product", "name": "Vacu-Tec service vacuums",
          "brand": { "@id": "https://www.imatec.co.za/vacu-tec#brand" },
          "url": "https://www.imatec.co.za/vacu-tec" } },
      { "@type": "Offer", "seller": { "@id": "https://www.imatec.co.za/#business" },
        "itemOffered": { "@type": "Product", "name": "Mr McKenic professional cleaning and maintenance products",
          "brand": { "@type": "Brand", "name": "Mr McKenic" },
          "url": "https://www.imatec.co.za/mr-mckenic" } },
      { "@type": "Offer", "seller": { "@id": "https://www.imatec.co.za/#business" },
        "itemOffered": { "@type": "Product", "name": "Workshop-tested printer and copier parts, toner and consumables",
          "url": "https://www.imatec.co.za/printer-copier-parts" } }
    ]
  }
]
```

The Mr McKenic Brand node deliberately has no `@id` and no owner, so it doesn't imply IMATEC owns the brand while the agency claim is unconfirmed.

### Platform Optimization (47/100)

| Platform | Score | Key gap |
|---|---|---|
| Google AI Overviews | 60 | Doesn't rank for generic queries; no citations or comparison table |
| ChatGPT search | 51 | Entity can't be told apart from other Imatecs; no author or dates |
| Bing Copilot | 48 | No Bing Webmaster verification or IndexNow |
| Perplexity | 46 | No forum, Reddit or community presence |
| Gemini | 32 | No Google Business Profile or YouTube found; only 7 pages |

**Test queries.** None of these returned imatec.co.za:
- "fuser roller recoating South Africa"
- "hot roller recoating Johannesburg"
- "fuser roller recoating Pretoria Centurion"
- "IMATEC fuser"
- "imatec.co.za"

The site only appeared in an extended search with very specific terms. There, the AI summary called IMATEC "the one SA provider found", which confirms the site is indexed and can be cited.

**Who shows up instead:**
- **Recoating queries:** copytechnet forum threads, Katun's white paper, Thermaspray, Engineering News.
- **Parts queries:** PartServe, Kolok, Printer Parts Africa, Mustek, PDC.

---

## Quick Wins (Implement This Week)

1. **Fix the schema address and expand the entity graph** in `lib/jsonld.ts`: add Hennopspark, `hasMap`, `contactPoint`, the WebSite node, and Brand plus OfferCatalog. This is code-only and needs no client input.
2. **Publish `/llms.txt`** with the 7 pages and one-line summaries, and remove the `Host:` line from robots.txt.
3. **Add security headers** in `next.config.js`, with CSP in report-only mode, and use real per-page `lastmod` dates in `app/sitemap.ts`.
4. **Claim the Google Business Profile and verify in Bing Webmaster Tools, with IndexNow.** Low effort, and they affect Gemini, AI Overviews, Copilot and ChatGPT.
5. **Brand and lengthen the titles** for home, About and Contact, and extend the short meta descriptions.

## 30-Day Action Plan

### Week 1: Technical & schema foundations (no client input needed)
- [ ] Schema fixes in `lib/jsonld.ts` (snippets A–C)
- [ ] `/llms.txt`, robots.txt cleanup, real sitemap `lastmod`
- [ ] Security headers in `next.config.js`
- [ ] Title and description fixes; per-page OG images; hero image moved to `next/image`

### Week 2: Collect facts from the client and fix trust
- [ ] Gather from the client: founding year, legal name, final phone and email, hours, turnaround range, price range or % saving, coating material, owner and technician names, case photos, proof of Mr McKenic agency
- [ ] Publish `/privacy` (POPIA) and `/terms`, and link them from the forms and footer
- [ ] Claim the Google Business Profile; create a LinkedIn page (`imatec-south-africa`); verify in Bing Webmaster Tools
- [ ] Make contact details identical across Brabys, Snupit, SAYellow and the other directories

### Week 3: Make the content citable
- [ ] Rewrite FAQs answer-first with real numbers; make home and recoating FAQs distinct; add the 4 new FAQs
- [ ] Rebuild /about: history, founding year, named team with Person schema, photos
- [ ] Add 3–5 case examples and a process section to /fuser-roller-recoating, with a real `<table>` for recoat vs replace
- [ ] Add specs to Vacu-Tec, product descriptions to Mr McKenic, and a compatibility table to the parts page

### Week 4: Authority and off-site presence
- [ ] Publish the first hub guide, "Recoated vs new fuser rollers: cost, lead time and what the critics get wrong", dated and with a named author
- [ ] Ask 5–10 trade customers for Google reviews; add testimonials to the site
- [ ] Post a short recoating workshop video on YouTube and embed it on the recoating page
- [ ] Answer relevant copytechnet threads; pitch a "recoat vs import" story to Engineering News or ITWeb
- [ ] Add every new profile to `sameAs`; re-run this audit to measure the change

---

## Appendix: Pages Analyzed

All pages returned 200 in under 0.6s and are server-rendered. Every page has a self-referencing canonical, one H1, OG/Twitter tags and LocalBusiness JSON-LD.

| URL | Title | Main words | Key GEO issues |
|---|---|---|---|
| / | Fuser / Hot Roller Coating & Printer Parts | ~895 | Title not branded; unsupported "30+ years"; FAQ duplicated on recoating page; CSS hero image as LCP |
| /fuser-roller-recoating | Fuser / Hot Roller Coating · IMATEC | ~849 | No turnaround, price or material facts; no case examples; no dates or author |
| /printer-copier-parts | Printer Parts, Toner & Consumables · IMATEC | ~225 | Thin; no compatibility table or OfferCatalog |
| /vacu-tec | Vacu-Tec Service Vacuums · IMATEC | ~249 | Thin; no specs; "our product" vs "we supply" contradiction; typed as Service |
| /mr-mckenic | Mr McKenic Professional Products · IMATEC | ~167 | Thinnest page; bare product list; agency claim unconfirmed |
| /about | About · IMATEC | ~319 | No people, founding year or history; short title |
| /contact | Contact · IMATEC | ~168 | Contact details not final; vague hours; short title |

**Not found or failed:** `/llms.txt` (404), `/sitemap_index.xml` (404, not needed), `/indexnow.txt` (404).

**Not verified (network limits during the audit):** Facebook and Instagram activity, Wikipedia and Wikidata absence, Google Business Profile existence. These are based on search results only.

---

## Remediation Log: 17 November 2026

### Fixed in code (deployed)

| # | Issue | Fix |
|---|---|---|
| 3 | No privacy policy | `/privacy` (POPIA notice) and `/terms` added, linked from the footer and the enquiry-form consent checkbox |
| 10 | Schema address missing Hennopspark | `lib/jsonld.tsx` now includes the suburb; `hasMap`, `contactPoint` (sales + WhatsApp), `slogan` and `alternateName` added |
| 11 | Missing security headers | `next.config.js` adds `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`, plus a CSP in report-only mode |
| 12 | No Bing signals | IndexNow key file in `public/` and `scripts/indexnow.mjs`; Google and Bing verification meta tags render from the `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION` env vars |
| 13 | Weak entity graph | Connected `@id` graph: LocalBusiness ↔ WebSite ↔ per-page WebPage / AboutPage / ContactPage (with `dateModified` and `speakable`); Vacu-Tec Brand; OfferCatalog for parts, Vacu-Tec and Mr McKenic; enriched recoating Service; raster PNG logo as ImageObject; `config/site.ts → profiles` ready for new `sameAs` URLs |
| 5 (part) | FAQ answers defer | FAQs rewritten answer-first; 3 new recoating FAQs (what recoating is, roller vs pressure roller vs film, signs of wear); home FAQ made distinct from the recoating FAQ |
| 15 (part) | Thin Mr McKenic page | Each product now has a one-line use description (general product-type uses; no sizes or prices) |
| 16 | No llms.txt | `/llms.txt` generated from config, including disambiguation from the other Imatec companies |
| 17 | Build-time lastmod | `app/sitemap.ts` reads real per-page dates from `config/site.ts → pageUpdated` |
| 18 | CSS hero image | Homepage hero now an art-directed `<picture>` through the Next image optimiser (AVIF/WebP, responsive, high priority) |
| 19 | Short or unbranded titles | Home, About, Contact and Recoating titles lengthened and branded; Vacu-Tec, Mr McKenic and About descriptions now 148–160 characters |
| 20 (part) | Contradictory claims | Vacu-Tec consistently described as a range IMATEC *supplies*; "Africa's" changed to "South Africa's" in descriptive copy (the client tagline is kept); logo alt text changed to "{Brand} logo", with a trademark / no-endorsement note in the footer and terms |
| 21 | Repeated CTA copy | Closing CTA heading and sub now unique on each inner page |
| 25 | Non-standard robots `Host:` | Removed; explicit Allow group for named AI crawlers; `/api/` disallowed |
| 26 | Conflicting 404 robots tags | Root `robots` metadata removed; 404 now sends only `noindex` |
| 27 | Generic OG images | Page-specific OG images with correct dimensions and alt text; doubled "IMATEC: IMATEC" alt removed |
| 29 | Small tap targets | Footer and breadcrumb links padded to at least 24px |
| 30 | Low-priority schema | PNG logo ImageObject, AboutPage/ContactPage types, `speakable` added |
| 31 | Cards instead of a table | Real `<table>` for recoat vs replace on `/fuser-roller-recoating` |

### Still open: needs client facts (truth gate: nothing invented)

- Founding year, legal name, final phone and email, unit/extension, opening hours, GPS coordinates. When confirmed, set them in `config/site.ts` and they flow to the schema, footer and llms.txt.
- Turnaround range, price range or % saving, coating material, recoat limits, warranty, and courier logistics for the recoating FAQs and table.
- Named owner and technicians (for Person schema), case examples with before/after photos, and a workshop video.
- Vacu-Tec model specifications; Mr McKenic can sizes; written proof of Mr McKenic agency.
- Information Officer name for the privacy policy, and client review of `/privacy` and `/terms`.
- Parts compatibility table by brand and series.

### Still open: off-site actions (owner accounts required)

- Claim the Google Business Profile, create a LinkedIn company page (`imatec-south-africa`), and start a YouTube channel. Add each URL to `config/site.ts → profiles`.
- Verify in Google Search Console and Bing Webmaster Tools. Set the two verification env vars in Vercel, redeploy, then run `node scripts/indexnow.mjs`.
- Collect Google reviews from trade customers. Make NAP identical across Brabys, Snupit, SAYellow, Yellosa, ThinkLocal and AfricanAdvice.
- Pitch trade press (Engineering News, ITWeb); answer recoating threads on copytechnet.com.
- After two weeks of observation, switch the CSP from report-only to enforced. Consider HSTS `includeSubDomains` once every subdomain is confirmed to serve HTTPS.
