import { Navigation } from '@/components/navigation';
import { FooterCTA } from '@/components/footer-cta';
import { ShoppingBag, Sparkles, Heart, Leaf } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'cleansers', name: 'Cleansers', icon: Sparkles, count: 2 },
  { id: 'serums', name: 'Serums', icon: Heart, count: 2 },
  { id: 'toners', name: 'Toners', icon: Leaf, count: 1 },
];

const products = [
  { 
    id: 1, 
    name: 'Green Tea Citrus Cleanser', 
    price: '$29', 
    category: 'cleansers',
    description: '6.5oz purifying cleanser', 
    image: '/green-tea-cleanser.jpg',
    benefits: ['Deep cleansing', 'Antioxidant-rich', 'Refreshing citrus'],
  },
  { 
    id: 2, 
    name: 'Ageless Hydrating Serum', 
    price: '$40', 
    category: 'serums',
    description: '1oz anti-aging serum', 
    image: '/hydrating-serum.jpg',
    benefits: ['Anti-aging', 'Deep hydration', 'Plumping effect'],
  },
  { 
    id: 3, 
    name: 'Cucumber Hydration Toner', 
    price: '$24', 
    category: 'toners',
    description: '3.3oz refreshing toner', 
    image: '/cucumber-toner.jpg',
    benefits: ['Balancing pH', 'Cooling effect', 'Hydrating'],
  },
  { 
    id: 4, 
    name: 'Acai Berry Serum', 
    price: '$37', 
    category: 'serums',
    description: 'Antioxidant-rich serum', 
    image: '/acai-berry-serum.jpg',
    benefits: ['Antioxidant power', 'Brightening', 'Anti-aging'],
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <Navigation />
      
      {/* Hero Section with Glassmorphic Design */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-balance">
            Skincare Collection
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Professional-grade products curated for Brandon, Tampa, and surrounding areas
          </p>
        </div>
      </section>

      {/* Categories Section - Glassmorphic Cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`#${category.id}`}
                className="group"
              >
                {/* Glassmorphic Category Card */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {category.count} {category.count === 1 ? 'Product' : 'Products'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Products Grid - Glassmorphic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                id={product.category}
                className="group"
              >
                {/* Glassmorphic Product Card */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col h-full">
                  {/* Product Image with Glass Overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Glass overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-grow flex flex-col backdrop-blur-sm">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-1 mb-4 flex-grow">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-foreground/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <p className="text-2xl font-serif font-bold text-primary">
                        {product.price}
                      </p>
                      
                      {/* Glassmorphic Button */}
                      <button className="w-full backdrop-blur-xl bg-primary/90 hover:bg-primary text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-white/20 shadow-lg hover:shadow-xl hover:scale-105">
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
}
