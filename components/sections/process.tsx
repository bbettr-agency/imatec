import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/config/home";
import { cn } from "@/lib/utils";

export function Process() {
  const p = home.process;
  const last = p.steps.length - 1;
  return (
    <section className="section bg-paper" id="process" aria-labelledby="process-heading">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow={p.eyebrow}
              heading={<span id="process-heading">{p.heading}</span>}
              lede={p.lede}
            />
          </Reveal>
        </div>

        <div className="relative mt-12">
          {/* connecting rule (desktop) */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-hair-strong" aria-hidden="true" />
          <Stagger className="relative grid gap-8 md:grid-cols-5 md:gap-6">
            {p.steps.map((step, i) => (
              <Reveal key={step.n} preset="fadeUpItem" index={i}>
                <div className="flex md:block gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0 md:mb-4 border-2",
                      i === last
                        ? "bg-brand border-brand text-white"
                        : "bg-paper border-brand text-brand-ink",
                    )}
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <Link
            href={p.cta.href}
            className="group mt-10 inline-flex items-center gap-1.5 text-brand-ink font-bold text-sm"
          >
            {p.cta.label}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-bench group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
