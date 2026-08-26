import Image from "next/image";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { home } from "@/config/home";

export function WhyImatec() {
  const w = home.why;
  return (
    <section className="overflow-hidden bg-steel-soft">
      <div className="container pt-16 md:pt-20">
        <SectionMark index="03" label="Why IMATEC" spec="The vetting model" />
      </div>

      <div className="mt-9 grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        {/* Clean cropped photographic block — left. No fade, no gradient, no dissolve. */}
        <Reveal preset="imageReveal" className="relative order-2 lg:order-1 h-[20rem] sm:h-[26rem] lg:h-auto lg:min-h-[34rem]">
          <Image
            src="/images/recoated-roller-bench.jpg"
            alt="A fuser roller being recoated on the lathe in the IMATEC workshop"
            fill
            sizes="(max-width:1024px) 100vw, 52vw"
            className="object-cover object-[40%_center]"
          />
          <span className="absolute left-4 bottom-4 lg:left-8 lg:bottom-8 label !text-[0.6rem] !tracking-[0.12em] text-brand-ink bg-paper/95 border border-brand/40 rounded-md px-2.5 py-1.5">
            In the IMATEC workshop
          </span>
        </Reveal>

        {/* Content — right */}
        <div className="order-1 lg:order-2 flex items-center">
          <div className="w-full max-w-xl px-6 lg:pl-12 xl:pl-14 lg:pr-8 py-12 lg:py-20">
            <Reveal>
              <h2 id="why-heading" className="text-[1.8rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">
                {w.heading}
              </h2>
              <p className="mt-4 text-ink-2 leading-relaxed measure">{w.lede}</p>
            </Reveal>
            <div className="mt-9 space-y-7">
              {w.pillars.map((p, i) => (
                <Reveal key={p.title} preset="fadeUpItem" index={i}>
                  <div className="pl-5 border-l-2 border-brand/50">
                    <h3 className="text-lg font-bold text-ink">{p.title}</h3>
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
