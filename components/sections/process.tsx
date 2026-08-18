import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { home } from "@/config/home";
import { cn } from "@/lib/utils";

export function Process() {
  const p = home.process;
  const last = p.steps.length - 1;
  return (
    <section className="section bg-paper" id="process" aria-labelledby="process-heading">
      <div className="container">
        <SectionMark index="04" label="How recoating works" spec="Workshop route" />

        <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-12">
          {/* Intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <Reveal>
              <h2 id="process-heading" className="text-[1.7rem] sm:text-4xl font-extrabold tracking-tight text-ink text-balance">
                {p.heading}
              </h2>
              <p className="mt-4 text-ink-2 leading-relaxed measure">{p.lede}</p>
              <Link
                href={p.cta.href}
                className="group mt-6 inline-flex items-center gap-1.5 text-brand-ink font-bold text-sm"
              >
                {p.cta.label}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-bench group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Worksheet — big numerals on a datum rule */}
          <ol className="lg:col-span-8">
            {p.steps.map((step, i) => (
              <Reveal key={step.n} as="li" preset="fadeUpItem" index={i}>
                <div className="grid grid-cols-[2.75rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-4 sm:gap-8 py-6 border-t border-hair first:border-t-0 first:pt-0">
                  <span
                    className={cn(
                      "text-[2rem] sm:text-[2.75rem] font-extrabold tabular-nums leading-none pt-1 tracking-tight",
                      i === last ? "text-brand" : "text-ink-muted",
                    )}
                  >
                    {step.n}
                  </span>
                  <div className="border-l border-hair pl-5 sm:pl-8">
                    <h3 className="text-base sm:text-lg font-extrabold text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-2 leading-relaxed max-w-md">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
