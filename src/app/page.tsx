import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { PillarSwitcher } from "@/components/sections/pillar-switcher";
import { FeaturedTemplates } from "@/components/sections/featured-templates";
import { WebShowcase } from "@/components/sections/web-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Template Spreadsheet & Jasa Website untuk UMKM",
  description:
    "TechMind Digital Service menyediakan template spreadsheet siap pakai dan jasa pembuatan landing page, undangan digital, serta website kustom untuk UMKM dan event organizer.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PillarSwitcher />
      <FeaturedTemplates />
      <WebShowcase />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
