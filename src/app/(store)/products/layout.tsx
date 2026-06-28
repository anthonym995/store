import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masterpiece Catalog | E.V. Brassware',
  description: 'Browse our extensive collection of heavy-duty brass kuthu vilakku, designer diyas, and authentic ritual vessels.',
  openGraph: {
    title: 'Masterpiece Catalog | E.V. Brassware',
    description: 'Browse our extensive collection of heavy-duty brass kuthu vilakku, designer diyas, and authentic ritual vessels.',
    images: ['/logo.png'],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
