# IMATEC — Website OS Planning Report (Phase 1: UNDERSTAND → POSITION → ARCHITECT)

**Client:** IMATEC / Imaging Technology · Hennopspark, Centurion, Gauteng, South Africa
**Prepared under:** Bbettr Website OS v2.5.0 · **Phase:** Planning & Research only — **no code**
**Repo (build target):** github.com/bbettr-agency/imatec → Vercel from `main`
**Date:** 2026-08-18

> **Evidence legend used throughout:**
> ✅ **VERIFIED** (independent evidence) · 🟡 **CLIENT-STATED** (in profile/onboarding, plausible, confirm before publishing) · ⚠️ **UNVERIFIED SELF-CLAIM** (do not publish until proven) · ❓ **UNKNOWN / MISSING** · 🧠 **RECOMMENDATION** (Bbettr strategic judgement)
>
> This report obeys the OS Truth Gate: nothing marked ⚠️ or 🟡 may appear in live copy until confirmed. Fabrication of stats, reviews, credentials or claims is prohibited.

---

## 0. What the Client Material Changed

Read this first. The company profile and supplied assets **materially altered** the picture the onboarding brief painted. Five changes, in order of strategic weight:

1. **IMATEC is a manufacturer, not just a supplier.** 🟡→✅ The profile states IMATEC *"develop our own range of custom-built service vacuum cleaners designed specifically for copier and printer technicians,"* and the supplied image confirms an **"Imatec VACUTEC"**-branded unit. Vacu-Tec is **IMATEC's own product**, not a third-party brand they distribute. Combined with recoating and *"every product is extensively tested in our own workshop on a wide range of machines,"* IMATEC is a **workshop / engineering operation** — it designs, restores, and hand-tests. That reframes the entire brand from "another online toner retailer" to *the specialist's workshop*. **This is the spine of the whole strategy.**

2. **The recoating position may be genuinely unique — not just "a service."** ✅ Independent competitor research could not find **a single other South African or African company** that recoats copier fuser/hot rollers. The profile's wording is *"Africa's only specialist in the professional recoating of fuser (hot) rollers"* (stronger than the onboarding's "leading/specialist"). The **"only"** superlative is still ⚠️ unverified from a primary neutral source, but *"genuinely rare in SA"* is well-supported. This elevates recoating from "make it a lead generator" to **"build the entire brand around a category IMATEC may already own."**

3. **Three more brands than the onboarding listed.** ✅ The profile adds **Sharp, Toshiba and Lexmark** to the six in the onboarding (Ricoh, Canon, HP, Konica Minolta, Kyocera, Xerox) — nine named brands *"and many more."*

4. **A real, ownable differentiator hiding in plain sight: the sourcing + QC model.** ✅ *"We don't simply import products — we carefully source them from trusted international manufacturers during our overseas supplier visits. Every product is extensively tested in our own workshop on a wide range of machines before it becomes part of our product range."* No competitor makes this claim. It converts "we sell parts" into "we **vet** parts" — premium, specific, defensible (Design Language Law 2).

5. **The customer is the trade, not the end office.** ✅ *"Trusted by dealers and service providers across South Africa and Africa."* IMATEC sells primarily to **other technicians, dealers and MPS providers** — a peer B2B audience. This sets the voice (technical, peer-to-peer, no hand-holding) and the conversion model (trade enquiry / send-us-your-roller, not consumer checkout).

**Plus one contradiction to resolve:** the Instagram bio claims *"Wide-format printing & imaging solutions"* — a service the **company profile does not mention**. Do **not** build a wide-format offering on a stale bio line. → Client question (§30).

The tagline the client already uses — **"Engineering Better Print Solutions for Africa"** — validates the direction: the word is *engineering*.

---

## 1. Business Understanding

IMATEC (Imaging Technology) is a **30+ year 🟡 office-automation workshop and trade supplier** in Hennopspark, Centurion. It does four things that share one buyer (the copier/printer technician, dealer and MPS provider) and one promise (*keep this equipment running, at lower cost than replacement*):

- **Restores** worn fuser/hot rollers to working spec by recoating them (a specialist repair service — its heritage and differentiator).
- **Supplies** workshop-tested printer/copier parts, toner and consumables for 9+ major brands.
- **Builds** its own Vacu-Tec service vacuum cleaners, purpose-designed for copier technicians.
- **Distributes** Mr McKenic maintenance chemicals (agent status ⚠️ unverified — §22).

Its structural situation: a **genuinely differentiated, possibly category-defining operation that is effectively invisible online** (site 404s, 0 reviews anywhere, presence limited to a Facebook page handled `/fuserrollers/`). The opportunity is not to out-compete — it is to **become visible and credible** in a category with almost no contested search real estate.

**Source priority applied:** company profile (primary) → onboarding → supplied assets → existing site (empty) → socials → external research. Where these disagreed, the profile won and the delta is logged in §0.

---

## 2. What IMATEC Actually Sells (commercially, not as a service list)

| Pillar | What it *is* commercially | Buyer's real job | Margin/role |
|---|---|---|---|
| **Fuser & hot roller recoating** | A **cost-avoidance + uptime service**: recoat-and-reuse instead of buy-new-and-import. Sells against a R2,000–R6,000 new part + import lead time. | "Get this machine printing again without the cost/wait of a new roller." | **The hook & differentiator.** Highest strategic value, likely highest margin per job, lowest competition. **P0.** |
| **Printer/copier parts & consumables** | A **vetted-supply relationship**: workshop-tested parts across 9 brands, for trade buyers who can't risk a bad part. | "Get the right part, that actually works, fast." | **The volume & frequency layer.** Repeat revenue; keeps the relationship warm between recoating jobs. **P0/P1.** |
| **Vacu-Tec service vacuums** | An **owned product line** — locally built, technician-designed, ESD-relevant. | "Equip my techs with a purpose-built service vacuum." | **Proprietary product & proof of engineering capability.** Differentiates; small niche. **P1.** |
| **Mr McKenic chemicals** | A **branded consumable line** IMATEC supplies (agent ⚠️). | "Stock genuine maintenance chemicals from one trusted source." | **Basket-builder & trust signal** *if* agency verified. **P1.** |

**The commercial truth:** IMATEC doesn't sell four products. It sells **one relationship to the copier trade** — *the one workshop that keeps your fleet running* — with recoating as the front door and parts/vacuums/chemicals as the ongoing basket. Structure follows that (Revenue Priority Matrix, §20; IA, §7).

---

## 3. Primary Customer Groups

Ranked by likely revenue weight (🟡 — confirm split with client, §30):

1. **Independent copier/printer technicians & repair shops** — buy recoating + parts; value turnaround, correctness, peer credibility. *Primary.*
2. **Office-automation dealers & MPS providers** — recurring parts/consumables + recoating at fleet scale; value stock breadth, trade terms, reliability. *Primary, highest LTV.*
3. **OEM/large service operations** (Ricoh/Kyocera/Nashua-type channels) — generate worn rollers; potential recoating clients or referrers. *Secondary, high value.*
4. **In-house facilities / procurement at print-heavy organisations** (print rooms, government, education) — occasionally buy recoating/parts directly; more price/replacement-minded. *Secondary.*
5. **Technicians buying Vacu-Tec / Mr McKenic** — cross-sell within 1–3. *Tertiary.*

Every one is **B2B trade**. None is a walk-in consumer. Design and copy address a knowledgeable peer.

---

## 4. Customer Psychology & Ranked Objections

**Arrival state (Customer-Psychology §1):** *Considered purchase + trust-critical*, low urgency but real skepticism. A technician/dealer arrives mid-thought — often from a search for a part price or "can rollers be recoated" — carrying the default belief that **the answer is to replace, not repair**, and the suspicion that a recoating service is either non-existent locally or too-good-to-be-true.

**Emotional arc:** *arrives skeptical / resigned to replacing → must leave thinking "I've found the actual specialist who can restore this to spec, and I trust the work."*

**Top-5 ranked objections** (🧠 derived from research; confirm/expand from client's real sales calls, §30). Each must be answered **visibly on the page**, not only in the FAQ:

| # | Objection (buyer's words) | Answer strategy | Where |
|---|---|---|---|
| 1 | *"Can you actually recoat **my** roller — for my brand/model — to a standard that lasts?"* | Brand/model coverage list + process explanation + tolerance/QC + warranty 🟡 + authentic bench evidence | Hero evidence + recoating page process/coverage + FAQ |
| 2 | *"Is recoating even worth it vs just buying a new roller?"* | "Recoat vs replace" cost/turnaround/e-waste comparison, honest | Recoating page comparison block + FAQ |
| 3 | *"Are these people legit / still around / experienced?"* | 30+ years 🟡, own-workshop testing, premises, own-built Vacu-Tec as engineering proof; reviews/case studies when gathered | About + trust strip + dark spotlight |
| 4 | *"Will the parts you supply actually be right and reliable?"* | Workshop-tested sourcing model; brand breadth; "we vet, we don't drop-ship" | Parts page + About |
| 5 | *"How do I actually get a roller to you and how long will it take?"* | Send-us-your-roller logistics flow + turnaround time 🟡 + quote path | Recoating page process + Contact + sticky CTA |

**Proof preferences for this buyer (ranked):** ① process transparency & technical detail ② before/after and workshop evidence ③ brand/model coverage specifics ④ years/volumes ⑤ peer reviews/testimonials ⑥ warranty/guarantee. (Note reviews rank mid, not top — this is a *show-me-the-work* audience, which is fortunate given zero reviews exist today.)

---

## 5. Competitive Landscape

**The defining finding: for recoating, there is no direct competitor.** Across ~12 searches (including IMATEC-excluded queries), **no other SA/African company** was found recoating copier fuser/hot rollers. The field splits into non-overlapping buckets:

- **Industrial rubber-roller recoverers** (Rubber Engineering Africa, FusionTech RSA) — recover *press/production* rollers, explicitly **not** copier fusers. *Adjacent, wrong industry — and a terminology trap (§6).*
- **Fuser-roller manufacturers/sellers** (Enbi, Precision Roller, Xentair, NA Trading) — sell **new**, don't recoat used. *These are the "replace" alternative.*
- **SA copier-parts & consumables suppliers** — **PartServe** (authorised Kyocera distributor; strong e-commerce, the category's most sophisticated site), **United Copiers** (35+ yrs, broad catalog), **ITSA/Integral** (compatible toner, ISO certs, MPS focus), Toner Corp. *Single-lane; none recoat.*
- **SA copier repair shops** (Monostat, Printofix, Digital Revelation) — **replace/rebuild**, don't recoat the substrate.
- **Toner-vacuum resellers** (Christensen, Saftec) — commodity SKUs; **none markets an owned, technician-built service vacuum** (Vacu-Tec's edge).

**Competitive frame:** IMATEC does not compete with recoaters — it competes with **the buy-new-fuser reflex** and with **single-lane suppliers**. Its differentiators (unique recoating + own-built equipment + vetted multi-brand supply, all to one trade buyer) are a position **no competitor occupies**.

**White space (highest → lowest):**
1. A **real, technically credible website** at all (every incumbent is a catalog; none explains a process).
2. **"Recoat, don't replace"** — uncontested messaging territory.
3. **Technical-authority content** (the recoating process, model coverage, turnaround, warranty) — missing across the entire SA field; wins organic **and** AI/LLM citations.
4. **One coherent OA-maintenance identity** vs everyone's single lane.
5. A **clear conversion path** (quote + WhatsApp + send-your-roller logistics) vs competitors' bare phone numbers or generic carts.

---

## 6. SEO / Search Opportunity

Full method: `RESEARCH/SEO-RESEARCH.md`. Volumes are qualitative (SA en-ZA volumes are largely untooled; SERP competition is the reliable demand signal — no numbers were invented).

**Baseline:** imatec.co.za is a 404 with **zero index** — the entire footprint is greenfield. Nothing to preserve/301; this is **not a redesign** (changes the pipeline entry — no URL-migration gate item).

**Four intent buckets, separated:**

| Bucket | Character | IMATEC play |
|---|---|---|
| **Commercial** | "buy/order/quote": *fuser unit price, buy fuser, copier spares SA, [brand] toner* | Crowded on toner (avoid as a battleground); winnable on **parts long-tail** and **recoating** |
| **Informational** | "why/how": *why is my fuser film tearing, fuser roller marking pages, recoat vs replace* | **Strongest white-space.** Feeds recoating leads; wins AI citations. Proven demand on Copytechnet/YouTube |
| **Brand-product** | *Mr McKenic [product], Ricoh [part], Vacu-Tec* | Mr McKenic hub = capturable; **Vacu-Tec = blank slate** (must lead generic) |
| **Local** | *…Centurion / Pretoria / near me* | Under-contested vs Joburg-national incumbents; IMATEC's **proximity advantage** |

**Two terminology traps to design around (critical):**
- **"Recoating / recovering / reconditioning"** (industry-correct) pulls up the **wrong industry** (industrial press rollers) and is technician-only. **What buyers actually type is replacement language** — *"fuser unit price," "buy fuser," "fuser kit."* → The recoating page **must bridge**: rank for/near replacement intent, then convert to "recoat instead — cheaper, keeps your OEM core."
- **"Vacu-Tec"** has zero search demand (nobody searches a brand they've never heard of). → Lead the page on the **generic category** (*"toner vacuum South Africa," "ESD toner vacuum"*), convert to the brand on-page.

**Segment content for two readers:** technicians search *components/symptoms* (fuser film, pressure roller, tearing); buyers search *products/prices* (fuser unit price). The recoating and parts pages serve both.

---

## 7. Recommended Sitemap (Information Architecture)

🧠 Recommended structure — **not** restricted to the onboarding's four pages, but disciplined (no thin doorway pages; launch strong, expand in GROW).

**Core (P0 — exist at launch):**
- `/` **Home** — the whole proposition; recoating-led; four worlds discoverable. *Intent: brand + "fuser roller recoating South Africa" + category.*
- `/fuser-roller-recoating` **— the flagship service page.** *Intent: the recoating cluster + "recoat vs replace" + bridged replacement intent.* **The single most important page on the site.**
- `/printer-copier-parts` **— parts, toner & consumables.** *Intent: "copier spares South Africa," brand+component long-tail.* (Toner folded in as a section — see below.)
- `/about` **— the 30-year workshop story + vetting model.** *Intent: trust/credibility, brand.*
- `/contact` **— enquiry hub + send-your-roller logistics + NAP/local.** *Intent: "IMATEC Centurion," local + conversion.*

**Recommended SEO service pages (P1 — build once P0 ranks/converts, or at launch if content is ready):**
- `/vacu-tec` **— service vacuums.** *Intent: generic "toner vacuum / ESD toner vacuum SA" → convert to brand.* Justified: own product, differentiated, uncontested-ish niche.
- `/mr-mckenic` **— Mr McKenic range.** *Intent: "Mr McKenic South Africa" agent-hub (uncontested).* **Gated on verifying agency status (§22).** If unverified at build, ship as a lighter "genuine Mr McKenic products" stockist section, not an "authorised agent" page.

**Toner decision:** 🧠 **Do not** build a standalone toner page to fight a saturated SERP. Treat toner as a **section within `/printer-copier-parts`** (breadth proof + cross-sell), unless client data shows toner is a top revenue line — then revisit.

**Supporting / GROW-phase (P2 — recommended, not at launch):**
- Informational articles under the recoating cluster: *"Recoat vs replace a fuser roller,"* *"Why fuser rollers fail and mark pages,"* *"Which machines can have their rollers recoated."* → white-space + AI citations + internal links into `/fuser-roller-recoating`.

**Pages I explicitly recommend NOT creating:**
- ❌ 15 thin **location/suburb doorway pages** — OS bans doorway pages; local intent is served by real content on Home/Contact/service pages + GBP.
- ❌ A **separate throwaway PPC/toner page** duplicating the parts page (cannibalisation + index bloat).
- ❌ A **blog** before the core pages rank.
- ❌ A **wide-format printing** page — not in the company profile; unresolved (§30). Don't build on a stale bio line.
- ❌ An **e-commerce store** at launch — the buyer is trade/quote-driven; a cart adds build/maintenance cost without a proven need. Revisit in GROW if parts volume justifies it.

---

## 8. Keyword-to-Page Strategy

One cluster = one page (no cannibalisation, no dilution). 🧠 Representative; finalise in ARCHITECT with live SERP re-checks.

| Page | Primary cluster | Supporting / long-tail | Intent | Priority |
|---|---|---|---|---|
| `/fuser-roller-recoating` | fuser roller recoating · hot roller recoating (South Africa) | recoat vs replace fuser · fuser roller reconditioning/refurbishing · fuser roller repair · [Ricoh/Konica/Xerox] fuser roller recoating · *bridged:* fuser unit price / buy fuser (intercept) | Commercial + Informational | **P0** |
| `/` (Home) | IMATEC · fuser roller recoating specialist South Africa · office automation parts | brand + category + Centurion | Brand + Commercial | **P0** |
| `/printer-copier-parts` | copier spares / printer parts South Africa | [brand]+[component]+[model] long-tail (Ricoh fuser unit, Kyocera drum/pressure roller, Canon feed roller…) · compatible toner · maintenance kit | Commercial + Brand-product | **P0** |
| `/vacu-tec` | toner vacuum South Africa · ESD/anti-static toner vacuum | copier service vacuum · printer technician vacuum → *Vacu-Tec (brand, on-page)* | Commercial (generic-led) | **P1** |
| `/mr-mckenic` | Mr McKenic South Africa | Mr McKenic contact cleaner / 9-in-1 technology oil / silicone spray / **fuser roller cleaner** (ties to recoating) | Brand-product | **P1** (gated §22) |
| `/about` | IMATEC 30 years office automation | fuser roller recoating specialist · workshop-tested parts | Trust / brand | **P0** |
| `/contact` | IMATEC Centurion / Pretoria | copier parts Centurion · fuser roller recoating Gauteng · send roller for recoating | Local + conversion | **P0** |
| GROW articles | recoat vs replace · why fuser rollers fail | fuser film tearing · roller marking pages | Informational | **P2** |

**Rules applied:** each page's primary cluster appears in title, H1, first paragraph, one H2 — naturally; FAQ from PAA + real client questions → FAQPage schema on eligible pages only.

---

## 9. Positioning Recommendation

🧠 **"The workshop the copier trade trusts to restore, supply and equip — starting with the roller nobody else in Africa recoats."**

Positioning statement (internal): *For copier/printer technicians, dealers and MPS providers across South Africa and Africa, IMATEC is the 30-year office-automation workshop that restores fuser & hot rollers to spec (a service with no local peer), supplies parts it has hand-tested rather than merely imported, and builds its own service equipment — so the trade keeps its fleets running for less than the cost of replacing.*

Three pillars carry it:
1. **The recoating specialist** (unique category — the front door).
2. **The vetted supplier** (workshop-tested, not drop-shipped — the trust upgrade over rivals).
3. **The engineering operation** (builds its own Vacu-Tec — proof they *understand* the machines).

Avoid the incumbents' ground ("authorised distributor," "biggest catalog," "cheapest toner"). Own *specialist restoration + vetted supply + engineering credibility.*

---

## 10. Messaging Hierarchy

1. **One-liner (hero H1 territory):** *Fuser & hot roller recoating — restored to spec, not replaced.* + specialist/geographic qualifier.
2. **Proposition:** Africa's fuser-roller recoating specialist 🟡 + 30 years 🟡 + workshop-tested parts for 9 brands.
3. **Proof:** the process, brand/model coverage, own-built Vacu-Tec, own-workshop testing, premises. (Reviews/volumes added as gathered.)
4. **Reassurance:** send-us-your-roller flow, turnaround 🟡, WhatsApp reply speed 🟡, no-obligation quote.
5. **Everything else** (Mr McKenic, toner breadth) supports — never leads.

Voice bank (authentic phrases mined from client material, use as tone anchors — do **not** paste verbatim as claims): *"recoating of fuser/hot rollers," "office automation industry," "workshop-tested," "we don't simply import," "tested in our own workshop on a wide range of machines," "keep our customers' businesses running," "Engineering Better Print Solutions."* Words to avoid (agency filler, and client-used generics that say nothing): *innovative, world-class, cutting-edge, premium, solutions-as-filler, we pride ourselves.*

---

## 11. The Blocking Question

Per Hero System §2 — one question, traced to the ranked objections (#1 + #3):

> **"Have I actually found the specialist who can restore *this* to a standard I can trust — or is this just another parts reseller?"**

It maps to the *capability/differentiation* row of the Hero table ("Can you actually handle *my* specialist work?"). Everything above the fold exists to answer it: **yes, this is a real workshop, it recoats rollers (which nobody else here does), and here is the evidence.** Category clarity (what is this?) and action (what now?) are handled alongside, but the *blocking* doubt is credibility-of-specialism.

---

## 12. Recommended Hero Archetype

🧠 **Archetype C — Capability / Industrial**, executed distinctively (not the reference-set cliché).

- **Why C:** the Blocking Question is capability/credibility; the buyer is skeptical-B2B where **density and evidence read as substance and minimalism reads as "small operation"** (Design Language §5, Hero §2). C is built for exactly this.
- **Execution:** large, plain H1 (recoating + specialist + SA) · a compact **capability/evidence panel** built from the **authentic bench roller photograph** (the recoated matte-black cylinder in the workshop — the single most persuasive asset) · 2–3 verified proof facts (30 years 🟡 · 9 brands ✅ · own-built equipment ✅) · one primary CTA (Request a recoating quote / WhatsApp) · the **four worlds surfaced as overlapping cards breaking the fold** (Hero F10) so category breadth is visible without a wall of text.

**Why not the alternatives (explicitly):**
- ❌ **A — Editorial full-bleed:** requires a 2400px hero-grade image; the best authentic asset is 1448px (§23), and editorial carries no capability information. Wrong for a credibility Blocking Question.
- ❌ **B — standard Split (copy left / image right):** the onboarding *specifically* asked to avoid "left copy + right image + three trust ticks," and it's the most templated-feeling archetype. (We use split *logic* inside C, but not the tired shell.)
- ❌ **H — Progressive Capability (sticky-scroll):** that is the **Vision Motors** invention; reusing it here is exactly the reflex the brief warned against, its complexity is high, and it gives all four worlds *equal* billing — but recoating deserves **top** billing, not parity. Recoating leads; the others follow.

**Hero Brief (to be finalised at Gate 2):** Blocking Question above · category sentence *"Fuser & hot roller recoating and workshop-tested copier parts, Centurion"* · arc *skeptical → convinced* · evidence = bench roller image + 3 verified facts · CTA = "Request a recoating quote" (primary) + WhatsApp (secondary intent) · mobile fold ≤5 elements · **LCP = the H1 text** (renders at first paint, never animated).

---

## 13. Homepage Section Architecture

Written as a **question chain** (Design Language Law 5). Density = **Substantive**, surfaces alternate, one dark spotlight.

1. **Hero (C)** — *"Have I found the specialist?"* → recoating-led capability hero (§12). *Light/graphite.*
2. **The four worlds** — *"What exactly do you do?"* → four differentiated tiles (Service / Products / Own-product / Brand), recoating visually dominant, overlapping the hero fold. *Light.*
3. **Recoating spotlight** — *"Is recoating real and worth it?"* → the flagship: recoat-vs-replace argument + bench evidence + "how it works" teaser → links to `/fuser-roller-recoating`. *Tinted.*
4. **Why IMATEC (the vetting model)** — *"Why you over a catalog reseller?"* → workshop-tested sourcing, 30 years 🟡, engineering (own-built Vacu-Tec), 9-brand coverage. Each: claim → proof → so-what. *Dark spotlight* (the trust centre of gravity).
5. **Parts & brand coverage** — *"Can you supply what I need?"* → brand logos/names ✅ + parts breadth + long-tail entry point. *Light.*
6. **Proof / process** — *"Show me."* → process steps + authentic imagery (+ testimonials/case studies **when gathered** — not fabricated). *Tinted.*
7. **Conversion band + FAQ** — *"How do I start / what do I send?"* → send-your-roller flow + WhatsApp/quote + top objections as FAQ. *Dark → primary CTA.*
8. **Footer** — NAP (locked), local signals, Bbettr credit.

No section exists without a question. Rhythm varies surface, composition and density across all eight.

---

## 14. Service-Page Architecture

The four offerings are **fundamentally different types** and get different treatments (not four identical cards):

- **`/fuser-roller-recoating` (a SERVICE — the flagship, landing-page-grade):** message-matched hero (recoat vs replace) → the problem (worn roller symptoms, in tech language) → **recoat vs replace** comparison (cost/turnaround/e-waste, honest) → **the process** (strip → substrate prep → recoat → cure → **bench-test**) 🟡 confirm exact steps → **brand/model coverage** ✅ → turnaround & warranty 🟡 → **send-us-your-roller logistics** → FAQ (FAQPage schema) → repeated quote/WhatsApp CTA. Passes the Ad-Budget Test standalone.
- **`/printer-copier-parts` (SUPPLY):** vetted-supply proposition → brand grid (9+) → component categories (fuser units, rollers, drums, feed rollers, gears, kits) → toner/consumables section → "request a part" enquiry (brand/model/part) → trade-terms note 🟡.
- **`/vacu-tec` (OWN PRODUCT):** generic-led hero ("ESD toner vacuum, built for copier techs") → what it is / who it's for → **built-by-IMATEC** engineering story (differentiator) → specs 🟡 → enquiry/quote. Product schema if it becomes purchasable.
- **`/mr-mckenic` (BRAND RANGE — gated §22):** range overview → product list (Contact Cleaner, 9-in-1 Oil, Silicone Spray, Fuser Roller Cleaner → ties to recoating) → **agent/stockist framing per verification** → enquiry.

They feel related (one workshop, one system) but correctly individuated.

---

## 15. Fuser Recoating Lead-Generation Strategy

This is the brief's central ask. The strategy makes recoating the growth engine across **eight** levers:

1. **IA:** its own P0 flagship page (`/fuser-roller-recoating`) + homepage dominance (§13.1, §13.3).
2. **SEO:** own the uncontested recoating cluster **and bridge replacement intent** ("recoat vs replace" intercepts "fuser unit price" buyers). Informational articles (recoat-vs-replace, why rollers fail) feed it and win AI citations.
3. **Homepage hierarchy:** recoating is the hero and the first/most prominent world.
4. **Internal linking:** every parts, About, Vacu-Tec, Mr McKenic (Fuser Roller Cleaner) and GROW article links **into** the recoating page; the roller is the hub of the internal-link graph.
5. **CTA strategy:** a recoating-specific conversion — **"Send us your roller"** logistics flow (courier-in → recoat → bench-test → courier-back) is a differentiated, high-intent mechanic no competitor offers. Primary quote CTA is recoating-framed.
6. **Copy:** "restored to spec, not replaced" · honest cost/turnaround comparison · process transparency (the moat).
7. **Imagery:** the authentic bench roller and process shots are the argument (§24 shot list prioritises these).
8. **Qualification form (recoating):** minimal but useful — **brand, model, roller/component, quantity, issue, optional photo upload** (mapped to GHL; §20). Ask only what routes/qualifies; confirm the real minimum against the sales process (§30).

**Truth guard:** do **not** invent the exact recoating procedure, tolerances, turnaround or warranty. These are 🟡/❓ — flagged in §30. The strategy is sound; the specifics must come from the client.

---

## 16. Visual Direction

> **⚠️ SUPERSEDED — Visual Direction Amendment (v2, light-first, 2026-08-18).** Sections 16–19 below described a dark-forward treatment. The client has since locked a **light-first** direction: predominantly white/soft off-white, IMATEC blue as a controlled accent, charcoal `#343434` type, light steel-grey structure, **Open Sans** as the sole typeface (no monospace/industrial type), and **no mandatory dark section** (the only "dark" is the authentic black recoated roller as a product object). "THE BENCH" now expresses precision/experience/workshop capability through photography, alignment and typography — *clean specialist technology company with real workshop capability*, not heavy industrial. **The authoritative visual spec is now the Phase 1B blueprint (`PHASE-1B-SITEMAP-WIREFRAME-HERO.md` + `imatec-blueprint.html`).** Read §16–§19 and §13's "dark spotlight" for strategy/intent only; the light-first blueprint overrides their surface/colour/type/motion specifics.

🧠 The visual world comes from IMATEC's actual bench — **precision engineering × office automation × workshop**, not "generic corporate tech." (Full spec becomes the Visual Direction Brief at Gate 2.)

- **Density mode:** **Substantive** (capability/workshop business — Design Language §5) — many facts per viewport, but **rhythmic, never cramped**: spec-sheet order, generous rhythm. One Editorial moment allowed (a full-bleed roller statement).
- **The signature motif — the cylinder & the tolerance line:** the fuser roller (a precise matte-black cylinder) is IMATEC's hero object; the recurring graphic device is a **precision measurement / tolerance line** and **part-number chrome** — engineered marks that *mean* something (measurement, spec, identification), never decorative "tech" lines.
- **Surfaces:** machined-metal neutrals and **matte-black spotlights echoing the recoated roller finish** — a dark-forward industrial world with light reading sections between.
- **Photography as argument:** authentic bench/workshop/component macro leads (§24). Real over stock, always.
- **Explicitly avoid** (from the brief + OS §5 refusals): fake sci-fi UI, glowing lines, glassmorphism, floating blobs, fake dashboards/schematics, neon cyberpunk, generic blue SaaS, gradient soup, excessive cards, angled/wave section cuts. Every visual reinforces **precision, durability, specialist competence.**

The negative test: nothing on the page could belong to a toner reseller.

---

## 17. Colour Direction

🧠 Extracted from the actual logo (charcoal `#343434` + IMATEC blue `#0B82E6`) and the assets (matte-black roller; Vacu-Tec's dark-blue/red). Discipline = near-monochrome field + **one** reserved accent (Design Language §4). Structure fixed, values below (verify all contrast pairs at token time):

| Role | Value (proposed) | Rationale |
|---|---|---|
| **Primary** (structure, links, icons) | IMATEC Blue `#0B82E6` (+ dark/light steps) | The brand's existing signal; the "precision" colour |
| **Accent** (reserved — primary CTA only) | 🧠 **Blue as accent** *or* a tightly-controlled warm signal. Recommendation: **use the blue as the reserved CTA accent** and let charcoal/graphite carry structure — keeping strictly **one** action colour. | One trained "act here" signal; avoids a second competing hue |
| **Ink scale** (dark surfaces & text) | `#141414` roller-black → `#343434` charcoal → graphite → steel | The machined-metal / matte-roller world; dark spotlights |
| **Light surfaces** | bone/mist (cool off-white) | Reading environments between dark bands |
| **Action-only** | WhatsApp green `#25D366` | The one non-accent action colour (SA channel) |
| **Semantic** | error/success/focus only | Never decoration; focus ring = primaryLight |

**Brand-recognition note:** we evolve the presentation (dark-forward, machined) but keep the **blue + charcoal** brand equity — no arbitrary abandonment. **Red** (from the Vacu-Tec unit) is **not** adopted sitewide (would break the one-accent rule); if used at all, quarantine it inside Vacu-Tec product context.

**The Mr McKenic quarantine:** Mr McKenic's loud yellow/blue cartoon-mascot branding **clashes** with IMATEC's restrained industrial identity. It must be **contained within its own product zone** (shown as product photography on a neutral field), never allowed to set the site's palette.

---

## 18. Typography Direction

🧠 Two typefaces max, big size contrast, few weights (Design Language §3):

- **Display:** a **precise, engineered grotesque** (technical, confident, slightly mechanical — e.g. a Neue-Haas / Suisse / Söhne-class grotesque). Tight tracking at large sizes.
- **Body:** a highly legible neutral sans (e.g. Inter-class), ≤65ch measure.
- **Technical/data chrome (part numbers, specs, tolerance labels):** rendered in **tabular/monospaced figures**. 🧠 If a dedicated **monospace** is used for part-number/spec chrome, it edges the two-typeface rule — so it is declared as a **deliberate functional exception** in the Visual Direction Brief (data-chrome only, never body/headings) *or* achieved via the body family's tabular figures. Decide at Gate 2; default to tabular figures unless the mono materially strengthens the "spec-sheet" identity.

Numerals treated as first-class visual objects (stat pairs). No ALL-CAPS headlines; caps only for eyebrows/spec labels with wide tracking.

---

## 19. Motion Character

🧠 **`precise`** (Motion System §3: section 0.45 / card 0.4 / hero 0.6, stagger 0.05) — reads as *"engineered, efficient."* Exactly the brief's brief: *precise / controlled / mechanical / confident*, not soft luxury.

Motion earns its place only by explaining hierarchy or process (Motion §1): e.g. the recoating **process** steps revealing in sequence; component relationships; the reveal order of capability facts. All via `ENGINE/motion` presets — one ease `[0.22,1,0.36,1]`, no bespoke values, no second library.

**Hard rules (non-negotiable, Motion §5–§9):** LCP (the H1) never animates; no `priority` image inside an opacity animation; `MotionProvider` + `<noscript>` fallback; `prefers-reduced-motion` verified in-browser (content fully shown, instantly); no parallax on mobile; no layout-property animation; entrance ≤900ms. A "mechanical" feel must never cost performance or accessibility.

---

## 20. Conversion Architecture

Per Marketing Engine — every important page is a **landing page** that passes the Ad-Budget Test.

- **Channel hierarchy (SA trade reality):**
  - **Primary:** **WhatsApp** (`082 808 5623` 🟡 confirm) with pre-filled qualifying message — low-commitment, high-trust first contact for the trade — **and** a **recoating quote / "send us your roller" enquiry** where intent is higher.
  - **Secondary:** **Call** (number as text + `tel:`), **Email** (one canonical address — §22/§30), **Request a Quote** form.
- **Sticky mobile CTA bar** (Call + WhatsApp) — mandatory; the mobile conversion surface.
- **Recoating form (minimal-useful):** brand · model · roller/component · quantity · issue · optional photo upload. Every field routes/qualifies; ≤5 per step; multi-step if it grows. **Confirm the true minimum against the sales process before building (§30).**
- **Parts enquiry:** brand · model · part needed.
- **Backend:** **GHL** (OS standard) — every submission creates Contact + Opportunity in the right pipeline/stage, sets source/campaign/landing page/service, fires auto-reply + internal notification + follow-up sequence, captures attribution (utm/gclid/fbclid/landing/referrer/device). Lead-Routing Map produced in ARCHITECT.
- **Tracking (planned now, built in BUILD):** GA4 + GTM + Meta Pixel/CAPI + Google Ads (Enhanced Conversions) + Clarity + Search Console, consent-aware (POPIA). Standard event taxonomy (whatsapp_click, call_click, lead_form_submit, cta_click, scroll_depth, thank_you_view).
- **Attention ratio:** paid-primary landing pages (recoating) tuned toward 1:1.

Not aggressive, not a funnel: contact appears naturally at each proof beat, per the brief.

---

## 21. Trust / Proof Inventory (what we can stand behind today)

✅/🟡 **Usable now:**
- ✅ Physical workshop premises (Centurion) — real operation.
- ✅ Own-built **Vacu-Tec** product (image + profile) — engineering proof.
- ✅ **9+ brand coverage** named (Ricoh, Canon, HP, Konica Minolta, Kyocera, Xerox, Sharp, Toshiba, Lexmark).
- ✅ **Recoating capability** (profile + FB `/fuserrollers/` + directory descriptor "leaders in re-coating of fuser/hot rollers" + authentic bench photo).
- ✅ **Workshop-tested sourcing model** (profile) — the vetting differentiator.
- 🟡 **30+ years** experience (client-stated; confirm).
- 🟡 **Africa's only/leading recoating specialist** (strongly supported as "rare in SA"; the exact superlative unverified — see §22).

---

## 22. Missing Proof & High-Risk Claims

⚠️/❓ **Must resolve before publishing:**

- ⚠️ **"Authorised South African agent for Mr McKenic" — the single highest-risk claim.** Sourced **only** from IMATEC's own AI-generated Facebook post (~19h old). Mr McKenic is a **Singapore brand** (Vance Chemicals Pte Ltd); no manufacturer distributor list names IMATEC; **multiple other SA resellers exist** (Hot Tools, Switchrite, Chem-Tek). **Do not publish "authorised agent" until the client produces a distribution/agency agreement or letter from Vance Chemicals.** Safe fallback wording until then: *"supplier of genuine Mr McKenic products."* Clarify scope (sole? distributor? territory? range?).
- ⚠️ **"Africa's only/leading" recoating specialist** — publishable-safe version: *"South Africa's fuser & hot roller recoating specialist"* (well-supported) until "only/Africa" is substantiated.
- ⚠️ **"30+ years"** — confirm founding year; then it's publishable.
- ❓ **Zero reviews/testimonials anywhere** (FB 0 reviews, Snupit 0, no GBP found) — plan testimonial/case-study gathering + a claimed **Google Business Profile** as launch priorities. **No fabricated ratings/stars** (OS hard rule).
- ❓ **No verified:** volumes recoated, warranty terms, turnaround times, client names/logos, certifications, exact recoating process, team/history detail, before/after evidence.

---

## 23. Asset Audit

Four supplied images (all 72dpi PNG). **Asset Map:**

| File | What it depicts | Authentic? | Resolution | Best use | Notes / cautions |
|---|---|---|---|---|---|
| `…62B97B2B…png` | **Mr McKenic retail display** (7 product cans, mascot, "Solutions you can count on!") | ✅ Real brand product shot (studio) | 1402×1122 — medium | Mr McKenic section/page product visual | **Style clash** — loud yellow/blue cartoon; **quarantine** to McKenic zone; do not let it set palette |
| `…AF48AF65…png` | **Imatec VACUTEC** service vacuum (black unit, hose, tray) | ✅ IMATEC's own product (studio render) | 1448×1086 — medium | Vacu-Tec page hero/product card | Confirms own-product story; render-clean; **not** full-bleed-hero res |
| `…8574660E…png` | **Recoated roller on the workshop lathe** — matte-black cylinder, real bench, machined chuck | ✅ **Authentic IMATEC workshop** — the strongest asset | 1448×1086 — medium | **Recoating page hero / homepage evidence / the bench motif** | The money shot. **Below 2400px** full-bleed spec → use *contained/split*, or request the higher-res original / reshoot for full-bleed |
| `…ED8A5A6C…png` | **Printer parts spread** — teal drum, red hot roller, black pressure roller, fuser units, gears, feed rollers, 3 MFPs behind | Styled product array — ⚠️ **possibly stock/AI-composited** (very "designed") | 1536×1024 — medium | Parts page / homepage parts section | **Confirm provenance** before hero use; excellent parts-breadth visual; verify it's IMATEC's actual stock, not generic |

**Verdict:** enough to *design with* and prove the story exists, but **none is full-bleed-hero-grade (all ~1400–1536px)**, and one may not be authentic IMATEC stock. Do not stretch two/four medium images across a whole site. → commission the shoot (§24) and request higher-res originals of the bench roller.

**Logo:** ✅ clean vector SVG (charcoal + blue), production-ready.

---

## 24. Photography Shot List (recommended)

🧠 Derived from the IA. **Priority 1 (build-critical — recoating is the differentiator; authentic process imagery is worth more than any parts stock):**
1. **Recoated roller macro** — the finished matte-black cylinder, studio-clean, multiple angles (hero + product-object motif).
2. **The recoating process, in stages** — worn roller in → substrate/strip → coating → cure → **bench-test on a machine** (feeds the process section, the moat).
3. **Technician working on a roller** at the lathe/bench (human + capability; higher-res version of the supplied bench shot).
4. **Before / after** a worn vs recoated roller, side by side (kills objection #2).
5. **Workshop wide shot** — proves the real operation/scale.

**Priority 2 (supply & products):**
6. **Parts on shelves / stock breadth** (authentic IMATEC stock — replaces the ⚠️ questionable spread).
7. **Branded parts / rollers / fuser units** macro, on a machined-metal surface.
8. **Vacu-Tec in real use** by a technician (not only the render).
9. **Mr McKenic range** on a neutral field (quarantined styling).
10. **Hands inspecting/measuring a component** (precision motif).

**Priority 3:** premises exterior/signage, team/owner (Dorette) portrait for About (if willing), courier/dispatch (for the send-your-roller flow).

Deliver mobile crops for any off-centre subject; AVIF/WebP; alt text describes the evidence.

---

## 25. Local SEO Plan

- **Google Business Profile:** ❓ none found — **claim/create it** (priority quick win). Category "Office equipment supplier"/"Copier repair service"; photos (workshop, roller, premises); services; posts. A claimed GBP + first reviews is the fastest trust/local lever given zero reviews today.
- **NAP — lock a single canonical set first (blocking):** current fragmentation — **3 emails** (dorette@ / sales@ / imatec@netactive.co.za, + accounts@ on the Vacu-Tec render), **2 phones** (082 808 5623 mobile / 012 653 0428 landline), address variants (Eldor Park / Unit 7 / Ext 15 / 0157), name hyphenation. **Client must choose one name, one address, one primary phone, one primary email** before any schema or citation work (§30).
- **Location signals:** Centurion/Pretoria/Gauteng woven into Home, Contact and service pages + LocalBusiness schema — **no doorway pages**. National reach messaging for recoating (courier-in service) + local emphasis for parts/walk-in trade.
- **Citations:** after NAP lock, clean up the existing directory listings (Snupit, Brabys, sayellow, africanadvice, SearchInAfrica) to the canonical NAP.
- **Service-area vs address:** one real physical address (full LocalBusiness + map); recoating served nationally via courier (service-area content, no fake branch addresses).

---

## 26. Technical SEO Requirements

- Next.js static-first; one `<h1>`/page; no skipped headings; crawlable text (no JS-only content); descriptive SEO-named images + alt text.
- Unique `<title>` (<60) + meta description (<155) per page; canonical on every page; `sitemap.ts` + `robots.ts`; OpenGraph + Twitter + real `og-image` per page.
- Internal linking graph centred on the recoating page; no orphans; service/parts pages linked from home + footer.
- Greenfield → **no 301/URL-migration needed** (nothing indexed to preserve); submit sitemap to Search Console at launch.
- Core Web Vitals as ranking + Quality-Score inputs (§28).

---

## 27. Schema Recommendations

- **Organization / LocalBusiness** (locked NAP, geo, hours, logo, sameAs → FB/IG) — site-wide.
- **Service** schema on `/fuser-roller-recoating` (+ parts, Vacu-Tec) — service type, area served, provider.
- **BreadcrumbList** on all inner pages.
- **FAQPage** only where genuine Q&A exists (recoating page, likely parts) — eligible + useful only.
- **Product** schema for Vacu-Tec / Mr McKenic **only if** purchasable with real details.
- ❌ **No AggregateRating/Review schema** — zero genuine consented reviews exist; fabrication is prohibited. Add later, from real reviews only.
- Validate zero-error at Gate 3.

---

## 28. Performance Risks

Budgets (HARD): LCP <2.5s, CLS <0.1, INP <200ms, Lighthouse mobile ≥90 (target ≥95), first-load JS <150KB.

- **Image weight** — supplied PNGs are large/72dpi; must be converted AVIF/WebP, responsive, hero <200KB / others <120KB. The dark-forward, image-heavy direction needs disciplined optimisation.
- **LCP** — hero LCP = **H1 text** (renders at first paint, never animated); if a hero image is used it carries `priority` and is never opacity-animated.
- **Motion** — `precise` character + process animations must stay compositor-only (transform/opacity), single library, LazyMotion strict.
- **Third-party** (GHL embeds, GTM, Pixel/CAPI, WhatsApp) — load `afterInteractive`/on-interaction; each justified in PROJECT_STATUS; watch CWV drag.
- **Substantive density** — more elements at the same rhythm must not balloon DOM/JS; keep sections static-rendered.

---

## 29. Accessibility Considerations

- Contrast 4.5:1 body / 3:1 large — **measured**, incl. over dark roller imagery and matte-black spotlights (a dark-forward palette makes this critical).
- Full keyboard traversal; visible focus ring on every surface incl. dark; skip-to-content.
- `prefers-reduced-motion` honoured structurally (MotionProvider) + verified in-browser; process animations degrade to static, fully readable.
- Touch targets ≥44×44px; labelled form fields; announced errors; correct `inputMode`.
- No hover-only affordances; no text over busy imagery without a measured scrim.
- axe zero critical/serious at Gate 3.

---

## 30. Information We Still Need From the Client

**Blocking (before build / before certain claims go live):**
1. **Mr McKenic agency proof** — distribution/agency agreement or letter from Vance Chemicals (Singapore). Scope: sole agent? distributor? territory? range? *(gates the "authorised agent" claim and the `/mr-mckenic` page framing.)*
2. **Canonical NAP** — one business name (hyphenation), one address (Eldor Park/Unit 7/Ext number/postcode), one primary phone, one primary email. *(gates schema, citations, footer, GBP.)*
3. **Founding year** — to substantiate "30+ years."
4. **The exact recoating process** — the real steps, and what's true re: substrate, coating type, cure, **bench-testing**. *(for the process section — must not be invented.)*
5. **Recoating turnaround time** and **warranty/guarantee** terms (if any).
6. **The "send us your roller" logistics reality** — courier arrangements, who pays, packaging, lead time. *(gates the conversion mechanic.)*
7. **Sales-process reality** — what a technician/dealer asks first; the true minimum qualifying fields for a recoating quote. *(gates the form.)*

**Important (strengthens the build):**
8. Verify **"Africa's only/leading"** — evidence for the superlative, or accept the "SA specialist" wording.
9. **Which brands/models** can actually be recoated (larger Ricoh/Konica/Xerox hot rollers vs film-sleeve machines that can't) — needed for honest coverage + SEO.
10. **Revenue split** across the four pillars — confirms the Revenue Priority Matrix.
11. **Wide-format printing** — do they actually offer it (IG bio), or is that stale? *(gates whether it exists in IA at all.)*
12. **Testimonials / case studies / reference clients** (with consent) + permission to use **brand logos**.
13. **Higher-res original** of the bench roller photo; confirm **provenance of the parts-spread image**.
14. **Team/owner** (Dorette) — willingness for an About portrait + the real origin story.
15. **Trade terms / accounts** — do they offer them (affects parts page + CRM).
16. **Vacu-Tec** specs, price positioning, whether sold outright or to order.

**No gaps silently filled:** every ❓/🟡/⚠️ above is surfaced, not invented.

---

## 31. What Should Make This Website Unmistakably IMATEC

- The **recoated roller as the brand's hero object** — a precise matte-black cylinder, treated as the identity, not decoration.
- **"Recoat, don't replace"** as a genuine, uncontested argument — a position no SA competitor can echo.
- **Authentic bench/workshop/component photography** as the evidence layer — could belong to no other company (Design Language Law 2).
- The **vetting story** ("we don't simply import — we test every part in our own workshop") stated plainly, which no rival claims.
- **Engineering credibility made visible** — IMATEC builds its own Vacu-Tec; the site should show a company that *makes and restores*, not one that resells.
- A **spec-sheet visual language** (tolerance lines, part-number chrome, machined neutrals, one blue precision accent) that feels like the workshop it comes from.
- **Precise, mechanical motion** that explains process — engineered, not luxurious.
- A **trade voice** — technical, direct, peer-to-peer; confident without boasting.

If a stranger in the copier trade lands on it, the reaction should be: *"These people actually know this equipment."*

---

## 32. Patterns From Previous Bbettr Sites I Deliberately Did NOT Reuse

- ❌ **Vision Motors' sticky Progressive-Capability hero (Archetype H)** — the reflex "we have a cool hero, use it" move the brief warned against; also over-equalises the four worlds. Recoating must lead.
- ❌ **The standard "copy-left / image-right + three trust ticks" split** — explicitly what the onboarding said to avoid; the most templated shell.
- ❌ **The `A · B · C` eyebrow formula** ("Established 1997 · Moreleta Park · FSP 6280") — the OS's own flagged agency tell across Signage/Multi-Risk/Zaydtex. Vary the construction.
- ❌ **Zaydtex's cream/copper/chocolate heritage palette**, **Signage's teal/amber**, **Cuisine Foods'** food-B2B warmth — none fit a machined industrial workshop. New dark-forward machined palette instead.
- ❌ **Decorative 5-star rows / trust numbers not bound to data** (the Signage/Multi-Risk defect) — IMATEC has **zero** reviews; we ship honest empty-state trust (process, credentials, premises), never fabricated stars.
- ❌ **Editorial full-bleed imagery** (Bougasvlei/Signage) — wrong Blocking Question, and assets aren't full-bleed-grade.
- ❌ **Soft "considered/editorial" luxury motion** — replaced with `precise` mechanical motion.
- ❌ **A generic services grid of four identical cards** — the four offerings are different *types* and are treated differently (§14).

The OS governs the *quality and thinking*; it does not mean IMATEC should look like any prior Bbettr site. It won't.

---

## Recommended Creative Concept — **"THE BENCH"**

*(strategic + visual concept, named)*

**The idea.** IMATEC is not a store; it is a **workbench**. Everything it's respected for happens on a bench in Hennopspark: a worn fuser roller is stripped, recoated, cured and **tested on a real machine**; parts are put through machines before they're trusted; the Vacu-Tec is designed and built. So the website is built from that bench — its materials, its light, its precision, its honesty. The concept is **"The Bench": the workshop behind the workshops.**

**Why it's strategically unique.** It converts IMATEC's three real, ownable truths — *the only recoater in the market, the supplier who tests before it sells, the operation that builds its own tools* — into a single, defensible identity the competitive field literally cannot copy (they are catalogs; IMATEC is a bench). It reframes the category from *replace* to *restore*, and reframes IMATEC from *reseller* to *specialist*. It gives the fuser roller — the one thing no one else here does — the role of **brand hero object**, so the differentiator is also the aesthetic.

**Why it's visually unique.** The design language is derived from the bench, not from web trends: the **matte-black recoated cylinder** as the recurring hero object; **machined-metal neutrals** and **roller-black spotlights**; a **precision "tolerance line" and part-number typographic system** that reads as measurement and identification, not "tech decoration"; **authentic bench/component photography** as the argument; the **IMATEC blue** used with discipline as the single precision/action signal; **precise, mechanical motion** that explains process. It is restraint plus substance (Design Language Law 3) — Substantive density with a spec-sheet calm. Nothing on it could belong to a toner reseller, a SaaS, or a previous Bbettr site.

**In one line:** *IMATEC — restored to spec, on the bench Africa's copier trade trusts.*

---

## Build Recommendation: **MODIFY, then APPROVE**

🧠 **Recommendation: proceed to build — but not yet.** The strategy is strong and the creative concept ("The Bench") is right. However, the OS Truth Gate and Gate 1/2 requirements mean **a small set of client confirmations must land first**, because they gate live claims and core page content — not because the direction is in doubt.

**Approve now (no blockers):** the positioning (§9), the concept "The Bench" (§16–§19, creative concept), the recoating-led IA & hero (§7, §12, §13), the SEO architecture (§6–§8), the conversion model (§20), and the greenfield technical plan.

**Modify / resolve before/at build (the gating items):**
1. **Mr McKenic agency proof** — or reword to "genuine Mr McKenic products" and lighten `/mr-mckenic`. *(highest risk — §22.)*
2. **Lock canonical NAP** — blocks schema/citations/GBP. *(§25/§30.)*
3. **Recoating specifics** — process, turnaround, warranty, brands/models, send-your-roller logistics — the flagship page can't be honestly built without them. *(§15/§30.)*
4. **Substantiate or reword** "Africa's only" and "30+ years." *(§21/§22.)*
5. **Commission the photography** (Priority-1 recoating shots) + resolve the parts-image provenance — the concept depends on authentic bench imagery, and assets aren't hero-grade. *(§23/§24.)*

**Why MODIFY not DO-NOT-BUILD:** none of these threatens the strategy; they are inputs the client holds. The market opportunity is exceptional (a possibly category-owning specialist that is currently invisible), the differentiation is real and defensible, and the concept is ready. **Approve the strategy; gather the five confirmations; then build.**

> **Do not implement anything until the strategy is approved.** This is Phase 1 only.

---

*Prepared under Bbettr Website OS v2.5.0. Verified/Client-stated/Unverified/Missing status is preserved per the Truth Gate; nothing marked ⚠️ or 🟡 may ship as live copy until confirmed. Next artifacts on approval: Client Brief + Hero Brief + Visual Direction Brief (Gate 2), then ARCHITECT (site map + keyword map + tracking/CRM plan).*
