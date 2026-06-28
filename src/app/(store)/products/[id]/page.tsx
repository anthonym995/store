import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#721c24] uppercase transition-colors hover:text-[#d4af37]"
          >
            &larr; Back to Catalog
          </Link>
        </div>

        <div className="border-gold/30 overflow-hidden border bg-white shadow-xl">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
            {/* Image Section */}
            <div className="relative flex min-h-[400px] w-full items-center justify-center bg-white py-8 lg:col-span-6">
              <div className="relative aspect-square w-full max-w-[800px]">
                <Image
                  src={product.image || '/images/WhatsApp Image 2026-04-25 at 12.59.05 PM.jpeg'}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center border-t border-[#d4af37]/20 bg-[#fdfbf7] p-8 md:p-10 lg:col-span-6 lg:border-t-0 lg:border-l">
              <span className="mb-3 block text-xs font-bold tracking-widest text-[#d4af37] uppercase">
                {product.category}
              </span>
              <h1 className="font-display mb-6 text-3xl leading-tight font-bold text-[#721c24] md:text-4xl">
                {product.name}
              </h1>

              <div className="mb-6 flex items-center gap-4">
                <span className="text-2xl font-bold text-[#4a1115]">{product.price}</span>
              </div>

              <div className="mb-6 h-1 w-16 bg-[#d4af37]"></div>

              {/* Scrollable Description */}
              <div className="mb-8 max-h-[180px] overflow-y-auto pr-2">
                <p className="text-sm leading-relaxed text-stone-600">{product.description}</p>
              </div>

              {/* Specifications Block */}
              <div className="mb-8 rounded-sm border border-[#d4af37]/30 bg-white p-5 shadow-sm">
                <h3 className="font-display mb-3 text-base font-bold tracking-wide text-[#721c24] uppercase">
                  Specifications
                </h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="mb-1 text-xs font-bold tracking-wider text-[#d4af37] uppercase">Material</dt>
                    <dd className="line-clamp-2 font-medium text-[#4a1115]">{product.material}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-bold tracking-wider text-[#d4af37] uppercase">
                      Dimensions & Weight
                    </dt>
                    <dd className="line-clamp-2 font-medium text-[#4a1115]">{product.dimensions}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-sm bg-[#721c24] px-8 py-4 text-sm font-bold tracking-widest text-[#d4af37] uppercase shadow-lg transition-colors hover:bg-[#4a1115]"
                >
                  Request Bulk / Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div
          id="contact-form"
          className="mx-auto mt-16 max-w-3xl rounded-sm border-2 border-[#d4af37] bg-white p-8 shadow-xl md:p-12"
        >
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-bold text-[#721c24]">Inquire About This Masterpiece</h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#d4af37]"></div>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-wide text-[#721c24] uppercase">Your Name</label>
                <input
                  type="text"
                  className="w-full rounded-sm border border-[#d4af37]/50 bg-[#fdfbf7] px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-wide text-[#721c24] uppercase">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-sm border border-[#d4af37]/50 bg-[#fdfbf7] px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-wide text-[#721c24] uppercase">Selected Product</label>
              <input
                type="text"
                value={`${product.name} (${product.id})`}
                className="w-full cursor-not-allowed rounded-sm border border-[#d4af37]/30 bg-stone-50 px-4 py-3 font-semibold text-stone-500"
                readOnly
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-wide text-[#721c24] uppercase">Requirements</label>
              <textarea
                className="min-h-[120px] w-full rounded-sm border border-[#d4af37]/50 bg-[#fdfbf7] px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-sm bg-[#721c24] px-8 py-4 text-sm font-bold tracking-widest text-[#d4af37] uppercase shadow-md transition-colors hover:bg-[#4a1115]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
