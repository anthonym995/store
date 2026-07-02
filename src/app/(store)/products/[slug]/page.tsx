import { products } from '@/lib/data/products';
import { Metadata } from 'next';
import ProductDetailsClient from '@/components/sections/ProductDetailsClient';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found | E.V. Brassware',
    };
  }

  return {
    title: `${product.name} | E.V. Brassware`,
    description: product.description,
    openGraph: {
      title: `${product.name} | E.V. Brassware`,
      description: product.description,
      images: [
        {
          url: typeof product.image === 'string' ? product.image : product.image?.src || '/logo.png',
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;

  return <ProductDetailsClient id={resolvedParams.slug} />;
}
