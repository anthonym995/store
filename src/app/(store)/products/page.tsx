'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useProducts } from '@/features/products/useProducts';
import { useCategories } from '@/features/categories/useCategories';
import { ProductSkeleton } from '@/components/ui/ProductSkeleton';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const { data: activeProducts = [], isLoading: productsLoading } = useProducts();
  const { data: categories = [], isLoading: categoriesLoading } = useCategories();

  const filterCategories = useMemo(() => {
    return [{ title: 'All', slug: 'all' }, ...categories.map((c) => ({ title: c.title, slug: c.slug }))];
  }, [categories]);

  // This will re-run whenever the URL search parameters change (like clicking a Header link)
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && filterCategories.some((c) => c.slug === category)) {
      setSelectedCategory(category);
    } else if (!category) {
      // If no category in URL, default to All
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return activeProducts;
    return activeProducts.filter((p) => p.categorySlug === selectedCategory);
  }, [selectedCategory, activeProducts]);

  return (
    <div className="min-h-screen bg-[#fdfbf7] py-12">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-brand-red mb-4 text-4xl font-bold">Masterpiece Catalog</h1>
          <div className="bg-gold mb-6 h-1 w-20"></div>
          <p className="max-w-3xl text-base text-stone-600">
            Browse our extensive collection of heavy-duty brass kuthu vilakku, designer diyas, and authentic ritual
            vessels. Select any artifact to view its specifications and request a custom quote.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filterCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`rounded-sm px-6 py-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === category.slug
                  ? 'text-gold border-brand-red bg-brand-red border shadow-md'
                  : 'border-gold text-brand-red border bg-white hover:bg-[#fdf5e6]'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productsLoading ? (
            <ProductSkeleton count={8} />
          ) : (
            <>
              {filteredProducts.map((product) => (
                <Link
                  href={`/products/${product.slug}`}
                  key={product.id}
                  className="group border-gold/30 hover:border-gold flex flex-col items-center border bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  <div className="border-gold/20 relative aspect-square w-full shrink-0 overflow-hidden border-b bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="absolute inset-0 object-contain p-4 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex grow flex-col p-6">
                    <span className="text-gold mb-2 truncate text-xs font-bold tracking-widest uppercase">
                      {product.category.split('/')[0]}
                    </span>
                    <h3 className="font-display text-brand-red group-hover:text-brand-red-dark mb-2 text-lg leading-tight font-bold transition-colors">
                      {product.name}
                    </h3>
                    <p className="mb-6 line-clamp-2 text-sm text-stone-500">{product.material}</p>
                    <div className="border-gold/20 mt-auto flex items-center justify-between border-t pt-4">
                      <span className="text-brand-red-dark text-sm font-bold">
                        {product.price > 0 ? `₹${product.price} / ${product.unit}` : 'Price on Request'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-[#fdfbf7]">
          <p className="font-display text-brand-red animate-pulse text-xl tracking-widest">LOADING CATALOG...</p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
