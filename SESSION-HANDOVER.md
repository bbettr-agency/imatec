# IMATEC — SESSION HANDOVER

## This session

Took IMATEC from empty repo → **production-state website** on Bbettr Website OS v2.5.0,
building from the client-approved Phase-1B blueprint (light-first "THE BENCH").

- Scaffolded Next 14 / TS / Tailwind / Open Sans / vendored motion engine.
- Built the global system (layout, nav, footer, sticky CTA), the hero, and the full
  homepage section system.
- Built all sitemap pages: recoating (flagship), parts, vacu-tec, mr-mckenic, about, contact.
- SEO (metadata, sitemap, robots, JSON-LD), enquiry form (GHL-ready + WhatsApp fallback),
  consent-gated analytics, 404, handover docs.
- `next build` passes; homepage/pages 144–149 KB first-load JS.

## Committed to `main`

- Commit 1: foundation + homepage.
- Commit 2 (this session): full sitemap, forms, SEO, analytics, docs.

## Key decisions

- **Light-first, Open Sans only, no dark sections** (client amendment) — enforced in tokens.
- Motion character **`precise`**; LCP = hero H1 (never animated); reduced motion via MotionProvider.
- **Truth gate held**: no "Africa's only", no Mr McKenic "authorised agent" (see PROJECT_STATUS).
- Config-driven copy — all in `config/` (site, services, home, pages).

## To continue

1. **Get client facts** (PROJECT_STATUS "Truth gate" + "Pending integrations"): lock NAP,
   founding year, Mr McKenic proof, recoating process/turnaround/warranty + logistics.
2. **Wire integrations**: `GHL_WEBHOOK_URL`, `NEXT_PUBLIC_GTM_ID`, Vercel domain + `NEXT_PUBLIC_SITE_URL`.
3. **Commission Tier-1 photography**; swap in as delivered.
4. **Pre-launch**: manual axe + contrast + reduced-motion browser pass; real-device 360/390 QA;
   Google Business Profile; Search Console; verify tracking fires in production (Gate 4).

## Run

```bash
cd ~/Documents/imatec && npm install && npm run dev
```
