'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MapPin } from 'lucide-react';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

export default function MicrodermabrasionBrandonPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="min-h-96 bg-gradient-to-b from-primary/10 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Professional Microdermabrasion in Brandon, FL
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Advanced microdermabrasion treatments for refined texture, reduced scarring, and radiant skin at Skin by Emely LLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Microdermabrasion
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

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">What is Microdermabrasion?</h2>
            <p className="text-muted-foreground mb-6">
              Microdermabrasion is a professional-grade exfoliation treatment that uses a handheld device to gently remove the outer layer of dead skin cells. This advanced technique refines skin texture, minimizes pores, reduces acne scars, and reveals smoother, brighter skin—all without downtime. It's the gold standard for non-invasive skin rejuvenation.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Microdermabrasion Services Available:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Microdermabrasion Facial ($125)</strong> — 60-minute full face treatment with exfoliation and hydration</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Back Microdermabrasion ($125)</strong> — Professional exfoliation for full back skin</span>
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Microdermabrasion Benefits:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Refines skin texture and pore size</li>
              <li>✓ Reduces acne scars and hyperpigmentation</li>
              <li>✓ Diminishes fine lines and wrinkles</li>
              <li>✓ Brightens dull, tired skin</li>
              <li>✓ Improves product absorption</li>
              <li>✓ Safe for most skin types</li>
              <li>✓ No downtime—results immediately visible</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Why Choose Skin by Emely?</h3>
            <p className="text-muted-foreground">
              Licensed esthetician Emely combines professional microdermabrasion with her signature facial expertise and healing touch. Every treatment is tailored to your skin's unique needs, ensuring optimal results and maximum comfort. Serving Brandon, Tampa, and the surrounding communities, Skin by Emely LLC is your premier destination for advanced skincare treatments.
            </p>

            {/* CTA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
              <Button size="lg" className="w-full" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <a href="tel:(914)299-7739">Call (914) 299-7739</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="/services?tab=advanced">All Treatments</a>
              </Button>
            </div>

            {/* Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Explore More Services:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="/services/facials-brandon-fl" className="text-primary hover:underline">Custom Facials</a>
                <a href="/services/chemical-peels-brandon-fl" className="text-primary hover:underline">Chemical Peels</a>
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
