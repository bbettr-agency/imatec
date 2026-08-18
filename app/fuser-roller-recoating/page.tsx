import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/jsonld";
import { PageHero } from "@/components/sections/page-hero";
import { TextSection } from "@/components/ui/text-section";
import { RecoatVsReplace } from "@/components/sections/recoat-vs-replace";
import { Process } from "@/components/sections/process";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { FinalCta } from "@/components/sections/final-cta";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { pages } from "@/config/pages";

const p = pages.recoating;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/fuser-roller-recoating",
});

export default function RecoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("fuser-roller-recoating")) }} />

      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Fuser & Hot Roller Recoating", path: "/fuser-roller-recoating" }]}
        image={{ src: "/images/recoated-roller-bench.jpg", alt: "A recoated fuser roller on the lathe in the IMATEC workshop", label: "FR · Recoated to spec" }}
        actions={
          <>
            <WhatsAppCta label="Enquire About Recoating" message="Hi IMATEC, I'd like to enquire about fuser / hot roller recoating." size="lg" dataCta="recoating-hero" />
            <Button href="#process" variant="ghost" size="lg">See the process</Button>
          </>
        }
      />

      <TextSection eyebrow={p.problem.eyebrow} heading={p.problem.heading} bg="ground">
        <p>{p.problem.body}</p>
      </TextSection>

      <RecoatVsReplace />

      <TextSection eyebrow={p.candidacy.eyebrow} heading={p.candidacy.heading} bg="steel">
        <p>{p.candidacy.body}</p>
      </TextSection>

      <Process />

      {/* Send us your roller */}
      <section className="section bg-ground" aria-labelledby="send-heading">
        <div className="container">
          <div className="max-w-3xl">
            <Reveal>
              <SectionHeading eyebrow={p.send.eyebrow} heading={<span id="send-heading">{p.send.heading}</span>} />
            </Reveal>
          </div>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {p.send.steps.map((s, i) => (
              <Reveal key={s.n} preset="fadeUpItem" index={i}>
                <div className="h-full rounded-panel border border-hair bg-paper p-5">
                  <span className="text-sm font-extrabold text-brand-ink">{s.n}</span>
                  <h3 className="mt-2 text-base font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-2 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
          <Reveal>
            <div className="mt-8">
              <WhatsAppCta label="Enquire About Recoating" message="Hi IMATEC, I'd like a recoating quote. My roller is from: " size="lg" dataCta="recoating-send" />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqAccordion heading={p.faq.heading} items={p.faq.items} bg="paper" />

      <FinalCta />
    </>
  );
}
