'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const serviceLinks = [
    { label: 'All Services', href: '/services' },
    { label: 'Custom Facials', href: '/services/facials-brandon-fl' },
    { label: 'Chemical Peels', href: '/services/chemical-peels-brandon-fl' },
    { label: 'Dermaplaning', href: '/services/dermaplaning-brandon-fl' },
    { label: 'Microdermabrasion', href: '/services/microdermabrasion-brandon-fl' },
    { label: 'Back Facials', href: '/services/back-facial-brandon-fl' },
    { label: 'Men\'s Facials', href: '/services/mens-facials-brandon-fl' },
    { label: 'Acne Treatments', href: '/services/acne-facials-brandon-fl' },
  ];

  const shopCategories = [
    { label: 'All Products', href: '/shop' },
    { label: 'Cleansers', href: '/shop#cleansers' },
    { label: 'Serums', href: '/shop#serums' },
    { label: 'Toners', href: '/shop#toners' },
  ];

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleShopEnter = () => {
    if (shopTimeoutRef.current) {
      clearTimeout(shopTimeoutRef.current);
    }
    setShopOpen(true);
  };

  const handleShopLeave = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setShopOpen(false);
    }, 200);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (shopTimeoutRef.current) clearTimeout(shopTimeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10 shadow-lg">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Menu + Nav Items */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-all backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-foreground hover:text-primary transition-all hover:scale-105"
              >
                {item.label}
              </Link>
            ))}
            
            <div 
              className="relative"
              onMouseEnter={handleShopEnter}
              onMouseLeave={handleShopLeave}
            >
              <button className="text-sm font-semibold text-foreground hover:text-primary transition-all flex items-center gap-1 hover:scale-105">
                <ShoppingBag className="w-4 h-4" />
                Shop
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {shopOpen && (
                <div className="absolute top-full left-0 pt-2 -mt-1">
                  <div className="w-48 backdrop-blur-xl bg-background/95 border border-white/20 rounded-xl shadow-2xl py-2 z-50">
                    {shopCategories.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                        onClick={() => setShopOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className="text-sm font-semibold text-foreground hover:text-primary transition-all flex items-center gap-1 hover:scale-105">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 -mt-1">
                  <div className="w-56 backdrop-blur-xl bg-background/95 border border-white/20 rounded-xl shadow-2xl py-2 z-50">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                        onClick={() => setServicesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Center: Logo - Enhanced styling */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex flex-col items-center group">
            <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Skin by Emely
            </h1>
            <p className="text-xs text-muted-foreground">Brandon, Florida</p>
          </Link>
        </div>

        {/* Right: Book + Call buttons - Enhanced glassmorphic styling */}
        <div className="flex items-center gap-3">
          <a
            href="https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden sm:inline-flex backdrop-blur-xl bg-primary/90 hover:bg-primary text-white font-semibold px-6 border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Book Now
            </Button>
          </a>

          <a href="tel:(914)299-7739">
            <Button
              variant="outline"
              size="icon"
              className="backdrop-blur-xl border-primary/30 text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all shadow-md"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </nav>

      {/* Mobile menu - Enhanced glassmorphic styling */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 backdrop-blur-xl bg-background/95">
          <div className="flex flex-col gap-2 px-6 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="border-t border-white/10 pt-2 mt-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Shop</p>
              {shopCategories.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 pl-3 block"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-white/10 pt-2 mt-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Services</p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 pl-3 block"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href="https://book.squareup.com/appointments/f7dcst2ljp85dq/location/LMVSQK9C6PR4T/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button className="w-full backdrop-blur-xl bg-primary/90 hover:bg-primary text-white font-semibold border border-white/20 shadow-lg">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
