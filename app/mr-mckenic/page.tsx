import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/jsonld";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Reveal, Stagger } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { pages } from "@/config/pages";

const p = pages.mckenic;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/mr-mckenic",
});

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
        image={{ src: "/images/mr-mckenic-range.jpg", alt: "The Mr McKenic professional maintenance product range on a display stand" }}
        actions={<WhatsAppCta label="Enquire About Products" message="Hi IMATEC, I'd like to enquire about Mr McKenic products." size="lg" dataCta="mckenic-hero" />}
      />

      <section className="section bg-ground" aria-labelledby="mckenic-range-heading">
        <div className="container">
          <div className="max-w-3xl">
            <Reveal>
              <SectionHeading eyebrow={p.range.eyebrow} heading={<span id="mckenic-range-heading">{p.range.heading}</span>} />
            </Reveal>
          </div>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.range.products.map((prod, i) => (
              <Reveal key={prod} preset="fadeUpItem" index={i}>
                <div className="rounded-card border border-hair bg-paper px-5 py-4 text-ink font-semibold">{prod}</div>
              </Reveal>
            ))}
          </Stagger>
          <Reveal>
            <p className="mt-6 text-sm text-ink-2 italic measure">{p.range.note}</p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
