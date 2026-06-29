import { StaticImageData } from 'next/image';

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
  
  // SEO Fields (Flattened)
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
  keywords?: string[];
}
