import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);
  return (
    <section id="products" className="relative bg-[#fcf9ef]">
      {/* Deep Brown Top Half Background */}
      <div className="absolute top-0 left-0 z-0 h-[40%] w-full bg-[#2a1610]"></div>

      <div className="relative z-10 container mx-auto py-16">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-widest text-[#d4af37] uppercase">
            Featured Artifacts
          </h2>
          <p className="mt-2 text-sm text-[#f0ead6]">Elegance Crafted for the Divine</p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group flex flex-col bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full overflow-hidden bg-[#fdfbf7] pt-[120%]">
                <Image
                  src={product.image || '/images/WhatsApp Image 2026-04-25 at 12.59.04 PM.jpeg'}
                  alt={product.name}
                  fill
                  unoptimized
                  className="absolute inset-0 object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-grow flex-col items-center border-t border-[#f0ead6] p-6 text-center">
                <h3 className="font-display mb-1 line-clamp-1 text-base font-bold tracking-wide text-[#001524] uppercase group-hover:text-[#5a0b14]">
                  {product.name}
                </h3>
                <p className="mb-4 text-xs font-semibold text-[#d4af37] uppercase">{product.category.split('/')[0]}</p>
                <div className="mt-auto">
                  <span className="text-sm font-bold text-[#001524]">{product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
