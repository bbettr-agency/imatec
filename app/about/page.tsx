import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { TextSection } from "@/components/ui/text-section";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal, Stagger } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { pages } from "@/config/pages";

const p = pages.about;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
        image={{ src: "/images/recoated-roller-bench.jpg", alt: "A fuser roller being recoated on the lathe in the IMATEC workshop", label: "In the IMATEC workshop" }}
      />

      <TextSection eyebrow={p.story.eyebrow} heading={p.story.heading} bg="ground">
        {p.story.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </TextSection>

      <section className="section bg-steel-soft" aria-labelledby="apart-heading">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow={p.apart.eyebrow} heading={<span id="apart-heading">{p.apart.heading}</span>} />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {p.apart.items.map((item, i) => (
              <Reveal key={item.title} preset="fadeUpItem" index={i}>
                <div className="h-full rounded-panel border border-hair bg-paper p-6">
                  <div className="w-9 h-9 rounded-full bg-brand-soft border border-brand/30 text-brand-ink font-extrabold text-sm flex items-center justify-center">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-2 leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
