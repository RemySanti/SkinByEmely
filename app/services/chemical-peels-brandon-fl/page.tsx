'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MapPin } from 'lucide-react';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

export default function ChemicalPeelsBrandonPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="min-h-96 bg-gradient-to-b from-primary/10 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Professional Chemical Peels in Brandon, FL
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Advanced chemical peel treatments for smoother, brighter, youthful-looking skin with visible results at Skin by Emely LLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Chemical Peel
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Call (914) 299-7739
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Serving Brandon, Tampa, Riverview, Valrico & Seffner
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Transform Your Skin with Professional-Strength Chemical Peels</h2>
              <p className="text-muted-foreground mb-6">
                Chemical peels are one of the most effective professional skincare treatments for addressing acne scars, hyperpigmentation, fine lines, and uneven skin texture. At Skin by Emely LLC, we offer professional-strength chemical peels combined with full facial treatments and expert extractions to deliver visible, transformative results right here in Brandon, FL.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Our Chemical Peel Options:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Circadia Lactic Acid Peel ($110)</strong> — Gentle yet effective for brightening and hydration</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Cranberry Turnover Peel ($125)</strong> — Antioxidant-rich peel with full facial treatment</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>30% Glycolic Peel ($150)</strong> — Professional-strength for dramatic exfoliation results</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Circadia Alpha-Beta Acid Peel ($110)</strong> — Combined dual-acid treatment for maximum effectiveness</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Chemical Peel Series of 4 ($400)</strong> — Save with our 4-peel package for optimal results</span>
                </li>
              </ul>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">What to Expect During Your Chemical Peel:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Skin consultation and peel selection</li>
                <li>✓ Professional cleanse to prepare skin</li>
                <li>✓ Application of custom-selected chemical peel solution</li>
                <li>✓ Expert extraction of impurities</li>
                <li>✓ Neutralizing solution application</li>
                <li>✓ Hydrating mask and treatment</li>
                <li>✓ SPF protection and aftercare instructions</li>
              </ul>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Why Choose Professional Chemical Peels?</h3>
              <p className="text-muted-foreground mb-4">
                Chemical peels accelerate cell turnover, revealing fresh, healthy skin beneath the surface. They're highly effective for treating acne, reducing hyperpigmentation, minimizing fine lines, and improving overall skin texture. Unlike at-home treatments, professional chemical peels deliver salon-grade strength with expert monitoring for safety and optimal results.
              </p>
              <p className="text-muted-foreground">
                At Skin by Emely LLC, licensed esthetician Emely pairs professional-strength peels with full facial treatments, making every appointment a comprehensive skincare experience. Many clients see dramatic improvements after 3-4 treatments, making our Chemical Peel Series an excellent investment in your skin's future.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Aftercare Tips for Best Results:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Avoid sun exposure for 48 hours after treatment</li>
                <li>• Use SPF 30+ daily for at least 2 weeks</li>
                <li>• Keep skin moisturized with gentle products</li>
                <li>• Avoid active ingredients (retinoids, acids) for 24-48 hours</li>
                <li>• Book your next peel in 2-4 weeks for series</li>
              </ul>
            </div>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
              <Button size="lg" className="w-full" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Peel
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <a href="tel:(914)299-7739">Call (914) 299-7739</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="/services?tab=peels">All Peels</a>
              </Button>
            </div>

            {/* Internal Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Related Services in Brandon:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="/services/facials-brandon-fl" className="text-primary hover:underline">Custom Facials</a>
                <a href="/services/acne-facials-brandon-fl" className="text-primary hover:underline">Acne Facials</a>
                <a href="/services/microdermabrasion-brandon-fl" className="text-primary hover:underline">Microdermabrasion</a>
                <a href="/services/dermaplaning-brandon-fl" className="text-primary hover:underline">Dermaplaning</a>
                <a href="/services" className="text-primary hover:underline">All Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
