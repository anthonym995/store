import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
      
      <div className="container relative z-10 text-center max-w-4xl text-white animate-[fadeIn_1s_ease-out]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
          Embrace the Divine Spirit
        </h1>
        <p className="text-base md:text-xl mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto drop-shadow">
          Discover authentic pooja essentials, sacred idols, and spiritual literature to elevate your daily prayers and rituals.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#products" className="inline-flex items-center justify-center px-8 py-3 rounded font-bold transition-all bg-primary hover:bg-primary-dark text-white text-sm uppercase tracking-wide">
            Explore Collection
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded font-bold transition-all border-2 border-white text-white hover:bg-white hover:text-primary text-sm uppercase tracking-wide">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
