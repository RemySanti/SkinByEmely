'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles, Star, Droplet, Heart } from 'lucide-react';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

const serviceCategories = [
  {
    icon: Sparkles,
    title: 'Best Facials in Brandon, FL',
    description: 'Professional facials tailored to your skin type and concerns — custom, hydrating, anti-aging, and acne treatments',
    link: '/services/facials-brandon-fl',
  },
  {
    icon: Star,
    title: 'Advanced Treatments',
    description: 'Dermaplaning, microdermabrasion, nano needling, and oxygen infusions for visible transformation',
    link: '/services?tab=advanced',
  },
  {
    icon: Droplet,
    title: 'Chemical Peels Near Me',
    description: 'Professional-strength chemical peels with full facial treatment for acne, scars, and radiant skin',
    link: '/services/chemical-peels-brandon-fl',
  },
  {
    icon: Heart,
    title: 'Relaxing Add-Ons & Enhancements',
    description: 'Enhance any service with cupping, gua sha, scalp massage, and premium skincare upgrades',
    link: '/services?tab=addOns',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Best Facials in Brandon, FL & Advanced Skincare Services
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Licensed esthetician Emely specializes in professional custom facials, chemical peels, dermaplaning, and advanced treatments for acne, anti-aging, and glowing skin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {serviceCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Link key={idx} href={category.link}>
                <Card className="p-6 h-full hover:shadow-lg hover:bg-muted/30 transition-all cursor-pointer">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" asChild>
            <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Your Facial Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
