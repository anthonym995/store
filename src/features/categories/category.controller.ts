import { Category } from '@/types';
import { categories } from '@/data/categories';

export const categoryController = {
  // GET ALL CATEGORIES
  getAllCategories: async (): Promise<Category[]> => {
    return categories;
  },

  // GET CATEGORY BY ID
  getCategoryById: async (id: string | number): Promise<Category | null> => {
    const category = categories.find((c) => c.id.toString() === id.toString());
    return category || null;
  },

  // CREATE CATEGORY
  createCategory: async (categoryData: Partial<Category>): Promise<Category> => {
    const newCategory = {
      id: categoryData.id || Date.now().toString(),
      ...categoryData,
    } as Category;

    return newCategory;
  },

  // UPDATE CATEGORY
  updateCategory: async (id: string | number, updateData: Partial<Category>): Promise<Category | null> => {
    return { id, ...updateData } as Category;
  },

  // DELETE CATEGORY
  deleteCategory: async (id: string | number): Promise<boolean> => {
    return true;
  },
};
