'use client';

import { useState, useEffect } from 'react';
import {
  EyeIcon,
  TrashIcon,
  SearchIcon,
  FilterIcon,
  SortAscIcon,
  SortDescIcon,
  SortDefaultIcon,
} from '@/components/ui/Icons';
import { Button } from '@/components/form';
import Pagination from '@/components/ui/Pagination';
import TableSkeleton from '@/components/ui/TableSkeleton';
import { Modal } from '@/components/ui/Modal';
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

import { Inquiry } from '@/lib/types';
import { useInquiries, useDeleteInquiry } from '@/features/inquiries/useInquiries';

export default function InquiriesPage() {
  const { data: apiInquiries, isLoading } = useInquiries();
  const { mutate: deleteInquiry } = useDeleteInquiry();
  const [data, setData] = useState<Inquiry[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const handleView = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsModalOpen(true);
  };

  // Sync API data to local state
  useEffect(() => {
    if (apiInquiries) {
      setData(apiInquiries);
    }
  }, [apiInquiries]);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      deleteInquiry(id);
    }
  };

  const columnHelper = createColumnHelper<Inquiry>();

  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => (
        <div className="text-navy max-w-[250px] truncate text-base leading-tight font-bold" title={info.getValue()}>
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: (info) => (
        <span className="block max-w-[200px] truncate font-medium text-gray-500" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('subject', {
      header: 'Subject',
      cell: (info) => (
        <span className="text-navy block max-w-[200px] truncate font-bold" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('createdAt', {
      header: 'Date',
      cell: (info) => {
        const dateStr = info.getValue() as string;
        const formatted = new Date(dateStr).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
        return <span className="font-medium text-gray-500">{formatted}</span>;
      },
    }),
    columnHelper.display({
      id: 'actions',
      header: () => <div className="text-right">Actions</div>,
      cell: (info) => (
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => handleView(info.row.original)}
            title="View Message"
            className="hover:bg-navy/5 hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors"
          >
            <EyeIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleDelete(info.row.original.id as string)}
            title="Archive"
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
        <h2 className="font-display text-navy text-3xl font-bold tracking-tight">Client Inquiries</h2>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 px-2 sm:flex-row">
        <div className="relative w-full flex-1 sm:max-w-md">
          <SearchIcon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search inquiries..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="focus:border-navy focus:ring-navy h-10 w-full rounded-xl border border-gray-200 bg-white py-2 pr-4 pl-11 text-sm transition-all focus:ring-1 focus:outline-none"
          />
        </div>
        <Button variant="secondary" className="w-full sm:w-auto">
          <FilterIcon className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Inquiry Details"
        description="View the complete message and contact information."
        maxWidth="max-w-2xl"
      >
        {selectedInquiry && (
          <div className="space-y-6 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-navy mb-1 text-xs font-bold tracking-wider uppercase">Customer Info</h4>
                <p className="font-medium text-gray-900">{selectedInquiry.name}</p>
                <p className="text-sm text-gray-500">{selectedInquiry.email}</p>
                {selectedInquiry.phone && <p className="text-sm text-gray-500">{selectedInquiry.phone}</p>}
              </div>

              <div>
                <h4 className="text-navy mb-1 text-xs font-bold tracking-wider uppercase">Inquiry Context</h4>
                <p className="font-medium text-gray-900">{selectedInquiry.subject}</p>
                {selectedInquiry.productName && (
                  <p className="mt-1 text-sm text-gray-500">
                    Product: <span className="text-maroon font-medium">{selectedInquiry.productName}</span>
                  </p>
                )}
                <p className="mt-1 text-xs text-gray-400">
                  Submitted:{' '}
                  {new Date(selectedInquiry.createdAt).toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <h4 className="text-navy mb-3 text-xs font-bold tracking-wider uppercase">Message</h4>
              <p className="leading-relaxed whitespace-pre-wrap text-gray-700">{selectedInquiry.message}</p>
            </div>

            <div className="flex justify-end border-t border-gray-100 pt-4">
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
