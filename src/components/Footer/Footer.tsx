import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 text-stone-800 pt-16 border-t border-stone-200">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
        <div className="flex flex-col lg:col-span-4">
          <div className="flex flex-col items-start leading-none mb-4">
            <span className="font-display text-3xl font-extrabold text-primary tracking-wide">GIRI</span>
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-stone-500 mt-0.5">TRADING</span>
          </div>
          <p className="text-stone-600 leading-relaxed max-w-xs text-sm">
            Your one-stop destination for authentic pooja items, spiritual literature, and divine idols since 1951.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-lg font-semibold mb-6 text-stone-900">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="#categories" className="text-stone-600 hover:text-primary transition-colors">Categories</Link></li>
            <li><Link href="#products" className="text-stone-600 hover:text-primary transition-colors">Featured Products</Link></li>
            <li><Link href="#contact" className="text-stone-600 hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="text-stone-600 hover:text-primary transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-lg font-semibold mb-6 text-stone-900">Categories</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="#books" className="text-stone-600 hover:text-primary transition-colors">Spiritual Books</Link></li>
            <li><Link href="#pooja" className="text-stone-600 hover:text-primary transition-colors">Pooja Items</Link></li>
            <li><Link href="#idols" className="text-stone-600 hover:text-primary transition-colors">Idols & Dolls</Link></li>
            <li><Link href="#jewellery" className="text-stone-600 hover:text-primary transition-colors">Temple Jewellery</Link></li>
            <li><Link href="#homam" className="text-stone-600 hover:text-primary transition-colors">Homam Items</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-lg font-semibold mb-6 text-stone-900">Stay Updated</h4>
          <p className="text-stone-600 mb-4 text-sm">Subscribe to our newsletter for updates on new arrivals and special offers.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded border border-stone-300 bg-white text-stone-800 focus:outline-none focus:border-primary transition-colors text-sm"
              required
            />
            <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded font-semibold transition-colors text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-stone-200 py-6 text-center text-sm text-stone-600">
        <p>&copy; {new Date().getFullYear()} Giri Trading Demo. All rights reserved.</p>
        <p className="mt-1 text-xs text-stone-500">This is a demo website for display purposes only. No actual payments are processed.</p>
      </div>
    </footer>
  );
}
