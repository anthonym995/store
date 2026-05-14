import Image from "next/image";

const categories = [
  {
    id: "books",
    title: "Spiritual Books",
    description: "Vedas, Upanishads, Bhagavad Gita, and spiritual literature in multiple languages.",
    image: "https://placehold.co/600x600/f97316/ffffff/png?text=Spiritual+Books"
  },
  {
    id: "pooja",
    title: "Pooja Essentials",
    description: "Incense, camphor, deepams, agarbathi, and necessary items for daily worship.",
    image: "https://placehold.co/600x600/f97316/ffffff/png?text=Pooja+Items"
  },
  {
    id: "idols",
    title: "Idols & Golu Dolls",
    description: "Beautifully crafted brass, panchaloha idols, and traditional Navaratri Golu dolls.",
    image: "https://placehold.co/600x600/f97316/ffffff/png?text=Idols+&+Dolls"
  },
  {
    id: "jewellery",
    title: "Temple Jewellery",
    description: "Traditional and authentic temple jewellery for deities and classical dance.",
    image: "https://placehold.co/600x600/f97316/ffffff/png?text=Temple+Jewellery"
  },
  {
    id: "homam",
    title: "Homam & Yagna Items",
    description: "Pure herbs, samagri, and essential items for conducting sacred homams and yagnas.",
    image: "https://placehold.co/600x600/f97316/ffffff/png?text=Homam+Items"
  },
  {
    id: "gifting",
    title: "Divine & Corporate Gifting",
    description: "Premium spiritual gifts and return gifts for weddings, housewarmings, and events.",
    image: "https://placehold.co/600x600/f97316/ffffff/png?text=Divine+Gifting"
  },
  {
    id: "yantra",
    title: "Yantra & Tantra",
    description: "Authentic yantras and spiritual items for positive energy and vastu.",
    image: "https://placehold.co/600x600/f97316/ffffff/png?text=Yantras"
  },
  {
    id: "clothing",
    title: "Ethnic Wear",
    description: "Traditional dhotis, sarees, and devotional clothing for temple visits.",
    image: "https://placehold.co/600x600/f97316/ffffff/png?text=Ethnic+Wear"
  }
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10 font-bold text-stone-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group flex flex-col items-center cursor-pointer">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-primary transition-all shadow-md group-hover:shadow-lg">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-center text-stone-800 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
