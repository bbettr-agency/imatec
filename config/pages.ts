/**
 * Per-page copy (config-driven). Truth gate applied:
 *  - no "Africa's only", no Mr McKenic "authorised agent"
 *  - no invented turnaround/warranty/process specifics or courier terms
 *  - PENDING items phrased honestly ("we'll confirm", "on enquiry")
 */

import { site } from "./site";

export const pages = {
  recoating: {
    seo: {
      title: "Fuser & Hot Roller Recoating",
      description:
        "Professional recoating of worn fuser & hot rollers, restored to working spec — a cost-effective alternative to replacement. Supplied to the SA trade.",
    },
    hero: {
      eyebrow: "Specialist service",
      title: "Fuser & hot roller recoating",
      sub: "Restore a worn fuser or hot roller to working spec instead of buying — and importing — a new one. Recoating is IMATEC's specialist service, done in our own workshop and bench-tested before it comes back to you.",
    },
    problem: {
      eyebrow: "The problem",
      heading: "Worn rollers cost you print quality — and downtime",
      body: "A fuser or hot roller that's worn or damaged shows up as marking, streaking or poor fusing. The usual fix is a new part — often imported, with the cost and the wait that come with it. Recoating restores the surface of the roller you already have.",
    },
    candidacy: {
      eyebrow: "Can your roller be recoated?",
      heading: "We'll tell you honestly",
      body: "Not every roller is a candidate — some smaller machines use film sleeves that are replaced rather than recoated, and a roller that's damaged beyond its surface may be better replaced. Send us the brand, model and what's happening, and we'll tell you straight whether recoating is the right call.",
      // PENDING: exact recoatable model/brand list from client.
    },
    send: {
      eyebrow: "How to send us your roller",
      heading: "Getting a roller to us is simple",
      // Logistics PENDING — phrased so no courier terms are invented.
      steps: [
        { n: "01", title: "Send the details", desc: "Message us the brand, model and the issue — a photo helps." },
        { n: "02", title: "We confirm & quote", desc: "We'll tell you if it's a candidate for recoating and quote the work." },
        { n: "03", title: "Get it to us", desc: "We'll confirm the best way to get the roller to our Centurion workshop." },
        { n: "04", title: "We recoat & bench-test", desc: "Your roller is recoated and tested before it leaves us." },
        { n: "05", title: "Back to you", desc: "We return your recoated roller, ready to run." },
      ],
    },
    faq: {
      heading: "Recoating questions",
      items: [
        { q: "What exactly do you recoat?", a: "Fuser and hot rollers, and related pressure rollers, from office printers and copiers." },
        { q: "How long does recoating take?", a: "Turnaround depends on the roller and current workload — we'll give you an estimate with your quote." },
        { q: "Do you supply parts as well?", a: `Yes — alongside recoating we supply workshop-tested parts, toner and consumables for ${site.brands.slice(0, 6).join(", ")} and more.` },
        { q: "Who is the service for?", a: "Dealers, technicians and service providers — and businesses running their own equipment. If you have a roller, we can look at it." },
      ],
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
      body: "We source parts from trusted international manufacturers during our supplier visits, and every product is tested in our own workshop, on real machines, before it becomes part of our range. It means the parts you order from us are vetted, not drop-shipped.",
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
        "It's that combination — specialist capability, tested supply and real engineering — that dealers, technicians and service providers across South Africa and Africa rely on.",
      ],
    },
    apart: {
      eyebrow: "What sets us apart",
      heading: "Three things a catalogue can't claim",
      items: [
        { title: "We recoat, not just replace", body: "Professional recoating of fuser and hot rollers — a specialist capability." },
        { title: "We test before we supply", body: "Every part is checked in our own workshop, on real machines, before it reaches you." },
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
