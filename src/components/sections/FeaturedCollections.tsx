import Image from 'next/image';
import items from '@/lib/data/FeaturedCollections';

export default function FeaturedCollections() {
  return (
    <section className="bg-cream w-full px-4 py-20 text-[#2C2520] md:px-8">
      {/* Editorial Heading */}
      <div className="mb-14 text-center">
        <h2 className="font-serif text-2xl font-semibold tracking-[0.12em] text-[#540B12] uppercase sm:text-3xl md:text-4xl md:tracking-[0.18em]">
          FEATURED COLLECTIONS
        </h2>
        <p className="mx-auto mt-2 max-w-xl font-sans text-xs tracking-widest text-[#705E54] uppercase md:text-sm">
          Exquisite Craftsmanship & Timeless Design
        </p>
      </div>

      {/* Structured 4-Column Asymmetrical Grid Base Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`group relative flex flex-col overflow-hidden rounded-md border border-[#DDD3C7] bg-[#ECE4DA] shadow-sm transition-all duration-500 hover:shadow-md ${item.cardClass}`}
          >
            {/* Category Ribbon Pill Tag */}
            <div className="bg-brown absolute top-0 right-0 z-10 rounded-bl-xl px-5 py-2 text-center shadow-sm">
              <span className="font-serif text-[10px] font-medium tracking-[0.15em] text-white uppercase">
                {item.tag}
              </span>
            </div>

            {/* Custom Pedestal Platform Shadow */}
            <div className="pointer-events-none absolute bottom-10 left-1/2 h-[50px] w-[80%] -translate-x-1/2 rounded-full bg-linear-to-b from-[#D3C8BC] to-transparent opacity-75 blur-md" />

            {/* Asset Framework Window Container */}
            <div className={`absolute inset-0 flex ${item.imgContainerClass}`}>
              <div
                className={`relative transition-transform duration-700 ease-out group-hover:scale-[1.04] ${item.imgInnerClass}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-center drop-shadow-[0_12px_25px_rgba(139,122,105,0.4)]"
                />
              </div>
            </div>

            {/* Dynamic Typography Overlay Block */}
            <div className={`absolute z-10 w-[45%] md:w-[40%] ${item.textClass}`}>
              <h3 className="font-serif text-lg leading-tight font-semibold tracking-[0.02em] text-[#33251E] sm:text-xl md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1 line-clamp-2 font-sans text-xs tracking-wide text-[#705E54] md:text-sm">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
