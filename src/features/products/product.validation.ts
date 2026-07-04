import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.union([z.string(), z.number()]).optional(),
  name: z.string().min(1, 'Product name is required'),
  slug: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  categorySlug: z.string().optional(),
  material: z.string().optional(),
  description: z.string().optional(),
  dimensions: z.string().optional(),
  price: z.number().min(0, 'Price must be a positive number'),
  unit: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
  reviews: z.number().int().min(0).optional(),
  image: z.any().optional(), // Can be string or local object
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export const ProductCreateSchema = ProductSchema.omit({ id: true, slug: true, categorySlug: true });
export const ProductUpdateSchema = ProductSchema.partial();
