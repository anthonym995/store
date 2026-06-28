import Link from 'next/link';
import { notFound } from 'next/navigation';

import { products as actualProducts } from '@/data/products';

const mockCatalog = actualProducts.map((p) => ({
  ...p,
  id: p.id.toString(),
  unit: 'Per Piece', // Defaulting as this isn't in base data
  price: p.price.replace(/[^0-9.,]/g, ''), // Extracting numeric price for display
  status: 'Active', // Mocking status
}));

export default async function ViewProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  const product = mockCatalog.find((p) => p.id === productId);

  if (!product) {
    // For the sake of the mock, if it's an unknown ID, we just fallback to a generic placeholder rather than 404ing immediately, or we can use notFound()
    notFound();
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-5xl space-y-8 pb-12 duration-700">
      {/* Top Bar */}
      <div className="flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 uppercase">
            <Link href="/admin/products" className="hover:text-navy transition-colors">
              Catalog
            </Link>
            <span>/</span>
            <span className="text-maroon">View</span>
          </div>
          <h2 className="font-display text-navy text-4xl font-bold tracking-tight">{product.name}</h2>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-sm font-medium text-gray-500">SKU: EV-{1000 + parseInt(product.id)}</span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase ${
                product.status === 'Active'
                  ? 'border border-green-100 bg-green-50 text-green-600'
                  : 'border border-gray-100 bg-gray-50 text-gray-500'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${product.status === 'Active' ? 'animate-pulse bg-green-500' : 'bg-gray-400'}`}
              ></span>
              {product.status}
            </span>
          </div>
        </div>

        <button className="group bg-navy hover:bg-navy-light focus:ring-navy/20 relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 text-sm font-bold tracking-wider text-white shadow-lg transition-all outline-none hover:-translate-y-1 hover:shadow-xl focus:ring-4">
          <div className="from-maroon/40 absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
          <svg className="relative z-10 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          <span className="relative z-10 uppercase">Edit Product</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Main Info Column */}
        <div className="space-y-8 md:col-span-2">
          {/* General Information Bento Box */}
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="bg-cream-dark/30 pointer-events-none absolute -top-20 -left-20 h-48 w-48 rounded-full blur-2xl"></div>

            <h3 className="font-display text-navy mb-8 flex items-center gap-3 text-xl font-bold">
              <span className="text-maroon flex h-8 w-8 items-center justify-center rounded-xl bg-gray-50">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              General Information
            </h3>

            <div className="relative space-y-8">
              <div>
                <h4 className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">Product Name</h4>
                <p className="text-navy text-lg font-bold">{product.name}</p>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Material Specification
                </h4>
                <p className="text-navy text-base font-bold">{product.material}</p>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">Detailed Description</h4>
                <p className="leading-relaxed text-gray-600">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Pricing Bento Box */}
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="font-display text-navy mb-8 flex items-center gap-3 text-xl font-bold">
              <span className="text-gold-dark flex h-8 w-8 items-center justify-center rounded-xl bg-gray-50">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Pricing Details
            </h3>

            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                <h4 className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">Price (₹)</h4>
                <p className="text-navy font-display text-3xl font-bold">₹{product.price}</p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                <h4 className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">Pricing Unit</h4>
                <p className="text-navy font-display text-3xl font-bold">{product.unit}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Image Display Bento Box */}
          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="font-display text-navy mb-6 text-left text-xl font-bold">Product Image</h3>

            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50">
              {/* Placeholder for actual image */}
              <div className="text-gray-300">
                <svg className="mx-auto mb-2 h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm font-bold">No Image Uploaded</p>
              </div>
            </div>
          </div>

          {/* Category Bento Box */}
          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="font-display text-navy mb-6 text-xl font-bold">Organization</h3>
            <div>
              <h4 className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">Category</h4>
              <div className="bg-maroon/5 text-maroon border-maroon/10 inline-flex items-center rounded-xl border px-4 py-2 text-sm font-bold">
                {product.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
