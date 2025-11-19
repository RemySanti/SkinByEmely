export function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Skin by Emely LLC",
    "image": "https://skinbyemely.com/logo.png",
    "description": "Professional facial spa and skincare services in Brandon, FL. Licensed esthetician offering custom facials, chemical peels, dermaplaning, microdermabrasion, and advanced skincare treatments.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1941 W Lumsden Rd, Suite 111",
      "addressLocality": "Brandon",
      "addressRegion": "FL",
      "postalCode": "33511",
      "addressCountry": "US"
    },
    "telephone": "(914) 299-7739",
    "url": "https://skinbyemely.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "135"
    },
    "priceRange": "$$",
    "openingHours": [
      "Mo closed",
      "Tu 11:00-16:00",
      "We 10:30-20:00",
      "Th 10:30-20:00",
      "Fr 10:00-20:00",
      "Sa 09:00-15:00",
      "Su 09:00-15:00"
    ],
    "areaServed": ["Brandon", "Tampa", "Riverview", "Valrico", "Seffner", "Florida"],
    "sameAs": [
      "https://www.instagram.com/skinbyemely/",
      "https://www.facebook.com/skinbyemely/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

export function FacialServiceSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Facials in Brandon, FL",
    "description": "Custom facials tailored to your skin type. Options include hydrating facials, anti-aging treatments, acne facials, and specialty facials.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Skin by Emely LLC",
      "telephone": "(914) 299-7739",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1941 W Lumsden Rd, Suite 111",
        "addressLocality": "Brandon",
        "addressRegion": "FL",
        "postalCode": "33511"
      }
    },
    "areaServed": ["Brandon", "Tampa", "Riverview", "Valrico", "Seffner"],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
