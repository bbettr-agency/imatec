import Image from "next/image";
import { Reveal, heroStack } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { home } from "@/config/home";

/**
 * Hero — "THE BENCH", light.
 * Archetype C (Capability). The recoated roller is a product object on white,
 * with refined technical labelling. LCP = H1 (never animated); the roller photo
 * settles by scale only (imageReveal), preserving its preload.
 */
export function Hero() {
  const hero = heroStack({ character: "precise" });
  const h = home.hero;

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="container pt-10 pb-14 md:pt-16 md:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          {/* Copy */}
          <div>
            <p className="label text-brand-ink">{h.eyebrow}</p>

            <h1
              {...hero.lcp}
              className="mt-4 text-[2.05rem] leading-[1.06] sm:text-5xl lg:text-[3.15rem] lg:leading-[1.03] font-extrabold tracking-tight text-ink text-balance"
            >
              {h.h1.lead} <span className="text-brand-ink">{h.h1.accent}</span>
            </h1>

            <Reveal {...hero.step(0)}>
              <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed measure">
                {h.sub}
              </p>
            </Reveal>

            <Reveal {...hero.step(1)}>
              <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
                <WhatsAppCta
                  label={h.primaryCta.label}
                  message={h.primaryCta.waMessage}
                  size="lg"
                  dataCta="hero-recoating"
                />
                <Button href={h.secondaryCta.href} variant="ghost" size="lg" dataCta="hero-process">
                  {h.secondaryCta.label}
                </Button>
              </div>
              <p className="mt-3 label !tracking-[0.08em] text-ink-muted normal-case">
                {h.reassurance}
              </p>
            </Reveal>

            <Reveal {...hero.step(2)}>
              <ul className="mt-8 pt-6 border-t border-hair space-y-3 max-w-xl">
                {h.trust.map((t, i) => (
                  <li key={i} className="flex items-baseline gap-3 text-sm md:text-[0.95rem] text-ink-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="font-bold text-ink">{t.strong}</strong>{" "}
                      <span className="text-ink-2">— {t.rest}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Roller object on white — authentic evidence, technical labelling */}
          <div className="relative">
            <div className="relative rounded-panel border border-hair-strong bg-[radial-gradient(130%_90%_at_50%_25%,#fff_0%,#fff_55%,theme(colors.steel.soft)_100%)] p-4 sm:p-6 shadow-card">
              {/* precision corner ticks */}
              <span className="absolute left-3 top-3 w-3 h-3 border-l-2 border-t-2 border-brand" aria-hidden="true" />
              <span className="absolute right-3 bottom-3 w-3 h-3 border-r-2 border-b-2 border-brand" aria-hidden="true" />

              <div className="relative">
                <Reveal preset="imageReveal" {...hero.step(1)}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-roller-low">
                    <Image
                      src="/images/recoated-roller-bench.jpg"
                      alt="A recoated black fuser roller mounted in a lathe on the IMATEC workshop bench"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                {/* spec chip */}
                <span className="absolute right-3 top-3 label !text-[0.6rem] !tracking-[0.12em] text-brand-ink bg-paper/95 backdrop-blur-sm border border-brand/40 rounded-md px-2.5 py-1.5 shadow-sm">
                  {h.objectLabel}
                </span>
              </div>

              {/* dimension line */}
              <div className="mt-4 flex items-center gap-3 px-1">
                <span className="label !text-[0.6rem] text-ink-muted">{h.objectDims[0]}</span>
                <span className="tick-rule flex-1" aria-hidden="true" />
                <span className="label !text-[0.6rem] text-ink-muted">{h.objectDims[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
