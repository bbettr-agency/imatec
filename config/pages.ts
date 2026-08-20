/**
 * Per-page copy (config-driven). Truth gate applied:
 *  - no "Africa's only", no Mr McKenic "authorised agent"
 *  - no invented turnaround/warranty/process specifics or courier terms
 *  - PENDING items phrased honestly ("we'll confirm", "on enquiry")
 */

import { site } from "./site";

/** Short, high-intent WhatsApp pre-fill for the recoating page — kept short so people actually use it. */
export const RECOATING_WA =
  "Hi IMATEC, I'd like to enquire about fuser roller recoating.\nBrand:\nModel:\nProblem:";

export const pages = {
  recoating: {
    seo: {
      title: "Fuser & Hot Roller Recoating",
      description:
        "Specialist fuser & hot roller recoating — recoat a worn roller instead of replacing it. IMATEC, Centurion; nationwide for the SA office-automation trade.",
    },
    hero: {
      eyebrow: "Specialist service · office automation",
      // H1 keeps the exact primary keyword; the accent carries the commercial bridge (no "to spec" claim).
      h1: { lead: "Fuser & hot roller recoating", accent: "before you replace the part." },
      sub: `Worn or damaged fuser or hot roller? Before you automatically buy — and import — a new part, talk to IMATEC about recoating the one you already have. It's the specialist service we've built over ${site.yearsExperience} years.`,
      components: ["Fuser rollers", "Hot rollers", "Pressure rollers"],
      primaryCta: { label: "Ask About Your Fuser Roller" },
      objectLabel: "Recoated fuser roller",
    },

    whatIs: {
      label: "What recoating is",
      heading: "Recoating renews the worn surface of your roller",
      body: "When a fuser or hot roller wears, its surface stops fusing toner cleanly and print quality drops. Recoating re-surfaces the roller — a specialist alternative to buying a whole new part. You keep the metal core you already have; the worn surface is renewed.",
      symptomsLabel: "Signs your roller may be worn",
      symptoms: [
        "Marking or streaking down the page",
        "Poor, patchy or incomplete fusing",
        "A worn, damaged or glazed roller surface",
        "Print-quality faults traced back to the fuser",
      ],
    },

    wedge: {
      heading: "Recoat vs replace — what you're really deciding",
      lede: "A worn roller doesn't automatically mean a new part. Here's the honest comparison.",
      replace: {
        title: "Replace the part",
        points: [
          "Buy a new fuser or hot roller — frequently imported",
          "Wait for the part to arrive before the machine runs again",
          "The metal core of your old roller is scrapped",
          "Usually the more expensive route",
        ],
      },
      recoat: {
        title: "Recoat with IMATEC",
        points: [
          "Renew the surface of the roller you already have",
          "Keep your existing OEM metal core",
          "A cost-effective alternative to a new part",
          "Handled by a specialist workshop",
        ],
      },
      note: "Whether recoating is the right call depends on the roller — we'll assess yours and quote honestly. Exact cost and turnaround are confirmed on enquiry.",
      partsNote: "Prefer to replace it? We also supply workshop-tested printer & copier parts.",
    },

    candidacy: {
      label: "Is your roller a candidate?",
      heading: "When recoating makes sense — and when it doesn't",
      lede: "We'll tell you honestly. As a general guide:",
      good: {
        title: "Often worth recoating",
        points: [
          "A worn, glazed or damaged roller surface",
          "Marking, streaking or poor fusing from a worn roller",
          "When a new part is costly or slow to source",
        ],
      },
      notIdeal: {
        title: "Better to replace",
        points: [
          "Rollers damaged beyond the surface",
          "Some smaller machines use replaceable film/sleeves rather than recoatable rollers",
          "When a new part is genuinely the better option",
        ],
      },
      // PENDING: exact recoatable brand/model list from client — keep the guidance general until confirmed.
      note: "Not sure which you have? Send us the brand, model and what's happening — we'll tell you straight.",
    },

    why: {
      label: "Why IMATEC",
      heading: "Why send your roller to IMATEC",
      pillars: [
        { title: "A specialist, not a catalogue", body: "Fuser and hot roller recoating is a focused capability we've built our name on — not a line item beside a thousand others." },
        { title: "Recoated in our own workshop", body: "Your roller is recoated by IMATEC, in our own Centurion workshop — not passed on to a third party." },
        { title: `${site.yearsExperience} years in office automation`, body: "Three decades working with printers, copiers and their components for the South African trade." },
      ],
    },

    how: {
      label: "How it works",
      heading: "From enquiry to a recoated roller",
      // Customer-facing flow only. The internal technical process (strip/prep/cure/test) is NOT claimed here — confirmed with the quote.
      lede: "A simple path from your first message to a recoated roller back in your hands. The technical detail is confirmed with your quote.",
      steps: [
        { n: "01", title: "Send the details", desc: "Message us the brand, model and what's happening — a photo helps." },
        { n: "02", title: "We assess & quote", desc: "We'll tell you whether recoating is a candidate for your roller, and quote the work." },
        { n: "03", title: "Get the roller to us", desc: "We'll confirm the best way to get it to our Centurion workshop." },
        { n: "04", title: "We recoat it", desc: "Your roller is recoated in our own workshop." },
        { n: "05", title: "Back to you", desc: "We return your recoated roller." },
      ],
    },

    scope: {
      label: "What we can assist with",
      heading: "Fuser, hot & pressure rollers — across the major brands",
      lede: "Recoating and roller support for printers, copiers and MFPs, plus the parts around them.",
      components: [
        { type: "Fuser rollers", desc: "The heated roller that fuses toner onto the page." },
        { type: "Hot rollers", desc: "Also called heat rollers — same wear, same recoating." },
        { type: "Pressure rollers", desc: "The mating roller in the fuser assembly." },
      ],
      brandsIntro: "We work across the major office-automation brands:",
      brands: site.brands,
      whatToSend: {
        title: "What to send us for a quote",
        items: ["Printer / copier brand", "The model", "What the roller is doing (a photo helps)"],
      },
    },

    faq: {
      label: "Common questions",
      heading: "Recoating, answered plainly",
      items: [
        { q: "What is fuser / hot roller recoating?", a: "It's re-surfacing a worn fuser or hot roller — renewing the worn surface so the roller can keep running, instead of buying a whole new part." },
        { q: "Is recoating cheaper than replacing the roller?", a: "Recoating is a cost-effective alternative to a new part, and you keep your existing core. Exact cost depends on the roller — we'll quote yours on enquiry." },
        { q: "How long does recoating take?", a: "Turnaround depends on the roller and current workload — we'll give you an estimate with your quote." },
        { q: "Which brands and models can you recoat?", a: `We work across the major brands — ${site.brands.slice(0, 6).join(", ")} and more. Whether a specific roller can be recoated depends on the roller, so send us the model and we'll advise.` },
        { q: "How do I get my roller to you?", a: "Send us the details first; once we've confirmed it's a candidate and quoted, we'll arrange the best way to get it to our Centurion workshop." },
        { q: "Do you also supply new parts?", a: "Yes — if replacing is the better option, we supply workshop-tested printer and copier parts, toner and consumables." },
        { q: "Do I have to be a dealer?", a: "No. We work with dealers, technicians and service providers — and businesses running their own equipment. If you have a roller, we can look at it." },
      ],
    },

    enquiry: {
      label: "Enquire",
      heading: "Ask about your fuser roller",
      sub: "Send us the details and we'll tell you whether recoating is an option — and quote it. WhatsApp is fastest.",
      formHeading: "Recoating enquiry",
      formSub: "The more you can tell us about the roller, the faster we can help.",
    },
  },

  parts: {
    seo: {
      title: "Printer Parts, Toner & Consumables",
      description:
        "Workshop-tested printer & copier parts, toner and consumables for Ricoh, Canon, Kyocera, Xerox, HP and more — supplied to the South African trade.",
    },
    hero: {
      eyebrow: "Trade supply",
      title: "Printer parts, toner & consumables",
      sub: "Quality printer and copier parts, toner and consumables for nine major brands — sourced from trusted manufacturers and tested in our own workshop before we supply them.",
    },
    approach: {
      eyebrow: "How we supply",
      heading: "We test before we supply — we don't just import",
      body: "We source parts from trusted international manufacturers during our supplier visits, and every product is checked in our own workshop before it becomes part of our range. It means the parts you order from us are vetted, not drop-shipped.",
    },
    categories: {
      eyebrow: "What we stock",
      heading: "Parts across the machine",
      items: [
        "Fuser units & rollers",
        "Hot & pressure rollers",
        "Drums & drum units",
        "Feed & pickup rollers",
        "Toner & consumables",
        "Gears, bushings & spares",
      ],
    },
  },

  vacuTec: {
    seo: {
      title: "Vacu-Tec Service Vacuums",
      description:
        "Vacu-Tec — service vacuum cleaners built by IMATEC for copier & printer technicians. Purpose-designed for professional servicing and maintenance.",
    },
    hero: {
      eyebrow: "IMATEC-built product",
      title: "Vacu-Tec service vacuums",
      sub: "Our own range of service vacuum cleaners — designed and built by IMATEC specifically for copier and printer technicians. Not a resold brand: a product we make.",
    },
    story: {
      eyebrow: "Built by IMATEC",
      heading: "A service vacuum made by people who service the machines",
      body: "Vacu-Tec comes from three decades on the bench. We build these vacuums for the real conditions technicians work in — professional servicing and maintenance across the office-automation industry. It's the same principle as our recoating: we understand this equipment from the inside.",
    },
    // Specs PENDING client confirmation.
    forWho: {
      eyebrow: "Who it's for",
      heading: "For the office-automation trade",
      body: "Copier and printer technicians, dealers and service providers who need a service vacuum built for the job. Ask us about the current range, specifications and pricing.",
    },
  },

  mckenic: {
    seo: {
      title: "Mr McKenic Professional Products",
      description:
        "Genuine Mr McKenic professional cleaning & maintenance products, supplied by IMATEC for the office-automation trade.",
    },
    hero: {
      eyebrow: "Supplied brand",
      title: "Mr McKenic professional products",
      sub: "Genuine Mr McKenic professional cleaning and maintenance products, supplied by IMATEC for technical and office-automation applications.",
    },
    // TRUTH GATE: "authorised South African agent" is HELD pending proof from
    // Vance Chemicals (Singapore). Do NOT publish that claim until verified.
    range: {
      eyebrow: "The range",
      heading: "Maintenance products for technical work",
      products: [
        "Contact Cleaner",
        "Contact Cleaner & Lubricant",
        "Silicone Spray",
        "9-in-1 Technology Oil",
        "Lithium Grease",
        "5-in-1 Surface Cleaner",
        "Fuser Roller Cleaner",
      ],
      note: "Ask us which products suit your application, and about current stock and pricing.",
    },
  },

  about: {
    seo: {
      title: "About",
      description:
        "IMATEC — 30+ years in office automation: fuser & hot roller recoating, workshop-tested parts, and equipment we build ourselves. Centurion, SA.",
    },
    hero: {
      eyebrow: "About IMATEC",
      title: "The people who know this equipment",
      sub: "IMATEC — Imaging Technology — has spent more than three decades in the office-automation industry. This is what we do, and why the trade keeps coming back.",
    },
    story: {
      eyebrow: "Why we've lasted 30+ years",
      heading: "Specialist work, done properly",
      // Honest, built from the company profile; founding-year PENDING.
      paragraphs: [
        "Office automation is a technical, unforgiving industry. Machines change, parts get harder to find, and the margin for error on a component like a fuser roller is small. IMATEC has lasted more than 30 years in it by being genuinely specialist — not a catalogue reseller, but a workshop.",
        "We recoat fuser and hot rollers — restoring the part instead of replacing it. We source parts from trusted manufacturers and test every one in our own workshop before we supply it. And we build our own service equipment, the Vacu-Tec range, for the technicians who do this work every day.",
        "It's that combination — specialist capability, tested supply and real engineering — that dealers, technicians and service providers across South Africa rely on.",
      ],
    },
    apart: {
      eyebrow: "What sets us apart",
      heading: "Three things a catalogue can't claim",
      items: [
        { title: "We recoat, not just replace", body: "Professional recoating of fuser and hot rollers — a specialist capability." },
        { title: "We test before we supply", body: "Every part is checked in our own workshop before it reaches you." },
        { title: "We build our own equipment", body: "The Vacu-Tec range is designed and built by IMATEC for the trade." },
      ],
    },
  },

  contact: {
    seo: {
      title: "Contact",
      description:
        "Contact IMATEC in Centurion, Gauteng — WhatsApp, call or email for fuser roller recoating, printer & copier parts, Vacu-Tec and Mr McKenic.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Let's talk about what you need",
      sub: "A roller to recoat, a part to source, or a product to order — reach us the fastest way for you. Based in Centurion, serving the office-automation trade across South Africa.",
    },
    formHeading: "Send us an enquiry",
    formSub: "Tell us what you need and we'll come back to you. For recoating, the more detail the better.",
  },
} as const;
