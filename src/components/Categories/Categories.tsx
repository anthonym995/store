import Image from 'next/image';

const categories = [
  {
    id: 'books',
    title: 'Spiritual Books',
    description: 'Vedas, Upanishads, Bhagavad Gita, and spiritual literature in multiple languages.',
    image: 'https://placehold.co/600x600/f97316/ffffff/png?text=Spiritual+Books',
  },
  {
    id: 'pooja',
    title: 'Pooja Essentials',
    description: 'Incense, camphor, deepams, agarbathi, and necessary items for daily worship.',
    image: 'https://placehold.co/600x600/f97316/ffffff/png?text=Pooja+Items',
  },
  {
    id: 'idols',
    title: 'Idols & Golu Dolls',
    description: 'Beautifully crafted brass, panchaloha idols, and traditional Navaratri Golu dolls.',
    image: 'https://placehold.co/600x600/f97316/ffffff/png?text=Idols+&+Dolls',
  },
  {
    id: 'jewellery',
    title: 'Temple Jewellery',
    description: 'Traditional and authentic temple jewellery for deities and classical dance.',
    image: 'https://placehold.co/600x600/f97316/ffffff/png?text=Temple+Jewellery',
  },
  {
    id: 'homam',
    title: 'Homam & Yagna Items',
    description: 'Pure herbs, samagri, and essential items for conducting sacred homams and yagnas.',
    image: 'https://placehold.co/600x600/f97316/ffffff/png?text=Homam+Items',
  },
  {
    id: 'gifting',
    title: 'Divine & Corporate Gifting',
    description: 'Premium spiritual gifts and return gifts for weddings, housewarmings, and events.',
    image: 'https://placehold.co/600x600/f97316/ffffff/png?text=Divine+Gifting',
  },
  {
    id: 'yantra',
    title: 'Yantra & Tantra',
    description: 'Authentic yantras and spiritual items for positive energy and vastu.',
    image: 'https://placehold.co/600x600/f97316/ffffff/png?text=Yantras',
  },
  {
    id: 'clothing',
    title: 'Ethnic Wear',
    description: 'Traditional dhotis, sarees, and devotional clothing for temple visits.',
    image: 'https://placehold.co/600x600/f97316/ffffff/png?text=Ethnic+Wear',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold text-stone-800">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 lg:grid-cols-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group flex cursor-pointer flex-col items-center">
              <div className="group-hover:border-primary relative mb-3 h-24 w-24 overflow-hidden rounded-full border-2 border-transparent shadow-md transition-all group-hover:shadow-lg md:h-32 md:w-32">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="group-hover:text-primary text-center text-sm font-semibold text-stone-800 transition-colors md:text-base">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
