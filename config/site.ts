/**
 * IMATEC — canonical site config (single source of truth).
 *
 * TRUTH GATE: values marked `PENDING` are client-stated / unverified and must be
 * confirmed before final content lock. They are centralised here so one edit
 * updates the whole site (footer, schema, contact page, WhatsApp links).
 * See docs/PHASE-1B-SITEMAP-WIREFRAME-HERO.md → NAP Confirmation Checklist.
 */

/**
 * Canonical origin for the whole site (drives metadataBase, canonical URLs,
 * Open Graph/Twitter image resolution, sitemap.xml and robots.txt).
 *
 * The production domain is live: https://www.imatec.co.za is the preferred
 * (canonical) host — Vercel 308-redirects the apex (imatec.co.za) and http to
 * it. It remains overridable via `NEXT_PUBLIC_SITE_URL` (inlined at build for
 * both server and client), but the default is the real domain so canonical/OG/
 * sitemap/robots/JSON-LD always identify imatec.co.za even if the env is unset.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.imatec.co.za").replace(/\/+$/, "");

export const site = {
  name: "IMATEC",
  /** PENDING: confirm exact legal name + hyphenation. */
  legalName: "IMATEC – Imaging Technology",
  /** Client's own tagline (company profile). */
  tagline: "Engineering better print solutions for Africa",
  descriptionShort:
    "Specialist fuser / hot roller recoating for South Africa's office-automation trade, plus workshop-tested printer & copier parts, consumables and service equipment. Centurion, Gauteng.",

  url: SITE_URL,

  // --- Contact (PENDING canonical NAP — see checklist) ---
  contact: {
    /** PENDING: canonical phone — 082 808 5623 (mobile) vs 012 653 0428 (landline). */
    phoneDisplay: "082 808 5623",
    phoneE164: "+27828085623",
    /** WhatsApp digits for wa.me links. */
    whatsapp: "27828085623",
    /** PENDING: canonical public email — dorette@ / sales@ / info@. */
    email: "dorette@imatec.co.za",
  },

  // --- Address (PENDING canonical — unit / Ext number / postcode) ---
  address: {
    street: "187 Edison Crescent",
    unit: "", // PENDING: "Unit 7, Eldor Park"?
    suburb: "Hennopspark", // PENDING: "Hennopspark Ext 15"?
    city: "Centurion",
    province: "Gauteng",
    postalCode: "0157", // PENDING confirm
    country: "South Africa",
    countryCode: "ZA",
  },

  /** Positioning of place — based local, serving national. */
  serviceArea: "South Africa",
  based: "Centurion, Gauteng",

  /** PENDING: confirm founding year to substantiate "30+ years". */
  yearsExperience: "30+",

  /** Brands whose parts IMATEC supplies (company profile — verified list). */
  brands: [
    "Ricoh",
    "Canon",
    "Konica Minolta",
    "Kyocera",
    "Xerox",
    "HP",
    "Sharp",
    "Toshiba",
    "Lexmark",
  ],

  social: {
    facebook: "https://www.facebook.com/fuserrollers/",
    instagram: "https://www.instagram.com/imatec.co.za",
  },

  /**
   * Further official profiles for schema `sameAs` (entity disambiguation from the
   * other "Imatec" companies abroad). Add each URL ONLY once the profile is live
   * and owned by IMATEC (e.g. Google Business Profile, LinkedIn company page,
   * YouTube channel, Wikidata item). Empty strings are ignored.
   */
  profiles: {
    googleBusiness: "",
    linkedin: "",
    youtube: "",
    wikidata: "",
  },

  /** PENDING: office hours not confirmed — omit from schema until known. */
  hours: null as null | { days: string; open: string; close: string }[],
} as const;

export type Site = typeof site;

/**
 * Real "content last changed" dates per route (ISO yyyy-mm-dd). Drives sitemap
 * <lastmod>, WebPage `dateModified` and llms.txt. Update a route's date whenever
 * its copy materially changes — never set these to the build time.
 */
export const pageUpdated: Record<string, string> = {
  "/": "2026-11-17",
  "/fuser-roller-recoating": "2026-11-17",
  "/printer-copier-parts": "2026-11-17",
  "/vacu-tec": "2026-11-17",
  "/mr-mckenic": "2026-11-17",
  "/about": "2026-11-17",
  "/contact": "2026-11-17",
  "/privacy": "2026-11-17",
  "/terms": "2026-11-17",
};

/**
 * Brand logos for the coverage rail (compatibility / product-support context only —
 * not partnership or endorsement). Real transparent artwork in /public/images/brands/.
 * `w`/`h` are intrinsic px (prevent CLS); `scale` optically balances differing aspect
 * ratios against a shared rail height (square/compact marks scale down, thin wordmarks up).
 * Compatibility / product-support context only.
 */
export const brandLogos = [
  { slug: "ricoh", name: "Ricoh", w: 370, h: 136, scale: 1.0 },
  { slug: "nashua", name: "Nashua", w: 470, h: 51, scale: 0.86 },
  { slug: "canon", name: "Canon", w: 300, h: 72, scale: 0.98 },
  { slug: "konica-minolta", name: "Konica Minolta", w: 366, h: 218, scale: 0.9 },
  { slug: "kyocera", name: "Kyocera", w: 520, h: 113, scale: 1.0 },
  { slug: "xerox", name: "Xerox", w: 520, h: 115, scale: 1.0 },
  { slug: "hp", name: "HP", w: 520, h: 520, scale: 0.78 },
  { slug: "sharp", name: "Sharp", w: 520, h: 84, scale: 0.9 },
  { slug: "toshiba", name: "Toshiba", w: 390, h: 75, scale: 0.96 },
  { slug: "lexmark", name: "Lexmark", w: 379, h: 90, scale: 1.02 },
] as const;
