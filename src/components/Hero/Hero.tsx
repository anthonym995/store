import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#fcf9ef]">
      {/* Main Container. Column on mobile, row on large.
        The overall container defines the height context: 
        minimum 60vh on mobile, and exactly 80vh on large screens for a predictable, robust hero.
      */}
      <div className="flex min-h-[60vh] flex-col lg:h-[80vh] lg:flex-row">
        {/* Left Side: Copy & CTA */}
        {/* Centered content. Ensuring this side also fills vertical space (lg:h-full)
          for proper vertical centering against the image. 
        */}
        <div className="flex w-full flex-col justify-center px-8 py-16 lg:h-full lg:w-1/2 lg:p-20 xl:p-32">
          <span className="mb-4 block font-sans text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Auspicious Heritage
          </span>
          <h1 className="font-display mb-6 text-4xl leading-tight font-normal text-[#001524] lg:text-6xl">
            Masterpiece <br />
            <span className="font-semibold text-[#d4af37]">Brassware</span>
          </h1>
          <p className="mb-10 max-w-md text-base leading-relaxed text-[#001524]">
            Discover our exclusive collection of traditional Kuthu Vilakku, designer diyas, and authentic ritual vessels
            engineered with high-grade casting brass.
          </p>
          <div className="flex gap-4">
            <a
              href="/products"
              className="bg-[#5a0b14] px-8 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#001524]"
            >
              Explore Collection
            </a>
          </div>
        </div>

        {/* Right Side: Showcase Image */}
        {/* CRITICAL: Image parent must be `relative` and have explicit height and width 
          constraints for a `fill` image to work correctly.
          - We use `h-full` on desktop so it perfectly fills the `80vh` parent container.
          - Setting `min-h-[400px]` on mobile provides space for the image to display above/below.
        */}
        <div className="relative h-full min-h-[400px] w-full lg:w-1/2">
          <Image src="/hero.png" alt="Tall Brass Lamp" fill className="object-cover object-center" priority />
        </div>
      </div>
    </section>
  );
}
