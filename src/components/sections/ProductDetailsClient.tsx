'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from '@/components/ui/Link';
import { useProduct } from '@/features/products/useProducts';
import { notFound } from 'next/navigation';

// Tiny warm-cream pixel — gives Next.js something to blur-up from
const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

export default function ProductDetailsClient({ id }: { id: string }) {
  const { data: product, isLoading } = useProduct(id);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications'>('description');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fdfbf7] py-12 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 h-6 w-32 animate-pulse rounded bg-[#ebd39e]/50"></div>
          <div className="border-gold/30 overflow-hidden border bg-white shadow-xl">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
              <div className="relative flex min-h-[400px] w-full animate-pulse items-center justify-center bg-gray-100 py-8 lg:col-span-6"></div>
              <div className="border-gold/20 flex flex-col justify-center border-t bg-[#fdfbf7] p-8 md:p-10 lg:col-span-6 lg:border-t-0 lg:border-l">
                <div className="mb-3 h-4 w-24 animate-pulse rounded bg-[#ebd39e]/50"></div>
                <div className="mb-6 h-10 w-3/4 animate-pulse rounded bg-gray-200"></div>
                <div className="mb-6 h-8 w-1/4 animate-pulse rounded bg-gray-200"></div>
                <div className="bg-gold mb-6 h-1 w-16"></div>
                <div className="mb-8 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
                </div>
                <div className="h-32 w-full animate-pulse rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
           
            href="/products"
            className="hover:text-gold text-brand-red inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors"
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
                  priority
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Details Section (Minimal) */}
            <div className="border-gold/20 flex flex-col justify-center border-t bg-[#fdfbf7] p-8 md:p-10 lg:col-span-6 lg:border-t-0 lg:border-l">
              <span className="text-gold mb-3 block text-xs font-bold tracking-widest uppercase">
                {product.category}
              </span>
              <h1 className="font-display text-brand-red mb-6 text-3xl leading-tight font-bold md:text-4xl">
                {product.name}
              </h1>

              <div className="mb-6 flex items-center gap-4">
                <span className="text-brand-red-dark text-2xl font-bold">
                  {product.price > 0 ? `₹${product.price} / ${product.unit}` : 'Price on Request'}
                </span>
              </div>

              <div className="bg-gold mb-8 h-1 w-16"></div>

              {/* Short Preview Description */}
              <p className="mb-10 line-clamp-3 text-sm leading-relaxed text-stone-600">{product.description}</p>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href="#contact-form"
                  className="text-gold bg-brand-red hover:bg-brand-red-dark inline-flex items-center justify-center rounded-sm px-8 py-4 text-sm font-bold tracking-widest uppercase shadow-lg transition-colors"
                >
                  Request Bulk / Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs Section */}
        <div className="border-gold/30 mt-12 overflow-hidden border bg-white shadow-xl">
          <div className="border-gold/20 flex border-b">
            <button
              onClick={() => setActiveTab('description')}
              className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase transition-colors ${
                activeTab === 'description' ? 'bg-navy text-gold' : 'text-navy bg-[#fdfbf7] hover:bg-[#f5e6d3]'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase transition-colors ${
                activeTab === 'specifications' ? 'bg-navy text-gold' : 'text-navy bg-[#fdfbf7] hover:bg-[#f5e6d3]'
              }`}
            >
              Specifications
            </button>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-12">
            {activeTab === 'description' && (
              <div className="max-w-4xl text-stone-700">
                <h3 className="font-display text-brand-red mb-4 text-xl font-bold sm:text-2xl">
                  About this Masterpiece
                </h3>
                <p className="text-[14px] leading-relaxed whitespace-pre-line sm:text-[15px]">{product.description}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="max-w-4xl">
                <h3 className="font-display text-brand-red mb-4 text-xl font-bold sm:text-2xl">
                  Technical Specifications
                </h3>
                <div className="border-gold/30 overflow-hidden rounded-sm border shadow-sm">
                  <table className="w-full text-left text-[14px] sm:text-[15px]">
                    <tbody>
                      <tr className="border-gold/20 flex flex-col border-b bg-[#fdfbf7] sm:table-row">
                        <th className="text-navy w-full px-4 py-3 font-bold tracking-wider uppercase sm:w-1/3 sm:px-6 sm:py-5">
                          Material
                        </th>
                        <td className="px-4 pb-4 font-medium text-stone-700 sm:px-6 sm:py-5 sm:pb-5">
                          {product.material}
                        </td>
                      </tr>
                      <tr className="border-gold/20 flex flex-col border-b bg-white sm:table-row">
                        <th className="text-navy w-full px-4 py-3 font-bold tracking-wider uppercase sm:w-1/3 sm:px-6 sm:py-5">
                          Dimensions &amp; Weight
                        </th>
                        <td className="px-4 pb-4 font-medium text-stone-700 sm:px-6 sm:py-5 sm:pb-5">
                          {product.dimensions}
                        </td>
                      </tr>
                      <tr className="flex flex-col bg-[#fdfbf7] sm:table-row">
                        <th className="text-navy w-full px-4 py-3 font-bold tracking-wider uppercase sm:w-1/3 sm:px-6 sm:py-5">
                          Unit
                        </th>
                        <td className="px-4 pb-4 font-medium text-stone-700 sm:px-6 sm:py-5 sm:pb-5">{product.unit}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div
          id="contact-form"
          className="border-gold mx-auto mt-16 max-w-3xl rounded-sm border-2 bg-white p-8 shadow-xl md:p-12"
        >
          <div className="mb-8 text-center">
            <h2 className="font-display text-brand-red text-3xl font-bold">Inquire About This Masterpiece</h2>
            <div className="bg-gold mx-auto mt-4 h-1 w-16"></div>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-brand-red text-sm font-bold tracking-wide uppercase">Your Name</label>
                <input
                  type="text"
                  className="border-gold/50 focus:border-gold focus:ring-gold w-full rounded-sm border bg-[#fdfbf7] px-4 py-3 outline-none focus:ring-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-brand-red text-sm font-bold tracking-wide uppercase">Email Address</label>
                <input
                  type="email"
                  className="border-gold/50 focus:border-gold focus:ring-gold w-full rounded-sm border bg-[#fdfbf7] px-4 py-3 outline-none focus:ring-1"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-brand-red text-sm font-bold tracking-wide uppercase">Selected Product</label>
              <input
                type="text"
                value={`${product.name} (${product.id})`}
                className="border-gold/30 w-full cursor-not-allowed rounded-sm border bg-stone-50 px-4 py-3 font-semibold text-stone-500"
                readOnly
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-brand-red text-sm font-bold tracking-wide uppercase">Requirements</label>
              <textarea
                className="border-gold/50 focus:border-gold focus:ring-gold min-h-[120px] w-full rounded-sm border bg-[#fdfbf7] px-4 py-3 outline-none focus:ring-1"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-gold bg-brand-red hover:bg-brand-red-dark mt-4 inline-flex w-full items-center justify-center rounded-sm px-8 py-4 text-sm font-bold tracking-widest uppercase shadow-md transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
