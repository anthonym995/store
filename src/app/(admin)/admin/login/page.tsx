'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate network delay
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        document.cookie = 'admin-auth=true; path=/; max-age=86400';
        router.push('/admin');
        router.refresh();
      } else {
        setError('Invalid credentials');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="animate-in fade-in flex min-h-screen flex-col justify-center bg-[#F9F9F6] py-12 font-sans duration-500 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-6 flex flex-col items-center leading-none">
          <span className="font-display text-3xl font-extrabold tracking-widest text-[#081C15] uppercase">
            E.V. Brassware
          </span>
          <span className="mt-1 text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Partner Portal</span>
        </div>
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#1B4332]">Secure Dashboard Access</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border border-stone-200 bg-white px-4 py-8 shadow-xl sm:rounded sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="username" className="block text-xs font-bold tracking-wide text-[#2D6A4F] uppercase">
                Username
              </label>
              <div className="relative mt-1.5">
                <input
                  id="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full appearance-none rounded border border-stone-300 bg-[#F9F9F6] px-4 py-3 shadow-sm transition-colors focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none sm:text-sm"
                  placeholder="Enter admin"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold tracking-wide text-[#2D6A4F] uppercase">
                Password
              </label>
              <div className="relative mt-1.5">
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded border border-stone-300 bg-[#F9F9F6] px-4 py-3 shadow-sm transition-colors focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none sm:text-sm"
                  placeholder="Enter admin"
                />
              </div>
            </div>

            {error && (
              <div className="animate-in fade-in slide-in-from-top-2 rounded border border-red-200 bg-red-50 p-3">
                <h3 className="text-center text-sm font-semibold text-red-800">{error}</h3>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded bg-[#1B4332] px-4 py-3.5 text-sm font-bold tracking-widest text-[#D4AF37] uppercase shadow-md transition-all hover:bg-[#081C15] focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:outline-none active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? 'Authenticating...' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="mt-8 border-t border-stone-100 pt-6 text-center">
            <p className="text-xs font-medium text-stone-500">
              Demo Access: <span className="font-bold text-[#1B4332]">admin</span> /{' '}
              <span className="font-bold text-[#1B4332]">admin</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
