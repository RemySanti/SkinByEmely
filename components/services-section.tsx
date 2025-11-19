const services = [
  {
    id: 1,
    name: "New Client Customized Facial",
    description: "Personalized 60-minute facial tailored to your unique skin type and concerns.",
    price: "$75",
    icon: "✨",
    bookingUrl: "https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so",
  },
  {
    id: 2,
    name: "Skincare Consultation",
    description: "Expert analysis of your skin and personalized product recommendations.",
    icon: "💎",
    bookingUrl: "https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so",
  },
  {
    id: 3,
    name: "Facial Treatments",
    description: "Advanced treatments including chemical peels and hydrating facials.",
    icon: "🧖",
    bookingUrl: "https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so",
  },
  {
    id: 4,
    name: "Product Selection",
    description: "Browse our curated collection of premium natural skincare products.",
    icon: "🌿",
  },
  {
    id: 5,
    name: "Wellness Rituals",
    description: "Holistic skincare routines combining ancient techniques with modern science.",
    icon: "☯️",
    bookingUrl: "https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so",
  },
  {
    id: 6,
    name: "Gift Services",
    description: "Gift certificates and packages perfect for any skincare lover.",
    icon: "💝",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Personalized skincare solutions and premium facial treatments designed specifically for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow hover:translate-y-[-4px] duration-300 border border-border/50"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                {service.name}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
              {service.price && (
                <p className="text-primary font-serif font-bold text-lg mt-4">
                  {service.price}
                </p>
              )}
              {service.bookingUrl && (
                <a
                  href={service.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm"
                >
                  Book Now
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
