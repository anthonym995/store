import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);
  return (
    <section id="products" className="bg-[#F9F9F6] py-16">
      <div className="container mx-auto">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#081C15]">Featured Masterpieces</h2>
            <p className="mt-2 font-medium text-[#2D6A4F]">Finest craftsmanship from Nachiyar Kovil and beyond.</p>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-bold tracking-wider text-[#D4AF37] uppercase transition-colors hover:text-[#1B4332] md:inline-flex"
          >
            View Complete Catalog →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
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
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm font-bold text-[#081C15]">{product.price}</span>
                  <span className="border border-[#1B4332] px-3 py-1.5 text-xs font-bold tracking-wider text-[#1B4332] uppercase transition-colors group-hover:bg-[#1B4332] group-hover:text-white">
                    Inquire
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center justify-center border-2 border-[#1B4332] px-8 py-3 text-sm font-bold tracking-widest text-[#1B4332] uppercase transition-colors hover:bg-[#1B4332] hover:text-white"
          >
            View Complete Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
