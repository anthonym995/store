'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterCategories = ['All', 'Kuthu Vilakku', 'Diya', 'Vessel', 'Designer'];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;

    return products.filter((p) => {
      const cat = p.category.toLowerCase();
      const name = p.name.toLowerCase();
      if (selectedCategory === 'Kuthu Vilakku') return cat.includes('vilakku') || name.includes('vilakku');
      if (selectedCategory === 'Diya')
        return cat.includes('diya') || (cat.includes('lamp') && !cat.includes('vilakku'));
      if (selectedCategory === 'Vessel')
        return cat.includes('vessel') || (cat.includes('kalash') && !name.includes('vilakku'));
      if (selectedCategory === 'Designer') return cat.includes('designer') || name.includes('pipe');
      return true;
    });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F9F9F6] py-12">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="font-display mb-4 text-4xl font-bold text-[#081C15]">Masterpiece Catalog</h1>
          <div className="mb-6 h-1 w-20 bg-[#D4AF37]"></div>
          <p className="max-w-3xl text-base text-stone-600">
            Browse our extensive collection of heavy-duty brass kuthu vilakku, designer diyas, and authentic ritual
            vessels. Select any artifact to view its specifications and request a custom B2B quote.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded px-6 py-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#1B4332] text-[#D4AF37] shadow-md'
                  : 'border border-stone-200 bg-white text-[#2D6A4F] hover:border-[#D4AF37] hover:text-[#081C15]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group flex flex-col border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-full overflow-hidden border-b border-stone-50 bg-white pt-[100%]">
                <Image
                  src={product.image || '/images/placeholder.jpg'}
                  alt={product.name}
                  fill
                  unoptimized
                  className="absolute inset-0 object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <span className="mb-2 truncate text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                  {product.category.split('/')[0]}
                </span>
                <h3 className="font-display mb-2 text-lg leading-tight font-bold text-[#081C15] transition-colors group-hover:text-[#2D6A4F]">
                  {product.name}
                </h3>
                <p className="mb-6 line-clamp-2 text-sm text-stone-500">{product.material}</p>
                <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-4">
                  <span className="text-sm font-bold text-[#081C15]">{product.price}</span>
                  <span className="border border-[#1B4332] px-3 py-1.5 text-xs font-bold tracking-wider text-[#1B4332] uppercase transition-colors group-hover:bg-[#1B4332] group-hover:text-white">
                    Details
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
