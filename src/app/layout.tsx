import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import QueryProvider from '@/lib/QueryProvider';
import './globals.css';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'E.V. Brassware | Premium Cast Brassware & Sacred Vessels',
  description:
    'Preserving cultural heritage through premium cast brassware, sacred ritual vessels, and timeless lighting masterpieces. Crafted with devotion for generations.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
