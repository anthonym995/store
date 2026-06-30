'use client';

import Image from 'next/image';
import { useCategories } from '@/features/categories/useCategories';

export default function Categories() {
  const { data: categories = [], isLoading } = useCategories();

  return (
    <section id="categories" className="bg-cream py-16">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="font-display text-navy text-2xl font-bold tracking-wider uppercase lg:text-3xl">
            Our Collections
          </h2>
          <p className="text-navy mt-2 text-sm italic">A legacy of pure craftsmanship</p>
        </div>

        {isLoading ? (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border-cream-dark flex items-center gap-6 rounded-full border bg-white p-3 pr-8 shadow-sm"
              >
                <div className="relative h-16 w-16 shrink-0 animate-pulse rounded-full bg-gray-200 md:h-20 md:w-20"></div>
                <div className="flex w-full flex-col">
                  <div className="mb-2 h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-3 w-3/4 animate-pulse rounded bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group border-cream-dark flex cursor-pointer items-center gap-6 rounded-full border bg-white p-3 pr-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="border-gold/30 relative h-16 w-16 shrink-0 overflow-hidden rounded-full border md:h-20 md:w-20">
                  <Image
                    src={cat.image || '/images/WhatsApp Image 2026-04-25 at 12.59.04 PM.jpeg'}
                    alt={cat.title}
                    fill
                    unoptimized
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-navy text-sm font-bold tracking-wide uppercase md:text-base">{cat.title}</h3>
                  <p className="mt-0.5 text-xs text-stone-500 md:text-sm">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
