import Image from 'next/image';
import { Metadata } from 'next';
import Link from '@/components/ui/Link';

export const metadata: Metadata = {
  title: 'About Us | E.V. Brassware Metal Work',
  description:
    'Learn about E.V. Brassware Metal Work — a premier trader & retailer of traditional Indian brassware, sacred ritual lamps, and ceremonial metalware. Led by V R, registered proprietorship.',
  openGraph: {
    title: 'About Us | E.V. Brassware Metal Work',
    description:
      'Preserving cultural heritage through premium brassware. Kuthu Vilakku, Diyas, Sacred Vessels and more.',
    images: ['/logo.png'],
  },
};

// ─── Fast Facts Data ─────────────────────────────────────────────────────────
const facts = [
  { label: 'Company Name', value: 'E.V. Brassware Metal Work' },
  { label: 'Business Nature', value: 'Trader & Retailer' },
  { label: 'Leadership', value: 'V R (CEO)' },
  { label: 'Legal Status', value: 'Registered Proprietorship' },
  { label: 'Core Speciality', value: 'Traditional Indian Brassware & Ritual Lamps' },
];

// ─── What We Offer Data ───────────────────────────────────────────────────────
const offerings = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'Traditional Kuthu Vilakku',
    description: 'Majestic, floor-standing multi-tier brass lamps perfect for homes, temples, and grand events.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: 'Silver-Finish Kuthu Vilakku',
    description: 'Elegant brass lamps enhanced with premium silver plating for a contemporary, luxurious aesthetic.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    title: 'Designer Metal & Brass Diyas',
    description: 'From traditional Kamatchi Amman and Samai diyas to artistic blooming lotus and floral table designs.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: 'Sacred Ritual Vessels',
    description: 'Authentically structured brass Kalash, lotas, and puja essentials designed with precision and care.',
  },
];

// ─── Promise Data ─────────────────────────────────────────────────────────────
const promises = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
    title: 'Premium Material Selection',
    description:
      'Every piece is sourced from premium-grade brass and casting metals, ensuring long-lasting durability and structural integrity.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: 'Flawless Craftsmanship',
    description:
      'Our collection features brilliant mirror-polish finishes, rich golden luster, and fine engravings that resist premature tarnishing.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
    title: 'Secure & Timely Delivery',
    description:
      'With a dedicated working space and organized warehousing, we ensure orders are packed securely and delivered safely to your doorstep on schedule.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fff8dc]">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-maroon relative flex h-[60vh] min-h-[480px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/banners/banner.png" alt="E.V. Brassware Heritage" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent via-[#3b0a0a]/10 to-[#3b0a0a]/20" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="mb-4 block font-sans text-sm font-bold tracking-[0.25em] text-[#ebd39e] uppercase">
            Our Heritage & Vision
          </span>
          <h1 className="font-display mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl">
            Tradition Meets <br className="hidden sm:block" /> Timeless Elegance
          </h1>
          <div className="mx-auto h-1 w-24 bg-[#af8742]" />
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#e0d5c0]">
            A premier retail house dedicated to bringing you the finest collection of sacred metalware, exquisite
            ceremonial lamps, and traditional artifacts.
          </p>
        </div>
      </section>

      {/* ── 2. HERITAGE & MISSION ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Text */}
            <div>
              <span className="mb-3 block text-xs font-bold tracking-[0.2em] text-[#af8742] uppercase">Who We Are</span>
              <h2 className="font-display text-maroon mb-6 text-3xl font-bold md:text-4xl">
                Preserving &amp; Celebrating Cultural Heritage
              </h2>
              <p className="mb-5 text-base leading-relaxed text-[#3f3024]">
                Welcome to <strong>E.V. Brassware Metal Work</strong>, where tradition meets timeless elegance. We are a
                premier retail house dedicated to bringing you the finest collection of sacred metalware, exquisite
                ceremonial lamps, and traditional artifacts.
              </p>
              <p className="mb-8 text-base leading-relaxed text-[#3f3024]">
                Our mission is to preserve and celebrate cultural heritage by providing beautifully crafted,
                high-quality metalware that adds a touch of divinity, warmth, and grace to your homes, temples, and
                celebrations.
              </p>
              <Link
                href="/products"
                className="bg-maroon hover:bg-maroon-light inline-flex items-center justify-center rounded-sm px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors"
              >
                Explore the Catalog
              </Link>
            </div>

            {/* Image / Badge */}
            <div className="relative aspect-square w-full shadow-2xl">
              <Image src="/logo.png" alt="E.V. Brassware Logo" fill className="bg-white object-contain p-12" />
              <div className="absolute -bottom-6 -left-6 border-4 border-white bg-[#f5e8cc] p-6 shadow-xl">
                <span className="font-display text-maroon text-4xl font-bold">40+</span>
                <p className="mt-1 text-sm font-bold tracking-widest text-[#af8742] uppercase">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE OFFER ─────────────────────────────────────────────────── */}
      <section className="bg-[#f5e8cc] py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <span className="mb-3 block text-xs font-bold tracking-[0.2em] text-[#af8742] uppercase">
              Our Catalogue
            </span>
            <h2 className="font-display text-maroon mb-4 text-3xl font-bold md:text-4xl">What We Offer</h2>
            <div className="mx-auto h-1 w-16 bg-[#af8742]" />
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#3f3024]">
              We curate an exclusive range of traditional and contemporary metalware designed to fulfill all your
              spiritual and decorative needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 border border-[#d4c1a0] bg-white p-8 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff7e8] text-[#af8742] transition-colors duration-300 group-hover:bg-[#af8742] group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-maroon text-lg leading-snug font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#3f3024]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE PROMISE ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <span className="mb-3 block text-xs font-bold tracking-[0.2em] text-[#af8742] uppercase">
              Our Standards
            </span>
            <h2 className="font-display text-maroon mb-4 text-3xl font-bold md:text-4xl">The E.V. Brassware Promise</h2>
            <div className="mx-auto h-1 w-16 bg-[#af8742]" />
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#3f3024]">
              Quality is at the core of everything we do. We understand our products hold deep spiritual and emotional
              value, which is why we adhere to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {promises.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center border border-[#d4c1a0] bg-[#f5e8cc] p-8 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#af8742] text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-maroon mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#3f3024]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAST FACTS ────────────────────────────────────────────────────── */}
      <section className="bg-[#3b0a0a] py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="mb-3 block text-xs font-bold tracking-[0.2em] text-[#af8742] uppercase">
              Quick Reference
            </span>
            <h2 className="font-display text-3xl font-bold text-white">Fast Facts About Us</h2>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-[#6b2222] shadow-2xl">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex flex-col gap-1 px-8 py-5 sm:flex-row sm:items-center sm:gap-0 ${
                  i % 2 === 0 ? 'bg-[#2a0707]' : 'bg-[#3b0a0a]'
                } border-b border-[#6b2222] last:border-b-0`}
              >
                <span className="min-w-[200px] text-xs font-bold tracking-widest text-[#af8742] uppercase sm:text-sm">
                  {fact.label}
                </span>
                <span className="text-sm font-semibold text-[#fdfbf7] sm:text-base">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-maroon py-20 text-center">
        <div className="container mx-auto px-6">
          <span className="mb-4 block text-xs font-bold tracking-[0.2em] text-[#ebd39e] uppercase">Get in Touch</span>
          <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-4xl">Let's Illuminate Together</h2>
          <div className="mx-auto mb-6 h-1 w-16 bg-[#af8742]" />
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#e0d5c0]">
            Whether you are setting up a daily puja altar, decorating a wedding venue, upgrading temple decor, or
            looking for a premium heirloom gift — we are here to provide the perfect piece. Have questions or need a
            custom quote?
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="text-maroon inline-flex items-center justify-center rounded-sm bg-[#af8742] px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-[#f9d68d]"
            >
              Request a Custom Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-sm border border-[#af8742] px-8 py-4 text-sm font-bold tracking-widest text-[#ebd39e] uppercase transition-colors hover:bg-[#af8742] hover:text-[#3b0a0a]"
            >
              Browse Our Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
