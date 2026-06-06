import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleLogout = async () => {
    'use server';
    const cookieStore = await cookies();
    cookieStore.delete('admin-auth');
    redirect('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-[#F9F9F6] font-sans">
      {/* Sidebar - Deep Heritage Green */}
      <aside className="z-20 flex w-64 flex-col bg-[#081C15] text-stone-300 shadow-xl transition-all duration-300">
        <div className="flex h-16 items-center border-b border-[#1B4332] px-6">
          <Link href="/admin" className="flex flex-col items-start leading-none">
            <span className="font-display text-lg font-extrabold tracking-widest text-white uppercase">
              E.V. Brassware
            </span>
            <span className="mt-1 text-[9px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Partner Portal</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded bg-[#D4AF37] px-4 py-3 text-sm font-bold tracking-wider text-[#081C15] uppercase transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center gap-3 rounded px-4 py-3 text-sm font-bold tracking-wider text-stone-400 uppercase transition-colors hover:bg-[#1B4332] hover:text-white"
          >
            Catalog Manager
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded px-4 py-3 text-sm font-bold tracking-wider text-stone-400 uppercase transition-colors hover:bg-[#1B4332] hover:text-white"
          >
            Inquiries
          </Link>

          <div className="mt-4 border-t border-[#1B4332] pt-8">
            <Link
              href="/"
              className="mt-auto flex items-center gap-3 rounded px-4 py-3 text-sm font-bold tracking-wider text-stone-400 uppercase transition-colors hover:bg-[#1B4332] hover:text-white"
            >
              Back to Storefront
            </Link>
            <form action={handleLogout}>
              <button
                type="submit"
                className="mt-2 flex w-full items-center gap-3 rounded px-4 py-3 text-left text-sm font-bold tracking-wider text-red-400 uppercase transition-colors hover:bg-red-950/50 hover:text-red-300"
              >
                Secure Sign Out
              </button>
            </form>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="z-10 flex h-16 shrink-0 items-center justify-between border-b border-stone-200 bg-white px-8 shadow-sm">
          <h1 className="font-display text-xl font-bold text-[#081C15]">Catalog Administration</h1>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-[#081C15]">Admin User</p>
              <p className="text-xs text-stone-500">admin@evbrassware.com</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2D6A4F] bg-[#1B4332] font-bold text-[#D4AF37] shadow-sm">
              EV
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
