'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock Data
const initialProducts = [
  {
    id: 1,
    name: 'Premium Brass Pooja Thali Set',
    category: 'Pooja Essentials',
    price: 1299,
    stock: 45,
    status: 'Active',
  },
  { id: 2, name: 'Ganesha Idol (Medium)', category: 'Idols & Murti', price: 899, stock: 12, status: 'Low Stock' },
  { id: 3, name: 'Bhagavad Gita - Original Text', category: 'Books & CDs', price: 450, stock: 120, status: 'Active' },
  {
    id: 4,
    name: 'Silk Dhoti Set with Angavastram',
    category: 'Ethnic Wear',
    price: 2100,
    stock: 5,
    status: 'Low Stock',
  },
  {
    id: 5,
    name: 'Sandalwood Incense Sticks (Pack of 5)',
    category: 'Pooja Essentials',
    price: 150,
    stock: 0,
    status: 'Out of Stock',
  },
];

export default function ProductsList() {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6 duration-500">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Products</h2>
          <p className="mt-1 text-sm text-gray-500">Manage your store catalog, pricing, and inventory.</p>
        </div>
        <Link
          href="/admin/products/add"
          className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-md focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Add Product
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row">
        <div className="relative w-full sm:max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="block w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pr-3 pl-10 transition-colors focus:border-transparent focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none sm:text-sm"
          />
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <select className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-2 pr-8 pl-3 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none sm:w-auto">
            <option value="">All Categories</option>
            <option value="pooja">Pooja Essentials</option>
            <option value="idols">Idols & Murti</option>
          </select>
          <button className="rounded-xl border border-gray-200 p-2 text-gray-600 transition-colors hover:bg-gray-50">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="border-b border-gray-100 bg-gray-50 text-gray-500">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Product Info
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Category
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Price
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Stock
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 text-right font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        className="mb-3 h-12 w-12 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        ></path>
                      </svg>
                      <p className="text-lg font-medium text-gray-900">No products found</p>
                      <p className="text-sm">Get started by adding a new product to your store.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="group transition-colors hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-100">
                          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{product.name}</div>
                          <div className="text-xs text-gray-500">SKU: GR-{1000 + product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">₹{product.price.toLocaleString()}</td>
                    <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                          product.status === 'Active'
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                            : product.status === 'Low Stock'
                              ? 'border-amber-200 bg-amber-50 text-amber-700'
                              : 'border-red-200 bg-red-50 text-red-700'
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                          title="View/Edit"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            ></path>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
                          title="Delete"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-6 py-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{products.length}</span> of{' '}
            <span className="font-medium">{products.length}</span> results
          </p>
          <div className="flex items-center gap-1">
            <button
              className="rounded-md border border-transparent p-1 text-gray-400 transition-colors hover:border-gray-200 hover:bg-white hover:text-gray-700 disabled:opacity-50"
              disabled
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="rounded-md border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-orange-600">
              1
            </button>
            <button
              className="rounded-md border border-transparent p-1 text-gray-400 transition-colors hover:border-gray-200 hover:bg-white hover:text-gray-700 disabled:opacity-50"
              disabled
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
