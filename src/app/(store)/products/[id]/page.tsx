import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    return {
      title: 'Product Not Found | E.V. Brassware',
    };
  }

  return {
    title: `${product.name} | E.V. Brassware`,
    description: product.description,
    openGraph: {
      title: `${product.name} | E.V. Brassware`,
      description: product.description,
      images: [
        {
          url: typeof product.image === 'string' ? product.image : product.image?.src || '/logo.png',
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
    },
  };
}

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
            className="hover:text-gold inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#721c24] uppercase transition-colors"
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
                  src={product.image || '/logo.png'}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="border-gold/20 flex flex-col justify-center border-t bg-[#fdfbf7] p-8 md:p-10 lg:col-span-6 lg:border-t-0 lg:border-l">
              <span className="text-gold mb-3 block text-xs font-bold tracking-widest uppercase">
                {product.category}
              </span>
              <h1 className="font-display mb-6 text-3xl leading-tight font-bold text-[#721c24] md:text-4xl">
                {product.name}
              </h1>

              <div className="mb-6 flex items-center gap-4">
                <span className="text-2xl font-bold text-[#4a1115]">{product.price}</span>
              </div>

              <div className="bg-gold mb-6 h-1 w-16"></div>

              {/* Scrollable Description */}
              <div className="mb-8 max-h-[180px] overflow-y-auto pr-2">
                <p className="text-sm leading-relaxed text-stone-600">{product.description}</p>
              </div>

              {/* Specifications Block */}
              <div className="border-gold/30 mb-8 rounded-sm border bg-white p-5 shadow-sm">
                <h3 className="font-display mb-3 text-base font-bold tracking-wide text-[#721c24] uppercase">
                  Specifications
                </h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-gold mb-1 text-xs font-bold tracking-wider uppercase">Material</dt>
                    <dd className="line-clamp-2 font-medium text-[#4a1115]">{product.material}</dd>
                  </div>
                  <div>
                    <dt className="text-gold mb-1 text-xs font-bold tracking-wider uppercase">Dimensions & Weight</dt>
                    <dd className="line-clamp-2 font-medium text-[#4a1115]">{product.dimensions}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href="#contact-form"
                  className="text-gold inline-flex items-center justify-center rounded-sm bg-[#721c24] px-8 py-4 text-sm font-bold tracking-widest uppercase shadow-lg transition-colors hover:bg-[#4a1115]"
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
          className="border-gold mx-auto mt-16 max-w-3xl rounded-sm border-2 bg-white p-8 shadow-xl md:p-12"
        >
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-bold text-[#721c24]">Inquire About This Masterpiece</h2>
            <div className="bg-gold mx-auto mt-4 h-1 w-16"></div>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-wide text-[#721c24] uppercase">Your Name</label>
                <input
                  type="text"
                  className="border-gold/50 focus:border-gold focus:ring-gold w-full rounded-sm border bg-[#fdfbf7] px-4 py-3 outline-none focus:ring-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-wide text-[#721c24] uppercase">Email Address</label>
                <input
                  type="email"
                  className="border-gold/50 focus:border-gold focus:ring-gold w-full rounded-sm border bg-[#fdfbf7] px-4 py-3 outline-none focus:ring-1"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-wide text-[#721c24] uppercase">Selected Product</label>
              <input
                type="text"
                value={`${product.name} (${product.id})`}
                className="border-gold/30 w-full cursor-not-allowed rounded-sm border bg-stone-50 px-4 py-3 font-semibold text-stone-500"
                readOnly
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-wide text-[#721c24] uppercase">Requirements</label>
              <textarea
                className="border-gold/50 focus:border-gold focus:ring-gold min-h-[120px] w-full rounded-sm border bg-[#fdfbf7] px-4 py-3 outline-none focus:ring-1"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-gold mt-4 inline-flex w-full items-center justify-center rounded-sm bg-[#721c24] px-8 py-4 text-sm font-bold tracking-widest uppercase shadow-md transition-colors hover:bg-[#4a1115]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
