export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#f5e6d3] to-[#e8d5c4] overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=1080&width=1920&query=luxury-skincare-spa-facial-treatment)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
            Skin by Emely
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            Premium Skincare & Customized Facials
          </p>
          <p className="text-lg text-foreground/70 max-w-lg mx-auto">
            Experience personalized skincare treatments and premium natural skincare products designed to reveal your best skin.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-serif font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Book Facial
            </a>
            <button className="px-8 py-3 bg-white text-foreground border-2 border-primary rounded-lg font-serif font-semibold hover:bg-primary/5 transition-colors">
              Shop Products
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
