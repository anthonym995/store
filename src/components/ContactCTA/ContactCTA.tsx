export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#1B4332] py-20 text-[#F9F9F6]">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <h2 className="font-display mb-4 text-3xl leading-tight font-bold text-white">
            Need Bulk Orders or <span className="text-[#D4AF37]">Custom Temple Installations?</span>
          </h2>
          <p className="mb-10 text-base leading-relaxed text-stone-300">
            E.V. Brassware specializes in providing high-quality, heavy-duty brass kuthu vilakku, customized ritual
            vessels, and wholesale orders for weddings, festivals, and sacred ceremonies.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#081C15] text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <div>
                <strong className="font-display mb-1 block text-lg tracking-wide text-white">Call Us</strong>
                <p className="text-sm text-stone-300">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#081C15] text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <div>
                <strong className="font-display mb-1 block text-lg tracking-wide text-white">Email Us</strong>
                <p className="text-sm text-stone-300">inquiry@evbrassware.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="rounded-md border border-[#D4AF37]/30 bg-[#F9F9F6] p-8 shadow-2xl">
          <h3 className="font-display mb-6 text-2xl font-bold text-[#1B4332]">Send a Trade Inquiry</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-bold text-[#2D6A4F]">
                Your Name / Company
              </label>
              <input
                type="text"
                className="w-full rounded border border-stone-200 bg-white px-4 py-3 text-sm text-[#081C15] transition-colors focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-bold text-[#2D6A4F]">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded border border-stone-200 bg-white px-4 py-3 text-sm text-[#081C15] transition-colors focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-bold text-[#2D6A4F]">
                Requirements
              </label>
              <textarea
                className="min-h-[100px] w-full resize-y rounded border border-stone-200 bg-white px-4 py-3 text-sm text-[#081C15] transition-colors focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none"
                placeholder="Tell us what you need..."
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded bg-[#1B4332] px-6 py-3.5 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-[#081C15] hover:text-[#D4AF37]"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
