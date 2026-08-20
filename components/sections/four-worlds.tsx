import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { serviceBySlug } from "@/config/services";
import { home } from "@/config/home";

function LeadRow({ slug }: { slug: string }) {
  const s = serviceBySlug(slug)!;
  return (
    <Link href={`/${s.slug}`} className="group block pb-7 focus-visible:outline-offset-4">
      <div className="flex items-center gap-3">
        <span className="label text-brand-ink">{s.relationship}</span>
        <span className="h-px flex-1 bg-hair" aria-hidden="true" />
        <ArrowUpRight className="w-5 h-5 text-brand-ink transition-transform duration-200 ease-bench group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </div>
      <h3 className="mt-3 text-[1.6rem] sm:text-3xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand-ink">
        {s.name}
      </h3>
      <p className="mt-2.5 text-ink-2 leading-relaxed max-w-xl">{s.summary}</p>
    </Link>
  );
}

function IndexRow({ slug }: { slug: string }) {
  const s = serviceBySlug(slug)!;
  return (
    <Link
      href={`/${s.slug}`}
      className="group grid grid-cols-[5rem_1fr_auto] sm:grid-cols-[7rem_1fr_auto] items-center gap-4 sm:gap-6 py-6 focus-visible:outline-offset-4"
    >
      <div className="relative aspect-[7/5] w-full overflow-hidden rounded-md bg-steel-soft">
        <Image
          src={s.image}
          alt={s.imageAlt}
          fill
          sizes="112px"
          className="object-cover transition-transform duration-300 ease-bench group-hover:scale-105"
        />
      </div>
      <div className="min-w-0">
        <span className="label !text-[0.58rem] text-ink-muted">{s.relationship}</span>
        <h3 className="mt-1 text-lg font-bold text-ink transition-colors group-hover:text-brand-ink">{s.name}</h3>
        <p className="mt-1 text-sm text-ink-2 leading-snug max-w-md">{s.summary}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-brand-ink shrink-0 transition-transform duration-200 ease-bench group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function FourWorlds() {
  return (
    <section className="section bg-paper" aria-labelledby="worlds-heading">
      <div className="container">
        <SectionMark index="02" label="What we do" spec="Four capabilities" />

        <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-12">
          {/* Intro (editorial, sits alongside the index) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <Reveal>
              <h2 id="worlds-heading" className="text-[1.7rem] sm:text-4xl font-semibold tracking-tight text-ink text-balance">
                {home.worlds.heading}
              </h2>
              <p className="mt-4 text-ink-2 leading-relaxed">{home.worlds.lede}</p>
            </Reveal>
          </div>

          {/* The capability index — recoating leads, three supporting rows */}
          <div className="lg:col-span-8">
            <Reveal>
              <LeadRow slug="fuser-roller-recoating" />
            </Reveal>
            <Stagger className="divide-y divide-hair border-t border-hair-strong">
              {["vacu-tec", "printer-copier-parts", "mr-mckenic"].map((slug) => (
                <Reveal key={slug} preset="fadeUpItem">
                  <IndexRow slug={slug} />
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
