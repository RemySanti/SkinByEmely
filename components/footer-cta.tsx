'use client';

import { Mail, MapPin, Phone, Instagram, Facebook, Flower2 } from 'lucide-react';

export function FooterCTA() {
  return (
    <footer className="bg-gradient-to-b from-secondary/15 to-primary/10 border-t-4 border-primary/30">
      {/* Main Footer CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <Flower2 className="w-8 h-8 text-accent opacity-60" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance leading-tight">
            Ready to Experience Luxury Facials in Brandon?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Book your customized facial with Emely today and discover the best skincare treatments in the Brandon area
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-serif font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book Facial Now
            </a>
            <a 
              href="tel:(914)299-7739"
              className="px-10 py-4 bg-secondary text-secondary-foreground rounded-full font-serif font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Call (914) 299-7739
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-primary/20"></div>

      {/* Footer Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h3 className="font-serif font-bold text-xl text-foreground">
                Contact
              </h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:(914)299-7739" className="text-foreground font-semibold hover:text-primary transition-colors text-sm">
                    (914) 299-7739
                  </a>
                  <p className="text-foreground/60 text-xs mt-1">Call for appointments</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold text-sm">1941 W Lumsden Rd</p>
                  <p className="text-foreground/60 text-xs">Suite 111, Brandon, FL 33511</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              <h3 className="font-serif font-bold text-xl text-foreground">
                Hours
              </h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/80">Wednesday - Thursday</span>
                <span className="text-primary font-semibold">10:30 AM - 8 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/80">Friday</span>
                <span className="text-primary font-semibold">10 AM - 8 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/80">Saturday - Sunday</span>
                <span className="text-primary font-semibold">9 AM - 3 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/80">Tuesday</span>
                <span className="text-primary font-semibold">11 AM - 4 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/80">Monday</span>
                <span className="text-destructive font-semibold">Closed</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-8 bg-secondary rounded-full"></div>
              <h3 className="font-serif font-bold text-xl text-foreground">
                Follow
              </h3>
            </div>
            <p className="text-foreground/70 text-sm mb-6">Connect with us on social media for skincare tips and updates</p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/skinbyemely/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/skinbyemely/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full transition-all hover:scale-110 duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@skinbyemely.com" 
                className="p-3 bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground rounded-full transition-all hover:scale-110 duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-8 px-4 border-t border-primary/20 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-foreground/60 text-xs leading-relaxed">
            © 2025 Skin by Emely LLC. All rights reserved. | Best Facials in Brandon, FL | Privacy Policy | Terms of Service
          </p>
        </div>
      </section>
    </footer>
  );
}
