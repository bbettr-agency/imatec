import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/jsonld";
import { PageHero } from "@/components/sections/page-hero";
import { TextSection } from "@/components/ui/text-section";
import { Coverage } from "@/components/sections/coverage";
import { FinalCta } from "@/components/sections/final-cta";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Reveal, Stagger } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { pages } from "@/config/pages";

const p = pages.parts;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/printer-copier-parts",
});

export default function PartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("printer-copier-parts")) }} />

      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Printer Parts, Toner & Consumables", path: "/printer-copier-parts" }]}
        image={{ src: "/images/printer-parts.jpg", alt: "A range of printer and copier parts laid out on a workshop surface" }}
        actions={<WhatsAppCta label="Request a Part" message="Hi IMATEC, I'm looking for a printer/copier part. Brand + model: " size="lg" dataCta="parts-hero" />}
      />

      <TextSection eyebrow={p.approach.eyebrow} heading={p.approach.heading} bg="ground">
        <p>{p.approach.body}</p>
      </TextSection>

      <section className="section bg-paper" aria-labelledby="categories-heading">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={p.categories.eyebrow} heading={<span id="categories-heading">{p.categories.heading}</span>} />
          </Reveal>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.categories.items.map((c, i) => (
              <Reveal key={c} preset="fadeUpItem" index={i}>
                <div className="rounded-card border border-hair bg-paper px-5 py-4 text-ink font-semibold hover:border-brand/40 transition-colors">
                  {c}
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      <Coverage />

      <FinalCta />
    </>
  );
}
