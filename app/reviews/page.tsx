import { Navigation } from '@/components/navigation';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FooterCTA } from '@/components/footer-cta';
import { Star, Award, TrendingUp, Users, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Client Reviews - 5.0 Stars | Skin by Emely LLC Brandon FL',
  description: 'Read 135+ five-star reviews from satisfied clients. Discover why Skin by Emely is rated the best facial spa in Brandon, Florida for custom facials and skincare treatments.',
};

export default function ReviewsPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-accent/5 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-accent blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-sans">Client Testimonials</span>
            <Sparkles className="w-6 h-6 text-accent" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 text-balance">
            What Our Clients Say
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Real experiences from real clients who've discovered the magic of personalized skincare at Skin by Emely LLC in Brandon, Florida.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Star className="w-8 h-8 text-accent mx-auto mb-3 fill-accent" />
              <div className="text-3xl font-serif font-bold text-foreground">5.0</div>
              <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-serif font-bold text-foreground">135+</div>
              <div className="text-sm text-muted-foreground mt-1">Total Reviews</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-serif font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-serif font-bold text-foreground">4+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Love Us */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
            Why Clients Choose Skin by Emely
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Expert Technique</h3>
              <p className="text-muted-foreground">
                Licensed esthetician with 4+ years of specialized training in advanced facial treatments
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Relaxing Experience</h3>
              <p className="text-muted-foreground">
                Signature neck, shoulder, and scalp massages that elevate every treatment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">Personalized Care</h3>
              <p className="text-muted-foreground">
                Custom treatments tailored to your unique skin type and individual concerns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 135+ satisfied clients who trust Skin by Emely for their skincare needs in Brandon, Florida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl font-serif font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Book Your Facial Today
            </a>
            <a
              href="tel:9142997739"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-card text-foreground border-2 border-border rounded-xl font-serif font-semibold text-lg hover:bg-muted hover:border-primary transition-all duration-300"
            >
              Call (914) 299-7739
            </a>
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
