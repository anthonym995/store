import { StaticImageData } from 'next/image';

export interface Product {
  id: number | string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  material: string;
  description: string;
  dimensions: string;
  price: number;
  unit: 'Piece' | 'kg' | 'Box' | 'Gram' | 'Meter';
  rating: number;
  reviews: number;
  image: StaticImageData | string | any;

  // SEO Fields
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface Category {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  image: StaticImageData | string | any;
}
