'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MapPin } from 'lucide-react';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

export default function BackFacialBrandonPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="min-h-96 bg-gradient-to-b from-primary/10 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Professional Back Facials in Brandon, FL
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Specialized back facial treatments to deep clean, exfoliate, and rejuvenate back skin at Skin by Emely LLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Back Facial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Call (914) 299-7739
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Brandon • Tampa • Riverview • Valrico • Seffner
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Specialized Back Facial Treatments</h2>
            <p className="text-muted-foreground mb-6">
              Your back deserves the same professional skincare attention as your face. Back acne, texture issues, and dull skin are common concerns that respond beautifully to professional back facial treatments. At Skin by Emely LLC, we offer specialized back facials with deep cleansing, exfoliation, and rejuvenation to reveal clear, smooth back skin.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Back Facial Options:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Back Facial ($110)</strong> — 60-minute deep cleanse and rejuvenation for back skin</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Back Microdermabrasion ($125)</strong> — Advanced exfoliation for refined texture</span>
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Why Get a Back Facial?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Treats back acne and body breakouts</li>
              <li>✓ Deep cleanses pores on back skin</li>
              <li>✓ Exfoliates dead skin cells</li>
              <li>✓ Improves texture and reduces roughness</li>
              <li>✓ Fades hyperpigmentation and dark spots</li>
              <li>✓ Promotes relaxation and healing</li>
              <li>✓ Perfect before backless outfits or events</li>
            </ul>

            {/* CTA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
              <Button size="lg" className="w-full" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Back Facial
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <a href="tel:(914)299-7739">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="/services">View All Services</a>
              </Button>
            </div>

            {/* Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Other Services in Brandon:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="/services/facials-brandon-fl" className="text-primary hover:underline">Custom Facials</a>
                <a href="/services/acne-facials-brandon-fl" className="text-primary hover:underline">Acne Facials</a>
                <a href="/services/microdermabrasion-brandon-fl" className="text-primary hover:underline">Microdermabrasion</a>
                <a href="/services" className="text-primary hover:underline">All Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
