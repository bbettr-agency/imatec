"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { home } from "@/config/home";

/**
 * Why IMATEC (§03) — interactive capability showcase (client-approved layout).
 * A selectable numbered list on the left; a large image on the right that
 * changes with the active item; prev / next navigation. Light-first: content
 * is always rendered and interactive — nothing depends on animation to be seen.
 */

// One image per pillar, in the same order as home.why.pillars.
const VISUALS = [
  { src: "/images/recoated-roller-bench.jpg", alt: "A fuser roller being recoated on the lathe in the IMATEC workshop" },
  { src: "/images/printer-parts.jpg", alt: "Printer and copier parts checked on a workshop surface before they enter the IMATEC range" },
  { src: "/images/vacu-tec.jpg", alt: "An IMATEC Vacu-Tec service vacuum used by copier and printer technicians" },
];

export function WhyImatec() {
  const w = home.why;
  const pillars = w.pillars;
  const n = pillars.length;
  const [active, setActive] = useState(0);
  const go = (delta: number) => setActive((a) => (a + delta + n) % n);

  return (
    <section className="overflow-hidden bg-steel-soft">
      <div className="container section">
        <SectionMark index="03" label={w.eyebrow} spec="The vetting model" />

        <div className="mt-8 max-w-2xl">
          <Reveal>
            <h2 id="why-heading" className="text-[1.8rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">
              {w.heading}
            </h2>
            <p className="mt-4 text-ink-2 leading-relaxed measure">{w.lede}</p>
          </Reveal>
        </div>

        <div className="mt-10 lg:mt-14 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:items-stretch">
          {/* Left — selectable list */}
          <ul className="border-t border-hair-strong">
            {pillars.map((p, i) => {
              const on = i === active;
              return (
                <li key={p.title} className="border-b border-hair">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className="group flex w-full items-start gap-4 sm:gap-6 py-6 sm:py-7 text-left"
                  >
                    <span className={`mt-1.5 text-xs font-bold tabular-nums tracking-widest transition-colors ${on ? "text-brand-ink" : "text-ink-muted"}`}>
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 border-l-2 pl-4 sm:pl-6 transition-colors ${on ? "border-brand" : "border-transparent"}`}>
                      <span
                        className={`block text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                          on ? "text-ink" : "text-ink-muted group-hover:text-ink"
                        }`}
                      >
                        {p.title}
                      </span>
                      {/* Detail expands only for the active item */}
                      <span
                        className={`grid transition-all duration-300 ease-out ${
                          on ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="block text-sm text-ink-2 leading-relaxed measure">{p.proof}</span>
                          <span className="block mt-2 text-sm font-semibold text-brand-ink measure">{p.soWhat}</span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right — image + navigation */}
          <div className="relative order-first lg:order-none">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[26rem] overflow-hidden rounded-panel border border-hair bg-steel">
              {VISUALS.map((v, i) => (
                <Image
                  key={v.src}
                  src={v.src}
                  alt={v.alt}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== active}
                />
              ))}

              {/* Prev / next */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous capability"
                  className="grid place-items-center w-11 h-11 rounded-full bg-paper/95 border border-hair-strong text-ink shadow-sm transition-colors hover:text-brand-ink hover:border-brand/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next capability"
                  className="grid place-items-center w-11 h-11 rounded-full bg-paper/95 border border-hair-strong text-ink shadow-sm transition-colors hover:text-brand-ink hover:border-brand/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Position indicator */}
              <span className="absolute bottom-6 left-5 label !text-[0.6rem] !tracking-[0.14em] text-ink bg-paper/95 border border-hair rounded-md px-2.5 py-1.5 tabular-nums">
                {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
