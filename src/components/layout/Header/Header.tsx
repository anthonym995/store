'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full shadow-sm">
      {/* Tier 1: White Background, Centered Logo */}
      <div className="bg-cream px-4 py-3 md:px-8">
        <div className="container mx-auto grid grid-cols-3 items-center">
          {/* Left: Mobile Toggle & Search */}
          <div className="flex items-center gap-4">
            <button
              className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`bg-navy block h-0.5 w-6 transition-transform ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
              ></span>
              <span
                className={`bg-navy block h-0.5 w-6 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`bg-navy block h-0.5 w-6 transition-transform ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              ></span>
            </button>
            <div className="text-navy hidden items-center gap-2 text-sm font-medium tracking-wide lg:flex">
              <svg className="text-gold h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link href="/" className="relative flex items-center justify-center">
              <Image
                width={70}
                height={70}
                src="/logo.png"
                alt="E.V. Brassware Logo"
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right: Partner Login & Utilities */}
          <div className="text-navy flex items-center justify-end gap-6">
            <Link
              href="/about"
              className="hover:text-gold hidden text-sm font-bold tracking-widest uppercase transition-colors md:block"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gold hidden text-sm font-bold tracking-widest uppercase transition-colors md:block"
            >
              Contact
            </Link>
            <a
              href="/contact"
              className="bg-maroon hover:bg-brand-red-dark hidden items-center justify-center rounded-sm px-6 py-2 text-xs font-bold tracking-widest text-white uppercase shadow-sm transition-all hover:shadow-md sm:flex"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2: Cream Navigation Bar */}
      <div className="hidden border-b border-stone-200 bg-[#f5e8cc] lg:block">
        <div className="container mx-auto">
          <nav className="flex justify-center">
            <ul className="text-navy flex list-none items-center gap-12 py-3.5 text-xs font-bold tracking-widest uppercase">
              <li>
                <Link href="/products?category=Kuthu+Vilakku" className="hover:text-gold transition-colors">
                  Kuthu Vilakku
                </Link>
              </li>
              <li>
                <Link href="/products?category=Diya" className="hover:text-gold transition-colors">
                  Diyas
                </Link>
              </li>
              <li>
                <Link href="/products?category=Vessel" className="hover:text-gold transition-colors">
                  Sacred Vessels
                </Link>
              </li>
              <li>
                <Link href="/products?category=Designer" className="hover:text-gold transition-colors">
                  Designer Items
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-maroon hover:text-gold transition-colors">
                  All Collections
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
