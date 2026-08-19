import Image from "next/image";
import Link from "next/link";
import { Check, Minus, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/jsonld";
import { Reveal } from "@/engine/motion";
import { SectionMark } from "@/components/ui/section-mark";
import { RecoatingHero } from "@/components/sections/recoating-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { EnquiryForm } from "@/components/funnel/enquiry-form";
import { WhatsAppCta, CallCta } from "@/components/funnel/channel-ctas";
import { pages, RECOATING_WA } from "@/config/pages";

const p = pages.recoating;

export const metadata = buildMetadata({
  title: p.seo.title,
  description: p.seo.description,
  path: "/fuser-roller-recoating",
  ogImage: "/images/recoated-roller-bench.jpg",
});

/** A recoat-quote pre-fill that names the roller context. */
const wa = (extra?: string) => (extra ? `${RECOATING_WA}\n${extra}` : RECOATING_WA);

export default function RecoatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("fuser-roller-recoating")) }} />

      <RecoatingHero />

      {/* 01 — What recoating is */}
      <section className="section bg-paper" aria-labelledby="what-heading">
        <div className="container">
          <SectionMark index="01" label={p.whatIs.label} spec="The alternative to a new part" />
          <div className="mt-9 grid gap-x-14 gap-y-9 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 id="what-heading" className="text-[1.7rem] sm:text-4xl font-extrabold tracking-tight text-ink text-balance">{p.whatIs.heading}</h2>
                <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{p.whatIs.body}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal preset="fadeUpItem">
                <p className="label text-ink-muted">{p.whatIs.symptomsLabel}</p>
                <ul className="mt-4 border-t border-hair">
                  {p.whatIs.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-3 py-3 border-b border-hair text-sm text-ink-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Recoat vs replace (the bridge) */}
      <section className="section bg-ground" aria-labelledby="wedge-heading">
        <div className="container">
          <SectionMark index="02" label="Recoat vs replace" spec="The decision" />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <h2 id="wedge-heading" className="text-[1.9rem] sm:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight text-ink text-balance">{p.wedge.heading}</h2>
              <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{p.wedge.lede}</p>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-10 grid md:grid-cols-2 md:divide-x md:divide-hair-strong border-t border-hair-strong">
              <div className="pt-7 pb-7 md:pb-8 md:pr-12 border-b md:border-b-0 border-hair">
                <p className="label text-ink-muted">The usual way</p>
                <h3 className="mt-2.5 text-xl font-extrabold text-ink-2">{p.wedge.replace.title}</h3>
                <ul className="mt-5 space-y-3">
                  {p.wedge.replace.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-ink-2"><Minus className="w-4 h-4 mt-0.5 text-ink-muted shrink-0" aria-hidden="true" />{pt}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-7 md:pt-7 md:pl-12">
                <p className="label text-brand-ink">The IMATEC alternative</p>
                <h3 className="mt-2.5 text-xl font-extrabold text-ink">{p.wedge.recoat.title}</h3>
                <ul className="mt-5 space-y-3">
                  {p.wedge.recoat.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-ink"><Check className="w-4 h-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />{pt}</li>
                  ))}
                </ul>
                <div className="mt-7"><WhatsAppCta label="Ask About Your Fuser Roller" message={wa()} size="lg" dataCta="wedge-recoating" /></div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-7 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
              <p className="text-sm text-ink-muted italic max-w-2xl">{p.wedge.note}</p>
              <Link href="/printer-copier-parts" className="group inline-flex items-center gap-1.5 text-brand-ink font-semibold text-sm shrink-0">
                {p.wedge.partsNote}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-bench group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — Candidacy */}
      <section className="section bg-paper" aria-labelledby="cand-heading">
        <div className="container">
          <SectionMark index="03" label={p.candidacy.label} spec="Honest guidance" />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <h2 id="cand-heading" className="text-[1.7rem] sm:text-4xl font-extrabold tracking-tight text-ink text-balance">{p.candidacy.heading}</h2>
              <p className="mt-4 text-ink-2 text-base md:text-lg leading-relaxed measure">{p.candidacy.lede}</p>
            </Reveal>
          </div>
          <div className="mt-9 grid md:grid-cols-2 gap-8 lg:gap-14">
            <Reveal preset="fadeUpItem" index={0}>
              <p className="label text-brand-ink">{p.candidacy.good.title}</p>
              <ul className="mt-4 border-t border-hair">
                {p.candidacy.good.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 py-3.5 border-b border-hair text-sm text-ink"><Check className="w-4 h-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />{pt}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal preset="fadeUpItem" index={1}>
              <p className="label text-ink-muted">{p.candidacy.notIdeal.title}</p>
              <ul className="mt-4 border-t border-hair">
                {p.candidacy.notIdeal.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 py-3.5 border-b border-hair text-sm text-ink-2"><Minus className="w-4 h-4 mt-0.5 text-ink-muted shrink-0" aria-hidden="true" />{pt}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <WhatsAppCta label="Get Your Roller Assessed" message={wa()} size="lg" dataCta="candidacy-assess" />
              <p className="text-sm text-ink-muted italic measure">{p.candidacy.note}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — Why IMATEC */}
      <section className="section bg-paper border-t border-hair" aria-labelledby="why-heading">
        <div className="container">
          <SectionMark index="04" label={p.why.label} spec="The specialist" />
          <div className="mt-9 grid gap-x-14 gap-y-9 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
              <Reveal>
                <h2 id="why-heading" className="text-[1.7rem] sm:text-4xl font-extrabold tracking-tight text-ink text-balance">{p.why.heading}</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {p.why.pillars.map((pil, i) => (
                <Reveal key={pil.title} preset="fadeUpItem" index={i}>
                  <div className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.5rem_1fr] gap-4 sm:gap-8 py-6 border-t border-hair first:border-t-0 first:pt-0">
                    <span className="text-2xl sm:text-3xl font-extrabold tabular-nums text-ink-muted leading-none pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-lg font-extrabold text-ink">{pil.title}</h3>
                      <p className="mt-1.5 text-sm md:text-[0.95rem] text-ink-2 leading-relaxed measure">{pil.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — How it works (customer-facing flow; technical detail confirmed on quote) */}
      <section className="section bg-paper border-t border-hair" id="how" aria-labelledby="how-heading">
        <div className="container">
          <SectionMark index="05" label={p.how.label} spec="Enquiry to return" />
          <div className="mt-9 grid gap-x-14 gap-y-9 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
              <Reveal>
                <h2 id="how-heading" className="text-[1.7rem] sm:text-4xl font-extrabold tracking-tight text-ink text-balance">{p.how.heading}</h2>
                <p className="mt-4 text-ink-2 leading-relaxed measure">{p.how.lede}</p>
              </Reveal>
            </div>
            <ol className="lg:col-span-8">
              {p.how.steps.map((step, i) => (
                <Reveal key={step.n} as="li" preset="fadeUpItem" index={i}>
                  <div className="grid grid-cols-[2.75rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-4 sm:gap-8 py-6 border-t border-hair first:border-t-0 first:pt-0">
                    <span className={`text-[2rem] sm:text-[2.75rem] font-extrabold tabular-nums leading-none pt-1 tracking-tight ${i === p.how.steps.length - 1 ? "text-brand" : "text-ink-muted"}`}>{step.n}</span>
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

      {/* 06 — What we can assist with (components + brands + what to send) */}
      <section className="relative overflow-hidden bg-ground" aria-labelledby="scope-heading">
        <div className="container pt-16 md:pt-20">
          <SectionMark index="06" label={p.scope.label} spec="Rollers & brands" />
        </div>
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          {/* content */}
          <div className="order-1">
            <div className="container lg:mx-0 lg:max-w-[36rem] lg:ml-auto py-10 lg:py-16 lg:pr-14">
              <Reveal>
                <h2 id="scope-heading" className="text-[1.7rem] sm:text-4xl font-extrabold tracking-tight text-ink text-balance">{p.scope.heading}</h2>
                <p className="mt-4 text-ink-2 leading-relaxed measure">{p.scope.lede}</p>
              </Reveal>
              <dl className="mt-8 border-t border-hair">
                {p.scope.components.map((c) => (
                  <Reveal key={c.type} preset="fadeUpItem">
                    <div className="py-4 border-b border-hair">
                      <dt className="text-base font-extrabold text-ink">{c.type}</dt>
                      <dd className="mt-1 text-sm text-ink-2 leading-relaxed">{c.desc}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
              <Reveal>
                <p className="mt-6 text-sm text-ink-2">{p.scope.brandsIntro}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{p.scope.brands.join(" · ")} &amp; more</p>
              </Reveal>
              <Reveal>
                <div className="mt-8 border-t border-hair-strong pt-5">
                  <p className="label text-brand-ink">{p.scope.whatToSend.title}</p>
                  <ul className="mt-3 space-y-2">
                    {p.scope.whatToSend.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-ink-2"><Check className="w-4 h-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />{it}</li>
                    ))}
                  </ul>
                  <div className="mt-6"><WhatsAppCta label="Send Your Roller Details" message={wa()} size="lg" dataCta="scope-send" /></div>
                </div>
              </Reveal>
            </div>
          </div>
          {/* image — component context (a different authentic asset), bleeds right */}
          <Reveal preset="imageReveal" className="relative order-2 h-[18rem] sm:h-[22rem] lg:h-auto lg:min-h-[34rem]">
            <Image src="/images/printer-parts.jpg" alt="Fuser units, rollers, drums and printer/copier parts laid out in the IMATEC workshop" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-center" />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-ground to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-ground to-transparent" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      {/* 07 — FAQ */}
      <FaqAccordion mark={{ index: "07", label: p.faq.label, spec: "Objections" }} heading={p.faq.heading} items={p.faq.items} bg="paper" />

      {/* 08 — Enquiry (the close) */}
      <section className="section bg-steel-soft border-t border-hair" id="enquire" aria-labelledby="enquire-heading">
        <div className="container">
          <SectionMark index="08" label={p.enquiry.label} spec="WhatsApp · Form" />
          <div className="mt-9 grid gap-x-14 gap-y-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <Reveal>
                <h2 id="enquire-heading" className="text-[2rem] sm:text-5xl lg:text-[3.1rem] lg:leading-[1.04] font-extrabold tracking-tight text-ink text-balance">{p.enquiry.heading}</h2>
                <p className="mt-5 text-ink-2 text-base md:text-lg leading-relaxed measure">{p.enquiry.sub}</p>
              </Reveal>
              <Reveal preset="fadeUpItem">
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <WhatsAppCta label="WhatsApp IMATEC" message={wa()} size="lg" dataCta="enquiry-whatsapp" />
                  <CallCta size="lg" />
                </div>
                <div className="mt-8 border-t border-hair-strong pt-4">
                  <p className="label text-ink-muted">What to send</p>
                  <p className="mt-2 text-sm text-ink-2">Brand · model · what the roller is doing — a photo helps.</p>
                </div>
              </Reveal>
            </div>
            <Reveal preset="fadeUpItem">
              <div className="rounded-panel border border-hair bg-paper p-6 sm:p-8 shadow-card">
                <h3 className="text-xl font-extrabold text-ink">{p.enquiry.formHeading}</h3>
                <p className="mt-2 text-sm text-ink-2 measure">{p.enquiry.formSub}</p>
                <div className="mt-6"><EnquiryForm variant="recoating" /></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
