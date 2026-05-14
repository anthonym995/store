import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Utility Bar - White */}
      <div className="bg-white border-b border-stone-200 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start leading-none">
              <span className="font-display text-3xl font-extrabold text-primary tracking-wide">GIRI</span>
            </Link>
          </div>

          {/* Search Bar Placeholder */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="flex w-full border-2 border-primary rounded-md overflow-hidden">
              <input type="text" placeholder="Search for products, categories..." className="w-full px-4 py-2 focus:outline-none" />
              <button className="bg-primary text-white px-6 font-semibold hover:bg-primary-dark transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#track" className="hidden lg:block hover:text-primary transition-colors">🚚 Track My Order</a>
            <a href="#login" className="hover:text-primary transition-colors">Login</a>
            <a href="#cart" className="hover:text-primary transition-colors font-bold">Cart (0)</a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Dark Teal */}
      <div className="bg-primary text-white">
        <div className="container mx-auto">
          <nav className="flex overflow-x-auto hide-scrollbar">
            <ul className="flex items-center whitespace-nowrap py-3 list-none">
              <li>
                <Link href="#books" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">
                  Spiritual Books
                </Link>
              </li>
              <li>
                <Link href="#pooja" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">
                  Pooja & Rituals
                </Link>
              </li>
              <li>
                <Link href="#idols" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">
                  Idols & Dolls
                </Link>
              </li>
              <li>
                <Link href="#gifting" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">
                  Divine Gifts
                </Link>
              </li>
              <li>
                <Link href="#jewellery" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">
                  Temple Jewellery
                </Link>
              </li>
              <li>
                <Link href="#clothing" className="px-4 py-2 hover:bg-primary-dark rounded transition-colors text-sm font-semibold">
                  Ethnic Wear
                </Link>
              </li>
              <li className="ml-auto">
                <a href="#contact" className="px-4 py-1.5 border border-white rounded hover:bg-white hover:text-primary transition-colors text-sm font-semibold ml-4">
                  Request Quote
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
