import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger } from "@/engine/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, serviceBySlug } from "@/config/services";
import { home } from "@/config/home";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

function WorldCard({
  slug,
  className,
  featured = false,
}: {
  slug: string;
  className?: string;
  featured?: boolean;
}) {
  const s = serviceBySlug(slug)!;
  return (
    <Link
      href={`/${s.slug}`}
      className={cn(
        "group flex flex-col rounded-panel border border-hair bg-paper overflow-hidden transition-[border-color,box-shadow,transform] duration-200 ease-bench hover:border-brand/50 hover:shadow-card",
        className,
      )}
    >
      <div className={cn("relative bg-steel-soft overflow-hidden", featured ? "aspect-[16/9]" : "aspect-[16/10]")}>
        <Image
          src={s.image}
          alt={s.imageAlt}
          fill
          sizes={featured ? "(max-width:1024px) 100vw, 58vw" : "(max-width:1024px) 100vw, 40vw"}
          className="object-cover transition-transform duration-300 ease-bench group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 left-3 label !text-[0.6rem] !tracking-[0.13em] text-ink-2 bg-paper/90 backdrop-blur-sm border border-hair rounded-md px-2 py-1">
          {s.relationship}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className={cn("font-extrabold text-ink", featured ? "text-2xl" : "text-xl")}>{s.name}</h3>
        <p className="mt-2 text-ink-2 text-sm leading-relaxed flex-1">{s.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-brand-ink font-bold text-sm">
          Explore
          <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-bench group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function PartsCard({ className }: { className?: string }) {
  const s = serviceBySlug("printer-copier-parts")!;
  return (
    <Link
      href={`/${s.slug}`}
      className={cn(
        "group flex flex-col rounded-panel border border-hair bg-paper p-6 transition-[border-color,box-shadow] duration-200 ease-bench hover:border-brand/50 hover:shadow-card",
        className,
      )}
    >
      <span className="label !text-[0.6rem] !tracking-[0.13em] text-ink-2">{s.relationship}</span>
      <h3 className="mt-3 font-extrabold text-ink text-xl">{s.name}</h3>
      <p className="mt-2 text-ink-2 text-sm leading-relaxed">{s.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Supported brands">
        {site.brands.map((b) => (
          <li key={b} className="text-[0.68rem] font-semibold text-ink-2 border border-hair rounded px-2 py-1 bg-steel-soft">
            {b}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex items-center gap-1.5 text-brand-ink font-bold text-sm">
        Request a part
        <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-bench group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function FourWorlds() {
  return (
    <section className="section bg-ground" aria-labelledby="worlds-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={home.worlds.eyebrow}
            heading={<span id="worlds-heading">{home.worlds.heading}</span>}
            lede={home.worlds.lede}
          />
        </Reveal>

        {/* Asymmetric, differentiated — recoating dominant; parts as a brand band */}
        <Stagger className="mt-10 md:mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal preset="fadeUpItem" className="lg:col-span-7">
            <WorldCard slug="fuser-roller-recoating" featured className="h-full" />
          </Reveal>
          <Reveal preset="fadeUpItem" className="lg:col-span-5">
            <WorldCard slug="vacu-tec" className="h-full" />
          </Reveal>
          <Reveal preset="fadeUpItem" className="lg:col-span-7">
            <PartsCard className="h-full" />
          </Reveal>
          <Reveal preset="fadeUpItem" className="lg:col-span-5">
            <WorldCard slug="mr-mckenic" className="h-full" />
          </Reveal>
        </Stagger>
      </div>
    </section>
  );
}
