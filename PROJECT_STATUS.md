# IMATEC — PROJECT STATUS

**OS version:** Bbettr Website OS v2.5.0 · **Concept:** THE BENCH (light-first)
**Repo:** bbettr-agency/imatec → Vercel from `main`
**Phase:** BUILD (homepage + full sitemap shipped to production state)

## Visual Direction (locked by client)

- **Density:** Balanced-Substantive, light-first · **Motion character:** `precise`
- **Palette:** paper `#FFFFFF` / off-white `#F6F8FA` / charcoal `#343434` / IMATEC blue `#0B82E6`
  (accessible tints: CTA `#0A6AC0`, links `#0A5FA8`) / steel greys. **No dark sections.**
- **Type:** Open Sans only (hierarchy via weight/size/spacing). No monospace/industrial faces.
- **Accent** reserved for primary CTAs + key marks; WhatsApp green the only other action colour.

## Built

- ✅ Foundation: Next 14, TS strict, Tailwind tokens, Open Sans, vendored motion engine
- ✅ Global: layout (MotionProvider + `<noscript>` fallback), nav (scroll state + mobile), footer, sticky mobile CTA
- ✅ Hero (Capability / THE BENCH) — authentic recoated-roller object, LCP = H1 (unanimated)
- ✅ Homepage: four-worlds (differentiated), recoat-vs-replace, why-imatec (light band), process, coverage, story, FAQ, final CTA
- ✅ Pages: `/fuser-roller-recoating` (flagship), `/printer-copier-parts`, `/vacu-tec`, `/mr-mckenic`, `/about`, `/contact`
- ✅ SEO: per-page metadata (title/desc/canonical/OG), sitemap.ts, robots.ts, LocalBusiness/Service/Breadcrumb/FAQPage JSON-LD, internal linking, alt text, 404
- ✅ Conversion: context-aware WhatsApp/call/email CTAs; enquiry form (GHL webhook + WhatsApp fallback) with UTM/GCLID/FBCLID attribution capture + POPIA consent
- ✅ Analytics: consent-gated GTM loader (dormant until `NEXT_PUBLIC_GTM_ID` set)
- ✅ Build passes: `next build` clean; first-load JS 144–149 KB (< 150 KB budget); images AVIF/WebP via next/image

## ⚠️ Truth gate — HELD / PENDING (do not publish as live claims until confirmed)

- **Mr McKenic "authorised SA agent"** — HELD. Currently worded "genuine Mr McKenic products supplied by IMATEC". Needs distribution/agency proof from Vance Chemicals (Singapore).
- **"Africa's only" recoating specialist** — NOT used. Wording: "specialist fuser & hot roller recoating for Africa's office-automation industry."
- **"30+ years"** — used as client-stated; confirm **founding year**.
- **Canonical NAP** — using onboarding values (phone 082 808 5623, email dorette@, 187 Edison Crescent, Hennopspark, Centurion 0157). Confirm one canonical set (3 emails / 2 phones / Ext number circulating). Single source: `config/site.ts`.
- **Recoating** process detail, turnaround, warranty, recoatable brand/model list, and **send-us-your-roller logistics** (courier/who pays) — phrased honestly / "on enquiry" until client confirms. Config: `config/pages.ts` (`recoating`).
- **Vacu-Tec** specs/pricing — "ask us" until confirmed.
- **Office hours** — omitted from schema; "message us any time" placeholder on contact.
- **Reviews/testimonials** — none exist; zero fabricated proof. Add real ones + a claimed Google Business Profile at launch.

## Pending integrations (client to provide)

- `GHL_WEBHOOK_URL` (GoHighLevel) — form currently falls back to WhatsApp.
- `NEXT_PUBLIC_GTM_ID` (GTM/GA4/Ads/Pixel) — analytics dormant until set.
- Vercel project link + domain (imatec.co.za) + `NEXT_PUBLIC_SITE_URL`.

## Photography still needed (Tier 1 — see docs blueprint)

Finished recoated-roller studio shot, recoating process stages, technician at bench,
workshop wide, before/after. Current authentic assets (roller-on-bench, Vacu-Tec, parts, McKenic) are in use.

## Gates

- Gate 3 (build integrity, SEO essentials, schema, hero, motion, performance budgets): **passing** on automated checks. Manual axe/contrast/reduced-motion browser pass + real-device 360/390 verification recommended before launch.
- Gate 4 (launch): pending domain/DNS, GSC, GBP, GHL wiring, GTM verification, 301s (n/a — greenfield).
