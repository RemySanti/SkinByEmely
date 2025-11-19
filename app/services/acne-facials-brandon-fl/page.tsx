'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MapPin } from 'lucide-react';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

export default function AcneFacialsBrandonPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="min-h-96 bg-gradient-to-b from-primary/10 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Professional Acne Facials in Brandon, FL
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Targeted acne treatments to clear breakouts, reduce inflammation, and restore healthy skin at Skin by Emely LLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Acne Facial
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
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Clear Skin Starts Here</h2>
            <p className="text-muted-foreground mb-6">
              Acne-prone skin requires specialized care, not one-size-fits-all treatments. At Skin by Emely LLC, our acne facials are expertly designed to deep cleanse, reduce inflammation, eliminate bacteria, and prevent future breakouts. Whether you're struggling with hormonal acne, teenage breakouts, or persistent blemishes, we have the professional solution.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Our Acne-Focused Facial Services:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>60-Minute Customized Facial ($90)</strong> — Deep cleanse and extraction for acne-prone skin</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Teen Facial ($60)</strong> — Specialized treatment designed for young, acne-prone skin</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Back Facial ($110)</strong> — Perfect for body acne and breakouts on back and chest</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Chemical Peel Series ($400)</strong> — Professional glycolic peels to clear acne and scars</span>
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">What Acne Facials Do:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Deep cleanse pores to remove bacteria and oil</li>
              <li>✓ Professional extraction of comedones (blackheads/whiteheads)</li>
              <li>✓ Reduce inflammation and redness</li>
              <li>✓ Kill acne-causing bacteria</li>
              <li>✓ Prevent future breakouts</li>
              <li>✓ Fade acne scars over time</li>
              <li>✓ Restore healthy, clear skin</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Professional Results, Not DIY Disasters</h3>
            <p className="text-muted-foreground mb-4">
              Attempting to treat acne at home with harsh scrubs, over-the-counter products, or improper extraction can worsen breakouts and cause scarring. Professional acne facials use proven techniques, medical-grade products, and expert knowledge to safely and effectively clear acne while preserving skin health.
            </p>
            <p className="text-muted-foreground">
              Licensed esthetician Emely brings 4 years of professional experience to every acne treatment. She understands acne triggers, knows which products and techniques work best, and creates a personalized treatment plan for your unique skin. Many clients see dramatic improvement after 3-4 monthly treatments.
            </p>

            {/* CTA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
              <Button size="lg" className="w-full" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Acne Facial
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <a href="tel:(914)299-7739">Call (914) 299-7739</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="/services?tab=peels">View Chemical Peels</a>
              </Button>
            </div>

            {/* Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Related Acne Solutions:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="/services/chemical-peels-brandon-fl" className="text-primary hover:underline">Chemical Peels</a>
                <a href="/services/microdermabrasion-brandon-fl" className="text-primary hover:underline">Microdermabrasion</a>
                <a href="/services/back-facial-brandon-fl" className="text-primary hover:underline">Back Facials</a>
                <a href="/services" className="text-primary hover:underline">All Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
