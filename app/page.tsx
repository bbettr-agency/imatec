import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { FourWorlds } from "@/components/sections/four-worlds";
import { RecoatVsReplace } from "@/components/sections/recoat-vs-replace";
import { WhyImatec } from "@/components/sections/why-imatec";
import { Process } from "@/components/sections/process";
import { Coverage } from "@/components/sections/coverage";
import { Story } from "@/components/sections/story";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata = buildMetadata({
  title: "Fuser & Hot Roller Recoating & Printer Parts",
  description:
    "IMATEC recoats worn fuser & hot rollers to spec and supplies workshop-tested printer & copier parts and consumables to the SA trade.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FourWorlds />
      <RecoatVsReplace />
      <WhyImatec />
      <Process />
      <Coverage />
      <Story />
      <Faq />
      <FinalCta />
    </>
  );
}
