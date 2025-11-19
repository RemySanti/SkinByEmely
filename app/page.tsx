'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ProductCarousel } from '@/components/product-carousel';
import { AboutSection } from '@/components/about-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FooterCTA } from '@/components/footer-cta';
import { ServicesPreview } from '@/components/services-preview';
import { LocalBusinessSection } from '@/components/local-business-section';
import { LocalBusinessSchema } from '@/components/schema-markup';

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Navigation />
      <main className="bg-background">
        <HeroSection />
        <ServicesPreview />
        <ProductCarousel />
        <AboutSection />
        <TestimonialsSection />
        <LocalBusinessSection />
        <FooterCTA />
      </main>
    </>
  );
}
