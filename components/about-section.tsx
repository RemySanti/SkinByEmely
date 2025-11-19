'use client';

import { Sparkles, Award, Heart, Star } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans">Meet Your Esthetician</span>
            <Sparkles className="w-5 h-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground text-balance">
            About Emely
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Licensed Esthetician & Founder of Skin by Emely LLC
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Decorative corner accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-3xl opacity-40" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-secondary rounded-br-3xl opacity-40" />
            
            {/* Main image with gradient overlay */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
              <div 
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-muted/30"
                style={{
                  backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WZZSbYgEIMQ9CwddEbuBKqw0xygn7K.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-4 border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-sans">Licensed</div>
                  <div className="font-serif font-bold text-sm">Esthetician</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-border animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-sans">4+ Years</div>
                  <div className="font-serif font-bold text-sm">Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            {/* Highlighted stat cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-serif font-bold text-primary">4+</div>
                <div className="text-xs text-muted-foreground font-sans mt-1">Years Experience</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-serif font-bold text-secondary">5.0</div>
                <div className="text-xs text-muted-foreground font-sans mt-1">Star Rating</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-serif font-bold text-accent">135</div>
                <div className="text-xs text-muted-foreground font-sans mt-1">Happy Clients</div>
              </div>
            </div>

            {/* Biography paragraphs with enhanced styling */}
            <div className="space-y-6">
              <div className="relative pl-6 border-l-4 border-primary/30">
                <p className="text-lg text-foreground/90 leading-relaxed font-sans">
                  As a <span className="font-semibold text-primary">Licensed Esthetician</span> with four years of experience and the proud owner of <span className="font-semibold">Skin by Emely LLC</span> for the past two years in <span className="font-semibold text-secondary">Brandon, Florida</span>, I've dedicated my career to providing personalized and intentional skincare services. My mission is to create a safe and welcoming environment where every guest can not only achieve healthy skin but also find a sense of relaxation for their mind, body, and soul.
                </p>
              </div>

              <div className="bg-gradient-to-r from-muted/50 to-transparent rounded-2xl p-6 border-l-4 border-secondary">
                <p className="text-lg text-foreground/90 leading-relaxed font-sans">
                  At Skin by Emely, my approach to skincare goes beyond the surface. A few of my <span className="font-semibold text-accent">signature services</span> include custom facials, nano-needling, chemical peels, microdermabrasion, and dermaplaning. Each treatment is carefully tailored to meet the unique needs of my clients, ensuring they leave feeling revitalized and confident. I have built a reputation for my <span className="italic font-semibold">magic touch</span>, particularly known for the exceptional neck, shoulder, and scalp massages I integrate into my treatments.
                </p>
              </div>

              <div className="relative pl-6">
                <Heart className="absolute left-0 top-1 w-4 h-4 text-primary fill-primary" />
                <p className="text-lg text-foreground/90 leading-relaxed font-sans">
                  Skincare is not just about the products or techniques; it's about the <span className="font-semibold">relationship I build with my clients</span>. I take pride in the bonds I've formed and strive to ensure that everyone who steps into my space leaves feeling not only beautiful but also deeply cared for. If you're looking to treat yourself to an empowering skincare experience, I invite you to visit Skin by Emely LLC, where <span className="italic text-secondary font-semibold">magic happens for both your skin and your spirit</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl font-serif font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Sparkles className="w-5 h-5" />
                <span>Book Your Facial</span>
              </a>
              
              <a
                href="tel:9142997739"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-card text-foreground border-2 border-border rounded-xl font-serif font-semibold text-lg hover:bg-muted hover:border-primary transition-all duration-300"
              >
                <span>(914) 299-7739</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
