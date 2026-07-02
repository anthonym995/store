'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

import { useCategories } from '@/features/categories/useCategories';
import { Category } from '@/lib/types';

type AdminCategory = Category & { status: string };

export default function CategoriesList() {
  const { data: apiCategories, isLoading } = useCategories();
  const [data, setData] = useState<AdminCategory[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  // Sync API data to local state
  useEffect(() => {
    if (apiCategories) {
      const formattedCategories = apiCategories.map((c) => ({
        ...c,
        status: 'Active', // Mocking status since it doesn't exist in the base data
      }));
      setData(formattedCategories);
    }
  }, [apiCategories]);

  const handleDelete = (id: string | number) => {
    if (confirm('Are you sure you want to remove this category?')) {
      setData(data.filter((c) => c.id !== id));
    }
  };

  const columnHelper = createColumnHelper<AdminCategory>();

  const columns = [
    columnHelper.accessor('image', {
      header: 'Image',
      cell: (info) => (
        <div className="relative h-12 w-12 overflow-hidden rounded-md border border-gray-200">
          <Image src={info.getValue() || '/logo.png'} alt="Category" fill className="object-cover" unoptimized />
        </div>
      ),
    }),
    columnHelper.accessor('title', {
      header: 'Category Title',
      cell: (info) => (
        <div className="text-navy max-w-[250px] truncate text-base leading-tight font-bold" title={info.getValue()}>
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor('desc', {
      header: 'Description',
      cell: (info) => (
        <span className="block max-w-[300px] truncate text-gray-500" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => {
        const status = info.getValue();
        return (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase ${
              status === 'Active'
                ? 'border border-green-100 bg-green-50 text-green-600'
                : 'border border-gray-100 bg-gray-50 text-gray-500'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${status === 'Active' ? 'animate-pulse bg-green-500' : 'bg-gray-400'}`}
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
          <Link
            href={`/admin/categories/${info.row.original.id}`}
            title="Edit Category"
            className="hover:bg-navy/5 hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </Link>

          <button
            onClick={() => handleDelete(info.row.original.id)}
            title="Remove Category"
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
        <h2 className="font-display text-navy text-3xl font-bold tracking-tight">Categories</h2>
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
            placeholder="Search categories..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="focus:border-navy/20 focus:ring-navy/10 w-full rounded-2xl border border-gray-100 bg-white py-3 pr-4 pl-11 text-sm shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all focus:ring-4 focus:outline-none"
          />
        </div>
        <Link
          href="/admin/categories/add"
          className="group bg-navy hover:bg-navy-light relative inline-flex w-full shrink-0 items-center justify-center gap-3 overflow-hidden rounded-2xl px-6 py-3 text-sm font-bold tracking-wider text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:w-auto"
        >
          <div className="from-maroon/40 absolute inset-0 bg-linear-to-r to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
          <svg
            className="relative z-10 h-5 w-5 transition-transform group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="relative z-10 uppercase">Add Category</span>
        </Link>
      </div>

      {/* Categories Table - Trendy Bento Card */}
      <div className="overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="custom-scrollbar overflow-x-auto">
          {isLoading ? (
            <div className="space-y-4 p-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex animate-pulse gap-4">
                  <div className="h-10 w-1/4 rounded bg-gray-200"></div>
                  <div className="h-10 w-1/4 rounded bg-gray-200"></div>
                  <div className="h-10 w-1/4 rounded bg-gray-200"></div>
                  <div className="h-10 w-1/4 rounded bg-gray-200"></div>
                </div>
              ))}
            </div>
          ) : (
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
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 15l7-7 7 7"
                                  />
                                </svg>
                              ),
                              desc: (
                                <svg
                                  className="text-maroon h-4 w-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  />
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
          )}
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
