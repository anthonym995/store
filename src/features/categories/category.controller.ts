import { Category } from './category.model';

// Mock DB for categories
const dummyCategories: Category[] = [
  { id: 1, name: 'Kuthu Vilakku', seo: { slug: 'kuthu-vilakku' } },
  { id: 2, name: 'Pipe Lamp', seo: { slug: 'pipe-lamp' } },
];

export const categoryController = {
  // GET ALL CATEGORIES
  getAllCategories: async (): Promise<Category[]> => {
    return dummyCategories;
  },

  // GET CATEGORY BY ID
  getCategoryById: async (id: string | number): Promise<Category | null> => {
    const category = dummyCategories.find((c) => c.id.toString() === id.toString());
    return category || null;
  },

  // CREATE CATEGORY
  createCategory: async (categoryData: Partial<Category>): Promise<Category> => {
    const newCategory = {
      id: Date.now(),
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
