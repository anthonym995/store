'use client';

import { useState } from 'react';
import Link from 'next/link';

// Using a subset of your real catalog data for the admin mock
const initialProducts = [
  {
    id: 1,
    name: '30cm Kalash Design Brass Kuthu Vilakku',
    category: 'Diya / Oil Lamp',
    price: '₹1,300/Kg',
    material: 'Grade-A Cast Brass',
    status: 'Active',
  },
  {
    id: 2,
    name: '150cm Peacock Design Kuthu Vilakku',
    category: 'Multi-Tiered Temple Lamp',
    price: '₹1,500/Kg',
    material: 'Premium Heavy Brass',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Brass Lotus Diya 5 Inch',
    category: 'Floral Table Diya',
    price: '₹500/Piece',
    material: 'Solid Brass',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Premium Designer Brass Pipe Lamp',
    category: 'Architectural Lamp',
    price: '₹4,299/Piece',
    material: 'Industrial Brass Tubing',
    status: 'Made to Order',
  },
];

export default function ProductsList() {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to remove this product from the catalog?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6 duration-500">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold text-[#081C15]">Master Catalog</h2>
          <p className="mt-1 text-sm text-stone-500">Manage brassware products, pricing, and materials.</p>
        </div>
        <Link
          href="/admin/products/add"
          className="inline-flex items-center gap-2 rounded bg-[#1B4332] px-6 py-2.5 text-sm font-bold tracking-wider text-[#D4AF37] uppercase shadow-sm transition-all hover:bg-[#081C15]"
        >
          Add Product
        </Link>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded border border-stone-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="border-b border-stone-200 bg-[#F9F9F6]">
              <tr>
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">Artifact Info</th>
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">Category</th>
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">Material</th>
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">Pricing</th>
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold tracking-wider text-[#2D6A4F] uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {products.map((product) => (
                <tr key={product.id} className="group transition-colors hover:bg-[#F9F9F6]">
                  <td className="px-6 py-4">
                    <div className="font-bold text-[#081C15]">{product.name}</div>
                    <div className="text-xs text-stone-500">SKU: EV-{1000 + product.id}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#1B4332]">{product.category}</td>
                  <td className="px-6 py-4 text-stone-600">{product.material}</td>
                  <td className="px-6 py-4 font-bold text-[#081C15]">{product.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded px-2 py-1 text-xs font-bold tracking-wide uppercase ${
                        product.status === 'Active' ? 'bg-[#D4AF37]/20 text-[#AA8C2C]' : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-xs font-bold tracking-wider text-red-600 uppercase hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
