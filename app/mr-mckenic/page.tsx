import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/jsonld";
import { PageHero } from "@/components/sections/page-hero";
import { BrandRailBand } from "@/components/sections/brand-rail";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionMark } from "@/components/ui/section-mark";
import { Reveal } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { pages } from "@/config/pages";

const p = pages.mckenic;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/mr-mckenic",
});

const ROLLER_PRODUCT = "Fuser Roller Cleaner";

/**
 * TRUTH GATE: the "authorised South African agent" claim is intentionally NOT
 * published here. Wording stays "genuine Mr McKenic products supplied by IMATEC"
 * until documentary proof from Vance Chemicals (Singapore) is supplied.
 */
export default function MrMckenicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("mr-mckenic")) }} />

      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Mr McKenic", path: "/mr-mckenic" }]}
        image={{ src: "/images/mckenic-workshop.jpg", alt: "The Mr McKenic professional product range on a Ricoh machine in the IMATEC workshop", label: "In the IMATEC workshop", position: "center 60%" }}
        actions={<WhatsAppCta label="Enquire About Products" message="Hi IMATEC, I'd like to enquire about Mr McKenic products." size="lg" dataCta="mckenic-hero" />}
      />

      <BrandRailBand label="For the major office-automation brands" />

      {/* 01 — The range */}
      <section className="section bg-ground" aria-labelledby="mckenic-range-heading">
        <div className="container">
          <SectionMark index="01" label={p.range.eyebrow} spec="Cleaning & maintenance" />
          <div className="mt-9 grid gap-x-14 gap-y-9 lg:grid-cols-12 lg:items-start">
            {/* Left — intro, roller cross-link, mid-page CTA */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
              <Reveal>
                <h2 id="mckenic-range-heading" className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">{p.range.heading}</h2>
                <p className="mt-4 text-ink-2 leading-relaxed measure">{p.range.note}</p>
              </Reveal>
              <Reveal preset="fadeUpItem">
                <Link href="/fuser-roller-recoating" className="group mt-6 block rounded-panel border border-brand/25 bg-brand-soft/50 p-5">
                  <span className="label text-brand-ink">Roller care</span>
                  <p className="mt-2 text-sm text-ink leading-relaxed">The range includes a <strong>Fuser Roller Cleaner</strong> — for the rollers we specialise in recoating.</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-brand-ink font-semibold text-sm">See fuser &amp; hot roller recoating <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-bench group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
              <Reveal preset="fadeUpItem">
                <div className="mt-6"><WhatsAppCta label="Ask about products" message="Hi IMATEC, I'd like advice on which Mr McKenic products suit my application, plus stock and pricing." size="lg" dataCta="mckenic-range" /></div>
              </Reveal>
            </div>
            {/* Right — the product list, ruled (roller product marked) */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="label text-ink-muted">The range</p>
                <ul className="mt-4 border-t border-hair-strong">
                  {p.range.products.map((prod) => {
                    const isRoller = prod === ROLLER_PRODUCT;
                    return (
                      <li key={prod} className="flex items-center justify-between gap-4 py-4 border-b border-hair">
                        <span className={`text-base sm:text-lg font-bold ${isRoller ? "text-brand-ink" : "text-ink"}`}>{prod}</span>
                        {isRoller && <span className="label !text-[0.6rem] text-brand-ink bg-brand-soft border border-brand/30 rounded-md px-2 py-1 shrink-0">Roller care</span>}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta index="02" />
    </>
  );
}
