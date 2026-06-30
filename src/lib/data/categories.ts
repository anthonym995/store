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
    desc: 'Traditional Brass & Silver Lamps',
    image: kuthuVilakkuImage || '/images/WhatsApp Image 2026-04-25 at 12.59.05 PM.jpeg',
  },
  {
    id: 2,
    title: 'Designer Items',
    desc: 'Premium Pipe Lamps',
    image: designerImage || 'https://placehold.co/100x100/fcf9ef/d4af37/png?text=Designer',
  },
  {
    id: 3,
    title: 'Diyas',
    desc: 'Metal & Brass Diyas',
    image: diyaImage || '/images/WhatsApp Image 2026-04-25 at 12.59.04 PM.jpeg',
  },
  {
    id: 4,
    title: 'Sacred Vessels',
    desc: 'Brass Kalash & Ritual Items',
    image: kalashImage || '/images/WhatsApp Image 2026-04-25 at 12.59.03 PM.jpeg',
  },
];
