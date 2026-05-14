import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  // Take the first 4 products to feature
  const featured = products.slice(0, 4);
  return (
    <section id="products" className="bg-[#F9F9F9] py-16">
      <div className="container mx-auto">
        <h2 className="border-primary mb-10 border-l-4 pl-4 text-3xl font-bold text-stone-800">Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
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
                    Request Quote
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="border-primary text-primary hover:bg-primary inline-flex items-center justify-center rounded border px-8 py-2.5 font-semibold transition-all hover:text-white"
          >
            View Complete Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
