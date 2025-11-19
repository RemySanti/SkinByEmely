const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "This was my first visit and it was amazing. I love how the atmosphere was so warm and inviting. Emely was very sweet. She took very good care of my face with every chosen product she used. I'm really glad I met her. Will be booking her again for other services.",
    author: "Pam Simmons",
    title: "Local Guide",
    date: "2 months ago",
    service: "Hydradermabrasion/HydraFacial",
  },
  {
    id: 2,
    rating: 5,
    text: "It was my first time getting a facial and it was a great experience. Emely shows up with great enthusiasm and energy. She is thorough and explains every step of the way. She is very knowledgeable and I felt comfortable with asking questions. 5/5 experience.",
    author: "Michelle Lopez",
    title: "First-time Client",
    date: "3 months ago",
    service: "Facial",
  },
  {
    id: 3,
    rating: 5,
    text: "I had my first facial with Skin by Emely in the Brandon area, and it was an amazing experience! Her space is super cute—small, chic, and beautifully decorated. The atmosphere was incredibly relaxing, with soft music and perfect lighting.",
    author: "Joan Ayes",
    title: "Local Guide",
    date: "9 months ago",
    service: "Facial",
  },
  {
    id: 4,
    rating: 5,
    text: "This was my first visit to Emely and it won't be my last! She was amazing from start to finish. The whole experience was very welcoming and relaxing. Emely took great care with my face and I left feeling rejuvenated.",
    author: "Frank Giovannetti",
    title: "New Review",
    date: "2 weeks ago",
    service: "Facial",
  },
  {
    id: 5,
    rating: 5,
    text: "As an esthetician, I can truly recognize great technique and care — and Emily has both! I always leave my appointments with my skin glowing and feeling so clean. She's amazing at clearing out my pores and making me feel totally relaxed. I really appreciate how skilled and attentive she is with every treatment.",
    author: "angela hendricks",
    title: "Professional Esthetician",
    date: "3 weeks ago",
    service: "Facial Treatment",
  },
  {
    id: 6,
    rating: 5,
    text: "A boutique spa offering European-style facials and massages with premium skincare products. Located in the heart of Brandon, FL, Skin by Emely provides a warm, inviting atmosphere and professional expertise that leaves clients feeling completely restored.",
    author: "Skin by Emely Community",
    title: "Verified Business",
    date: "Featured Review",
    service: "All Services",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Guest Testimonials
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-2xl">★</span>
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground">5.0 Rating</p>
            <p className="text-lg text-foreground/70">135 Google Reviews</p>
          </div>
          <p className="text-xl text-foreground/70">
            Discover why clients love our premium facial and spa services in Brandon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="fade-in bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/30 pt-4">
                <p className="font-serif font-bold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-foreground/60 mb-2">
                  {testimonial.title}
                </p>
                {testimonial.service && (
                  <p className="text-xs text-accent/70 font-medium">
                    {testimonial.service} • {testimonial.date}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-16">
          <p className="text-foreground/70 mb-4">
            Read all 135 reviews on Google Business Profile
          </p>
          <a
            href="https://www.google.com/search?q=Skin+by+Emely+Brandon+Florida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            View on Google
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
              <path d="M19 3v5h5v2h-7V3h2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
