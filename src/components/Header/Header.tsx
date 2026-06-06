'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      {/* Top Utility Bar */}
      <div className="relative z-50 border-b border-stone-200 bg-white py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            {/* Mobile Menu Button */}
            <button
              className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block h-0.5 w-6 bg-[#081C15] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-[#081C15] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-[#081C15] transition-transform duration-300 ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              ></span>
            </button>

            {/* Logo */}
            <Link href="/" className="flex flex-col items-start leading-none">
              <span className="font-display text-xl font-extrabold tracking-widest text-[#081C15] uppercase md:text-2xl">
                E.V. Brassware
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">Metal Work</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mx-8 hidden max-w-xl flex-1 md:flex">
            <div className="flex w-full overflow-hidden rounded border border-stone-300 shadow-sm transition-colors focus-within:border-[#D4AF37]">
              <input
                type="text"
                placeholder="Search brass lamps, vessels, diyas..."
                className="w-full px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-[#1B4332] px-6 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#081C15]">
                Search
              </button>
            </div>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-4 text-sm font-bold tracking-wider text-stone-600 uppercase md:gap-6">
            <a href="#contact" className="hidden transition-colors hover:text-[#D4AF37] lg:block">
              Track Quote
            </a>
            <Link href="/admin/login" className="hidden transition-colors hover:text-[#D4AF37] sm:block">
              Partner Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - Deep Green Base */}
      <div className="relative z-40 hidden border-b-2 border-[#D4AF37] bg-[#1B4332] text-white md:block">
        <div className="container mx-auto">
          <nav className="flex scrollbar-none overflow-x-auto">
            <ul className="flex list-none items-center py-3 whitespace-nowrap">
              <li>
                <Link
                  href="#kuthu-vilakku"
                  className="rounded px-4 py-2 text-sm font-semibold transition-colors hover:text-[#D4AF37]"
                >
                  Traditional Kuthu Vilakku
                </Link>
              </li>
              <li>
                <Link
                  href="#silver-finish"
                  className="rounded px-4 py-2 text-sm font-semibold transition-colors hover:text-[#D4AF37]"
                >
                  Silver-Finish Lamps
                </Link>
              </li>
              <li>
                <Link
                  href="#diyas"
                  className="rounded px-4 py-2 text-sm font-semibold transition-colors hover:text-[#D4AF37]"
                >
                  Designer Diyas
                </Link>
              </li>
              <li>
                <Link
                  href="#vessels"
                  className="rounded px-4 py-2 text-sm font-semibold transition-colors hover:text-[#D4AF37]"
                >
                  Sacred Ritual Vessels
                </Link>
              </li>
              <li className="ml-auto">
                <a
                  href="#contact"
                  className="ml-4 rounded bg-[#D4AF37] px-5 py-1.5 text-sm font-bold tracking-wide text-[#081C15] uppercase transition-colors hover:bg-white hover:text-[#1B4332]"
                >
                  Bulk Orders
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 z-50 flex h-full w-[280px] transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 p-4">
          <span className="font-display text-xl font-extrabold tracking-widest text-[#081C15] uppercase">
            E.V. Brassware
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-stone-500 hover:text-[#D4AF37] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="flex list-none flex-col">
            <li>
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-stone-50 px-6 py-4 font-bold tracking-wide text-[#081C15] uppercase transition-colors hover:text-[#D4AF37]"
              >
                Full Catalog
              </Link>
            </li>
            <li>
              <Link
                href="#kuthu-vilakku"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-stone-50 px-6 py-4 font-bold tracking-wide text-[#081C15] uppercase transition-colors hover:text-[#D4AF37]"
              >
                Kuthu Vilakku
              </Link>
            </li>
            <li>
              <Link
                href="#diyas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-stone-50 px-6 py-4 font-bold tracking-wide text-[#081C15] uppercase transition-colors hover:text-[#D4AF37]"
              >
                Designer Diyas
              </Link>
            </li>
            <li>
              <Link
                href="#vessels"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-stone-50 px-6 py-4 font-bold tracking-wide text-[#081C15] uppercase transition-colors hover:text-[#D4AF37]"
              >
                Sacred Vessels
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto border-t border-stone-200 bg-[#F9F9F6] p-6">
          <Link
            href="/admin/login"
            className="mb-4 flex items-center gap-3 font-bold tracking-wide text-[#081C15] uppercase hover:text-[#D4AF37]"
          >
            Partner Login
          </Link>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full rounded bg-[#1B4332] px-4 py-3 text-center text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#081C15]"
          >
            Request Quote
          </a>
        </div>
      </div>
    </header>
  );
}
