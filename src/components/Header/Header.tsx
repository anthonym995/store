"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top Utility Bar - White */}
      <div className="bg-white border-b border-stone-200 py-3 relative z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            {/* Hamburger Icon for Mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>

            {/* Logo */}
            <Link href="/" className="flex flex-col items-start leading-none">
              <span className="font-display text-2xl md:text-3xl font-extrabold text-primary tracking-wide">GIRI</span>
            </Link>
          </div>

          {/* Search Bar Placeholder */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="flex w-full border-2 border-primary rounded-md overflow-hidden">
              <input type="text" placeholder="Search for products, categories..." className="w-full px-4 py-2 focus:outline-none" />
              <button className="bg-primary text-white px-6 font-semibold hover:bg-primary-dark transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-4 md:gap-6 text-sm font-medium text-stone-600">
            <a href="#track" className="hidden lg:block hover:text-primary transition-colors">🚚 Track My Order</a>
            <a href="#login" className="hover:text-primary transition-colors hidden sm:block">Login</a>
            <a href="#cart" className="hover:text-primary transition-colors font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <span className="hidden sm:inline">Cart</span> (0)
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Dark Teal (Desktop Only) */}
      <div className="bg-primary text-white hidden md:block relative z-40">
        <div className="container mx-auto">
          <nav className="flex overflow-x-auto hide-scrollbar scroll">
            <ul className="flex items-center whitespace-nowrap py-3 list-none hide-scrollbar">
              <li><Link href="#books" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">Spiritual Books</Link></li>
              <li><Link href="#pooja" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">Pooja & Rituals</Link></li>
              <li><Link href="#idols" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">Idols & Dolls</Link></li>
              <li><Link href="#gifting" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">Divine Gifts</Link></li>
              <li><Link href="#jewellery" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">Temple Jewellery</Link></li>
              <li><Link href="#clothing" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">Ethnic Wear</Link></li>
              <li className="ml-auto">
                <a href="#contact" className="px-4 py-1.5 border border-white rounded hover:bg-white hover:text-primary transition-colors text-sm font-semibold ml-4">
                  Request Quote
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-stone-200">
          <span className="font-display text-2xl font-extrabold text-primary tracking-wide">GIRI</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-stone-500 hover:text-primary focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 border-b border-stone-100">
          <div className="flex w-full border border-stone-300 rounded overflow-hidden">
            <input type="text" placeholder="Search..." className="w-full px-3 py-2 focus:outline-none text-sm" />
            <button className="bg-primary text-white px-4 font-semibold hover:bg-primary-dark transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="flex flex-col list-none">
            <li>
              <Link href="#books" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-stone-800 hover:bg-stone-50 hover:text-primary transition-colors font-medium border-b border-stone-50">
                Spiritual Books
              </Link>
            </li>
            <li>
              <Link href="#pooja" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-stone-800 hover:bg-stone-50 hover:text-primary transition-colors font-medium border-b border-stone-50">
                Pooja & Rituals
              </Link>
            </li>
            <li>
              <Link href="#idols" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-stone-800 hover:bg-stone-50 hover:text-primary transition-colors font-medium border-b border-stone-50">
                Idols & Dolls
              </Link>
            </li>
            <li>
              <Link href="#gifting" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-stone-800 hover:bg-stone-50 hover:text-primary transition-colors font-medium border-b border-stone-50">
                Divine Gifts
              </Link>
            </li>
            <li>
              <Link href="#jewellery" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-stone-800 hover:bg-stone-50 hover:text-primary transition-colors font-medium border-b border-stone-50">
                Temple Jewellery
              </Link>
            </li>
            <li>
              <Link href="#clothing" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-stone-800 hover:bg-stone-50 hover:text-primary transition-colors font-medium border-b border-stone-50">
                Ethnic Wear
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-6 mt-auto border-t border-stone-200">
          <a href="#login" className="flex items-center gap-3 text-stone-800 font-medium mb-4 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            Login / Register
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors font-semibold">
            Request Quote
          </a>
        </div>
      </div>
    </header>
  );
}
