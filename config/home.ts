/**
 * Homepage copy — config-driven (no hardcoded copy in components).
 *
 * TRUTH GATE applied throughout:
 *  - no "Africa's only", no Mr McKenic "authorised agent"
 *  - no invented prices, turnaround times, warranty terms or proprietary process detail
 *  - "30+ years" is client-stated (confirm founding year at content lock)
 *  - verified facts: all-brand coverage, own-workshop testing, IMATEC supplies
 *    (does NOT build/manufacture) the Vacu-Tec service-equipment range
 */

import { site } from "./site";

export const home = {
  hero: {
    eyebrow: "Specialist fuser / hot roller coating",
    h1: {
      lead: "Recoat your fuser roller",
      accent: "before you replace it.",
    },
    sub: `For ${site.yearsExperience} years, IMATEC has kept South Africa's copiers and printers running by recoating worn fuser and hot rollers instead of replacing them, and supplying workshop-tested parts, consumables and service equipment to dealers and technicians nationwide.`,
    primaryCta: {
      label: "Enquire About Recoating",
      waMessage: "Hi IMATEC, I'd like to enquire about fuser / hot roller coating.",
    },
    secondaryCta: { label: "See how recoating works", href: "/fuser-roller-recoating" },
    reassurance: "Send us your roller · No-obligation quote · We reply on WhatsApp",
    // Brand slogan for the hero — the circular-economy value of recoating.
    slogan: ["Reuse", "Recoat", "Recycle"],
  },

  worlds: {
    eyebrow: "One workshop, four capabilities",
    heading: "Everything the copier trade needs to keep running",
  },

  wedge: {
    eyebrow: "Recoat vs replace",
    heading: "A worn roller doesn't always mean a new one",
    lede: "When a fuser or hot roller wears, the default is to buy a new part, often imported, with the cost and the wait that come with it. Recoating restores the roller you already have.",
    replace: {
      title: "Replace the part",
      points: [
        "Buy a new roller, frequently imported",
        "Import lead time before the machine runs again",
        "The old roller core is scrapped",
      ],
    },
    recoat: {
      title: "Recoat with IMATEC",
      points: [
        "Renew the worn surface of the roller you already have",
        "Keep your existing OEM core",
        "A cost-effective alternative to replacement",
      ],
    },
    // Big decision words for the typographic composition.
    replaceWord: "Replace",
    recoatWord: "Recoat",
    // Honest: exact savings/turnaround depend on the roller — confirmed on enquiry.
    note: "Exact cost, saving and turnaround depend on the roller and machine. We'll quote yours on enquiry.",
    cta: { label: "Enquire About Recoating", waMessage: "Hi IMATEC, I'd like a recoating quote. My roller is from: " },
  },

  why: {
    eyebrow: "Why IMATEC",
    heading: "The specialist workshop behind the trade",
    lede: "Three things set IMATEC apart from a parts catalogue, and each is something we actually do, not something we say.",
    pillars: [
      {
        title: "We recoat, not just replace",
        proof: "Professional recoating of fuser and hot rollers: a specialist capability, not a line in a catalogue.",
        soWhat: "You get a real alternative to buying and importing a new component.",
      },
      {
        title: "We test before we supply",
        proof: "We don't simply import parts. Every product is checked in our own workshop before it becomes part of our range.",
        soWhat: "The parts you order are vetted, not drop-shipped.",
      },
      {
        title: "Service equipment for the trade",
        proof: "We supply the Vacu-Tec range of service vacuums, designed for copier and printer technicians.",
        soWhat: "It's proof we understand the machines from the inside.",
      },
    ],
  },

  process: {
    eyebrow: "How recoating works",
    heading: "From your enquiry to a recoated roller",
    lede: "How recoating works, from your first message to the roller back in your hands. The technical detail is confirmed with your quote.",
    // Customer-facing flow only — the internal technical process is NOT claimed here
    // (PENDING client confirmation). Mirrors the flagship recoating page for consistency.
    steps: [
      { n: "01", title: "Send the details", desc: "Message us the brand, model and what's happening. A photo helps." },
      { n: "02", title: "We assess & quote", desc: "We confirm whether recoating is a candidate for your roller, and quote the work." },
      { n: "03", title: "Get the roller to us", desc: "We'll confirm the best way to get it to our Centurion workshop." },
      { n: "04", title: "We recoat it", desc: "Your roller is recoated in our own workshop." },
      { n: "05", title: "Back to you", desc: "We return your recoated roller." },
    ],
    cta: { label: "See the recoating service", href: "/fuser-roller-recoating" },
  },

  coverage: {
    eyebrow: "Brand & parts coverage",
    heading: "Workshop-tested parts for all brands",
    lede: "Printer and copier parts, toner and consumables, supplied to dealers, technicians and service providers across South Africa.",
    brands: site.brands,
    cta: { label: "Request a Part", waMessage: "Hi IMATEC, I'm looking for a printer/copier part. Brand + model: " },
  },

  story: {
    eyebrow: "Three decades on the bench",
    heading: "The people who know this equipment",
    body: "IMATEC has spent more than three decades in the office-automation industry, recoating rollers, sourcing and testing parts, and supplying the service equipment technicians rely on. It's specialist work, and it's why dealers and service providers keep coming back.",
    cta: { label: "About IMATEC", href: "/about" },
    // Real, verified/client-stated facts only — no fabricated proof or ratings.
    facts: [
      { value: "30+", label: "Years in office automation" },
      { value: "Tested", label: "Every part, in our own workshop" },
      { value: "Nationwide", label: "Serving the SA trade" },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    heading: "Recoating, answered plainly",
    // Distinct from the recoating-page FAQ (no duplicated Q&A across pages). Answer-first.
    items: [
      {
        q: "What does IMATEC do?",
        a: `IMATEC (Imaging Technology) is a specialist workshop in ${site.based} that recoats worn fuser, hot and pressure rollers for printers and copiers, and supplies workshop-tested printer and copier parts, toner, consumables, Vacu-Tec service vacuums and Mr McKenic maintenance products to the South African office-automation trade.`,
      },
      {
        q: "Should I recoat or replace a worn fuser roller?",
        a: "Recoat it when the wear is on the roller's surface: a worn, glazed or damaged coating, or marking and poor fusing caused by that wear. Replace it when the roller is damaged beyond the surface, or when the machine uses a replaceable fuser film or sleeve rather than a recoatable roller. Recoating keeps your existing OEM metal core and avoids waiting for an imported part. IMATEC assesses each roller and tells you honestly which route makes sense.",
      },
      {
        q: "Which printer and copier brands does IMATEC support?",
        a: `IMATEC supplies parts for, and works on rollers from, ${site.brands.join(", ")} and other office-automation brands.`,
      },
      {
        q: "Does IMATEC serve customers outside Gauteng?",
        a: `Yes. IMATEC is based in ${site.based} and serves dealers, technicians, service providers and businesses across South Africa. Send the roller or part details on WhatsApp or by enquiry, and we'll confirm the best way to get a roller to our workshop or a part to you.`,
      },
      {
        q: "Do you only recoat, or do you supply parts too?",
        a: "Both. Alongside fuser and hot roller recoating, IMATEC supplies workshop-tested printer and copier parts, toner and consumables, the Vacu-Tec range of service vacuums and Mr McKenic professional cleaning and maintenance products.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Tell us what you need",
    heading: "We already understand the equipment. Let's talk.",
    sub: "Whether you need a roller recoated, a replacement part sourced, or a specific product supplied, our team is ready to assist.",
  },
} as const;
