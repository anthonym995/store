export default function ContactCTA() {
  return (
    <section id="contact" className="border-t border-stone-200 bg-white py-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <h2 className="border-primary mb-4 border-l-4 pl-4 text-3xl font-bold text-stone-800">
            Need Bulk Orders or Custom Items?
          </h2>
          <p className="mb-10 text-base leading-relaxed text-stone-600">
            We specialize in providing high-quality pooja items, customized brass idols, and bulk orders for temples and
            special occasions. Contact us directly for the best quotes.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="text-primary flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-stone-100 text-xl">
                📞
              </span>
              <div>
                <strong className="mb-1 block text-base text-stone-800">Call Us</strong>
                <p className="text-sm text-stone-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-stone-100 text-xl">
                ✉️
              </span>
              <div>
                <strong className="mb-1 block text-base text-stone-800">Email Us</strong>
                <p className="text-sm text-stone-600">inquiry@giritrading.demo</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-stone-100 text-xl">
                📍
              </span>
              <div>
                <strong className="mb-1 block text-base text-stone-800">Visit Us</strong>
                <p className="text-sm text-stone-600">123 Spiritual Way, Mylapore, Chennai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded border border-stone-200 bg-[#F9F9F9] p-8">
          <h3 className="mb-6 text-center text-2xl font-bold text-stone-800">Send an Inquiry</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-stone-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="focus:border-primary w-full rounded border border-stone-300 bg-white px-4 py-2 text-sm transition-colors focus:outline-none"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-stone-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="focus:border-primary w-full rounded border border-stone-300 bg-white px-4 py-2 text-sm transition-colors focus:outline-none"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="product" className="text-sm font-semibold text-stone-700">
                Interested Product / Service
              </label>
              <input
                type="text"
                id="product"
                className="focus:border-primary w-full rounded border border-stone-300 bg-white px-4 py-2 text-sm transition-colors focus:outline-none"
                placeholder="e.g. Bulk Pooja Essentials"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-stone-700">
                Message
              </label>
              <textarea
                id="message"
                className="focus:border-primary min-h-[100px] w-full resize-y rounded border border-stone-300 bg-white px-4 py-2 text-sm transition-colors focus:outline-none"
                placeholder="Tell us what you need..."
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark mt-2 inline-flex w-full items-center justify-center rounded px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-all"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
