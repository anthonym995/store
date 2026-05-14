import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/2f5b5d/ffffff/png?text=Divine+Spirit"
          alt="Traditional Pooja Lamps"
          fill
          unoptimized
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container max-w-4xl animate-[fadeIn_1s_ease-out] text-center text-white">
        <h1 className="mb-6 text-4xl leading-tight font-bold text-white drop-shadow-lg md:text-6xl">
          Embrace the Divine Spirit
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed opacity-90 drop-shadow md:text-xl">
          Discover authentic pooja essentials, sacred idols, and spiritual literature to elevate your daily prayers and
          rituals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#products"
            className="bg-primary hover:bg-primary-dark inline-flex items-center justify-center rounded px-8 py-3 text-sm font-bold tracking-wide text-white uppercase transition-all"
          >
            Explore Collection
          </a>
          <a
            href="#contact"
            className="hover:text-primary inline-flex items-center justify-center rounded border-2 border-white px-8 py-3 text-sm font-bold tracking-wide text-white uppercase transition-all hover:bg-white"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
