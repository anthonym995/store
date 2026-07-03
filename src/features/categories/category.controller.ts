import { Category } from '@/lib/types';
import { db } from '@/lib/firebaseAdmin';
import { CategoryCreateSchema, CategoryUpdateSchema } from './category.validation';

export const categoryController = {
  // GET ALL CATEGORIES
  getAllCategories: async (): Promise<Category[]> => {
    try {
      const snapshot = await db.collection('categories').get();
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Category);
    } catch (error) {
      console.error('Error fetching categories', error);
      return [];
    }
  },

  // GET CATEGORY BY ID
  getCategoryById: async (id: string | number): Promise<Category | null> => {
    try {
      const doc = await db.collection('categories').doc(id.toString()).get();
      if (!doc.exists) return null;
      return { id: doc.id, ...doc.data() } as Category;
    } catch (error) {
      console.error('Error fetching category', error);
      return null;
    }
  },

  // CREATE CATEGORY
  createCategory: async (categoryData: Partial<Category>): Promise<Category> => {
    try {
      // Validate input data
      const parsedData = CategoryCreateSchema.parse(categoryData);

      let docRef;
      if (parsedData.slug) {
        docRef = db.collection('categories').doc(parsedData.slug);
        await docRef.set(parsedData);
      } else {
        docRef = await db.collection('categories').add(parsedData);
      }

      return { id: docRef.id, ...parsedData } as Category;
    } catch (error) {
      console.error('Error creating category', error);
      throw error;
    }
  },

  // UPDATE CATEGORY
  updateCategory: async (id: string | number, updateData: Partial<Category>): Promise<Category | null> => {
    try {
      // Validate input data
      const parsedData = CategoryUpdateSchema.parse(updateData);

      const categoryRef = db.collection('categories').doc(id.toString());
      await categoryRef.update(parsedData as any);

      // BEST PRACTICE: Propagate the title change to all products in this category
      if (parsedData.title) {
        const productsSnapshot = await db
          .collection('products')
          .where('categorySlug', '==', id.toString())
          .get();

        if (!productsSnapshot.empty) {
          const batch = db.batch();
          productsSnapshot.docs.forEach((doc) => {
            batch.update(doc.ref, { category: parsedData.title });
          });
          // Commit all product updates in a single transaction
          await batch.commit();
        }
      }

      return { id: id.toString(), ...parsedData } as Category;
    } catch (error) {
      console.error('Error updating category', error);
      return null;
    }
  },

  // DELETE CATEGORY
  deleteCategory: async (id: string | number): Promise<boolean> => {
    try {
      await db.collection('categories').doc(id.toString()).delete();
      return true;
    } catch (error) {
      console.error('Error deleting category', error);
      return false;
    }
  },
};
