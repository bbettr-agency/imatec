import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { home } from "@/config/home";

export function Story() {
  const s = home.story;
  return (
    <section className="section bg-paper" aria-labelledby="story-heading">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-14 items-center">
          {/* Stat as a visual object (numeral-led, no fabricated proof) */}
          <Reveal>
            <div className="border-t-2 border-brand pt-5">
              <p className="text-6xl md:text-7xl font-extrabold tracking-tight text-brand-ink leading-none">
                30<span className="text-4xl md:text-5xl align-top">+</span>
              </p>
              <p className="mt-3 label text-ink-muted">Years in office automation</p>
            </div>
          </Reveal>

          <Reveal preset="fadeUpItem">
            <div>
              <p className="label text-brand-ink">{s.eyebrow}</p>
              <h2 id="story-heading" className="mt-3 text-[1.7rem] leading-[1.15] sm:text-4xl font-extrabold text-ink text-balance">
                {s.heading}
              </h2>
              <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{s.body}</p>
              <Link href={s.cta.href} className="group mt-6 inline-flex items-center gap-1.5 text-brand-ink font-bold text-sm">
                {s.cta.label}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-bench group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
