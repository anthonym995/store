'use client';

import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

// Mock data for inquiries
const initialInquiries = [
  {
    id: '1',
    client: 'Anand Temple Trust',
    contact: 'secretary@anandtemple.org',
    category: 'Kuthu Vilakku',
    product: '6ft Multi-tiered Vilakku',
    type: 'Custom Bespoke Installation',
    date: 'Oct 24, 2023',
    status: 'Pending',
    message: 'We are looking for a 6ft multi-tiered Kuthu Vilakku for our main hall. Please send a quote.',
  },
  {
    id: '2',
    client: 'Radha Krishna Silks',
    contact: 'purchase@rk-silks.com',
    category: 'Diya',
    product: '5-inch Lotus Diya',
    type: 'Wholesale / Bulk',
    date: 'Oct 22, 2023',
    status: 'Responded',
    message: 'Need 50 pieces of the 5-inch Lotus Diya for our Diwali corporate gifting.',
  },
  {
    id: '3',
    client: 'Venkat R.',
    contact: '+91 98765 43210',
    category: 'General',
    product: 'N/A',
    type: 'General Inquiry',
    date: 'Oct 20, 2023',
    status: 'Resolved',
    message: 'Do you ship to Bangalore? If so, what are the shipping charges for heavy brass items?',
  },
];

type Inquiry = (typeof initialInquiries)[0];

export default function InquiriesPage() {
  const [data, setData] = useState<Inquiry[]>(initialInquiries);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const handleDelete = (id: string) => {
    setData(data.filter((inquiry) => inquiry.id !== id));
  };

  const columnHelper = createColumnHelper<Inquiry>();

  const columns = [
    columnHelper.accessor('client', {
      header: 'Client Info',
      cell: (info) => (
        <>
          <div className="text-navy max-w-[250px] text-base leading-tight font-bold whitespace-normal">
            {info.getValue()}
          </div>
          <div className="mt-1 text-xs font-medium tracking-wide text-gray-400">{info.row.original.contact}</div>
        </>
      ),
    }),
    columnHelper.accessor('category', {
      header: 'Category',
      cell: (info) => (
        <span className="block max-w-[150px] truncate font-medium text-gray-600" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('product', {
      header: 'Product',
      cell: (info) => (
        <span className="text-navy block max-w-[150px] truncate font-bold" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('type', {
      header: 'Inquiry Type',
      cell: (info) => <span className="text-maroon font-bold">{info.getValue()}</span>,
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: (info) => <span className="font-medium text-gray-500">{info.getValue()}</span>,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => {
        const status = info.getValue();
        return (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase ${
              status === 'Pending'
                ? 'border-brand-red/20 bg-brand-red/10 text-brand-red border'
                : status === 'Responded'
                  ? 'border-gold/30 bg-gold/10 text-gold-dark border'
                  : 'border border-green-100 bg-green-50 text-green-600'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${status === 'Pending' ? 'bg-brand-red animate-pulse' : status === 'Responded' ? 'bg-gold-dark' : 'bg-green-500'}`}
            ></span>
            {status}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: 'actions',
      header: () => <div className="text-right">Actions</div>,
      cell: (info) => (
        <div className="flex items-center justify-end gap-3">
          <button
            title="View Message"
            className="hover:bg-navy/5 hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(info.row.original.id)}
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
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-4 duration-700">
      <div className="px-2">
        <h2 className="font-display text-navy text-3xl font-bold tracking-tight">Client Inquiries</h2>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 px-2 sm:flex-row">
        <div className="relative w-full flex-1 sm:max-w-md">
          <svg
            className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search inquiries..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="focus:border-navy/20 focus:ring-navy/10 w-full rounded-2xl border border-gray-100 bg-white py-3 pr-4 pl-11 text-sm shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all focus:ring-4 focus:outline-none"
          />
        </div>
        <button className="text-navy flex shrink-0 items-center gap-2 rounded-2xl border border-gray-100 bg-white px-5 py-3 text-sm font-bold shadow-sm transition-all hover:shadow-md">
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

      <div className="overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="custom-scrollbar h-[400px] overflow-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="border-b border-gray-50 bg-gray-50/50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const isSortable = header.column.getCanSort();
                    return (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className={`text-navy px-6 py-3 text-xs font-bold tracking-widest uppercase ${
                          isSortable ? 'group cursor-pointer transition-colors select-none hover:bg-gray-100' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: (
                              <svg
                                className="text-maroon h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                              </svg>
                            ),
                            desc: (
                              <svg
                                className="text-maroon h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            ),
                          }[header.column.getIsSorted() as string] ??
                            (isSortable ? (
                              <svg
                                className="h-4 w-4 text-gray-300 opacity-0 transition-opacity group-hover:opacity-100"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                />
                              </svg>
                            ) : null)}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-50">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="group hover:bg-cream-dark/10 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between border-t border-gray-50 bg-gray-50/30 px-6 py-3">
          <div className="text-sm font-medium text-gray-500">
            Showing{' '}
            <span className="text-navy font-bold">
              {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + (data.length > 0 ? 1 : 0)}
            </span>{' '}
            to{' '}
            <span className="text-navy font-bold">
              {Math.min(
                (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                table.getPrePaginationRowModel().rows.length
              )}
            </span>{' '}
            of <span className="text-navy font-bold">{table.getPrePaginationRowModel().rows.length}</span> results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
