import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  // Take the first 4 products to feature
  const featured = products.slice(0, 4);
  return (
    <section id="products" className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-stone-800 border-l-4 border-primary pl-4">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md border border-stone-200 transition-all duration-300 flex flex-col">
              <div className="relative w-full pt-[100%] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="absolute inset-0 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow border-t border-stone-100">
                <span className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider mb-2">{product.category}</span>
                <h3 className="text-base font-semibold mb-4 text-stone-800 leading-snug flex-grow group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="mt-auto">
                  <span className="w-full inline-flex items-center justify-center px-4 py-2 rounded font-semibold transition-all bg-primary hover:bg-primary-dark text-white text-sm">
                    Request Quote
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-2.5 rounded font-semibold transition-all border border-primary text-primary hover:bg-primary hover:text-white">
            View Complete Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
