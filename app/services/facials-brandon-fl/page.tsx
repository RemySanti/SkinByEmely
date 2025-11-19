'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, MapPin, Phone, Check, Star, Clock, Heart, Sparkles, Award } from 'lucide-react';
import Link from 'next/link';

const SQUARE_BOOKING_URL = 'https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so';

export default function FacialsBrandonPage() {
  return (
    <>
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-primary/15 via-secondary/10 to-background py-24 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <p className="text-sm font-semibold text-primary">5.0 Rating • 135 Reviews</p>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Best Facials in
            <span className="block text-primary mt-2">Brandon, FL</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance max-w-3xl leading-relaxed">
            Personalized custom facials designed to hydrate, rejuvenate, and bring out your most radiant skin at Skin by Emely LLC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Your Facial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <a href="tel:(914)299-7739" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (914) 299-7739
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>1941 W Lumsden Rd, Suite 111, Brandon, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Open Wed-Sat • Walk-ins Welcome</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Serving Brandon, Tampa, Riverview, Valrico, Seffner & Surrounding Areas
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary mb-1">4+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-1">135</p>
            <p className="text-sm text-muted-foreground">5-Star Reviews</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-1">6</p>
            <p className="text-sm text-muted-foreground">Facial Types</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-1">100%</p>
            <p className="text-sm text-muted-foreground">Personalized</p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Custom Facial Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every facial is tailored to your unique skin type, concerns, and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { name: '60-Minute Customized Facial', price: '$90', duration: '60 min', description: 'Full skincare treatment tailored to your skin type with professional extractions, massage, and mask', highlight: true },
              { name: '90-Minute Customized Facial', price: '$125', duration: '90 min', description: 'Extended treatment with premium add-ons including extended massage and specialty treatments' },
              { name: 'New Client Facial', price: '$75', duration: '60 min', description: 'Perfect introduction to our skincare expertise with consultation and personalized treatment plan' },
              { name: 'Teen Facial', price: '$60', duration: '45 min', description: 'Specialized treatment for young, active skin focusing on breakouts and oil control' },
              { name: 'Just The Essentials Facial', price: '$60', duration: '45 min', description: 'Classic facial focusing on cleanse, nourish, and hydrate for busy schedules' },
              { name: 'Back Facial', price: '$110', duration: '60 min', description: 'Deep cleanse and rejuvenation for hard-to-reach back skin with extractions and treatment' },
            ].map((service, idx) => (
              <Card key={idx} className={`p-6 ${service.highlight ? 'border-2 border-primary bg-primary/5' : ''} hover:shadow-xl transition-all`}>
                {service.highlight && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full mb-3">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">MOST POPULAR</span>
                  </div>
                )}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-bold text-foreground pr-2">{service.name}</h3>
                  <span className="text-2xl font-bold text-primary whitespace-nowrap">{service.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <Button size="sm" asChild>
                    <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                What's Included in Every Facial
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Skin by Emely, every facial is a complete skincare experience designed to transform your skin and rejuvenate your spirit.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Heart, text: 'Professional skin analysis and consultation' },
                  { icon: Sparkles, text: 'Gentle cleanse with premium products' },
                  { icon: Check, text: 'Customized treatment for your skin type' },
                  { icon: Check, text: 'Expert extractions (when needed)' },
                  { icon: Heart, text: 'Hydrating or treatment mask' },
                  { icon: Sparkles, text: 'Signature neck, shoulder & scalp massage' },
                  { icon: Check, text: 'SPF and moisturizer application' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground pt-1">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <img
                  src="/relaxing-facial-treatment-spa-environment.jpg"
                  alt="Facial Treatment"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background border-2 border-primary rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="text-sm text-muted-foreground mb-2">Signature Experience</p>
                <p className="font-serif text-lg font-bold text-foreground">
                  Known for exceptional neck, shoulder, and scalp massages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Skin by Emely for Your Brandon Facial?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Licensed esthetician Emely brings four years of professional expertise and two years of business ownership to every treatment.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Skin by Emely LLC, facials are more than a service—they're an experience. Licensed esthetician Emely brings four years of professional expertise and two years of business ownership to every treatment. She's known throughout Brandon, Tampa, Riverview, Valrico, and Seffner for her magic touch, especially her signature neck, shoulder, and scalp massages that elevate the entire skincare experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every facial is personalized, every product is premium, and every client leaves feeling revitalized and deeply cared for. Whether you're dealing with acne, dryness, aging concerns, or simply want to maintain healthy, glowing skin, Emely creates a customized treatment plan just for you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">
            Facial FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How often should I get a facial?',
                a: 'For best results, monthly facials are recommended. However, your skin type and concerns will determine the ideal frequency. Emely will recommend a personalized schedule during your consultation.',
              },
              {
                q: 'Are your facials suitable for sensitive skin?',
                a: 'Absolutely. Every facial is customized to your skin type, including sensitive skin. Let Emely know about any sensitivities during your consultation, and she\'ll select the gentlest, most appropriate products.',
              },
              {
                q: 'How long is a facial appointment?',
                a: 'Facials range from 45 minutes (Just the Essentials, Teen Facial) to 90 minutes (extended customized). Most full facials are 60 minutes.',
              },
              {
                q: 'Can I add services to my facial?',
                a: 'Yes! Customize your facial with premium add-ons like dermaplaning ($25), oxygen infusion ($10), gua sha ($15), hydrojelly mask ($20), or extended scalp massage ($20).',
              },
              {
                q: 'What should I expect after my first facial?',
                a: 'You may experience slight redness immediately after (which typically fades within hours), improved hydration, smoother texture, and a healthy glow. Results improve with regular treatments.',
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/15 to-secondary/15">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready for Your Best Skin?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book your personalized facial today and discover why Skin by Emely is Brandon's choice for professional skincare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-10" asChild>
              <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book Your Facial Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10">
              <a href="tel:(914)299-7739">Call (914) 299-7739</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Serving Brandon, Tampa, Riverview, Valrico, Seffner & Surrounding Areas
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            Explore Other Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Chemical Peels', href: '/services/chemical-peels-brandon-fl' },
              { name: 'Dermaplaning', href: '/services/dermaplaning-brandon-fl' },
              { name: 'Acne Facials', href: '/services/acne-facials-brandon-fl' },
              { name: 'Microdermabrasion', href: '/services/microdermabrasion-brandon-fl' },
              { name: 'Back Facials', href: '/services/back-facial-brandon-fl' },
              { name: 'Men\'s Facials', href: '/services/mens-facials-brandon-fl' },
              { name: 'View All Services', href: '/services' },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="text-center p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <span className="text-sm font-medium text-foreground hover:text-primary">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
