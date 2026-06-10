import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#d4af37] bg-[#001524] pt-16 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-4">
          <div className="mb-6 flex flex-col items-start leading-none">
            <span className="font-display text-2xl font-extrabold tracking-widest text-[#d4af37] uppercase">
              E.V. Brassware
            </span>
            <span className="mt-1 text-[0.65rem] font-bold tracking-[0.3em] text-white uppercase">Metal Work</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-300">
            Preserving cultural heritage through premium cast brassware, sacred ritual vessels, and timeless lighting
            masterpieces. Crafted with devotion for generations.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display mb-6 text-sm font-bold tracking-widest text-white uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-stone-300">
            <li>
              <Link href="/products" className="transition-colors hover:text-[#d4af37]">
                Catalog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition-colors hover:text-[#d4af37]">
                Get a Quote
              </Link>
            </li>
            <li>
              <Link href="/admin/login" className="transition-colors hover:text-[#d4af37]">
                Partner Portal
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display mb-6 text-sm font-bold tracking-widest text-white uppercase">Collections</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-stone-300">
            <li>
              <Link href="#kuthu-vilakku" className="transition-colors hover:text-[#d4af37]">
                Kuthu Vilakku
              </Link>
            </li>
            <li>
              <Link href="#diyas" className="transition-colors hover:text-[#d4af37]">
                Designer Diyas
              </Link>
            </li>
            <li>
              <Link href="#sacred-vessels" className="transition-colors hover:text-[#d4af37]">
                Sacred Vessels
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display mb-6 text-sm font-bold tracking-widest text-white uppercase">
            Download & Connect
          </h4>
          <p className="mb-4 text-xs font-light text-stone-400">
            Reach out to us directly for wholesale inquiries and bespoke temple installations.
          </p>
          <div className="flex flex-col gap-2 text-sm font-light text-stone-300">
            <p>
              <span className="mr-2 font-semibold text-[#d4af37]">Email:</span> inquiry@evbrassware.com
            </p>
            <p>
              <span className="mr-2 font-semibold text-[#d4af37]">Phone:</span> +91 98765 43210
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0a2239] py-5 text-center text-xs font-light tracking-wider text-stone-400">
        <p>&copy; {new Date().getFullYear()} E.V. Brassware Metal Work. All rights reserved.</p>
      </div>
    </footer>
  );
}
