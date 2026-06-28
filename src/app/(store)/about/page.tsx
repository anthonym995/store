import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { title } from '@/assets';

export const metadata: Metadata = {
  title: 'Our Heritage | E.V. Brassware',
  description:
    'Discover the legacy of E.V. Brassware. Generations of devotion crafted into premium cast brassware and sacred ritual vessels.',
  openGraph: {
    title: 'Our Heritage | E.V. Brassware',
    description:
      'Discover the legacy of E.V. Brassware. Generations of devotion crafted into premium cast brassware and sacred ritual vessels.',
    images: ['/logo.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fff8dc]">
      {/* Hero Section */}
      <section className="bg-maroon relative flex h-[60vh] min-h-[500px] w-full items-center justify-center overflow-hidden">
        {/* Background Overlay for the hero image placeholder */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src={title} alt="E.V. Brassware Workshop" fill className="object-cover" priority />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="mb-4 block font-sans text-sm font-bold tracking-[0.2em] text-[#af8742] uppercase">
            Since 1980
          </span>
          <h1 className="font-display mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl">
            A Legacy of Devotion <br /> & Craftsmanship
          </h1>
          <div className="mx-auto h-1 w-24 bg-[#af8742]"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-maroon mb-6 text-3xl font-bold md:text-4xl">
                Preserving Cultural Heritage
              </h2>
              <p className="mb-6 text-base leading-relaxed text-[#3f3024]">
                For over four decades, E.V. Brassware has been the custodian of India's rich metallurgical heritage.
                What began as a humble workshop of dedicated artisans has blossomed into a globally recognized symbol of
                purity and devotion.
              </p>
              <p className="mb-8 text-base leading-relaxed text-[#3f3024]">
                Our sacred vessels, intricately detailed Kuthu Vilakkus, and bespoke temple installations are not merely
                products; they are heirlooms crafted to withstand the test of time and carry forward the divine light to
                the next generation.
              </p>
              <Link
                href="/products"
                className="bg-maroon inline-flex items-center justify-center rounded-sm px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#7a1420]"
              >
                Explore The Catalog
              </Link>
            </div>

            <div className="relative aspect-square w-full shadow-2xl">
              <Image src="/logo.png" alt="Craftsmanship" fill className="bg-white object-contain p-12" />
              <div className="absolute -bottom-6 -left-6 border-4 border-white bg-[#f5e8cc] p-6 shadow-xl">
                <span className="font-display text-maroon text-4xl font-bold">40+</span>
                <p className="mt-1 text-sm font-bold tracking-widest text-[#af8742] uppercase">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Craftsmanship */}
      <section className="bg-[#f5e8cc] py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-maroon mb-4 text-3xl font-bold">The Pillars of Our Craft</h2>
            <div className="mx-auto h-1 w-16 bg-[#af8742]"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Value 1 */}
            <div className="border border-[#d4c1a0] bg-white p-8 text-center transition-transform hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff7e8] text-[#af8742]">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="font-display text-maroon mb-3 text-xl font-bold">Premium Materials</h3>
              <p className="text-sm leading-relaxed text-[#3f3024]">
                We source only the highest-grade cast brass, ensuring unparalleled durability and a high-glow mirror
                polish that never fades.
              </p>
            </div>
            {/* Value 2 */}
            <div className="border border-[#d4c1a0] bg-white p-8 text-center transition-transform hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff7e8] text-[#af8742]">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-display text-maroon mb-3 text-xl font-bold">Spiritual Sanctity</h3>
              <p className="text-sm leading-relaxed text-[#3f3024]">
                Every piece is meticulously designed with Vastu and Agamic principles in mind, turning metal into a
                vessel of pure devotion.
              </p>
            </div>
            {/* Value 3 */}
            <div className="border border-[#d4c1a0] bg-white p-8 text-center transition-transform hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff7e8] text-[#af8742]">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-display text-maroon mb-3 text-xl font-bold">Master Artisans</h3>
              <p className="text-sm leading-relaxed text-[#3f3024]">
                Crafted by generational experts whose hands carry the wisdom of centuries, delivering flawless
                perfection in every curve and motif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maroon py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display mb-6 text-3xl font-bold text-white md:text-4xl">Bring Divine Radiance Home</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base font-light text-[#e0e1dd]">
            Whether you are outfitting a grand temple or establishing a sacred space in your own home, E.V. Brassware is
            here to serve your spiritual needs.
          </p>
          <Link
            href="/contact"
            className="text-maroon inline-flex items-center justify-center rounded-sm bg-[#af8742] px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-[#f9d68d]"
          >
            Request a Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
