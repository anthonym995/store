'use client';

import { use, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Link from '@/components/ui/Link';
import { useRouter } from 'next/navigation';
import { useCategory, useUpdateCategory } from '@/features/categories/useCategories';
import { zodResolver } from '@hookform/resolvers/zod';
import { CategoryUpdateSchema } from '@/features/categories/category.validation';
import { TextField, TextAreaField } from '@/components/form';
import { z } from 'zod';

type CategoryFormValues = z.infer<typeof CategoryUpdateSchema>;

export default function EditCategory({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const categoryId = resolvedParams.id;

  const { data: category, isLoading: isFetching } = useCategory(categoryId);
  const { mutateAsync: updateCategory, isPending } = useUpdateCategory();
  const router = useRouter();

  const methods = useForm<CategoryFormValues>({
    resolver: zodResolver(CategoryUpdateSchema),
    defaultValues: {
      title: '',
      slug: '',
      description: '',
    },
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (category) {
      reset({
        title: category.title,
        slug: category.slug,
        description: category.description || '',
      });
    }
  }, [category, reset]);

  const onSubmit = async (data: CategoryFormValues) => {
    try {
      await updateCategory({
        id: categoryId,
        data: {
          title: data.title,
          description: data.description,
        },
      });
      router.push('/admin/categories');
    } catch (error) {
      console.error('Failed to update category:', error);
      alert('Failed to update category');
    }
  };

  if (isFetching) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="border-navy h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
          <p className="font-display text-navy text-lg font-bold">Loading Category Data...</p>
        </div>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-4xl space-y-8 pb-12 duration-700"
      >
        {/* Top Bar */}
        <div className="flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 uppercase">
              <Link href="/admin/categories" className="hover:text-navy transition-colors">
                Categories
              </Link>
              <span>/</span>
              <span className="text-maroon">Edit</span>
            </div>
            <h2 className="font-display text-navy text-4xl font-bold tracking-tight">Edit Category</h2>
            <p className="mt-2 text-sm font-medium text-gray-500">Update collection details.</p>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group bg-navy hover:bg-navy-light focus:ring-navy/20 relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 text-sm font-bold tracking-wider text-white shadow-lg transition-all outline-none hover:-translate-y-1 hover:shadow-xl focus:ring-4 disabled:opacity-50 disabled:hover:translate-y-0"
          >
            <div className="from-maroon/40 absolute inset-0 bg-linear-to-r to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            {isPending ? (
              <svg className="relative z-10 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg className="relative z-10 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            )}
            <span className="relative z-10 uppercase">{isPending ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Main Info Column */}
          <div className="space-y-8">
            {/* General Information Bento Box */}
            <div className="relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="bg-cream-dark/30 pointer-events-none absolute -top-20 -left-20 h-48 w-48 rounded-full blur-2xl"></div>

              <h3 className="font-display text-navy mb-8 flex items-center gap-3 text-xl font-bold">
                <span className="text-maroon flex h-8 w-8 items-center justify-center rounded-xl bg-gray-50">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </span>
                Category Details
              </h3>

              <div className="relative space-y-6">
                <TextField name="title" label="TITLE" placeholder="e.g. Traditional Kuthu Vilakku" />

                <TextField
                  name="slug"
                  label="SLUG (URL)"
                  placeholder="e.g. traditional-kuthu-vilakku"
                  disabled={true}
                  className="cursor-not-allowed bg-gray-100 text-gray-500"
                  title="Category slug cannot be changed after creation."
                />

                <TextAreaField
                  name="description"
                  label="DESCRIPTION"
                  placeholder="Describe what items belong in this collection..."
                  rows={5}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
