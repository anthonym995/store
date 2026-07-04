'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Pagination from '@/components/ui/Pagination';
import TableSkeleton from '@/components/ui/TableSkeleton';
import { Modal } from '@/components/ui/Modal';
import { TextField, TextAreaField, Button } from '@/components/form';
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
import {
  PencilIcon,
  TrashIcon,
  SearchIcon,
  PlusIcon,
  SortAscIcon,
  SortDescIcon,
  SortDefaultIcon,
} from '@/components/ui/Icons';

import { useCategories } from '@/features/categories/useCategories';
import { Category } from '@/lib/types';

type CategoryFormValues = {
  title: string;
  description: string;
};

export default function CategoriesList() {
  const { data: apiCategories, isLoading } = useCategories();
  const [data, setData] = useState<Category[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState<string | number | null>(null);

  const methods = useForm<CategoryFormValues>({
    defaultValues: { title: '', description: '' },
  });
  const { handleSubmit, reset } = methods;

  // Sync API data to local state
  useEffect(() => {
    if (apiCategories) {
      setData(apiCategories);
    }
  }, [apiCategories]);

  const handleDelete = (id: string | number) => {
    if (confirm('Are you sure you want to remove this category?')) {
      setData(data.filter((c) => c.id !== id));
    }
  };

  const openAddModal = () => {
    setEditingCategoryId(null);
    reset({ title: '', description: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (category: Category) => {
    setEditingCategoryId(category.id);
    reset({ title: category.title, description: category.description });
    setIsModalOpen(true);
  };

  const onSubmit = (formData: CategoryFormValues) => {
    if (formData.title && formData.description) {
      if (editingCategoryId) {
        setData(
          data.map((c) =>
            c.id === editingCategoryId ? { ...c, title: formData.title, description: formData.description } : c
          )
        );
      } else {
        setData([
          ...data,
          {
            id: Date.now().toString(),
            slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
            title: formData.title,
            description: formData.description,
            image: '', // Mock empty image
          },
        ]);
      }
      setIsModalOpen(false);
    }
  };

  const columnHelper = createColumnHelper<Category>();

  const columns = [
    columnHelper.accessor('title', {
      header: 'Name',
      cell: (info) => (
        <div className="text-navy max-w-[250px] truncate text-base leading-tight font-bold" title={info.getValue()}>
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor('slug', {
      header: 'Slug',
      cell: (info) => (
        <span className="block max-w-[150px] truncate font-medium text-gray-500" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      cell: (info) => (
        <span className="block max-w-[300px] truncate text-gray-500" title={info.getValue()}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: () => <div className="text-right">Actions</div>,
      cell: (info) => (
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => openEditModal(info.row.original)}
            title="Edit Category"
            className="hover:bg-navy/5 hover:text-navy flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors"
          >
            <PencilIcon className="h-4 w-4" />
          </button>

          <button
            onClick={() => handleDelete(info.row.original.id)}
            title="Remove Category"
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
        <h2 className="font-display text-navy text-3xl font-bold tracking-tight">Categories</h2>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 px-2 sm:flex-row">
        <div className="relative w-full flex-1 sm:max-w-md">
          <SearchIcon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="focus:border-navy focus:ring-navy h-10 w-full rounded-xl border border-gray-200 bg-white py-2 pr-4 pl-11 text-sm transition-all focus:ring-1 focus:outline-none"
          />
        </div>
        <Button onClick={openAddModal} className="w-full sm:w-auto">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Categories Table - Trendy Bento Card */}
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

      {/* ======================= ADD/EDIT CATEGORY MODAL ======================= */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingCategoryId ? 'Edit Category' : 'Add New Category'}
        description={editingCategoryId ? 'Modify the category details.' : 'Create a new product category.'}
        maxWidth="max-w-xl"
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 sm:p-8">
            <div className="space-y-6">
              <TextField name="title" label="Category Title" placeholder="e.g. Bathroom Accessories" required />
              <TextAreaField
                name="description"
                label="Description"
                placeholder="Brief description of the category..."
                rows={4}
                required
              />
            </div>
            <div className="mt-6 flex justify-end gap-3 border-t border-gray-100 pt-4">
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{editingCategoryId ? 'Save Changes' : 'Create Category'}</Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
}
