export default function AddProduct() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-4xl space-y-8 duration-500">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
          <p className="mt-1 text-sm text-gray-500">Fill in the details to add a new product to your store.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-md focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Save Product
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Main Info */}
        <div className="space-y-6 md:col-span-2">
          <div className="space-y-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              General Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">Product Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 transition-all outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                  placeholder="e.g. Premium Brass Pooja Thali Set"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">Description</label>
                <textarea
                  rows={5}
                  className="w-full resize-y rounded-xl border border-gray-300 px-4 py-2.5 transition-all outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                  placeholder="Describe the product in detail..."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Pricing & Inventory
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">Price (₹)</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="font-medium text-gray-500">₹</span>
                  </div>
                  <input
                    type="number"
                    className="w-full rounded-xl border border-gray-300 py-2.5 pr-4 pl-8 transition-all outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">Stock Quantity</label>
                <input
                  type="number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 transition-all outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Product Image</h3>
            <div className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-8 text-center transition-colors hover:border-orange-300 hover:bg-orange-50">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-transform group-hover:scale-110">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  ></path>
                </svg>
              </div>
              <p className="mb-1 text-sm font-medium text-gray-700">Click to upload image</p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Category</h3>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Select Category</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 transition-all outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500">
                  <option value="" disabled>
                    Choose a category...
                  </option>
                  <option value="pooja">Pooja Essentials</option>
                  <option value="idols">Idols & Murti</option>
                  <option value="books">Books & CDs</option>
                  <option value="ethnic">Ethnic Wear</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
