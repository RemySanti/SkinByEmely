'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MapPin } from 'lucide-react';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

export default function DermaplanningBrandonPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="min-h-96 bg-gradient-to-b from-primary/10 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Professional Dermaplaning in Brandon, FL
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Get ultra-smooth, radiant skin with professional dermaplaning treatments at Skin by Emely LLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Dermaplaning
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
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">What is Dermaplaning?</h2>
            <p className="text-muted-foreground mb-6">
              Dermaplaning is a professional exfoliation technique using a sterile surgical blade to remove dead skin cells and fine vellus hair (peach fuzz) for instantly smoother, glowing skin. This treatment is perfect for anyone seeking a non-invasive way to achieve a more radiant complexion with immediate visible results.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Dermaplaning Options at Skin by Emely:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Dermaplane DELUXE Facial ($135)</strong> — 90-minute professional dermaplaning with full facial</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Express Dermaplane Facial ($55)</strong> — 30-minute quick dermaplaning for immediate smoothness</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Dermaplane Add-On ($25)</strong> — Add to any facial for extra exfoliation</span>
              </li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Benefits of Professional Dermaplaning:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Instantly smooth, glowing skin</li>
              <li>✓ Removes peach fuzz and fine facial hair</li>
              <li>✓ Enhances product absorption</li>
              <li>✓ Perfect before makeup application</li>
              <li>✓ Safe for most skin types</li>
              <li>✓ No downtime or recovery needed</li>
              <li>✓ Results last 3-4 weeks</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">Why Choose Skin by Emely for Dermaplaning?</h3>
            <p className="text-muted-foreground">
              As a licensed esthetician with 4 years of professional experience, Emely performs dermaplaning with precision and expertise. Every treatment is customized to your skin's needs, and when combined with our full facial services, you'll experience the ultimate in skincare innovation. Located in Brandon with clients from Tampa, Riverview, Valrico, and Seffner, Skin by Emely is your go-to for professional dermaplaning near you.
            </p>

            {/* CTA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
              <Button size="lg" className="w-full" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Dermaplaning
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <a href="tel:(914)299-7739">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="/services?tab=advanced">View All Treatments</a>
              </Button>
            </div>

            {/* Internal Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Other Popular Services:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="/services/facials-brandon-fl" className="text-primary hover:underline">Custom Facials</a>
                <a href="/services/chemical-peels-brandon-fl" className="text-primary hover:underline">Chemical Peels</a>
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
