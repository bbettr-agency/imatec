import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/jsonld";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionMark } from "@/components/ui/section-mark";
import { Reveal } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { pages } from "@/config/pages";

const p = pages.vacuTec;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/vacu-tec",
});

// Honest, copy-derived (not invented) — paraphrases of the story/forWho blocks.
const principles = [
  "Made by IMATEC — not a resold brand",
  "Built for the conditions technicians actually work in",
  "The same principle as our recoating: we know this equipment from the inside",
];
const forWho = ["Copier & printer technicians", "Dealers", "Service providers"];

export default function VacuTecPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("vacu-tec")) }} />

      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Vacu-Tec", path: "/vacu-tec" }]}
        image={{ src: "/images/vacu-tec.jpg", alt: "The IMATEC Vacu-Tec service vacuum cleaner with hose and collection tray", label: "Built by IMATEC" }}
        actions={<WhatsAppCta label="Enquire About Vacu-Tec" message="Hi IMATEC, I'd like to enquire about a Vacu-Tec service vacuum." size="lg" dataCta="vacutec-hero" />}
      />

      {/* 01 — Built by IMATEC */}
      <section className="section bg-ground" aria-labelledby="vt-story">
        <div className="container">
          <SectionMark index="01" label={p.story.eyebrow} spec="Own product" />
          <div className="mt-9 grid gap-x-14 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 id="vt-story" className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">{p.story.heading}</h2>
                <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{p.story.body}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal preset="fadeUpItem">
                <p className="label text-ink-muted">What makes it different</p>
                <ul className="mt-4 border-t border-hair">
                  {principles.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 py-3.5 border-b border-hair text-sm text-ink"><Check className="w-4 h-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />{pt}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Who it's for */}
      <section className="section bg-paper" aria-labelledby="vt-forwho">
        <div className="container">
          <SectionMark index="02" label={p.forWho.eyebrow} spec="The trade" />
          <div className="mt-9 grid gap-x-14 gap-y-9 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 id="vt-forwho" className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">{p.forWho.heading}</h2>
                <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{p.forWho.body}</p>
              </Reveal>
              <Reveal preset="fadeUpItem">
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {forWho.map((w) => (
                    <span key={w} className="inline-flex items-center rounded-btn border border-hair-strong bg-paper px-3.5 py-1.5 text-sm font-semibold text-ink-2">{w}</span>
                  ))}
                </div>
              </Reveal>
            </div>
            {/* Honest "ask us" panel — specs & pricing are PENDING, so the CTA is the route to them */}
            <div className="lg:col-span-5">
              <Reveal preset="fadeUpItem">
                <div className="rounded-panel border border-hair bg-steel-soft p-6 sm:p-7">
                  <p className="label text-brand-ink">Range · specs · pricing</p>
                  <p className="mt-3 text-ink-2 text-sm leading-relaxed">Tell us how you service and we&apos;ll point you to the right unit in the current range — with specifications and pricing.</p>
                  <div className="mt-5"><WhatsAppCta label="Ask about the range" message="Hi IMATEC, please tell me about the Vacu-Tec range, specs and pricing." size="lg" dataCta="vacutec-range" /></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta index="03" />
    </>
  );
}
