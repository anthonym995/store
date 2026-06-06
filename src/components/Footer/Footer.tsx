import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#081C15] pt-16 text-stone-400">
      <div className="container mx-auto grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-4">
          <div className="mb-4 flex flex-col items-start leading-none">
            <span className="font-display text-3xl font-extrabold tracking-widest text-white uppercase">
              E.V. Brassware
            </span>
            <span className="mt-1 text-[0.7rem] font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Metal Work</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-400">
            Preserving cultural heritage through premium cast brassware, sacred ritual vessels, and timeless lighting
            masterpieces. Crafted with devotion for generations.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display mb-6 text-lg font-semibold tracking-wide text-[#D4AF37]">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#products" className="transition-colors hover:text-white">
                Masterpiece Catalog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition-colors hover:text-white">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link href="/admin/login" className="transition-colors hover:text-white">
                Partner Login
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display mb-6 text-lg font-semibold tracking-wide text-[#D4AF37]">Collections</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#kuthu-vilakku" className="transition-colors hover:text-white">
                Traditional Kuthu Vilakku
              </Link>
            </li>
            <li>
              <Link href="#silver-finish" className="transition-colors hover:text-white">
                Silver-Finish Lamps
              </Link>
            </li>
            <li>
              <Link href="#diyas" className="transition-colors hover:text-white">
                Designer Brass Diyas
              </Link>
            </li>
            <li>
              <Link href="#sacred-vessels" className="transition-colors hover:text-white">
                Sacred Ritual Vessels
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display mb-6 text-lg font-semibold tracking-wide text-[#D4AF37]">Stay Illuminated</h4>
          <p className="mb-4 text-sm text-stone-400">
            Subscribe to our catalog updates for new mastercrafted arrivals and exclusive wholesale offers.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full flex-grow rounded border border-[#2D6A4F] bg-[#1B4332] px-4 py-2.5 text-sm text-white transition-colors focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded bg-[#D4AF37] px-6 py-2.5 text-sm font-bold tracking-wider text-[#081C15] uppercase transition-colors hover:bg-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#1B4332] bg-[#05110C] py-6 text-center text-sm text-stone-500">
        <p>&copy; {new Date().getFullYear()} E.V. Brassware Metal Work. All rights reserved.</p>
      </div>
    </footer>
  );
}
