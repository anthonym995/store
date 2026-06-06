import Image from 'next/image';

const categories = [
  {
    id: 'kuthu-vilakku',
    title: 'Traditional Kuthu Vilakku',
    image: 'https://placehold.co/600x600/1B4332/D4AF37/png?text=Brass+Lamps',
  },
  {
    id: 'silver-finish',
    title: 'Silver-Finish Lamps',
    image: 'https://placehold.co/600x600/1B4332/e2e8f0/png?text=Silver+Lamps',
  },
  {
    id: 'designer-diyas',
    title: 'Designer Brass Diyas',
    image: 'https://placehold.co/600x600/1B4332/D4AF37/png?text=Brass+Diyas',
  },
  {
    id: 'sacred-vessels',
    title: 'Sacred Ritual Vessels',
    image: 'https://placehold.co/600x600/1B4332/D4AF37/png?text=Ritual+Vessels',
  },
  {
    id: 'architectural',
    title: 'Architectural Lamps',
    image: 'https://placehold.co/600x600/1B4332/D4AF37/png?text=Pipe+Lamps',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="border-b border-stone-100 bg-white py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-[#081C15]">Explore Collections</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#D4AF37]"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat) => (
            <div key={cat.id} className="group flex max-w-[160px] cursor-pointer flex-col items-center">
              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#F9F9F6] shadow-sm transition-all group-hover:border-[#D4AF37] group-hover:shadow-xl md:h-40 md:w-40">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-sm font-bold text-[#081C15] transition-colors group-hover:text-[#2D6A4F] md:text-base">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
