import { Navigation } from '@/components/navigation';
import { AboutSection } from '@/components/about-section';
import { LocalBusinessSection } from '@/components/local-business-section';
import { FooterCTA } from '@/components/footer-cta';
import { Sparkles, Heart, Star, Award, Users, Clock } from 'lucide-react';

export const metadata = {
  title: 'About Emely - Licensed Esthetician | Skin by Emely LLC Brandon FL',
  description: 'Meet Emely, a Licensed Esthetician with 4+ years of experience offering personalized skincare services in Brandon, Florida. Expert in custom facials, chemical peels, and dermaplaning.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-sans">Licensed Esthetician</span>
            <Sparkles className="w-6 h-6 text-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 text-balance">
            Meet Emely
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Your trusted skincare expert in Brandon, Florida, dedicated to helping you achieve healthy, radiant skin through personalized treatments and exceptional care.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Licensed Professional</span>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="font-semibold text-foreground">4+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
              <Users className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">135+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Mission & Values Section */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Mission & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What drives our commitment to exceptional skincare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Personalized Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every treatment is customized to your unique skin type and concerns. No two facials are alike because no two clients are alike.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Holistic Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Skincare isn't just about products—it's about relaxation, self-care, and the connection between mind, body, and skin health.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                With continuous education and the highest professional standards, I ensure every client receives exceptional, results-driven treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Expertise */}
      <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized treatments designed for exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Custom Facials', desc: 'Tailored treatments for every skin type and concern' },
              { title: 'Nano-Needling', desc: 'Advanced collagen induction therapy for skin rejuvenation' },
              { title: 'Chemical Peels', desc: 'Professional-grade peels for texture and tone improvement' },
              { title: 'Microdermabrasion', desc: 'Deep exfoliation for smoother, brighter skin' },
              { title: 'Dermaplaning', desc: 'Gentle exfoliation removing dead skin and peach fuzz' },
              { title: 'Signature Massages', desc: 'Exceptional neck, shoulder, and scalp massage techniques' },
            ].map((service, index) => (
              <div
                key={service.title}
                className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <LocalBusinessSection />

      <FooterCTA />
    </>
  );
}
