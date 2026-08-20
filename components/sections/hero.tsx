import Image from "next/image";
import { Reveal, heroStack } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { home } from "@/config/home";

/**
 * Hero — full-background workshop photograph with centred content.
 * The recoated-roller photo IS the hero background (edge to edge, full height).
 * The site stays light-first; over a genuinely dark workshop image, legible light
 * type on a soft charcoal-tinted gradient is the honest, premium treatment — no
 * white box, no flat black overlay, the photograph stays visible and authentic.
 * LCP = H1 (never animated); the photo settles by scale only (imageReveal),
 * preserving its priority preload.
 */
export function Hero() {
  const hero = heroStack({ character: "precise" });
  const h = home.hero;

  return (
    <section className="relative overflow-hidden flex items-center min-h-[36rem] sm:min-h-[40rem] lg:min-h-[44rem]">
      {/* Full-bleed background photograph */}
      <div className="absolute inset-0 z-0">
        <Reveal preset="imageReveal" eager className="absolute inset-0">
          <Image
            src="/images/recoated-roller-bench.jpg"
            alt="A recoated black fuser roller mounted in the lathe on the IMATEC workshop bench"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_46%] sm:object-[50%_44%] lg:object-[50%_40%]"
          />
        </Reveal>
        {/* Soft charcoal-tinted scrim for legibility — top stays clearer so the
            workshop reads; a gentle centre focus supports the copy. Not a flat box. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1319]/40 via-[#0f1319]/44 to-[#0b0e13]/64" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_60%_at_50%_50%,rgba(8,11,15,0.42),transparent_72%)]" aria-hidden="true" />
      </div>

      {/* Centred content */}
      <div className="container relative z-10 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="label text-[#cfe4fe] [text-shadow:0_1px_12px_rgba(6,9,13,0.6)]">{h.eyebrow}</p>

          <h1
            {...hero.lcp}
            className="mt-5 text-[2.35rem] leading-[1.06] sm:text-[3rem] lg:text-[3.6rem] lg:leading-[1.04] font-bold tracking-[-0.025em] text-white text-balance [text-shadow:0_1px_24px_rgba(6,9,13,0.35)]"
          >
            {h.h1.lead} <span className="text-[#7cc0ff]">{h.h1.accent}</span>
          </h1>

          <Reveal {...hero.step(0)}>
            <p className="mt-6 mx-auto max-w-2xl text-white/90 text-base md:text-lg leading-relaxed [text-shadow:0_1px_16px_rgba(6,9,13,0.5)]">
              {h.sub}
            </p>
          </Reveal>

          <Reveal {...hero.step(1)}>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
              <WhatsAppCta label={h.primaryCta.label} message={h.primaryCta.waMessage} size="lg" dataCta="hero-recoating" />
              <Button
                href={h.secondaryCta.href}
                variant="ghost"
                size="lg"
                dataCta="hero-process"
                className="bg-white/5 text-white border-white/40 backdrop-blur-sm hover:bg-white/15 hover:text-white hover:border-white/70"
              >
                {h.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-4 label !tracking-[0.06em] normal-case text-white/70">{h.reassurance}</p>
          </Reveal>
        </div>
      </div>

      {/* Technical datum chip on the roller */}
      <span className="absolute right-4 bottom-4 lg:right-8 lg:bottom-8 label !text-[0.6rem] !tracking-[0.12em] text-white/85 bg-black/25 backdrop-blur-sm border border-white/25 rounded-md px-2.5 py-1.5">
        {h.objectLabel}
      </span>
    </section>
  );
}
