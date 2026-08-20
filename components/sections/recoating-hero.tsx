import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal, heroStack } from "@/engine/motion";
import { WhatsAppCta } from "@/components/funnel/channel-ctas";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pages, RECOATING_WA } from "@/config/pages";

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "Fuser & Hot Roller Recoating", path: "/fuser-roller-recoating" },
];

/**
 * Flagship recoating hero — distinct from the homepage. Copy block, a linear
 * component datum strip, then a wide full-bleed roller band (echoes the roller's
 * horizontal form; a different crop from the homepage). LCP = H1.
 */
export function RecoatingHero() {
  const hero = heroStack({ character: "precise" });
  const h = pages.recoating.hero;

  return (
    <section className="relative overflow-hidden bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }} />

      <div className="container pt-8">
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
            {breadcrumb.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-hair-strong" aria-hidden="true" />}
                {i < breadcrumb.length - 1 ? (
                  <Link href={c.path} className="hover:text-brand-ink transition-colors">{c.name}</Link>
                ) : (
                  <span className="text-ink-2 font-semibold" aria-current="page">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-4xl">
          <p className="label text-brand-ink">{h.eyebrow}</p>
          <h1
            {...hero.lcp}
            className="mt-4 text-[2.3rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.03] font-bold tracking-[-0.03em] text-ink text-balance"
          >
            {h.h1.lead} <span className="text-brand-ink">{h.h1.accent}</span>
          </h1>
          <Reveal {...hero.step(0)}>
            <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed max-w-2xl">{h.sub}</p>
          </Reveal>
          <Reveal {...hero.step(1)}>
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
              <WhatsAppCta label={h.primaryCta.label} message={RECOATING_WA} size="lg" dataCta="recoating-hero" />
              <Button href="#how" variant="ghost" size="lg" dataCta="recoating-hero-how">How it works</Button>
            </div>
          </Reveal>
        </div>

        {/* Component datum strip — linear, signals the specialist scope immediately */}
        <Reveal {...hero.step(2)}>
          <div className="mt-8 pb-2 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="label text-ink-muted">We recoat</span>
            {h.components.map((c, i) => (
              <span key={c} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-hair-strong" aria-hidden="true">·</span>}
                <span className="label text-brand-ink">{c}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Wide roller band — elongated, integrated (soft top fade), a distinct crop */}
      <div className="relative h-[15rem] sm:h-[19rem] lg:h-[23rem]">
        <Reveal preset="imageReveal" eager className="absolute inset-0">
          <Image
            src="/images/recoated-roller-bench.jpg"
            alt="A recoated black fuser roller mounted in a lathe in the IMATEC workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
        </Reveal>
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-paper to-transparent" aria-hidden="true" />
        <span className="absolute right-4 bottom-4 lg:right-8 lg:bottom-8 label !text-[0.6rem] !tracking-[0.12em] text-brand-ink bg-paper/95 backdrop-blur-sm border border-brand/40 rounded-md px-2.5 py-1.5 shadow-sm">
          {h.objectLabel}
        </span>
      </div>
    </section>
  );
}
