export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#4a1115] py-20 text-[#fdf5e6]">
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
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold bg-[#721c24] text-gold">
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
                <strong className="font-display mb-1 block text-lg tracking-wide text-gold">Call Us</strong>
                <p className="text-sm text-stone-300">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="rounded-sm border-2 border-gold bg-white p-8 shadow-2xl">
          <h3 className="font-display mb-6 text-2xl font-bold text-[#721c24]">Send a Trade Inquiry</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#721c24]">Your Name / Company</label>
              <input
                type="text"
                className="w-full rounded-sm border border-gold/50 bg-[#fdfbf7] px-4 py-3 text-sm text-[#4a1115] focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#721c24]">Email Address</label>
              <input
                type="email"
                className="w-full rounded-sm border border-gold/50 bg-[#fdfbf7] px-4 py-3 text-sm text-[#4a1115] focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-[#721c24]">Requirements</label>
              <textarea
                className="min-h-[100px] w-full resize-y rounded-sm border border-gold/50 bg-[#fdfbf7] px-4 py-3 text-sm text-[#4a1115] focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-sm bg-[#721c24] px-6 py-3.5 text-sm font-bold tracking-widest text-gold uppercase transition-all hover:bg-[#4a1115]"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
