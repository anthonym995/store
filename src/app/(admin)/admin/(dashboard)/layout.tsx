import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function AdminLayout({
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
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-gray-200 bg-white shadow-sm transition-all duration-300">
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-orange-600 transition-opacity hover:opacity-90"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Giri Admin
          </Link>
        </div>
        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg border border-orange-100 bg-orange-50 px-4 py-2.5 text-sm font-medium text-orange-700 transition-colors"
          >
            <svg className="h-5 w-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            Overview
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:border-gray-100 hover:bg-gray-50 hover:text-gray-900"
          >
            <svg className="h-5 w-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              ></path>
            </svg>
            Products
          </Link>

          <div className="pt-8">
            <Link
              href="/"
              className="mt-auto flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              <svg className="h-5 w-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Back to Store
            </Link>
            <form action={handleLogout}>
              <button
                type="submit"
                className="mt-2 flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm font-medium text-red-500 transition-colors hover:bg-red-50 hover:text-red-700"
              >
                <svg className="h-5 w-5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Sign Out
              </button>
            </form>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-8 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

          {/* User Profile Mock */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">admin@giri.in</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-orange-100 font-bold text-orange-600 shadow-sm">
              A
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
