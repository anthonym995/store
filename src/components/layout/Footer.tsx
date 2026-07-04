import Link from '@/components/ui/Link';

export default function Footer() {
  return (
    <footer className="border-gold bg-navy border-t-4 pt-16 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:grid-cols-12">
        {/* Brand */}
        <div className="flex flex-col lg:col-span-4">
          <div className="mb-6 flex flex-col items-start leading-none">
            <span className="font-display text-gold text-2xl font-extrabold tracking-widest uppercase">
              E.V. Brassware
            </span>
            <span className="mt-1 text-[0.65rem] font-bold tracking-[0.3em] text-white uppercase">Metal Work</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-300">
            A registered proprietorship led by V R, dedicated to preserving cultural heritage through premium cast
            brassware, sacred ritual vessels, and timeless ceremonial lamps.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="font-display mb-6 text-sm font-bold tracking-widest text-white uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-stone-300">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gold transition-colors">
                Catalog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/admin/login" className="hover:text-gold transition-colors">
                Partner Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Collections */}
        <div className="lg:col-span-2">
          <h4 className="font-display mb-6 text-sm font-bold tracking-widest text-white uppercase">Collections</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-stone-300">
            <li>
              <Link href="/products?category=Kuthu+Vilakku" className="hover:text-gold transition-colors">
                Kuthu Vilakku
              </Link>
            </li>
            <li>
              <Link href="/products?category=Diya" className="hover:text-gold transition-colors">
                Diyas
              </Link>
            </li>
            <li>
              <Link href="/products?category=Vessel" className="hover:text-gold transition-colors">
                Sacred Vessels
              </Link>
            </li>
            <li>
              <Link href="/products?category=Designer" className="hover:text-gold transition-colors">
                Designer Items
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-4">
          <h4 className="font-display mb-6 text-sm font-bold tracking-widest text-white uppercase">Get in Touch</h4>
          <p className="mb-5 text-xs leading-relaxed font-light text-stone-400">
            For wholesale inquiries, bulk orders, custom temple installations, or corporate gifting — we're here to
            help.
          </p>
          <div className="flex flex-col gap-3 text-sm font-light text-stone-300">
            <p className="flex items-center gap-2">
              <span className="text-gold font-semibold">Email:</span>
              <a href="mailto:evbrassware@gmail.com" className="hover:text-gold transition-colors">
                evbrassware@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gold font-semibold">Phone:</span>
              <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-navy-light mt-16 border-t border-white/10 py-6 text-center text-xs font-light tracking-wider text-stone-400">
        <p>&copy; {new Date().getFullYear()} E.V. Brassware Metal Work. All rights reserved.</p>
      </div>
    </footer>
  );
}
