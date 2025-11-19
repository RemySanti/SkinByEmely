'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Green Tea Citrus Cleanser', price: '$29', description: '6.5oz purifying cleanser', image: '/green-tea-cleanser.jpg' },
  { id: 2, name: 'Ageless Hydrating Serum', price: '$40', description: '1oz anti-aging serum', image: '/hydrating-serum.jpg' },
  { id: 3, name: 'Cucumber Hydration Toner', price: '$24', description: '3.3oz refreshing toner', image: '/cucumber-toner.jpg' },
  { id: 4, name: 'Acai Berry Serum', price: '$37', description: 'Antioxidant-rich serum', image: '/acai-berry-serum.jpg' },
];

export function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background Elements for Glass Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 text-balance px-4">
            Featured Skincare Products
          </h2>
          <p className="text-base md:text-xl text-foreground/70 px-4">
            Natural, premium products formulated for your skin
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4 md:px-0">
          <div className="flex md:gap-6 overflow-hidden justify-center">
            {/* Mobile: Show only 1 card */}
            <div className="md:hidden w-full max-w-sm mx-auto fade-in">
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col border border-white/20 hover:bg-white/15">
                {/* Product Image */}
                <div className="relative w-full h-72 bg-muted overflow-hidden">
                  <img
                    src={products[startIndex].image || "/placeholder.svg"}
                    alt={products[startIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Product Info */}
                <div className="p-6 flex-grow flex flex-col justify-between backdrop-blur-sm">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      {products[startIndex].name}
                    </h3>
                    <p className="text-base text-foreground/70 mb-6">
                      {products[startIndex].description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-3xl font-serif font-bold text-primary">
                      {products[startIndex].price}
                    </p>
                    <button className="w-full backdrop-blur-xl bg-primary/90 hover:bg-primary text-white py-3.5 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2 border border-white/20 shadow-lg hover:shadow-xl active:scale-95">
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Show 3 cards */}
            <div className="hidden md:flex gap-6 w-full">
              {visibleProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-1 min-w-0 fade-in"
                >
                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col h-full border border-white/20 hover:bg-white/15 hover:scale-105 group">
                    {/* Product Image with gradient overlay */}
                    <div className="relative w-full h-64 bg-muted overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Glass gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Product Info with glass backdrop */}
                    <div className="p-6 flex-grow flex flex-col justify-between backdrop-blur-sm">
                      <div>
                        <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-foreground/60 mb-4">
                          {product.description}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-2xl font-serif font-bold text-primary">
                          {product.price}
                        </p>
                        <button className="w-full backdrop-blur-xl bg-primary/90 hover:bg-primary text-white py-2 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-white/20 shadow-lg hover:shadow-xl hover:scale-105">
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

          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 lg:translate-x-0 z-10 backdrop-blur-xl bg-primary/90 hover:bg-primary text-white p-3 md:p-3 rounded-full transition-all border border-white/20 shadow-xl hover:scale-110 active:scale-95"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-16 lg:translate-x-0 z-10 backdrop-blur-xl bg-primary/90 hover:bg-primary text-white p-3 md:p-3 rounded-full transition-all border border-white/20 shadow-xl hover:scale-110 active:scale-95"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-10 md:mt-12">
          <Link
            href="/shop"
            className="px-8 md:px-10 py-3 md:py-3 backdrop-blur-xl bg-secondary/80 hover:bg-secondary text-white font-serif font-semibold text-base md:text-base rounded-xl transition-all shadow-xl hover:shadow-2xl border border-white/20 hover:scale-105 active:scale-95"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
