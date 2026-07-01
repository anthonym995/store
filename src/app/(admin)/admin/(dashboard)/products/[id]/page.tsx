'use client';

import { use, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProduct, useUpdateProduct } from '@/features/products/useProducts';

interface ProductFormValues {
  productName: string;
  description: string;
  price: number;
  weightCategory: string;
  category: string;
  material: string;
}

export default function EditProduct({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const { data: product, isLoading: isFetching } = useProduct(productId);
  const { mutateAsync: updateProduct, isPending } = useUpdateProduct();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    defaultValues: {
      productName: '',
      description: '',
      price: 0,
      weightCategory: '',
      category: '',
      material: '',
    },
  });

  useEffect(() => {
    if (product) {
      reset({
        productName: product.name,
        description: product.description,
        price: Number(product.price.replace(/[^0-9.-]+/g, '')), // Ensure we parse out any '₹' if it exists in DB string
        weightCategory: 'Per Piece', // Mock placeholder
        category: product.category,
        material: product.material,
      });
    }
  }, [product, reset]);

  const onSubmit = async (data: ProductFormValues) => {
    try {
      await updateProduct({
        id: productId,
        data: {
          name: data.productName,
          description: data.description,
          price: data.price.toString(),
          category: data.category,
          material: data.material,
        },
      });
      router.push('/admin/products');
    } catch (error) {
      console.error('Failed to update product:', error);
      alert('Failed to update product');
    }
  };

  if (isFetching) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="border-navy h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
          <p className="font-display text-navy text-lg font-bold">Loading Artifact Data...</p>
        </div>
      </div>
    );
  }

  const newLocal =
    'from-maroon/40 absolute inset-0 bg-linear-to-r to-transparent opacity-0 transition-opacity group-hover:opacity-100';
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-5xl space-y-8 pb-12 duration-700"
    >
      {/* Top Bar */}
      <div className="flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 uppercase">
            <Link href="/admin/products" className="hover:text-navy transition-colors">
              Catalog
            </Link>
            <span>/</span>
            <span className="text-maroon">Edit</span>
          </div>
          <h2 className="font-display text-navy text-4xl font-bold tracking-tight">Edit Masterpiece</h2>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Update details for SKU: EV-{1000 + parseInt(productId)}
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="group bg-navy hover:bg-navy-light focus:ring-navy/20 relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 text-sm font-bold tracking-wider text-white shadow-lg transition-all outline-none hover:-translate-y-1 hover:shadow-xl focus:ring-4 disabled:opacity-50 disabled:hover:translate-y-0"
        >
          <div className={newLocal}></div>
          {isPending ? (
            <svg className="relative z-10 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <svg className="relative z-10 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )}
          <span className="relative z-10 uppercase">{isPending ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Main Info Column */}
        <div className="space-y-8 md:col-span-2">
          {/* General Information Bento Box */}
          <div className="relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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

            <div className="relative space-y-6">
              <div>
                <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Product Name
                </label>
                <Controller
                  name="productName"
                  control={control}
                  rules={{ required: 'Product name is required' }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="text-navy focus:border-maroon focus:ring-maroon/10 w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-sm font-medium transition-all outline-none hover:border-gray-300 focus:bg-white focus:ring-4"
                      placeholder="e.g. 30cm Kalash Design Kuthu Vilakku"
                    />
                  )}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Material Selection
                </label>
                <Controller
                  name="material"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="text-navy focus:border-maroon focus:ring-maroon/10 w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-sm font-medium transition-all outline-none hover:border-gray-300 focus:bg-white focus:ring-4"
                      placeholder="e.g. Grade-A Cast Brass"
                    />
                  )}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Description
                </label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={5}
                      className="text-navy focus:border-maroon focus:ring-maroon/10 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-sm font-medium transition-all outline-none hover:border-gray-300 focus:bg-white focus:ring-4"
                      placeholder="Enter premium material details and craftsmanship description..."
                    />
                  )}
                />
              </div>
            </div>
          </div>

          {/* Pricing Bento Box */}
          <div className="relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
              <div>
                <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Price (₹)
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <span className="font-display text-lg font-bold text-gray-400">₹</span>
                  </div>
                  <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="number"
                        className="text-navy focus:border-maroon focus:ring-maroon/10 w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-5 pl-10 text-lg font-bold transition-all outline-none hover:border-gray-300 focus:bg-white focus:ring-4"
                        placeholder="0.00"
                      />
                    )}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Pricing Unit
                </label>
                <Controller
                  name="weightCategory"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="text-navy focus:border-maroon focus:ring-maroon/10 w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-sm font-medium transition-all outline-none hover:border-gray-300 focus:bg-white focus:ring-4"
                      placeholder="e.g. Per Kg / Per Piece"
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Image Upload Bento Box */}
          <div className="rounded-4xl border border-gray-100 bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="font-display text-navy mb-6 text-left text-xl font-bold">Product Image</h3>

            <div className="group hover:border-maroon/50 hover:bg-maroon/5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-10 transition-all">
              <div className="text-maroon group-hover:bg-maroon mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:text-white">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <p className="text-navy mb-1 text-sm font-bold">Upload Artifact Image</p>
              <p className="text-xs font-medium text-gray-400">SVG, PNG, JPG (Max 5MB)</p>
            </div>
          </div>

          {/* Category Bento Box */}
          <div className="rounded-4xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="font-display text-navy mb-6 text-xl font-bold">Organization</h3>

            <div>
              <label className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                Select Category
              </label>
              <div className="relative">
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="text-navy focus:border-maroon focus:ring-maroon/10 w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-sm font-medium transition-all outline-none hover:border-gray-300 focus:bg-white focus:ring-4"
                    >
                      <option value="" disabled>
                        Choose a category...
                      </option>
                      <option value="Traditional Kuthu Vilakku">Traditional Kuthu Vilakku</option>
                      <option value="Silver-Finish Kuthu Vilakku">Silver-Finish Kuthu Vilakku</option>
                      <option value="Designer Metal & Brass Diyas">Designer Metal & Brass Diyas</option>
                      <option value="Sacred Ritual Vessels">Sacred Ritual Vessels</option>
                    </select>
                  )}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
