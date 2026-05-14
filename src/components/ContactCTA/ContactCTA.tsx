export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-stone-200">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-stone-800 border-l-4 border-primary pl-4">Need Bulk Orders or Custom Items?</h2>
          <p className="text-base text-stone-600 mb-10 leading-relaxed">
            We specialize in providing high-quality pooja items, customized brass idols, and bulk orders for temples and special occasions. Contact us directly for the best quotes.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="text-xl bg-stone-100 text-primary w-10 h-10 flex items-center justify-center rounded-full border border-stone-200">📞</span>
              <div>
                <strong className="block text-base mb-1 text-stone-800">Call Us</strong>
                <p className="text-sm text-stone-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl bg-stone-100 text-primary w-10 h-10 flex items-center justify-center rounded-full border border-stone-200">✉️</span>
              <div>
                <strong className="block text-base mb-1 text-stone-800">Email Us</strong>
                <p className="text-sm text-stone-600">inquiry@giritrading.demo</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl bg-stone-100 text-primary w-10 h-10 flex items-center justify-center rounded-full border border-stone-200">📍</span>
              <div>
                <strong className="block text-base mb-1 text-stone-800">Visit Us</strong>
                <p className="text-sm text-stone-600">123 Spiritual Way, Mylapore, Chennai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F9F9F9] p-8 rounded border border-stone-200">
          <h3 className="text-2xl font-bold mb-6 text-center text-stone-800">Send an Inquiry</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-stone-700">Your Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-stone-300 rounded bg-white focus:outline-none focus:border-primary transition-colors text-sm" placeholder="John Doe" required />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-stone-700">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-stone-300 rounded bg-white focus:outline-none focus:border-primary transition-colors text-sm" placeholder="john@example.com" required />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="product" className="text-sm font-semibold text-stone-700">Interested Product / Service</label>
              <input type="text" id="product" className="w-full px-4 py-2 border border-stone-300 rounded bg-white focus:outline-none focus:border-primary transition-colors text-sm" placeholder="e.g. Bulk Pooja Essentials" />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-stone-700">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border border-stone-300 rounded bg-white focus:outline-none focus:border-primary transition-colors text-sm resize-y min-h-[100px]" placeholder="Tell us what you need..." rows={4} required></textarea>
            </div>
            
            <button type="submit" className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 rounded font-bold transition-all bg-primary hover:bg-primary-dark text-white text-sm uppercase tracking-wide">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
