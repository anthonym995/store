'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      {/* Top Utility Bar - White */}
      <div className="relative z-50 border-b border-stone-200 bg-white py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            {/* Hamburger Icon for Mobile */}
            <button
              className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`bg-primary block h-0.5 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
              ></span>
              <span
                className={`bg-primary block h-0.5 w-6 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`bg-primary block h-0.5 w-6 transition-transform duration-300 ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              ></span>
            </button>

            {/* Logo */}
            <Link href="/" className="flex flex-col items-start leading-none">
              <span className="font-display text-primary text-2xl font-extrabold tracking-wide md:text-3xl">GIRI</span>
            </Link>
          </div>

          {/* Search Bar Placeholder */}
          <div className="mx-8 hidden max-w-xl flex-1 md:flex">
            <div className="border-primary flex w-full overflow-hidden rounded-md border-2">
              <input
                type="text"
                placeholder="Search for products, categories..."
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary-dark px-6 font-semibold text-white transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-4 text-sm font-medium text-stone-600 md:gap-6">
            <a href="#track" className="hover:text-primary hidden transition-colors lg:block">
              🚚 Track My Order
            </a>
            <a href="#login" className="hover:text-primary hidden transition-colors sm:block">
              Login
            </a>
            <a href="#cart" className="hover:text-primary flex items-center gap-1 font-bold transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="hidden sm:inline">Cart</span> (0)
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Dark Teal (Desktop Only) */}
      <div className="bg-primary relative z-40 hidden text-white md:block">
        <div className="container mx-auto">
          <nav className="flex scrollbar-none overflow-x-auto">
            <ul className="flex list-none items-center py-3 whitespace-nowrap">
              <li>
                <Link
                  href="#books"
                  className="hover:bg-primary-dark rounded px-4 py-2 text-sm font-semibold transition-colors"
                >
                  Spiritual Books
                </Link>
              </li>
              <li>
                <Link
                  href="#pooja"
                  className="hover:bg-primary-dark rounded px-4 py-2 text-sm font-semibold transition-colors"
                >
                  Pooja & Rituals
                </Link>
              </li>
              <li>
                <Link
                  href="#idols"
                  className="hover:bg-primary-dark rounded px-4 py-2 text-sm font-semibold transition-colors"
                >
                  Idols & Dolls
                </Link>
              </li>
              <li>
                <Link
                  href="#gifting"
                  className="hover:bg-primary-dark rounded px-4 py-2 text-sm font-semibold transition-colors"
                >
                  Divine Gifts
                </Link>
              </li>
              <li>
                <Link
                  href="#jewellery"
                  className="hover:bg-primary-dark rounded px-4 py-2 text-sm font-semibold transition-colors"
                >
                  Temple Jewellery
                </Link>
              </li>
              <li>
                <Link
                  href="#clothing"
                  className="hover:bg-primary-dark rounded px-4 py-2 text-sm font-semibold transition-colors"
                >
                  Ethnic Wear
                </Link>
              </li>
              <li className="ml-auto">
                <a
                  href="#contact"
                  className="hover:text-primary ml-4 rounded border border-white px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-white"
                >
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
          <span className="font-display text-primary text-2xl font-extrabold tracking-wide">GIRI</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-primary p-2 text-stone-500 focus:outline-none"
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

        <div className="border-b border-stone-100 p-4">
          <div className="flex w-full overflow-hidden rounded border border-stone-300">
            <input type="text" placeholder="Search..." className="w-full px-3 py-2 text-sm focus:outline-none" />
            <button className="bg-primary hover:bg-primary-dark px-4 font-semibold text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="flex list-none flex-col">
            <li>
              <Link
                href="#books"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary block border-b border-stone-50 px-6 py-3 font-medium text-stone-800 transition-colors hover:bg-stone-50"
              >
                Spiritual Books
              </Link>
            </li>
            <li>
              <Link
                href="#pooja"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary block border-b border-stone-50 px-6 py-3 font-medium text-stone-800 transition-colors hover:bg-stone-50"
              >
                Pooja & Rituals
              </Link>
            </li>
            <li>
              <Link
                href="#idols"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary block border-b border-stone-50 px-6 py-3 font-medium text-stone-800 transition-colors hover:bg-stone-50"
              >
                Idols & Dolls
              </Link>
            </li>
            <li>
              <Link
                href="#gifting"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary block border-b border-stone-50 px-6 py-3 font-medium text-stone-800 transition-colors hover:bg-stone-50"
              >
                Divine Gifts
              </Link>
            </li>
            <li>
              <Link
                href="#jewellery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary block border-b border-stone-50 px-6 py-3 font-medium text-stone-800 transition-colors hover:bg-stone-50"
              >
                Temple Jewellery
              </Link>
            </li>
            <li>
              <Link
                href="#clothing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary block border-b border-stone-50 px-6 py-3 font-medium text-stone-800 transition-colors hover:bg-stone-50"
              >
                Ethnic Wear
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto border-t border-stone-200 p-6">
          <a href="#login" className="hover:text-primary mb-4 flex items-center gap-3 font-medium text-stone-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Login / Register
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-primary text-primary hover:bg-primary block w-full rounded border px-4 py-2 text-center font-semibold transition-colors hover:text-white"
          >
            Request Quote
          </a>
        </div>
      </div>
    </header>
  );
}
