'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MapPin } from 'lucide-react';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

export default function MensFacialsBrandonPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="min-h-96 bg-gradient-to-b from-primary/10 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Men's Facials in Brandon, FL
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Professional men's skincare and facials designed for men's unique skin needs at Skin by Emely LLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Men's Facial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Call (914) 299-7739
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Brandon, Tampa, Riverview, Valrico & Seffner
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Skincare Designed for Men</h2>
            <p className="text-muted-foreground mb-6">
              Men's skin is different—it's thicker, oilier, and more prone to sensitivity from shaving irritation and ingrown hairs. At Skin by Emely LLC, we specialize in customized men's facials that address these unique concerns with professional expertise and a judgment-free, welcoming environment.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Men's Facial Options:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>60-Minute Customized Facial ($90)</strong> — Full skincare treatment tailored to men's skin</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>90-Minute Customized Facial ($125)</strong> — Extended treatment with premium add-ons</span>
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Why Men Should Get Regular Facials:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Treats ingrown hairs and razor bumps</li>
              <li>✓ Controls excess oil production</li>
              <li>✓ Reduces acne and breakouts</li>
              <li>✓ Minimizes large pores</li>
              <li>✓ Improves skin texture and clarity</li>
              <li>✓ Restores hydration to stressed skin</li>
              <li>✓ Promotes overall skin health and confidence</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">What to Expect:</h3>
            <p className="text-muted-foreground">
              Every men's facial at Skin by Emely begins with a professional skin consultation to understand your specific concerns. Whether you're dealing with razor irritation, acne, oil control, or simply want healthier skin, Emely creates a personalized treatment plan. You'll receive expert extractions, a customized mask, our signature healing scalp and neck massage, and leave feeling refreshed, relaxed, and confident.
            </p>

            {/* CTA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
              <Button size="lg" className="w-full" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Men's Facial
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <a href="tel:(914)299-7739">Call (914) 299-7739</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="/services">View All Services</a>
              </Button>
            </div>

            {/* Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Other Popular Services:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="/services/facials-brandon-fl" className="text-primary hover:underline">Custom Facials</a>
                <a href="/services/acne-facials-brandon-fl" className="text-primary hover:underline">Acne Facials</a>
                <a href="/services/chemical-peels-brandon-fl" className="text-primary hover:underline">Chemical Peels</a>
                <a href="/services" className="text-primary hover:underline">All Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
