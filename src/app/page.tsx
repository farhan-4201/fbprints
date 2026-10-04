import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { NextDayHighlight } from "@/components/home/NextDayHighlight";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Fresh Baked Prints — Premium Next-Day Printing",
  description:
    "Premium full-color printing with next-day turnaround. Banners, business cards, flyers, yard signs, custom apparel and more — Fresh Baked Prints, Atlanta GA.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PromoBanner />
      <FeaturedProducts />
      <ProductShowcase />
      <HowItWorksSection />
      <NextDayHighlight />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
