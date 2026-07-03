import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.union([z.string(), z.number()]).optional(),
  title: z.string().min(1, 'Category title is required'),
  slug: z.string().min(1, 'Category slug is required'),
  description: z.string().optional(),
  image: z.any().optional(),
});

export const CategoryCreateSchema = CategorySchema.omit({ id: true });
export const CategoryUpdateSchema = CategorySchema.partial();
