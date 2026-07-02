'use client';

import Link from 'next/link';
import { useState } from 'react';

// Mock data for inquiries
const initialInquiries = [
  {
    id: '1',
    client: 'Anand Temple Trust',
    contact: 'secretary@anandtemple.org',
    type: 'Custom Bespoke Installation',
    date: 'Oct 24, 2023',
    status: 'Pending',
    message: 'We are looking for a 6ft multi-tiered Kuthu Vilakku for our main hall. Please send a quote.',
  },
  {
    id: '2',
    client: 'Radha Krishna Silks',
    contact: 'purchase@rk-silks.com',
    type: 'Wholesale / Bulk',
    date: 'Oct 22, 2023',
    status: 'Responded',
    message: 'Need 50 pieces of the 5-inch Lotus Diya for our Diwali corporate gifting.',
  },
  {
    id: '3',
    client: 'Venkat R.',
    contact: '+91 98765 43210',
    type: 'General Inquiry',
    date: 'Oct 20, 2023',
    status: 'Resolved',
    message: 'Do you ship to Bangalore? If so, what are the shipping charges for heavy brass items?',
  },
];

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState(initialInquiries);

  const handleDelete = (id: string) => {
    setInquiries(inquiries.filter((inquiry) => inquiry.id !== id));
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-4 duration-700">
      <div className="px-2">
        <h2 className="font-display text-navy text-3xl font-bold tracking-tight">Client Inquiries</h2>
      </div>
      
      <div className="flex justify-end px-2">
        <button className="text-navy flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-5 py-3 text-sm font-bold shadow-sm transition-all hover:shadow-md">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter
        </button>
      </div>

      <div className="rounded-[2rem] border border-gray-100 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="custom-scrollbar overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="border-b border-gray-50 bg-gray-50/50">
              <tr>
                <th className="text-navy px-6 py-5 text-xs font-bold tracking-widest uppercase">Client Info</th>
                <th className="text-navy px-6 py-5 text-xs font-bold tracking-widest uppercase">Inquiry Type</th>
                <th className="text-navy px-6 py-5 text-xs font-bold tracking-widest uppercase">Date</th>
                <th className="text-navy px-6 py-5 text-xs font-bold tracking-widest uppercase">Status</th>
                <th className="text-navy px-6 py-5 text-right text-xs font-bold tracking-widest uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="group hover:bg-cream-dark/10 transition-colors">
                  <td className="px-6 py-5">
                    <div className="text-navy max-w-[250px] text-base leading-tight font-bold whitespace-normal">
                      {inquiry.client}
                    </div>
                    <div className="mt-1 text-xs font-medium tracking-wide text-gray-400">{inquiry.contact}</div>
                  </td>
                  <td className="text-maroon px-6 py-5 font-bold">{inquiry.type}</td>
                  <td className="px-6 py-5 font-medium text-gray-500">{inquiry.date}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase ${
                        inquiry.status === 'Pending'
                          ? 'border-brand-red/20 bg-brand-red/10 text-brand-red border'
                          : inquiry.status === 'Responded'
                            ? 'border-gold/30 bg-gold/10 text-gold-dark border'
                            : 'border border-green-100 bg-green-50 text-green-600'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${inquiry.status === 'Pending' ? 'bg-brand-red animate-pulse' : inquiry.status === 'Responded' ? 'bg-gold-dark' : 'bg-green-500'}`}
                      ></span>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        title="View Message"
                        className="hover:bg-navy/5 hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleDelete(inquiry.id)}
                        title="Archive"
                        className="hover:bg-brand-red/10 hover:text-brand-red flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
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
