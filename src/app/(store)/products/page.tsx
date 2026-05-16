'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(products.map((p) => p.category)))];
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-12">
      <div className="container mx-auto">
        <h1 className="border-primary mb-4 border-l-4 pl-4 text-3xl font-bold text-stone-800">Complete Catalog</h1>
        <p className="mb-8 max-w-3xl text-base text-stone-600">
          Browse our extensive collection of authentic pooja items, books, and idols. Select any product to request a
          quote.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'hover:border-primary hover:text-primary border border-stone-200 bg-white text-stone-600 hover:shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative w-full overflow-hidden bg-white pt-[100%]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="absolute inset-0 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col border-t border-stone-100 p-5">
                <span className="mb-2 text-[11px] font-semibold tracking-wider text-stone-500 uppercase">
                  {product.category}
                </span>
                <h3 className="group-hover:text-primary mb-4 flex-grow text-base leading-snug font-semibold text-stone-800 transition-colors">
                  {product.name}
                </h3>
                <div className="mt-auto">
                  <span className="bg-primary hover:bg-primary-dark inline-flex w-full items-center justify-center rounded px-4 py-2 text-sm font-semibold text-white transition-all">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
