# IMATEC — Imaging Technology

Production website for IMATEC: fuser & hot roller recoating, printer/copier parts &
consumables, Vacu-Tec service vacuums, and Mr McKenic products.

**Built on Bbettr Website OS v2.5.0** · Creative concept: **"THE BENCH"** (light-first).

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript** (strict)
- **Tailwind CSS 3.4** — tokens in `tailwind.config.ts`
- **Open Sans** (self-hosted via `next/font`) — the single typeface
- **motion@12** via the vendored **`engine/motion`** (Bbettr Motion System; character `precise`)
- **lucide-react** icons
- Forms → **GoHighLevel** webhook (with WhatsApp fallback)

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # next/core-web-vitals
npm run typecheck  # tsc --noEmit
```

## Structure

```
app/            routes, layout, sitemap.ts, robots.ts, api/enquiry
components/
  sections/     page sections (hero, four-worlds, wedge, why, process, …)
  funnel/       header, footer, sticky CTA, channel CTAs, enquiry form
  ui/           button, section-heading, text-section
  analytics/    consent-aware GTM loader
config/         ALL copy & content (site, services, home, pages)
engine/motion/  vendored Bbettr Motion System
lib/            metadata, jsonld, utils
public/         imatec-logo.svg, images/, og/
docs/           Phase-1 planning report, blueprint, this build's status
```

**Config rule:** no copy, contact detail or claim is hardcoded in a component — everything lives in `config/`.

## Deployment

- GitHub: `bbettr-agency/imatec` — deploy from **`main`** (Vercel).
- Env vars (set in Vercel, see `.env.example`): `GHL_WEBHOOK_URL`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_SITE_URL`.

## ⚠️ Pending client facts (truth gate — see `docs/` and `PROJECT_STATUS.md`)

Nothing unverified ships as a live claim. Confirm before content lock:
canonical **NAP**, **founding year**, **Mr McKenic agent status** (claim held),
recoating **process / turnaround / warranty**, and the **"send us your roller"** logistics.
