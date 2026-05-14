import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

// Disable static params for demo purposes, so it builds easily without needing all paths generated.
export const dynamic = "force-dynamic";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 bg-stone-50 dark:bg-stone-900 min-h-screen">
      <div className="container max-w-6xl">
        <div className="mb-8">
          <Link href="/products" className="text-stone-500 hover:text-primary transition-colors inline-flex items-center gap-2">
            &larr; Back to Catalog
          </Link>
        </div>

        <div className="bg-white dark:bg-stone-800 rounded-3xl shadow-xl border border-stone-200 dark:border-stone-700 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative w-full h-[400px] md:h-[600px] bg-stone-100 dark:bg-stone-900">
              <Image
                src={product.image}
                alt={product.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-stone-900 dark:text-white mb-6 leading-tight">
                {product.name}
              </h1>

              <div className="w-16 h-1 bg-secondary rounded-full mb-8"></div>

              <p className="text-lg text-stone-600 dark:text-stone-300 mb-10 leading-relaxed">
                {product.description}
              </p>

              <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-2xl border border-stone-100 dark:border-stone-700 mb-10">
                <h3 className="font-display font-semibold text-lg mb-2 text-stone-900 dark:text-white">Quote Information</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  This item is available for bulk and individual orders. Pricing varies based on customization and quantity. Contact us directly to get the best quote for your requirements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:-translate-y-0.5 bg-gradient-to-br from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-display text-lg flex-grow">
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div id="contact-form" className="mt-16 max-w-3xl mx-auto bg-white dark:bg-stone-800 p-8 md:p-12 rounded-3xl shadow-lg border border-stone-200 dark:border-stone-700">
          <h2 className="text-3xl font-display font-semibold mb-8 text-center text-stone-900 dark:text-white">Inquire About This Product</h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Your Name</label>
                <input type="text" className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-xl bg-stone-50 dark:bg-stone-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-xl bg-stone-50 dark:bg-stone-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Product</label>
              <input type="text" value={product.name} className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-xl bg-stone-100 dark:bg-stone-900/50 text-stone-500 cursor-not-allowed" readOnly />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Required Quantity & Details</label>
              <textarea className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-xl bg-stone-50 dark:bg-stone-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[120px]" placeholder="Please provide quantity and any specific requirements..." required></textarea>
            </div>

            <button type="submit" className="mt-4 w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:-translate-y-0.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-100 font-display text-lg">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
