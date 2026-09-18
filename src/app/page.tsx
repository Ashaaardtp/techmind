import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AboutUs } from "@/components/sections/about";
import { ProductsAndServices } from "@/components/sections/products-and-services";
import { WhyUs } from "@/components/sections/why-us";
import { FeaturedTemplates } from "@/components/sections/featured-templates";
import { WebShowcase } from "@/components/sections/web-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Solusi Digital Lengkap untuk Tumbuh Kembangkan UMKM Anda",
  description:
    "Techmind.id — all-in-one digital solution untuk UMKM: jasa pembuatan website & landing page, undangan digital, template spreadsheet otomatis, dan e-book edukasi.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProductsAndServices />
      <WhyUs />
      <FeaturedTemplates />
      <WebShowcase />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}