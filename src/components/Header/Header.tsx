'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full shadow-sm">
      {/* Tier 1: White Background, Centered Logo */}
      <div className="bg-white px-4 py-3 md:px-8">
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
            <div className="text-navy hidden items-center gap-2 text-sm lg:flex">
              <svg className="text-gold h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="w-32 bg-transparent transition-all outline-none placeholder:text-stone-400 focus:w-48"
              />
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
              href="/admin/login"
              className="hover:text-gold hidden items-center gap-2 text-sm font-semibold transition-colors lg:flex"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              Partner Login
            </Link>
            <a
              href="#contact"
              className="hover:text-gold hidden items-center gap-2 text-sm font-semibold transition-colors sm:flex"
            >
              <span className="bg-maroon rounded-full px-4 py-1.5 text-xs tracking-wider text-white uppercase">
                Get Quote
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2: Cream Navigation Bar */}
      <div className="bg-cream hidden border-b border-stone-200 lg:block">
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
