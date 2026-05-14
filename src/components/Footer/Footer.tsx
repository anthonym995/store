import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 pt-16 text-stone-800">
      <div className="container mx-auto grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-4">
          <div className="mb-4 flex flex-col items-start leading-none">
            <span className="font-display text-primary text-3xl font-extrabold tracking-wide">GIRI</span>
            <span className="mt-0.5 text-[0.7rem] tracking-[0.2em] text-stone-500 uppercase">TRADING</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-stone-600">
            Your one-stop destination for authentic pooja items, spiritual literature, and divine idols since 1951.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-6 text-lg font-semibold text-stone-900">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#categories" className="hover:text-primary text-stone-600 transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-primary text-stone-600 transition-colors">
                Featured Products
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary text-stone-600 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary text-stone-600 transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-6 text-lg font-semibold text-stone-900">Categories</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#books" className="hover:text-primary text-stone-600 transition-colors">
                Spiritual Books
              </Link>
            </li>
            <li>
              <Link href="#pooja" className="hover:text-primary text-stone-600 transition-colors">
                Pooja Items
              </Link>
            </li>
            <li>
              <Link href="#idols" className="hover:text-primary text-stone-600 transition-colors">
                Idols & Dolls
              </Link>
            </li>
            <li>
              <Link href="#jewellery" className="hover:text-primary text-stone-600 transition-colors">
                Temple Jewellery
              </Link>
            </li>
            <li>
              <Link href="#homam" className="hover:text-primary text-stone-600 transition-colors">
                Homam Items
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="mb-6 text-lg font-semibold text-stone-900">Stay Updated</h4>
          <p className="mb-4 text-sm text-stone-600">
            Subscribe to our newsletter for updates on new arrivals and special offers.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:border-primary flex-grow rounded border border-stone-300 bg-white px-4 py-2 text-sm text-stone-800 transition-colors focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark rounded px-5 py-2 text-sm font-semibold text-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-stone-200 py-6 text-center text-sm text-stone-600">
        <p>&copy; {new Date().getFullYear()} Giri Trading Demo. All rights reserved.</p>
        <p className="mt-1 text-xs text-stone-500">
          This is a demo website for display purposes only. No actual payments are processed.
        </p>
      </div>
    </footer>
  );
}
