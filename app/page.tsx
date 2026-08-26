import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { RecoatVsReplace } from "@/components/sections/recoat-vs-replace";
import { WhyImatec } from "@/components/sections/why-imatec";
import { Process } from "@/components/sections/process";
import { Coverage } from "@/components/sections/coverage";
import { Story } from "@/components/sections/story";
import { Faq } from "@/components/sections/faq";
import { BrandRailBand } from "@/components/sections/brand-rail";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata = buildMetadata({
  title: "Fuser / Hot Roller Coating & Printer Parts",
  description:
    "IMATEC recoats worn fuser & hot rollers instead of replacing them, and supplies workshop-tested printer & copier parts and consumables to the SA trade.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Merged: brand & parts coverage (left) + capability index (right). */}
      <Coverage index="01" />
      <RecoatVsReplace />
      <WhyImatec />
      <Process />
      <Story />
      <Faq />
      {/* A deliberate compact repeat of the brand motif before conversion. */}
      <BrandRailBand label="One workshop, every major brand" />
      <FinalCta index="06" showMap />
    </>
  );
}
