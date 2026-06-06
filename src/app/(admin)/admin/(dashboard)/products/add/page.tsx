'use client';

import { useForm, Controller } from 'react-hook-form';

interface ProductFormValues {
  productName: string;
  description: string;
  price: number;
  weightCategory: string;
  category: string;
  material: string;
}

export default function AddProduct() {
  const {
    control,
    handleSubmit,
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

  const onSubmit = (data: ProductFormValues) => {
    console.log('Submitting Product Data:', data);
    // Future integration: API call to your backend goes here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-4xl space-y-8 duration-500"
    >
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-[#081C15]">Add New Masterpiece</h2>
          <p className="mt-1 text-sm text-stone-500">Add a new brassware artifact to the catalog.</p>
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 rounded bg-[#1B4332] px-6 py-2.5 text-sm font-bold tracking-wider text-[#D4AF37] uppercase shadow-sm transition-all hover:bg-[#081C15] focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 active:scale-95"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Save Product
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Main Info */}
        <div className="space-y-6 md:col-span-2">
          <div className="space-y-5 rounded border border-stone-200 bg-white p-7 shadow-sm">
            <h3 className="font-display flex items-center gap-2 text-lg font-bold text-[#081C15]">
              General Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold tracking-wide text-[#2D6A4F] uppercase">
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
                      className="w-full rounded border border-stone-300 px-4 py-2.5 transition-all outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="e.g. 30cm Kalash Design Kuthu Vilakku"
                    />
                  )}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold tracking-wide text-[#2D6A4F] uppercase">
                  Material Selection
                </label>
                <Controller
                  name="material"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full rounded border border-stone-300 px-4 py-2.5 transition-all outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="e.g. Grade-A Cast Brass"
                    />
                  )}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold tracking-wide text-[#2D6A4F] uppercase">
                  Description
                </label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={5}
                      className="w-full resize-y rounded border border-stone-300 px-4 py-2.5 transition-all outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="Enter premium material details and craftsmanship description..."
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 rounded border border-stone-200 bg-white p-7 shadow-sm">
            <h3 className="font-display flex items-center gap-2 text-lg font-bold text-[#081C15]">Pricing Details</h3>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="mb-1.5 block text-xs font-bold tracking-wide text-[#2D6A4F] uppercase">
                  Price (₹)
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="font-medium text-stone-500">₹</span>
                  </div>
                  <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="number"
                        className="w-full rounded border border-stone-300 py-2.5 pr-4 pl-8 transition-all outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        placeholder="0.00"
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold tracking-wide text-[#2D6A4F] uppercase">
                  Pricing Unit
                </label>
                <Controller
                  name="weightCategory"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full rounded border border-stone-300 px-4 py-2.5 transition-all outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="e.g. Per Kg / Per Piece"
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="space-y-4 rounded border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-[#081C15]">Product Image</h3>
            <div className="group flex cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-stone-300 p-8 text-center transition-colors hover:border-[#D4AF37] hover:bg-[#F9F9F6]">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1B4332] text-[#D4AF37] transition-transform group-hover:scale-110">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <p className="mb-1 text-sm font-bold text-[#1B4332]">Click to upload image</p>
              <p className="text-xs text-stone-500">SVG, PNG, JPG (High Res)</p>
            </div>
          </div>

          <div className="space-y-4 rounded border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-[#081C15]">Category</h3>
            <div>
              <label className="mb-1.5 block text-xs font-bold tracking-wide text-[#2D6A4F] uppercase">
                Select Category
              </label>
              <div className="relative">
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full appearance-none rounded border border-stone-300 bg-white px-4 py-2.5 text-sm transition-all outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    >
                      <option value="" disabled>
                        Choose a category...
                      </option>
                      <option value="kuthu-vilakku">Traditional Kuthu Vilakku</option>
                      <option value="silver-finish">Silver-Finish Kuthu Vilakku</option>
                      <option value="designer-diyas">Designer Metal & Brass Diyas</option>
                      <option value="sacred-vessels">Sacred Ritual Vessels</option>
                    </select>
                  )}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
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
