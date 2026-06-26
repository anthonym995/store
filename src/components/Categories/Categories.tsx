import Image from 'next/image';
import { products } from '@/data/products';

const kuthuVilakkuImage = products.find(p => p.category.includes('Kuthu Vilakku'))?.image;
const diyaImage = products.find(p => p.category.includes('Diya'))?.image;
const kalashImage = products.find(p => p.category.includes('Kalash'))?.image;
const designerImage = products.find(p => p.category.includes('Pipe Lamp'))?.image;

const categories = [
  {
    id: 'kuthu-vilakku',
    title: 'Kuthu Vilakku',
    desc: 'Traditional Brass & Silver Lamps',
    image: kuthuVilakkuImage || '/images/WhatsApp Image 2026-04-25 at 12.59.05 PM.jpeg',
  },
  {
    id: 'diyas',
    title: 'Diyas',
    desc: 'Metal & Brass Diyas',
    image: diyaImage || '/images/WhatsApp Image 2026-04-25 at 12.59.04 PM.jpeg',
  },
  {
    id: 'vessels',
    title: 'Sacred Vessels',
    desc: 'Brass Kalash & Ritual Items',
    image: kalashImage || '/images/WhatsApp Image 2026-04-25 at 12.59.03 PM.jpeg',
  },
  {
    id: 'designer',
    title: 'Designer Items',
    desc: 'Premium Pipe Lamps',
    image: designerImage || 'https://placehold.co/100x100/fcf9ef/d4af37/png?text=Designer',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-cream py-16">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold tracking-wider text-navy uppercase lg:text-3xl">
            Our Collections
          </h2>
          <p className="mt-2 text-sm text-navy italic">A legacy of pure craftsmanship</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group flex cursor-pointer items-center gap-6 rounded-full border border-cream-dark bg-white p-3 pr-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border border-gold/30 md:h-20 md:w-20">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold tracking-wide text-navy uppercase md:text-base">{cat.title}</h3>
                <p className="mt-0.5 text-xs text-stone-500 md:text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
