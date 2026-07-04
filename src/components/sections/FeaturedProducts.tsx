'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useProducts } from '@/features/products/useProducts';
import { ProductSkeleton } from '@/components/ui/ProductSkeleton';

// Tiny warm-cream pixel — gives Next.js something to blur-up from
const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

export default function FeaturedProducts() {
  const { data: products = [], isLoading } = useProducts();

  const featured = products.slice(0, 4);

  return (
    <section id="products" className="bg-cream relative pb-16">
      {/* 1. Banner Section (Full Width) */}
      <div className="flex w-full bg-[#0b0605]">
        {/* CHANGED: Height is now exactly 250px */}
        <div className="relative flex h-[250px] w-full overflow-hidden">
          {/* Left Text Content */}
          <div className="z-10 flex w-1/2 flex-col justify-center pl-8 md:pl-16 lg:pl-16 xl:pl-32">
            <h2 className="font-display mb-2 text-3xl font-normal tracking-wider text-[#ebd39e] sm:text-4xl">
              THE LATEST IN LUXURY
            </h2>
            <p className="text-sm tracking-wide text-[#fdfbf7] sm:text-base">Elegance, Crafted for the Moment</p>
          </div>

          {/* Right Image */}
          <div className="relative h-full w-1/2">
            {/* Gradient mask */}
            <div className="absolute inset-0 z-10 w-24 bg-linear-to-r from-[#0b0605] to-transparent"></div>

            <Image
              src="/banners/banner.png"
              alt="The Latest in Luxury"
              fill
              className="object-cover object-right"
              priority
            />
          </div>
        </div>
      </div>

      {/* 2. Product Grid (Constrained to 1027px) */}
      <div className="relative z-20 mx-auto -mt-16 max-w-[1027px] px-4">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProductSkeleton count={4} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-t-xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-[#fdfbf7]">
                  <Image
                    src={product.image || '/images/WhatsApp Image 2026-04-25 at 12.59.04 PM.jpeg'}
                    alt={product.name}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="border-cream-dark flex grow flex-col items-center border-t p-6 text-center">
                  <h3 className="font-display text-navy group-hover:text-maroon mb-1 line-clamp-1 text-base font-bold tracking-wide uppercase">
                    {product.name}
                  </h3>
                  <p className="text-gold mb-4 text-xs font-semibold uppercase">{product.category.split('/')[0]}</p>
                  <div className="mt-auto">
                    <span className="text-navy text-sm font-bold">
                      {product.price > 0 ? `₹${product.price} / ${product.unit}` : 'Price on Request'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
