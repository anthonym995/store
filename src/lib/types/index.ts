import { StaticImageData } from 'next/image';

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

  // SEO Fields
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
  keywords?: string[];
}

export interface Category {
  id: string | number;
  title: string;
  desc: string;
  image: StaticImageData | string | any;
}
