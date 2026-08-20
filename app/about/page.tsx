import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { BrandRailBand } from "@/components/sections/brand-rail";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionMark } from "@/components/ui/section-mark";
import { Reveal } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { pages } from "@/config/pages";
import { home } from "@/config/home";

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
        actions={<WhatsAppCta label="Talk to IMATEC" message="Hi IMATEC, I'd like to know more about your recoating and parts service." size="lg" dataCta="about-hero" />}
        image={{ src: "/images/about-machines.jpg", alt: "Office multifunction printers and copiers from the major brands IMATEC works with: Ricoh, Konica Minolta, Canon, Xerox and HP", label: "The equipment we know", position: "center 40%" }}
      />

      <BrandRailBand label="The brands IMATEC works across" />

      {/* 01 — Story + verified facts (fills the counterweight column, no dead space) */}
      <section className="section bg-ground" aria-labelledby="about-story">
        <div className="container">
          <SectionMark index="01" label={p.story.eyebrow} spec="On the bench" />
          <div className="mt-9 grid gap-x-14 gap-y-9 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 id="about-story" className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">{p.story.heading}</h2>
              </Reveal>
              <Reveal>
                <div className="mt-4 space-y-4 text-ink-2 text-base md:text-lg leading-relaxed measure">
                  {p.story.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal preset="fadeUpItem">
                <dl className="border-t border-hair-strong">
                  {home.story.facts.map((f) => (
                    <div key={f.label} className="flex items-baseline justify-between gap-4 py-4 border-b border-hair">
                      <dt className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink shrink-0">{f.value}</dt>
                      <dd className="text-sm text-ink-2 text-right leading-snug">{f.label}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — What sets us apart (editorial ruled pillars, not a numbered card grid) */}
      <section className="section bg-paper" aria-labelledby="about-apart">
        <div className="container">
          <SectionMark index="02" label={p.apart.eyebrow} spec="The difference" />
          <div className="mt-9 grid gap-x-14 gap-y-9 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
              <Reveal>
                <h2 id="about-apart" className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">{p.apart.heading}</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-7">
              {p.apart.items.map((item, i) => (
                <Reveal key={item.title} preset="fadeUpItem" index={i}>
                  <div className="pl-5 border-l-2 border-brand/50">
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm md:text-[0.95rem] text-ink-2 leading-relaxed measure">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta index="03" />
    </>
  );
}
