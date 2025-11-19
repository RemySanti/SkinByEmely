'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Heart, Droplet } from 'lucide-react';
import Link from 'next/link';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

const SERVICE_CATEGORIES = [
  {
    title: 'Custom Facials',
    slug: 'facials-brandon-fl',
    icon: Heart,
    description: 'Personalized facial treatments tailored to your unique skin type and concerns',
    color: 'from-primary/20 to-secondary/20',
    accentColor: 'text-primary',
    services: ['60 Min Customized Facial', 'New Client Facial', '90 Min Deluxe Facial', 'Teen Facial', 'Back Facial'],
    priceRange: '$60-$125',
  },
  {
    title: 'Chemical Peels',
    slug: 'chemical-peels-brandon-fl',
    icon: Sparkles,
    description: 'Professional-strength peels for dramatic skin transformation and renewal',
    color: 'from-secondary/20 to-accent/20',
    accentColor: 'text-secondary',
    services: ['Lactic Acid Peel', 'Cranberry Turnover', '30% Glycolic Peel', 'Alpha-Beta Peel', 'Peel Series'],
    priceRange: '$110-$150',
  },
  {
    title: 'Dermaplaning',
    slug: 'dermaplaning-brandon-fl',
    icon: Sparkles,
    description: 'Ultra-smooth skin with professional blade exfoliation and peach fuzz removal',
    color: 'from-accent/20 to-primary/20',
    accentColor: 'text-accent',
    services: ['Dermaplane DELUXE Facial', 'Express Dermaplane', 'Dermaplane Add-On'],
    priceRange: '$25-$135',
  },
  {
    title: 'Microdermabrasion',
    slug: 'microdermabrasion-brandon-fl',
    icon: Droplet,
    description: 'Advanced exfoliation technology for refined texture and youthful glow',
    color: 'from-primary/20 to-secondary/20',
    accentColor: 'text-primary',
    services: ['Facial Microdermabrasion', 'Back Microdermabrasion'],
    priceRange: '$125',
  },
  {
    title: 'Back Facials',
    slug: 'back-facial-brandon-fl',
    icon: Heart,
    description: 'Deep cleansing and rejuvenation for hard-to-reach back skin',
    color: 'from-secondary/20 to-accent/20',
    accentColor: 'text-secondary',
    services: ['Back Facial', 'Back Microdermabrasion'],
    priceRange: '$110-$125',
  },
  {
    title: 'Men\'s Facials',
    slug: 'mens-facials-brandon-fl',
    icon: Sparkles,
    description: 'Specialized skincare treatments designed for men\'s unique skin needs',
    color: 'from-accent/20 to-primary/20',
    accentColor: 'text-accent',
    services: ['Men\'s Custom Facial', 'Men\'s Anti-Aging Treatment', 'Men\'s Deep Cleanse'],
    priceRange: '$75-$125',
  },
  {
    title: 'Acne Treatments',
    slug: 'acne-facials-brandon-fl',
    icon: Droplet,
    description: 'Targeted treatments for acne-prone skin with extraction and healing',
    color: 'from-primary/20 to-secondary/20',
    accentColor: 'text-primary',
    services: ['Acne Facial', 'Teen Acne Treatment', 'Back Acne Facial'],
    priceRange: '$60-$110',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-24 px-4 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <p className="text-sm font-semibold text-primary">Professional Esthetician Services</p>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Personalized Skincare
              <span className="block text-primary">Treatments in Brandon</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance max-w-3xl mx-auto leading-relaxed">
              From custom facials to advanced treatments, discover the perfect service for your skin's unique needs at Skin by Emely LLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Your Treatment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <a href="tel:(914)299-7739">Call (914) 299-7739</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Categories Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Explore Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our range of professional treatments, each designed to address specific skin concerns and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map((category) => {
                const Icon = category.icon;
                return (
                  <Link key={category.slug} href={`/services/${category.slug}`}>
                    <Card className={`group p-8 h-full bg-gradient-to-br ${category.color} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 cursor-pointer`}>
                      <div className="flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-2xl bg-background/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${category.accentColor}`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                          {category.description}
                        </p>

                        <div className="space-y-2 mb-5">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Featured Services:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {category.services.slice(0, 3).map((service, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className={`${category.accentColor} mt-1`}>•</span>
                                <span>{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <span className="text-sm font-semibold text-foreground">{category.priceRange}</span>
                          <span className={`text-sm font-semibold ${category.accentColor} group-hover:translate-x-1 transition-transform flex items-center gap-1`}>
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose Skin by Emely?
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the difference of personalized, professional skincare in Brandon, FL
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Licensed Expertise</h3>
                <p className="text-muted-foreground">
                  4 years of professional esthetician experience with personalized treatment plans
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Signature Touch</h3>
                <p className="text-muted-foreground">
                  Known for exceptional neck, shoulder, and scalp massages that elevate every treatment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Droplet className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Holistic Care</h3>
                <p className="text-muted-foreground">
                  Treatments designed for healthy skin and relaxation of mind, body, and soul
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Book your personalized skincare consultation today and discover the Skin by Emely difference.
            </p>
            <Button size="lg" className="text-lg px-10" asChild>
              <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Your Appointment Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
