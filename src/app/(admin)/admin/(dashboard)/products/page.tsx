'use client';

import { useState, useEffect } from 'react';
import Link from '@/components/ui/Link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/form';
import {
  EyeIcon,
  TrashIcon,
  SearchIcon,
  PlusIcon,
  SortAscIcon,
  SortDescIcon,
  SortDefaultIcon,
} from '@/components/ui/Icons';
import Pagination from '@/components/ui/Pagination';
import TableSkeleton from '@/components/ui/TableSkeleton';
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

import { useProducts } from '@/features/products/useProducts';
import { Product } from '@/lib/types';

export default function ProductsList() {
  const router = useRouter();
  const { data: apiProducts, isLoading } = useProducts();
  const [data, setData] = useState<Product[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  // Sync API data to local state
  useEffect(() => {
    if (apiProducts) {
      setData(apiProducts);
    }
  }, [apiProducts]);

  const handleDelete = (id: string | number) => {
    if (confirm('Are you sure you want to remove this product from the catalog?')) {
      setData(data.filter((p) => p.id !== id));
    }
  };

  const columnHelper = createColumnHelper<Product>();

  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => (
        <>
          <div className="text-navy max-w-[250px] truncate text-base leading-tight font-bold" title={info.getValue()}>
            {info.getValue()}
          </div>
        </>
      ),
    }),
    columnHelper.accessor('category', {
      header: 'Category',
      cell: (info) => (
        <span className="text-maroon block max-w-[150px] truncate font-bold" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('price', {
      header: 'Price',
      cell: (info) => (
        <span
          className="font-display text-navy block max-w-[120px] truncate text-lg font-bold"
          title={String(info.getValue())}
        >
          ₹{info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('unit', {
      header: 'Unit',
      cell: (info) => (
        <span className="block truncate font-medium text-gray-500" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: () => <div className="text-right">Actions</div>,
      cell: (info) => (
        <div className="flex items-center justify-end gap-3">
          <Link
            href={`/admin/products/${info.row.original.id}`}
            title="View Details"
            className="hover:bg-navy/5 hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors"
          >
            <EyeIcon className="h-4 w-4" />
          </Link>

          <button
            onClick={() => handleDelete(info.row.original.id)}
            title="Remove Product"
            className="hover:bg-brand-red/10 hover:text-brand-red flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors"
          >
            <TrashIcon className="h-4 w-4" />
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
        <h2 className="font-display text-navy text-3xl font-bold tracking-tight">Master Catalog</h2>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 px-2 sm:flex-row">
        <div className="relative w-full flex-1 sm:max-w-md">
          <SearchIcon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="focus:border-navy focus:ring-navy h-10 w-full rounded-xl border border-gray-200 bg-white py-2 pr-4 pl-11 text-sm transition-all focus:ring-1 focus:outline-none"
          />
        </div>
        <Button onClick={() => router.push('/admin/products/add')} className="w-full sm:w-auto">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Products Table - Trendy Bento Card */}
      <div className="overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="custom-scrollbar h-[350px] overflow-auto">
          {isLoading ? (
            <TableSkeleton rows={5} />
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
                              asc: <SortAscIcon className="text-maroon h-4 w-4" />,
                              desc: <SortDescIcon className="text-maroon h-4 w-4" />,
                            }[header.column.getIsSorted() as string] ??
                              (isSortable ? (
                                <SortDefaultIcon className="h-4 w-4 text-gray-300 opacity-0 transition-opacity group-hover:opacity-100" />
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
        <Pagination
          pageIndex={table.getState().pagination.pageIndex}
          pageSize={table.getState().pagination.pageSize}
          totalItems={table.getPrePaginationRowModel().rows.length}
          dataLength={data.length}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          previousPage={() => table.previousPage()}
          nextPage={() => table.nextPage()}
        />
      </div>
    </div>
  );
}
