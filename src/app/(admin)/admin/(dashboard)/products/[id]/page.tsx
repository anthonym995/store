'use client';

import { use, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Link from '@/components/ui/Link';
import { useRouter } from 'next/navigation';
import { useProduct, useUpdateProduct } from '@/features/products/useProducts';
import { useCategories } from '@/features/categories/useCategories';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductUpdateSchema } from '@/features/products/product.validation';
import { TextField, TextAreaField, SelectField, Button } from '@/components/form';
import { z } from 'zod';

type ProductFormValues = z.infer<typeof ProductUpdateSchema>;

export default function EditProduct({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const { data: product, isLoading: isFetching } = useProduct(productId);
  const { mutateAsync: updateProduct, isPending } = useUpdateProduct();
  const { data: categories = [] } = useCategories();
  const router = useRouter();

  const methods = useForm<ProductFormValues>({
    resolver: zodResolver(ProductUpdateSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      unit: 'Piece',
      dimensions: '',
      category: '',
      material: '',
      metaTitle: '',
      metaDescription: '',
    },
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description,
        price: product.price, // product.price is now a number
        unit: product.unit || 'Piece',
        dimensions: product.dimensions || '',
        category: product.category,
        material: product.material,
        metaTitle: product.metaTitle || '',
        metaDescription: product.metaDescription || '',
      });
    }
  }, [product, reset]);

  const onSubmit = async (data: ProductFormValues) => {
    try {
      await updateProduct({
        id: productId,
        data: {
          name: data.name,
          description: data.description,
          price: Number(data.price),
          category: data.category,
          material: data.material,
          unit: data.unit as any,
          dimensions: data.dimensions,
          metaTitle: data.metaTitle,
          metaDescription: data.metaDescription,
        },
      });
      router.push('/admin/products');
    } catch (error) {
      console.error('Failed to update product:', error);
      alert('Failed to update product');
    }
  };

  if (isFetching) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="border-navy h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
          <p className="font-display text-navy text-lg font-bold">Loading Artifact Data...</p>
        </div>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-5xl space-y-6 pb-8 duration-700"
      >
        {/* Top Bar */}
        <div className="flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-navy text-3xl font-bold tracking-tight">Edit Masterpiece</h2>

          <Button type="submit" isLoading={isPending} className="w-full sm:w-auto">
            {isPending ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Info Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* General Information Bento Box */}
            <div className="relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="bg-cream-dark/30 pointer-events-none absolute -top-20 -left-20 h-48 w-48 rounded-full blur-2xl"></div>

              <h3 className="font-display text-navy mb-8 flex items-center gap-3 text-xl font-bold">
                <span className="text-maroon flex h-8 w-8 items-center justify-center rounded-xl bg-gray-50">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                General Information
              </h3>

              <div className="relative space-y-6">
                <TextField name="name" label="PRODUCT NAME" placeholder="e.g. 30cm Kalash Design Kuthu Vilakku" />

                <TextField name="material" label="MATERIAL SELECTION" placeholder="e.g. Grade-A Cast Brass" />

                <TextField name="dimensions" label="DIMENSIONS & WEIGHT" placeholder="e.g. 10 x 30 x 15 cm | 2kg" />

                <TextAreaField
                  name="description"
                  label="DESCRIPTION"
                  placeholder="Enter premium material details and craftsmanship description..."
                  rows={5}
                />
              </div>
            </div>

            {/* Pricing Bento Box */}
            <div className="relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-display text-navy mb-8 flex items-center gap-3 text-xl font-bold">
                <span className="text-gold-dark flex h-8 w-8 items-center justify-center rounded-xl bg-gray-50">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Pricing Details
              </h3>

              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
                <TextField name="price" label="PRICE (₹)" type="number" placeholder="0.00" />

                <SelectField
                  name="unit"
                  label="PRICING UNIT"
                  options={[
                    { label: 'Piece', value: 'Piece' },
                    { label: 'kg', value: 'kg' },
                    { label: 'Box', value: 'Box' },
                    { label: 'Gram', value: 'Gram' },
                    { label: 'Meter', value: 'Meter' },
                  ]}
                />
              </div>
            </div>

            {/* SEO Details Bento Box */}
            <div className="relative overflow-hidden rounded-4xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-display text-navy mb-6 flex items-center gap-3 text-lg font-bold">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-50 text-blue-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </span>
                Search Engine Optimization
              </h3>

              <div className="relative space-y-6">
                <TextField
                  name="metaTitle"
                  label="META TITLE"
                  placeholder="e.g. Premium Brass Kuthu Vilakku - Buy Online"
                />
                <TextAreaField
                  name="metaDescription"
                  label="META DESCRIPTION"
                  placeholder="Enter a compelling description for search engine results..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* Image Upload Bento Box */}
            <div className="rounded-4xl border border-gray-100 bg-white p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-display text-navy mb-6 text-left text-xl font-bold">Product Image</h3>

              <div className="group hover:border-maroon/50 hover:bg-maroon/5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-10 transition-all">
                <div className="text-maroon group-hover:bg-maroon mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:text-white">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </div>
                <p className="text-navy mb-1 text-sm font-bold">Upload Artifact Image</p>
                <p className="text-xs font-medium text-gray-400">SVG, PNG, JPG (Max 5MB)</p>
              </div>
            </div>

            {/* Category Bento Box */}
            <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-display text-navy mb-6 text-xl font-bold">Organization</h3>

              <div>
                <SelectField
                  name="category"
                  label="SELECT CATEGORY"
                  options={categories.map((cat) => ({
                    label: cat.title,
                    value: cat.title,
                  }))}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
