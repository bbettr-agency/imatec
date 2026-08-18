import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { home } from "@/config/home";

export function Story() {
  const s = home.story;
  return (
    <section className="section bg-paper" aria-labelledby="story-heading">
      <div className="container">
        <SectionMark index="06" label="Three decades on the bench" spec="Office automation" />

        <div className="mt-8 grid gap-x-14 gap-y-8 lg:grid-cols-12 lg:items-center">
          {/* Monumental numeral */}
          <Reveal className="lg:col-span-5">
            <p className="font-extrabold tracking-[-0.05em] leading-[0.78] text-ink text-[6.5rem] sm:text-[9rem] lg:text-[12rem]">
              30<span className="text-brand align-top text-[0.42em]">+</span>
            </p>
            <p className="label text-ink-muted mt-1">Years in office automation</p>
          </Reveal>

          {/* Story */}
          <Reveal preset="fadeUpItem" className="lg:col-span-7">
            <h2 id="story-heading" className="text-[1.7rem] leading-[1.15] sm:text-4xl font-extrabold tracking-tight text-ink text-balance">
              {s.heading}
            </h2>
            <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{s.body}</p>
            <Link href={s.cta.href} className="group mt-6 inline-flex items-center gap-1.5 text-brand-ink font-bold text-sm">
              {s.cta.label}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-bench group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Fact bar — real, verified facts only (hairline dividers via grid gap) */}
        <Reveal>
          <dl className="mt-12 border-t border-hair-strong grid grid-cols-2 md:grid-cols-4 gap-px bg-hair">
            {s.facts.map((f) => (
              <div key={f.label} className="bg-paper py-7 px-5 md:px-6">
                <dt className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">{f.value}</dt>
                <dd className="mt-1.5 text-[0.82rem] text-ink-2 leading-snug">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
