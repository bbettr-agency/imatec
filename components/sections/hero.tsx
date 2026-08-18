import Image from "next/image";
import { Reveal, heroStack } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { home } from "@/config/home";

/**
 * Hero — "THE BENCH", light. Archetype C (Capability).
 * The workshop image spans the whole hero and dissolves into a wide white veil
 * beneath the copy — one composition, not two halves. LCP = H1 (never animated);
 * the photo settles by scale only (imageReveal), preserving its preload. No dark
 * overlay; all copy sits on fully-opaque white.
 */
export function Hero() {
  const hero = heroStack({ character: "precise" });
  const h = home.hero;

  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Copy — over the veil on desktop, on white on mobile */}
      <div className="container relative z-10 lg:flex lg:items-center lg:min-h-[38rem]">
        <div className="lg:max-w-[53%] py-12 lg:py-20">
          <p className="label text-brand-ink">{h.eyebrow}</p>

          <h1
            {...hero.lcp}
            className="mt-5 text-[2.5rem] leading-[1.02] sm:text-[3.1rem] lg:text-[3.5rem] xl:text-[3.9rem] font-extrabold tracking-[-0.03em] text-ink text-balance"
          >
            {h.h1.lead} <span className="text-brand-ink">{h.h1.accent}</span>
          </h1>

          <Reveal {...hero.step(0)}>
            <p className="mt-6 text-ink-2 text-base md:text-lg leading-relaxed measure">{h.sub}</p>
          </Reveal>

          <Reveal {...hero.step(1)}>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <WhatsAppCta label={h.primaryCta.label} message={h.primaryCta.waMessage} size="lg" dataCta="hero-recoating" />
              <Button href={h.secondaryCta.href} variant="ghost" size="lg" dataCta="hero-process">
                {h.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-3.5 label !tracking-[0.06em] normal-case text-ink-muted">{h.reassurance}</p>
          </Reveal>

          <Reveal {...hero.step(2)}>
            <dl className="mt-9 pt-6 border-t border-hair grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
              {h.trust.map((t, i) => (
                <div key={i} className="sm:border-l sm:first:border-l-0 sm:border-hair sm:pl-5 first:pl-0">
                  <dt className="text-sm font-extrabold text-ink leading-tight">{t.strong}</dt>
                  <dd className="mt-1 text-[0.82rem] text-ink-2 leading-snug">{t.rest}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Image — full-bleed across the hero on desktop; full-width band on mobile */}
      <div className="relative h-[19rem] sm:h-[24rem] lg:h-auto lg:absolute lg:inset-0 lg:z-0">
        <Reveal preset="imageReveal" eager className="absolute inset-0">
          <Image
            src="/images/recoated-roller-bench.jpg"
            alt="A recoated black fuser roller mounted in a lathe on the IMATEC workshop bench"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center]"
          />
        </Reveal>

        {/* Desktop veil — wide white → transparent; copy region stays fully opaque */}
        <div
          className="hidden lg:block absolute inset-0 bg-gradient-to-r from-paper via-paper via-[52%] to-transparent to-[80%]"
          aria-hidden="true"
        />
        {/* Mobile veil — soft top fade so the band emerges from the copy */}
        <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-paper to-transparent" aria-hidden="true" />

        {/* spec label on the visible roller (right on desktop, left on mobile) */}
        <span className="absolute left-4 bottom-4 lg:left-auto lg:right-10 lg:bottom-10 label !text-[0.6rem] !tracking-[0.12em] text-brand-ink bg-paper/95 backdrop-blur-sm border border-brand/40 rounded-md px-2.5 py-1.5 shadow-sm">
          {h.objectLabel}
        </span>
      </div>
    </section>
  );
}
