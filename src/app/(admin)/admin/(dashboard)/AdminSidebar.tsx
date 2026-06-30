'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { handleLogout } from './actions';

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (isActive: boolean) => {
    const baseClass = `group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-3 text-sm tracking-wide transition-all ${
      isCollapsed ? 'justify-center px-0' : ''
    }`;
    const activeClass = 'bg-white/10 font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]';
    const inactiveClass = 'font-medium text-gray-400 hover:bg-white/5 hover:text-white';

    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <aside
      className={`bg-navy relative z-20 flex flex-col overflow-hidden text-gray-300 shadow-2xl transition-all duration-300 ${
        isCollapsed ? 'w-24' : 'w-72'
      } shrink-0`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-6 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
      >
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="relative flex h-24 items-center justify-center border-b border-white/10 px-4">
        <Link href="/admin" className="group flex flex-col items-center text-center leading-none">
          <span className="font-display text-xl font-extrabold tracking-widest text-white uppercase transition-transform group-hover:scale-105">
            {isCollapsed ? 'E.V.' : 'E.V. Brassware'}
          </span>
          {!isCollapsed && (
            <span className="text-gold mt-2 text-[9px] font-bold tracking-[0.3em] uppercase opacity-90 transition-opacity">
              Partner Portal
            </span>
          )}
        </Link>
      </div>

      <nav className="custom-scrollbar relative flex-1 space-y-2 overflow-y-auto p-4 sm:p-6">
        {!isCollapsed && (
          <div className="mb-6 px-2 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">Menu</div>
        )}

        <Link href="/admin" className={getLinkClass(pathname === '/admin')} title="Overview">
          <div
            className={`from-maroon/40 absolute inset-0 bg-gradient-to-r to-transparent transition-opacity ${pathname === '/admin' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          ></div>
          <svg className="relative z-10 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          {!isCollapsed && <span className="relative whitespace-nowrap">Overview</span>}
        </Link>

        <Link
          href="/admin/products"
          className={getLinkClass(pathname.startsWith('/admin/products'))}
          title="Catalog Manager"
        >
          <div
            className={`from-maroon/40 absolute inset-0 bg-gradient-to-r to-transparent transition-opacity ${pathname.startsWith('/admin/products') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          ></div>
          <svg
            className="relative z-10 h-5 w-5 shrink-0 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          {!isCollapsed && (
            <span className="relative whitespace-nowrap transition-transform group-hover:translate-x-1">
              Catalog Manager
            </span>
          )}
        </Link>

        <Link
          href="/admin/categories"
          className={getLinkClass(pathname.startsWith('/admin/categories'))}
          title="Categories"
        >
          <div
            className={`from-maroon/40 absolute inset-0 bg-gradient-to-r to-transparent transition-opacity ${pathname.startsWith('/admin/categories') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          ></div>
          <svg
            className="relative z-10 h-5 w-5 shrink-0 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          {!isCollapsed && (
            <span className="relative whitespace-nowrap transition-transform group-hover:translate-x-1">
              Categories
            </span>
          )}
        </Link>

        <Link
          href="/admin/inquiries"
          className={getLinkClass(pathname.startsWith('/admin/inquiries'))}
          title="Inquiries"
        >
          <div
            className={`from-maroon/40 absolute inset-0 bg-gradient-to-r to-transparent transition-opacity ${pathname.startsWith('/admin/inquiries') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          ></div>
          <svg
            className="relative z-10 h-5 w-5 shrink-0 transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          {!isCollapsed && (
            <span className="relative whitespace-nowrap transition-transform group-hover:translate-x-1">Inquiries</span>
          )}
        </Link>

        <div className="mt-8 border-t border-white/10 pt-8">
          {!isCollapsed && (
            <div className="mb-6 px-2 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">System</div>
          )}
          <Link
            href="/"
            className={`group flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-medium tracking-wide text-gray-400 transition-all hover:bg-white/5 hover:text-white ${
              isCollapsed ? 'justify-center px-0' : ''
            }`}
            title="Back to Storefront"
          >
            <svg
              className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {!isCollapsed && (
              <span className="whitespace-nowrap transition-transform group-hover:translate-x-1">
                Back to Storefront
              </span>
            )}
          </Link>
          <form action={handleLogout}>
            <button
              type="submit"
              className={`group mt-2 flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left text-sm font-medium tracking-wide text-red-400/80 transition-all hover:bg-red-500/10 hover:text-red-400 ${
                isCollapsed ? 'justify-center px-0' : ''
              }`}
              title="Secure Sign Out"
            >
              <svg
                className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              {!isCollapsed && (
                <span className="whitespace-nowrap transition-transform group-hover:translate-x-1">
                  Secure Sign Out
                </span>
              )}
            </button>
          </form>
        </div>
      </nav>

      {/* User Profile in Sidebar */}
      <div
        className={`relative mt-auto border-t border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all ${isCollapsed ? 'flex items-center justify-center p-4' : ''}`}
      >
        <div className={`flex items-center gap-4 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="from-maroon to-maroon-light text-gold flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-bold shadow-lg sm:h-12 sm:w-12">
            EV
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <p className="truncate text-sm font-bold tracking-wide text-white">Admin User</p>
              <p className="truncate text-[11px] font-medium text-gray-400">admin@evbrassware.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
