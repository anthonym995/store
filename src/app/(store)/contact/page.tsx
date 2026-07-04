import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | E.V. Brassware',
  description:
    'Get in touch with E.V. Brassware for wholesale inquiries, custom bespoke temple installations, and corporate gifting.',
  openGraph: {
    title: 'Contact Us | E.V. Brassware',
    description:
      'Get in touch with E.V. Brassware for wholesale inquiries, custom bespoke temple installations, and corporate gifting.',
    images: ['/logo.png'],
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fff8dc]">
      {/* Header Section */}
      <section className="bg-maroon py-20 text-center">
        <div className="container mx-auto px-6">
          <span className="mb-4 block font-sans text-sm font-bold tracking-[0.2em] text-[#af8742] uppercase">
            Get In Touch
          </span>
          <h1 className="font-display mb-6 text-4xl font-bold text-white md:text-5xl">Contact E.V. Brassware</h1>
          <div className="mx-auto h-1 w-24 bg-[#af8742]"></div>
        </div>
      </section>

      {/* 4 Info Cards Strip */}
      <section className="border-b border-[#d4c1a0] bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email */}
            <div className="flex flex-col gap-3 border border-[#d4c1a0] bg-[#fff8dc] p-7 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3 text-[#af8742]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="font-display text-maroon text-lg font-bold">Email Us</h3>
              </div>
              <a
                href="mailto:evbrassware@gmail.com"
                className="text-maroon hover:text-maroon-light text-sm font-semibold transition-colors"
              >
                evbrassware@gmail.com
              </a>
              <p className="text-xs leading-relaxed text-[#3f3024]">We reply to all inquiries within 24 hours.</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3 border border-[#d4c1a0] bg-[#fff8dc] p-7 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3 text-[#af8742]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h3 className="font-display text-maroon text-lg font-bold">Call Us</h3>
              </div>
              <a
                href="tel:+919876543210"
                className="text-maroon hover:text-maroon-light text-sm font-semibold transition-colors"
              >
                +91 98765 43210
              </a>
              <p className="text-xs leading-relaxed text-[#3f3024]">Mon–Sat, 9:00 AM – 6:00 PM IST.</p>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-3 border border-[#d4c1a0] bg-[#fff8dc] p-7 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3 text-[#af8742]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <h3 className="font-display text-maroon text-lg font-bold">WhatsApp</h3>
              </div>
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20brassware%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon hover:text-maroon-light text-sm font-semibold transition-colors"
              >
                Chat Instantly
              </a>
              <p className="text-xs leading-relaxed text-[#3f3024]">Quick replies for orders &amp; product queries.</p>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col gap-3 border border-[#d4c1a0] bg-[#fff8dc] p-7 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3 text-[#af8742]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-display text-maroon text-lg font-bold">Business Hours</h3>
              </div>
              <p className="text-maroon text-sm font-semibold">Mon – Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-xs leading-relaxed text-[#3f3024]">
                Sunday: Closed &nbsp;·&nbsp; IST (India Standard Time).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Info Cards */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              <div>
                <h2 className="font-display text-maroon mb-4 text-3xl font-bold">How can we help you?</h2>
                <p className="text-base leading-relaxed text-[#3f3024]">
                  Whether you are looking for bulk wholesale orders, bespoke architectural installations for temples, or
                  corporate gifting solutions, our dedicated team is here to assist you.
                </p>
              </div>

              <div className="border-l-4 border-[#af8742] bg-[#fff8dc] p-6 shadow-sm">
                <p className="text-sm font-bold text-[#3f3024]">Registered Proprietorship</p>
                <p className="mt-1 text-xs text-[#705040]">E.V. Brassware Metal Work</p>
                <p className="mt-1 text-xs text-[#705040]">Trader & Retailer · Led by V R (CEO)</p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20brassware%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#25D366] px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:evbrassware@gmail.com"
                  className="bg-maroon hover:bg-maroon-light inline-flex items-center justify-center gap-3 rounded-sm px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send an Email
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="border border-[#d4c1a0] bg-white p-8 shadow-xl lg:col-span-7 lg:p-12">
              <h3 className="font-display text-maroon mb-8 text-2xl font-bold">Send an Inquiry</h3>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-maroon text-xs font-bold tracking-widest uppercase">Full Name</label>
                    <input
                      type="text"
                      className="border border-[#d4c1a0] bg-[#fffbf3] px-4 py-3 transition-colors outline-none focus:border-[#af8742] focus:ring-1 focus:ring-[#af8742]"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-maroon text-xs font-bold tracking-widest uppercase">Email Address</label>
                    <input
                      type="email"
                      className="border border-[#d4c1a0] bg-[#fffbf3] px-4 py-3 transition-colors outline-none focus:border-[#af8742] focus:ring-1 focus:ring-[#af8742]"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-maroon text-xs font-bold tracking-widest uppercase">Inquiry Type</label>
                  <select className="border border-[#d4c1a0] bg-[#fffbf3] px-4 py-3 transition-colors outline-none focus:border-[#af8742] focus:ring-1 focus:ring-[#af8742]">
                    <option>Bulk / Wholesale Order</option>
                    <option>Bespoke / Custom Temple Design</option>
                    <option>Corporate Gifting</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-maroon text-xs font-bold tracking-widest uppercase">
                    Message / Requirements
                  </label>
                  <textarea
                    rows={5}
                    className="border border-[#d4c1a0] bg-[#fffbf3] px-4 py-3 transition-colors outline-none focus:border-[#af8742] focus:ring-1 focus:ring-[#af8742]"
                    placeholder="Tell us about your requirements, dimensions, or specific design needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-maroon hover:bg-maroon-light mt-4 inline-flex items-center justify-center rounded-sm px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-maroon py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What Happens Next?</h2>
            <div className="mx-auto mt-3 h-1 w-12 bg-[#af8742]" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="font-display text-5xl font-bold text-[#af8742] opacity-70">01</span>
              <h3 className="font-display text-lg font-bold text-white">We Receive</h3>
              <p className="text-sm leading-relaxed text-[#e0d5c0]">
                Your inquiry lands directly in our inbox. Every message is read by our team personally.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="font-display text-5xl font-bold text-[#af8742] opacity-70">02</span>
              <h3 className="font-display text-lg font-bold text-white">We Review</h3>
              <p className="text-sm leading-relaxed text-[#e0d5c0]">
                We assess your requirements — product type, quantity, custom finish, or delivery location.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="font-display text-5xl font-bold text-[#af8742] opacity-70">03</span>
              <h3 className="font-display text-lg font-bold text-white">We Contact You</h3>
              <p className="text-sm leading-relaxed text-[#e0d5c0]">
                We reach out within 24 hours with pricing, availability, and a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
