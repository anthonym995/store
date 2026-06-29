import { StaticImageData } from 'next/image';

// SEO fields for the Product
export interface ProductSEO {
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  keywords?: string[];
}

// The core Product model
export interface Product {
  id: number | string;
  name: string;
  category: string;
  material: string;
  description: string;
  dimensions: string;
  price: string;
  rating: string;
  image: StaticImageData | string | any;

  // Embedded SEO Object
  seo?: ProductSEO;
}
