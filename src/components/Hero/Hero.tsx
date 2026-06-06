import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#081C15]">
        <Image
          src="https://placehold.co/1920x1080/1B4332/D4AF37/png?text=Divine+Brass+Craftsmanship"
          alt="Traditional Brass Kuthu Vilakku"
          fill
          unoptimized
          priority
          className="object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container max-w-4xl animate-[fadeIn_1s_ease-out] text-center text-white">
        <span className="mb-4 block text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
          Auspicious Heritage, Timeless Devotion
        </span>
        <h1 className="font-display mb-6 text-4xl leading-tight font-bold text-white drop-shadow-lg md:text-6xl">
          Premium Sacred Metalware
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-stone-200 drop-shadow md:text-xl">
          Discover our exclusive collection of traditional Kuthu Vilakku, designer diyas, and authentic ritual vessels
          engineered with high-grade casting brass.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded bg-[#D4AF37] px-8 py-3 text-sm font-bold tracking-wide text-[#081C15] uppercase shadow-lg transition-all hover:bg-[#AA8C2C]"
          >
            Explore Catalog
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded border-2 border-white px-8 py-3 text-sm font-bold tracking-wide text-white uppercase transition-all hover:bg-white hover:text-[#1B4332]"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
