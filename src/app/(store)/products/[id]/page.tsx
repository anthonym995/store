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
    <div className="min-h-screen bg-[#F9F9F6] py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#2D6A4F] uppercase transition-colors hover:text-[#D4AF37]"
          >
            &larr; Back to Catalog
          </Link>
        </div>

        <div className="overflow-hidden border border-stone-100 bg-white shadow-xl">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative flex h-[400px] w-full items-center justify-center bg-white p-8 md:h-[650px]">
              <div className="relative h-full w-full">
                <Image
                  src={product.image || '/images/placeholder.jpg'}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-contain mix-blend-multiply drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center border-l border-stone-100 bg-[#F9F9F6] p-8 md:p-12 lg:p-16">
              <span className="mb-3 block text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                {product.category}
              </span>
              <h1 className="font-display mb-6 text-3xl leading-tight font-bold text-[#081C15] md:text-5xl">
                {product.name}
              </h1>

              <div className="mb-6 flex items-center gap-4">
                <span className="text-2xl font-bold text-[#081C15]">{product.price}</span>
                {product.rating && (
                  <span className="flex items-center gap-1 border-l border-stone-300 pl-4 text-sm font-semibold text-stone-500">
                    <svg className="h-4 w-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {product.rating}
                  </span>
                )}
              </div>

              <div className="mb-8 h-1 w-16 bg-[#D4AF37]"></div>

              <p className="mb-8 text-base leading-relaxed text-stone-600">{product.description}</p>

              {/* Specifications Block */}
              <div className="mb-10 rounded border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-display mb-4 text-lg font-bold tracking-wide text-[#081C15] uppercase">
                  Specifications
                </h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="mb-1 text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">Material Details</dt>
                    <dd className="font-medium text-[#081C15]">{product.material}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">
                      Dimensions & Weight
                    </dt>
                    <dd className="font-medium text-[#081C15]">{product.dimensions}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded bg-[#1B4332] px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-lg transition-colors hover:bg-[#081C15] hover:text-[#D4AF37]"
                >
                  Request Bulk / Custom Quote
                </a>
                <p className="text-center text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">
                  * Minimum order quantities may apply.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div
          id="contact-form"
          className="mx-auto mt-16 max-w-3xl rounded border border-[#D4AF37]/30 bg-white p-8 shadow-xl md:p-12"
        >
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-bold text-[#081C15]">Inquire About This Masterpiece</h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#D4AF37]"></div>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-wide text-[#1B4332] uppercase">Your Name</label>
                <input
                  type="text"
                  className="w-full rounded border border-stone-200 bg-[#F9F9F6] px-4 py-3 transition-colors outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-wide text-[#1B4332] uppercase">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded border border-stone-200 bg-[#F9F9F6] px-4 py-3 transition-colors outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-wide text-[#1B4332] uppercase">Selected Product</label>
              <input
                type="text"
                value={`${product.name} (${product.id})`}
                className="w-full cursor-not-allowed rounded border border-stone-200 bg-stone-100 px-4 py-3 font-semibold text-stone-500"
                readOnly
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-wide text-[#1B4332] uppercase">
                Requirements (Quantity, Polish Type, Variations)
              </label>
              <textarea
                className="min-h-[120px] w-full rounded border border-stone-200 bg-[#F9F9F6] px-4 py-3 transition-colors outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                placeholder="Please state if you need standard brass, silver finish, and expected order weight/quantity..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded bg-[#1B4332] px-8 py-4 text-sm font-bold tracking-widest text-[#D4AF37] uppercase shadow-md transition-colors hover:bg-[#081C15]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
