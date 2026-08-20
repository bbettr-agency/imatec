# IMATEC — Next-Generation Quality Audit
**Method:** Browser-led (Playwright, live production `imatec.vercel.app`, desktop 1440 + mobile 390), full-page + section captures with scroll-reveal triggered, DOM/SEO/perf instrumentation, plus read-only code audits of the motion engine, inner-page composition, and truth-gate copy. Grounded against the Website OS Design Language (Five Laws + §12 anti-slop "Tells"), Motion System Gate-3, and the locked IMATEC constraints (light-first / no dark sections / Open Sans / `precise` motion / accent-on-CTA-only).

**Tooling note (transparency):** Playwright was used heavily as requested. The named critique skills — *design-taste-frontend* (Taste), *Impeccable*, *Emil Kowalski motion* — are **not installed as invocable skills in this session** (`ListSkills` returns only document skills). Rather than guess, I applied the OS's own critique framework, which encodes the same lens, and ran an equivalent Emil-style motion review through the code. **21st.dev was not needed** — no design problem here calls for external component research; the fixes are composition/spacing/hierarchy/imagery, not new components. **Figma:** no IMATEC Figma material exists. **New images:** all three inspected directly (see §NEW IMAGE ASSET AUDIT).

---

## 1. EXECUTIVE ASSESSMENT

IMATEC is **already a good website** — and materially better than most AI-built sites. The homepage and the `/fuser-roller-recoating` flagship show real editorial craft: the SectionMark "datum" system threads the page as one engineered document, the monumental `Replace.`/`Recoat.` decision and `30+` heritage moments are genuinely distinctive, imagery is integrated (veils/bleeds, not boxed), motion is disciplined and standards-compliant, and technical health is excellent (LCP 192 ms, CLS 0, zero console errors, no horizontal overflow, single H1 per page, schema present).

The gap between "good" and "a site Bbettr should be proud to ship" is **not on the two hero pages — it is on the five inner pages and in copy discipline.** Three themes:

1. **A two-tier site.** Homepage + recoating page are premium and human-designed. The five inner pages fall back to a shared `PageHero` + `TextSection` + card-grid template that reads as generic — half-empty prose rows, boxed hero images, orphaned datum numbers, and one "1-2-3" card grid. Cover the logo and several inner pages could belong to any B2B supplier. **This is where the WOW leaks out.**
2. **Truth-gate drift on the homepage.** The homepage asserts an unverified technical recoating process (*Strip & prepare → Cure → Bench-test*) and uses "**to spec / restored to working specification**" in seven places — the exact claim the flagship page was deliberately built to avoid. The site contradicts itself.
3. **A live SEO fault.** Every page canonicalizes to `www.imatec.co.za`, which currently returns **HTTP 404**; the OG image and sitemap/robots host also point there. The indexable staging site is signalling a dead domain as its canonical home.

None of this requires a redesign. It requires: align copy to the truth-gate, connect the domain, and propagate the homepage's design language onto the inner pages (killing dead space and the generic template). The new Mr McKenic photograph is a genuine upgrade; the showroom photograph is conditional; the "parts flat-lay" is already on the site.

---

## 2. WHAT ALREADY WORKS — DO NOT CHANGE

- **The datum/SectionMark system** — the strongest identity signal. Keep and *extend* it (see inner pages), don't dilute it.
- **Homepage hero** — authentic roller-in-lathe image, integrated bleed + veil, stats bar, honest H1. LCP-safe (H1 never animated; scale-only image reveal). Excellent.
- **Recoat vs Replace** monumental decision (`Replace.`/`Recoat.`) — distinctive, on-message, hard to mistake for another company.
- **Recoating flagship page** — dense, correctly sequenced, and its process section is *correctly customer-facing* (Send → Assess & quote → Get to us → Recoat → Back). This is the reference standard for the rest of the site.
- **Motion system** — fully Gate-3 compliant: single ease `[0.22,1,0.36,1]`, LCP never animated, reduced-motion renders immediately, `<noscript>` fallback forces visibility, reveals use `whileInView`+`once` (no fast-scroll stranding). Do not hand-tune.
- **Technical health** — LCP 192 ms, CLS 0, TTFB 45 ms, 0 console errors, all assets 200, no horizontal overflow at 390 px, mobile sticky Call/WhatsApp bar with 48 px targets.
- **Brand rail** (Coverage) — ambient CSS marquee, reduced-motion safe. Keep.
- **SEO structure** — single H1/page, clean H2 hierarchy, title/meta lengths within budget, LocalBusiness/Service/Breadcrumb/FAQPage schema, no fabricated ratings. Keep.

---

## 3. HOMEPAGE — ISSUES STILL WORTH FIXING

The homepage is strong; these are refinements, not a rebuild.

- **Truth-gate: §04 process** (`config/home.ts:97–105`) asserts *Strip & prepare / Recoat (restored to working specification) / Cure / Bench-test* as fact. Unverified, and inconsistent with the flagship page. **(P0 — see plan.)**
- **Truth-gate: "to spec"** across hero sub, object label, why-point, process, FAQ (`home.ts:20,34,59,103,138`). **(P0.)**
- **Image reuse:** `recoated-roller-bench.jpg` is the hero LCP **and** the §03 "Specialist workshop" image — the same photo twice on one page (and it's also the flagship hero and the About hero → **4 site-wide uses**). §03 reads as "that photo again." **(P1.)**
- **Minor: `30+` appears twice in close proximity** — the monumental numeral in §06 and again in the stat row directly beneath it. Slight redundancy; the stat row could drop the duplicate or reframe. **(P2.)**
- **Motion nuance (Emil lens):** the reveal cascade is tasteful, but §01–§06 all enter with the same `fadeUp`/`fadeUpItem` at similar distance. One or two sections (e.g. the `Replace.`/`Recoat.` reveal) could earn a slightly distinct entrance for rhythm. Optional. **(P3.)**

---

## 4. FUSER ROLLER RECOATING — FLAGSHIP ASSESSMENT

**Verdict: the best page on the site; keep as the quality benchmark.** Renders fully across breakpoints, no overflow, dense and correctly sequenced (Hero → 01 what recoating is → 02 recoat vs replace → 03 candidacy → 04 why → 05 how → 06 scope → 07 FAQ → 08 enquiry). Service + Breadcrumb + FAQPage schema present. The §05 process is *honestly customer-facing* — the model the homepage should follow.

Refinements only:
- **Shares the hero image** with the homepage (`recoated-roller-bench.jpg`). Acceptable across different pages, but a *second* authentic recoating photograph (before/after roller, or a macro of a finished roller) would let the flagship own a distinct hero. **(P1 — pending photography.)**
- **§06 uses `printer-parts.jpg`** (the flat-lay) well as an edge-bleed — good. No change.
- Copy is truth-gate clean here. No process invented. Keep.

---

## 5. INNER-PAGE CONSISTENCY ASSESSMENT

**The core problem area.** All five inner pages open with the same `PageHero` (boxed, rounded, shadowed hero image — *not* the homepage's integrated bleed; H1 caps at `~3rem`, roughly half the homepage's monumental scale) and then rely on `TextSection` (a `max-w-3xl` left prose block that leaves the right half of the page empty) and small card grids.

Ranked **closest → furthest** from the homepage bar:

| Rank | Page | State | Main problems |
|---|---|---|---|
| 1 | **Parts** | Best | Inherits real DNA via `<Coverage/>` (datum + brand rail). Boxed hero; dead space beside "We test before we supply"; card-grid stock list. |
| 2 | **Contact** | Functional | Strong CTAs + form. But hero has **no image → empty right half**; boxed icon-list + boxed form; no datum motif. |
| 3 | **About** | Mixed | Image hero (but 3rd reuse of the roller photo); **no hero CTA**; a **numbered "1-2-3" card grid** ("Three things a catalogue can't claim") = textbook generic; dead space beside the story. |
| 4 | **Mr McKenic** | Thin | Hero + one 7-pill product grid + note + CTA. **No mid-page CTA** at the product-decision point. |
| 5 | **Vacu-Tec** | Weakest | Hero + **two stacked prose blocks, each leaving the right half empty** + orphaned CTA. The clearest "premium empty" failure on the site. |

**Cross-cutting inner-page faults:**
- **Orphaned datum indices.** The shared `Coverage` and `FinalCta` carry their *homepage* numbers ("05", "07") onto every inner page — so Vacu-Tec shows a lone "07 GET IN TOUCH" with no 01–06. The datum system, which is meant to thread one document, reads as broken numbering off the homepage. **(P1.)**
- **`components/ui/text-section.tsx` is the primary genericness source** — a hardcoded half-width prose block with no datum, no asymmetry, no imagery hook. Stacking two (Vacu-Tec) yields uniform grey.
- **Boxed hero images** on inner pages vs integrated bleed on the homepage — a visible inconsistency in the single most-repeated component.

---

## 6. AI / GENERIC-DESIGN FINDINGS ("cover the logo" test)

- **About §"What sets us apart"**: numbered `1 / 2 / 3` circle-badge card row — the canonical AI "three pillars" grid. Fails the logo test.
- **Vacu-Tec**: two back-to-back eyebrow→heading→paragraph blocks with empty right halves — generic prose, weak hierarchy.
- **Mr McKenic / Parts stock lists**: pill/card grids of plain labels — filler pattern.
- **Inner PageHero boxed image** (rounded card + shadow) — the generic "text | rectangular image" pattern the brief explicitly warns against.
- Homepage and recoating page **pass** the logo test comfortably.

*Not present (good):* no glassmorphism, no gradient blobs, no fake ratings/testimonials, no stock-as-evidence, no bento soup, no dark-mode drift. The anti-slop discipline is largely intact — the failures are concentrated in the shared inner-page template.

---

## 7. COMPOSITION / HIERARCHY FINDINGS

- Inner-page **H1 scale (~3rem) is half the homepage's** monumental type → hierarchy reads flat the moment you leave the homepage. Inner heroes need either larger type or a stronger structural device.
- `TextSection` uses a **single left column at `max-w-3xl`**, so every inner content section is 50% empty canvas with no counterweight (image, index, pull-stat, or list). This is the root of both the "dead space" and "generic" findings.
- Homepage composition (12-col asymmetry, sticky intro columns, integrated imagery) is **not propagated** — inner pages get none of it.

---

## 8. SPACING / DEAD-SPACE FINDINGS

- **Vacu-Tec**: two prose sections, each ~50% empty to the right; large vertical gaps before the CTA. Worst offender.
- **Parts**: empty right half beside "We test before we supply"; a tall empty band between the stock pills and Coverage; empty space around the final CTA.
- **About**: empty right half beside the multi-paragraph story.
- **Contact**: hero right half empty (no image).
- Homepage/recoating: spacing is deliberate and mostly earned; not flagged.

**Diagnosis:** the dead space is a *composition* problem (half-width prose with no counterweight), **not** a "add whitespace" choice — so the fix is to fill the counter-column with substance (imagery, datum, stat, list), not to shrink sections.

---

## 9. TYPOGRAPHY FINDINGS

- **Positive:** Open Sans throughout; weight-driven hierarchy; measured line-length on body; datum labels tracked. Compliant.
- Inner-page H1 under-scaled vs homepage (see §7).
- Datum **spec labels and hairline greys are small and low-contrast** — legible but should be contrast-verified against the 3:1 large / 4.5:1 body bar (the OS Gate-3 manual contrast pass is still pending). No measured failure found, but not yet formally cleared. **(P2 — verify.)**
- No ALL-CAPS-headline, multi-font, or untracked-large-type tells. Good.

---

## 10. IMAGERY FINDINGS

- **One authentic photo (`recoated-roller-bench.jpg`) does too much work** — homepage hero, homepage §03, About hero, and the recoating hero (4 instances). It's the site's best credibility asset but is now repetitive.
- Inner heroes present images as **boxed cards** rather than integrated compositions.
- The new **Mr McKenic in-situ photograph (#3)** is a real upgrade over the current retail-display packshot (more B2B/technical, on-brand, and it literally shows a *Fuser Roller Cleaner* on a Ricoh).
- The **"parts flat-lay" (new #1) is already deployed** as `printer-parts.jpg` (byte-identical composition) — not a new asset.
- The **showroom photo (#2)** carries baked-in text ("PRINT SOLUTIONS. DELIVERED.") → responsive/SEO/messaging constraints (see image audit).

---

## 11. MOTION FINDINGS (Emil-lens + Gate-3)

- **Fully compliant** (verified in code): single shared ease; durations vary by character only; LCP H1 never animated; priority images scale-only (opacity deliberately omitted to protect preload); reduced-motion collapses to final state instantly; `<noscript>` forces `opacity:1`; reveals `once`+`-60px` so a fast scroll cannot strand a section.
- The blank sections seen in a *full-page screenshot* are a **capture-timing artifact** (the tool doesn't dwell for the observer) — **not** a user-facing bug. Confirmed: a normal scroll reveals everything; 0 wrappers remain hidden.
- **Opportunity (optional):** motion is uniform across sections — a couple of signature moments (the decision reveal, the `30+` count) could earn subtly distinct entrances for rhythm. The brand rail is fine as ambient. No CountUp is currently used despite being available — the `30+` could animate its count on first view (reduced-motion safe) for a premium beat. **(P3.)**

---

## 12. MOBILE FINDINGS (390 px)

- No horizontal overflow anywhere; brand marquee correctly clipped.
- Sticky bottom Call (48 px) + WhatsApp (48 px) bar — good conversion pattern, good targets.
- Homepage stacks cleanly; monumental type, worksheet, stats all reflow.
- Inner-page dead space **improves on mobile** (single column), so the desktop half-empty rows are a desktop-specific problem.
- Header 65 px, logo + hamburger/nav within tap size.
- **To verify on a real device (Gate-3 pending):** 360 px width, and the datum spec-label legibility at small sizes.

---

## 13. CONVERSION FINDINGS

- **Strong:** context-aware WhatsApp CTAs with qualifying pre-fills (5/7 links pre-filled on the homepage), decision-point placement on homepage + recoating, mobile sticky bar, honest low-friction wording, page-specific recoating form.
- **Gaps:**
  - **About has no hero CTA** (only page without one) — a high-intent "who are you" visitor hits a dead hero.
  - **Mr McKenic has no mid-page CTA** at the product-decision point (hero + final only).
  - Inner-page dead space weakens the "reason to enquire" — empty sections don't build conviction.
- **Trust-building is honest but thin off the flagship** — no fabricated proof (correct), but also few concrete specifics because facts are pending (see truth-gate).

---

## 14. SEO RISKS

- **P0 — Canonical points to a dead domain.** Every page's `<link rel=canonical>` → `https://www.imatec.co.za/…`, which returns **HTTP 404**. `og:image` → `www.imatec.co.za/og/imatec-og.jpg` (404; the image exists **only** on vercel.app). `robots.txt` declares `Host:` and `Sitemap:` on the same dead domain. The indexable staging site (`index, follow`) is signalling a canonical home that doesn't resolve → indexing ambiguity + no social preview.
- **P0/P1 — "to spec" in the homepage meta description** (`app/page.tsx:15`) — unverified claim in the single most-crawled snippet.
- **Structure is otherwise healthy** — single H1, H2 hierarchy, titles/meta in budget, schema, no thin duplicate content. Preserve during any redesign.

---

## 15. ACCESSIBILITY ISSUES

- **Positive (observed):** single H1/page, semantic `<section>`/`<nav>`/`<ol>`, alt text present on content images, 48 px mobile targets, native `<details>` FAQ (keyboard-operable, works without JS), reduced-motion honored.
- **To clear (not yet formally verified — Gate-3 manual pass pending):**
  - Contrast of small datum **spec labels / hairline greys** (3:1 large / 4.5:1 body). No measured failure found, but not axe-verified. **(P2.)**
  - About hero has **no CTA** and Contact hero has no image — not a11y failures, but review focus order/skip-to-content.
  - Run an axe pass + manual keyboard tab-through before launch.

---

## 16. PERFORMANCE ISSUES

**None material.** LCP 192 ms, CLS 0, FCP 132 ms, TTFB 45 ms; first-load JS within the 144–150 KB budget; AVIF/WebP served; hero preloaded and unanimated. Only watch item: if a larger new hero image is adopted, keep it as the LCP candidate with correct `sizes`/`priority` and don't animate opacity.

---

## 17. BROWSER / CONSOLE ISSUES

**None.** Zero console errors/warnings on every page; all network requests 200; no broken images; no layout thrash (CLS 0).

---

## 18. 21st.dev FINDINGS

**Not used — correctly.** No finding in this audit is solved by a new component. Every fix is composition, spacing, hierarchy, copy, imagery, or config. Importing shadcn/Radix/framer-motion would violate the OS (custom, single motion engine) for zero benefit. If, later, before/after roller photography arrives, the previously-noted Aceternity "Compare" slider is the *only* candidate — and only as harvested mechanics through `RESEARCH/EXTERNAL-COMPONENT-INTAKE`, not an import.

---

## 19. PHOTOGRAPHY REQUIREMENTS (priority list)

The single reused roller photo is the bottleneck. Priority order:

1. **Second authentic recoating photo** — a *finished recoated roller* (studio-ish macro, black surface catching light) **and/or** a **before/after** worn-vs-recoated pair. Unlocks: a distinct flagship hero, §02/§03 evidence, and a future before/after slider. *Highest impact.*
2. **A technician performing real work** at the lathe/bench (hands, motion). Unlocks: About hero (replace the 4th reuse), homepage §03. Humanizes the "people who know this equipment" claim.
3. **A second workshop-wide shot** (different angle to the current lathe) so hero and §03 aren't the same photo.
4. **Vacu-Tec in real workshop use** (on a job, not the white packshot). Unlocks a Vacu-Tec content moment to kill its dead space.
5. **Parts inspection / assessment detail** (a roller being measured/inspected) — supports the "we test" claims *and* helps verify them.

Until these exist, **let typography + composition + the new Mr McKenic photo carry the pages** — do not fetch generic stock.

---

## 20. PRIORITISED REFINEMENT PLAN

Classification: **P0** broken/conversion/SEO/truth/accessibility · **P1** major visual/UX · **P2** polish · **P3** optional experiment.
For each P0/P1: **Current problem → Why it matters → Proposed change → Acceptance test improved.**

### P0 — must fix before this is "shippable"

**P0.1 — Homepage asserts an unverified recoating process**
Current: `home.ts:97–105` claims *Strip & prepare / Cure / Bench-test* + "restored to working specification" as fact. → Why: violates the truth-gate, and directly contradicts the flagship page's honest customer-facing process — the site contradicts itself. → Proposed: pending client confirmation of the real process, rewrite homepage §04 to the flagship's customer-facing framing (Assess → Quote → Send in → Recoat → Return); **or**, if the client verifies the technical steps, adopt the *same* verified wording on both pages. → **Improves: Client-WOW (credibility), SEO/E-E-A-T (no unsupported claims).**

**P0.2 — "to spec" / "restored to working specification" used site-wide unverified**
Current: 7 instances (`home.ts:20,34,59,103,138`, `services.ts:41`, `app/page.tsx:15` meta). Flagship deliberately avoids it. → Why: refinement #1 explicitly gated this claim; it's now in the meta description (most-crawled snippet). → Proposed: either (a) client confirms recoating restores to OEM working spec → then standardize the claim everywhere including the flagship; or (b) soften to the flagship's verified language ("renews the worn surface", "back to working order") site-wide. One decision, applied consistently. → **Improves: Client-WOW, SEO.**

**P0.3 — Canonical / OG / sitemap point to a dead domain**
Current: all pages canonicalize to `www.imatec.co.za` (HTTP 404); OG image + robots host + sitemap on the same dead domain. → Why: the indexable site signals a non-resolving canonical → indexing ambiguity and zero social preview right now. → Proposed: connect `imatec.co.za` to this deployment and set `NEXT_PUBLIC_SITE_URL` accordingly (preferred — it's the intended domain), verifying `/og/imatec-og.jpg` resolves there; **or**, if vercel.app is to remain the live URL for now, point canonical/OG/robots/sitemap at it until the domain is live. → **Improves: SEO/Discoverability, Client-WOW (shares render).**

**P0.4 — About hero has no CTA**
Current: only page whose hero offers no action. → Why: About is a high-intent trust page; a dead hero drops the visitor. → Proposed: add the standard hero WhatsApp CTA (context: "Talk to IMATEC"). → **Improves: Lead Generation.**

### P1 — major visual / UX improvements

**P1.1 — Kill the generic inner-page template (propagate the homepage language)**
Current: inner pages use boxed `PageHero` + half-empty `TextSection` + card grids; H1 half-scale; no datum. → Why: the WOW is homepage-only; inner pages fail the "cover the logo" test and leak dead space. → Proposed: give inner content sections the homepage's editorial treatment — SectionMark datum, 12-col asymmetry, integrated (bleed, not boxed) imagery, a counterweight column (stat/list/image) so no section is half-empty; raise inner H1 scale. Start with Vacu-Tec (worst) and About. → **Improves: Human-Designed, Client-WOW.**

**P1.2 — Fix orphaned datum indices on inner pages**
Current: `Coverage`/`FinalCta` carry homepage numbers ("05","07") onto every inner page, which otherwise have no datum. → Why: the datum system reads as broken numbering — the opposite of "engineered document." → Proposed: make the index a prop; number each page's sections locally (01…n) or drop the index on shared components when used off-homepage. → **Improves: Human-Designed, Client-WOW.**

**P1.3 — Replace the Mr McKenic hero packshot with the in-situ photo (new #3) + add a mid-page CTA**
Current: retail-display packshot (mascot, consumer feel); no mid-page CTA. → Why: the new photo is B2B/technical, on-brand, and shows a Fuser Roller Cleaner on a Ricoh (ties to recoating); the missing CTA loses the product-decision moment. → Proposed: use #3 as an integrated hero/band; add a mid-page WhatsApp CTA. → **Improves: Client-WOW, Lead Generation, Human-Designed.**

**P1.4 — Diversify the over-used roller photo**
Current: `recoated-roller-bench.jpg` appears 4× site-wide (homepage hero + §03 + About + flagship hero). → Why: repetition undercuts the premium/authentic feel. → Proposed: pending photography (§19), give §03 / About / flagship distinct images; interim, at least stop reusing it on About (P1.1 will supply an alternative treatment). → **Improves: Human-Designed, Client-WOW.**

**P1.5 — Convert half-empty inner content rows into two-part compositions**
Current: `TextSection` prose leaves the right half empty (Vacu-Tec ×2, Parts, About, Contact hero). → Why: "premium empty" is the AI tell the brief warns against. → Proposed: pair each prose block with a counterweight (integrated image, datum stat, spec list, or pull quote) — fill with *substance*, not whitespace. → **Improves: Human-Designed, Lead Generation.**

**P1.6 — Review remaining unverified claim copy**
Current: "tested… on real machines… vetted, not drop-shipped" (`home.ts:84`, `pages.ts:171`); "South Africa **and Africa** rely on" (About, `pages.ts:258`); "Genuine Mr McKenic" (residual). → Why: truth-gate — process/reach/genuineness asserted without confirmation. → Proposed: confirm with client or soften ("tested in our workshop" without the specific unverified mechanics; "across South Africa" unless African reach is real). → **Improves: Client-WOW, SEO/E-E-A-T.**

### P2 — polish
- **P2.1** Contact hero: add an integrated image (or a datum/stat panel) to fill the empty right half.
- **P2.2** Remove the duplicate `30+` on the homepage §06 (numeral + stat row).
- **P2.3** Contrast-verify small datum spec labels / hairline greys (axe + manual); adjust tints if under 3:1/4.5:1.
- **P2.4** Consider the showroom photo (#2) — only with the baked-in tagline cropped out, or as a deliberately-branded band where the text is intended (see image audit).

### P3 — optional experiments
- **P3.1** Animate the `30+` count on first view (CountUp is available, reduced-motion safe) for a premium beat.
- **P3.2** Give one or two signature sections a subtly distinct reveal for rhythm.
- **P3.3** If before/after roller photography arrives, harvest a compare-slider mechanic (via intake, no dependency import).

---

## NEW IMAGE ASSET AUDIT

| # | File | What it shows | Quality / dims | Strongest use | Page | Section | Proposed crop / treatment | Why it improves | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `1786969341413…` | Steel-bench flat-lay: fuser unit, teal drum, red hot roller, black rollers, gears, pickup rollers, MFPs behind | 1536×1024 PNG, editorial, sharp | — | — | — | — | **Byte-identical to the deployed `printer-parts.jpg`** (already on homepage §01 thumb + recoating §06). Not a new asset. | **REJECT (already in use)** — optionally keep the PNG as a higher-quality master; no action needed. |
| 2 | `1787212137966…` | Branded showroom lineup: Ricoh/Konica/Xerox/Canon/HP under wall logo + "PRINT SOLUTIONS. DELIVERED." | 1535×1025 PNG, clean, well-lit | Brand-proof / showroom credibility | About or Parts (or homepage brand band) | A "we supply the major brands" moment | **Crop out the baked-in tagline** and use as an integrated band; or keep text only where a deliberately-branded graphic is intended | Real evidence of multi-brand supply; but baked-in text hurts responsive crops, isn't crawlable, and asserts an unapproved tagline | **HOLD (conditional)** — use only cropped/treated; confirm the tagline is approved before any use that shows it |
| 3 | `1787213523093…` | Mr McKenic range in-situ on a Ricoh Pro C5110s in a real workshop (Contact Cleaner, 9-in-1 Oil, 5-in-1, **Fuser Roller Cleaner**) | 1448×1086 PNG, authentic, legible labels | Mr McKenic identity + roller tie-in | `/mr-mckenic` | Hero / integrated band | Integrated bleed (not boxed); optional crop to feature the Fuser Roller Cleaner + Ricoh context | Upgrades the retail packshot to B2B/technical; ties Mr McKenic to the recoating/roller story; authentic workshop credibility | **USE** |

### Current → Proposed image replacements
- **Mr McKenic hero:** `mr-mckenic-range.jpg` (retail packshot) → **new #3** (in-situ on Ricoh). *Keep the packshot available for a clean range shot if a product grid needs it.*
- **About hero:** `recoated-roller-bench.jpg` (4th reuse) → a **distinct** image once photography exists (technician-at-work preferred); interim, re-treat via P1.1 rather than reuse.
- **No change** to: homepage hero (roller image is correct there), recoating hero (correct), Vacu-Tec packshot (correct until an in-use shot exists), `printer-parts.jpg` (correct).

### New composition opportunities the images unlock
- **#3** makes a genuine Mr McKenic *identity* page possible (in-workshop, not catalogue).
- **#2 (cropped)** enables a homepage or Parts "brands we supply" evidence band that currently relies only on the text marquee.
- **A future before/after roller pair** (photography §19) unlocks the flagship's strongest possible hero + a compare interaction.

---

## STOP — AWAITING APPROVAL
No code has been changed, committed, or pushed. Files were inspected read-only; the three new images were **not** moved or added to the repo. On your approval of this plan (in whole or by item), I'll implement in priority order, starting with P0.
