import { products } from '@/lib/data/products';

export default function AdminOverview() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6 duration-700">
      <div className="mb-4 flex flex-col justify-between gap-4 px-2 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-navy text-3xl font-bold tracking-tight">Overview</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed font-medium text-gray-500">
            Here's what's happening with your catalog today.
          </p>
        </div>
      </div>

      {/* Trendy Bento Box Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {/* Bento Item 1 - Featured / Main Stat (Spans 3 cols, 1 row) */}
        <div className="group bg-navy relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-6 shadow-xl lg:col-span-3">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>

          <div className="relative flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              <span className="text-xs font-bold tracking-wider uppercase">System Active</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <div className="relative mt-8">
            <p className="mb-2 text-sm font-bold tracking-widest text-white/60 uppercase">Total Live Products</p>
            <div className="flex items-end gap-4">
              <p className="font-display text-5xl font-bold tracking-tight text-white">{products.length}</p>
              <div className="mb-2 flex items-center gap-1 rounded-lg border border-green-500/20 bg-green-500/20 px-3 py-1.5 text-sm font-bold text-green-300">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                12% this month
              </div>
            </div>
          </div>
        </div>

        {/* Bento Item 2 - Secondary Stat (Spans 1 col, 1 row) */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="bg-cream-dark/30 absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150"></div>

          <div className="relative flex items-start justify-between">
            <div className="bg-maroon shadow-maroon-light flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-inner">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="relative mt-8">
            <p className="text-navy text-3xl font-bold tracking-tight">12</p>
            <p className="mt-1 text-xs font-bold tracking-widest text-gray-500 uppercase">Pending Inquiries</p>
          </div>
        </div>

        {/* Bento Item 4 - Recent Activity (Spans 4 cols, 1 row) */}
        <div className="flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:col-span-4">
          <div className="flex items-center justify-between border-b border-gray-50 px-6 py-4">
            <h3 className="font-display text-navy text-lg font-bold">Quick Actions</h3>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 bg-gray-50/30 p-6 md:grid-cols-3">
            <button className="group hover:border-maroon/20 relative flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-maroon group-hover:bg-maroon mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 transition-transform group-hover:scale-110 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-navy text-base font-bold">Add Product</p>
              <p className="mt-1 text-center text-xs font-medium text-gray-400">Create new entry</p>
            </button>

            <button className="group hover:border-navy/20 relative flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-navy group-hover:bg-navy mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 transition-transform group-hover:scale-110 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <p className="text-navy text-base font-bold">Categories</p>
              <p className="mt-1 text-center text-xs font-medium text-gray-400">Manage collections</p>
            </button>

            <button className="group hover:border-gold/30 relative flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-gold-dark group-hover:bg-gold mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 transition-transform group-hover:scale-110 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-navy text-base font-bold">Settings</p>
              <p className="mt-1 text-center text-xs font-medium text-gray-400">Portal config</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
