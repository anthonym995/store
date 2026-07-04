import { Metadata } from 'next';
import ProductDetailsClient from '@/components/sections/ProductDetailsClient';
import { fetchProductBySlug } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;

  let product = null;
  try {
    product = await fetchProductBySlug(resolvedParams.slug);
  } catch (error) {
    product = null;
  }

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

  return <ProductDetailsClient slug={resolvedParams.slug} />;
}
