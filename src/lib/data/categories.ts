import { products } from '@/lib/data/products';
import { Category } from '@/lib/types';

const kuthuVilakkuImage = products.find((p) => p.category.includes('Kuthu Vilakku'))?.image;
const diyaImage = products.find((p) => p.category.includes('Diya'))?.image;
const kalashImage = products.find((p) => p.category.includes('Kalash'))?.image;
const designerImage = products.find((p) => p.category.includes('Pipe Lamp'))?.image;

export const categories: Category[] = [
  {
    id: 1,
    title: 'Kuthu Vilakku',
    slug: 'kuthu-vilakku',
    description: 'Traditional Brass & Silver Lamps',
    image: kuthuVilakkuImage,
  },
  {
    id: 2,
    title: 'Designer Items',
    slug: 'designer-items',
    description: 'Premium Pipe Lamps',
    image: designerImage,
  },
  {
    id: 3,
    title: 'Diyas',
    slug: 'diyas',
    description: 'Metal & Brass Diyas',
    image: diyaImage,
  },
  {
    id: 4,
    title: 'Sacred Vessels',
    slug: 'sacred-vessels',
    description: 'Brass Kalash & Ritual Items',
    image: kalashImage,
  },
];
