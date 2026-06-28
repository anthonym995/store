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

              {/* Email Card */}
              <div className="border border-[#d4c1a0] bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4 text-[#af8742]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <h3 className="font-display text-maroon text-xl font-bold">Email</h3>
                </div>
                <a
                  href="mailto:inquiry@evbrassware.com"
                  className="text-maroon hover:text-maroon-light text-base font-semibold transition-colors"
                >
                  inquiry@evbrassware.com
                </a>
                <p className="mt-2 text-sm text-[#3f3024]">We aim to reply to all inquiries within 24 hours.</p>
              </div>

              {/* Phone Card */}
              <div className="border border-[#d4c1a0] bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-4 text-[#af8742]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <h3 className="font-display text-maroon text-xl font-bold">Phone</h3>
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-maroon hover:text-maroon-light text-base font-semibold transition-colors"
                >
                  +91 98765 43210
                </a>
                <p className="mt-2 text-sm text-[#3f3024]">Available Mon-Sat, 9:00 AM - 6:00 PM IST.</p>
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
    </div>
  );
}
