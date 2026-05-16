import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

// Disable static params for demo purposes, so it builds easily without needing all paths generated.
export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-12 md:py-20">
      <div className="container max-w-6xl">
        <div className="mb-8">
          <Link
            href="/products"
            className="hover:text-primary inline-flex items-center gap-2 text-stone-500 transition-colors"
          >
            &larr; Back to Catalog
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[400px] w-full bg-stone-100 md:h-[600px]">
              <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" />
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-primary mb-3 text-sm font-semibold tracking-widest uppercase">
                {product.category}
              </span>
              <h1 className="font-display mb-6 text-3xl leading-tight font-bold text-stone-900 md:text-5xl">
                {product.name}
              </h1>

              <div className="bg-secondary mb-8 h-1 w-16 rounded-full"></div>

              <p className="mb-10 text-lg leading-relaxed text-stone-600">{product.description}</p>

              <div className="mb-10 rounded-2xl border border-stone-100 bg-stone-50 p-6">
                <h3 className="font-display mb-2 text-lg font-semibold text-stone-900">
                  Quote Information
                </h3>
                <p className="text-sm text-stone-500">
                  This item is available for bulk and individual orders. Pricing varies based on customization and
                  quantity. Contact us directly to get the best quote for your requirements.
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact-form"
                  className="from-primary to-primary-dark hover:from-primary-light hover:to-primary font-display inline-flex flex-grow items-center justify-center rounded-full bg-gradient-to-br px-8 py-4 text-lg font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div
          id="contact-form"
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-stone-200 bg-white p-8 shadow-lg md:p-12"
        >
          <h2 className="font-display mb-8 text-center text-3xl font-semibold text-stone-900">
            Inquire About This Product
          </h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-stone-700">Your Name</label>
                <input
                  type="text"
                  className="focus:ring-primary/20 focus:border-primary w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-stone-700">Email Address</label>
                <input
                  type="email"
                  className="focus:ring-primary/20 focus:border-primary w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 transition-all outline-none focus:ring-2"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-700">Product</label>
              <input
                type="text"
                value={product.name}
                className="w-full cursor-not-allowed rounded-xl border border-stone-300 bg-stone-100 px-4 py-3 text-stone-500"
                readOnly
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-700">
                Required Quantity & Details
              </label>
              <textarea
                className="focus:ring-primary/20 focus:border-primary min-h-[120px] w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 transition-all outline-none focus:ring-2"
                placeholder="Please provide quantity and any specific requirements..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="font-display mt-4 inline-flex w-full items-center justify-center rounded-xl bg-stone-900 px-8 py-4 text-lg font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
