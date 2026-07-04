const stats = [
  { value: '40+', label: 'Years of Excellence' },
  { value: '500+', label: 'Products Crafted' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '100%', label: 'Pure Brass Guarantee' },
];

const reasons = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: 'Premium Grade Brass',
    desc: 'Every piece sourced from high-grade casting metal with a mirror-polish finish that lasts for generations.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
    title: 'Safe & Secure Delivery',
    desc: 'Orders carefully packed and dispatched from our organized warehouse — delivered safely to your door.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: 'Bulk & Custom Orders',
    desc: 'Specialised in wholesale, wedding, temple, and corporate orders with custom sizing and finishes.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Direct Support',
    desc: 'Reach us at evbrassware@gmail.com — our team responds to all inquiries within 24 hours.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brown py-20">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-3 block text-xs font-bold tracking-[0.25em] text-gold uppercase">
            Our Promise
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-4xl">
            Why Choose E.V. Brassware?
          </h2>
          <div className="mx-auto h-1 w-16 bg-gold" />
        </div>

        {/* Stats Strip */}
        <div className="mb-16 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-1 bg-brown py-10 text-center"
            >
              <span className="font-display text-4xl font-bold text-gold md:text-5xl">{s.value}</span>
              <span className="text-xs font-bold tracking-widest text-gold-light uppercase">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group flex flex-col gap-4 border border-white/10 bg-brand-red-dark p-8 transition-all duration-300 hover:border-gold"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
                {r.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-gold-light">{r.title}</h3>
              <p className="text-sm leading-relaxed text-stone-400">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
