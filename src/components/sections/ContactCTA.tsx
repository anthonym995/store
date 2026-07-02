export default function ContactCTA() {
  return (
    <section id="contact" className="bg-brand-red-dark py-20 text-[#fdf5e6]">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <h2 className="font-display mb-4 text-3xl leading-tight font-bold text-white">
            Need Bulk Orders or <span className="text-gold">Custom Installations?</span>
          </h2>
          <p className="mb-10 text-base leading-relaxed text-stone-300">
            E.V. Brassware specializes in providing high-quality, heavy-duty brass kuthu vilakku, customized ritual
            vessels, and wholesale orders for weddings, festivals, and sacred ceremonies.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <span className="border-gold text-gold bg-brand-red flex h-12 w-12 shrink-0 items-center justify-center rounded-full border">
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
                <strong className="font-display text-gold mb-1 block text-lg tracking-wide">Call Us</strong>
                <p className="text-sm text-stone-300">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="border-gold rounded-sm border-2 bg-white p-8 shadow-2xl">
          <h3 className="font-display text-brand-red mb-6 text-2xl font-bold">Send a Trade Inquiry</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-brand-red text-sm font-bold">Your Name / Company</label>
              <input
                type="text"
                className="border-gold/50 focus:border-gold focus:ring-gold text-brand-red-dark w-full rounded-sm border bg-[#fdfbf7] px-4 py-3 text-sm focus:ring-1 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-brand-red text-sm font-bold">Email Address</label>
              <input
                type="email"
                className="border-gold/50 focus:border-gold focus:ring-gold text-brand-red-dark w-full rounded-sm border bg-[#fdfbf7] px-4 py-3 text-sm focus:ring-1 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-brand-red text-sm font-bold">Requirements</label>
              <textarea
                className="border-gold/50 focus:border-gold focus:ring-gold text-brand-red-dark min-h-[100px] w-full resize-y rounded-sm border bg-[#fdfbf7] px-4 py-3 text-sm focus:ring-1 focus:outline-none"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-gold bg-brand-red hover:bg-brand-red-dark mt-4 inline-flex w-full items-center justify-center rounded-sm px-6 py-3.5 text-sm font-bold tracking-widest uppercase transition-all"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
