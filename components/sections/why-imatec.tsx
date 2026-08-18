import Image from "next/image";
import { Reveal } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/config/home";

export function WhyImatec() {
  const w = home.why;
  return (
    <section className="section bg-steel-soft" aria-labelledby="why-heading">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 items-center">
          {/* Authentic workshop image (light-framed, technical label) */}
          <Reveal preset="imageReveal" className="order-2 lg:order-1">
            <div className="relative rounded-panel border border-hair-strong bg-paper p-3 shadow-card">
              <span className="absolute left-2.5 top-2.5 z-10 w-3 h-3 border-l-2 border-t-2 border-brand" aria-hidden="true" />
              <div className="relative aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-card bg-roller-low">
                <Image
                  src="/images/recoated-roller-bench.jpg"
                  alt="A fuser roller being recoated on the lathe in the IMATEC workshop"
                  fill
                  sizes="(max-width:1024px) 92vw, 40vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute right-5 bottom-5 label !text-[0.6rem] !tracking-[0.12em] text-brand-ink bg-paper/95 border border-brand/40 rounded-md px-2.5 py-1.5">
                In the IMATEC workshop
              </span>
            </div>
          </Reveal>

          {/* Pillars */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                eyebrow={w.eyebrow}
                heading={<span id="why-heading">{w.heading}</span>}
                lede={w.lede}
              />
            </Reveal>
            <div className="mt-8 space-y-6">
              {w.pillars.map((p, i) => (
                <Reveal key={p.title} preset="fadeUpItem" index={i}>
                  <div className="pl-5 border-l-2 border-brand/40">
                    <h3 className="text-lg font-extrabold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-2 leading-relaxed measure">{p.proof}</p>
                    <p className="mt-1.5 text-sm font-semibold text-brand-ink">{p.soWhat}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
