import { Product } from '@/lib/types';
import { db } from '@/lib/firebaseAdmin';
import { generateSlug, generateShortId } from '@/utils';
import { ProductCreateSchema, ProductUpdateSchema } from './product.validation';

export const productController = {
  // GET ALL PRODUCTS
  getAllProducts: async (filters?: { category?: string }): Promise<Product[]> => {
    try {
      const snapshot = await db.collection('products').get();
      let result = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Product);

      if (filters?.category) {
        result = result.filter(
          (p) =>
            p.category?.toLowerCase().includes(filters.category!.toLowerCase()) ||
            p.categorySlug?.toLowerCase() === filters.category!.toLowerCase()
        );
      }

      return result;
    } catch (error) {
      console.error('Error fetching products', error);
      return [];
    }
  },

  // GET PRODUCT BY ID
  getProductById: async (id: string | number): Promise<Product | null> => {
    try {
      const doc = await db.collection('products').doc(id.toString()).get();
      if (!doc.exists) return null;
      return { id: doc.id, ...doc.data() } as Product;
    } catch (error) {
      console.error('Error fetching product', error);
      return null;
    }
  },

  // GET PRODUCT BY SLUG
  getProductBySlug: async (slug: string): Promise<Product | null> => {
    return productController.getProductById(slug);
  },

  // CREATE PRODUCT
  createProduct: async (productData: Partial<Product>): Promise<Product> => {
    try {
      if (!productData.name) {
        throw new Error('Product name is required');
      }

      // Validate input data
      const parsedData = ProductCreateSchema.parse(productData);

      // Generate base slug
      let slug = generateSlug(parsedData.name);

      // Check if slug exists
      const existingDoc = await db.collection('products').doc(slug).get();
      if (existingDoc.exists) {
        // If it exists, append a short random string
        const randomStr = generateShortId();
        slug = `${slug}-${randomStr}`;
      }

      // Ensure the correct slug is saved in the document data
      const finalProductData = { ...parsedData, slug, categorySlug: generateSlug(parsedData.category) };

      const docRef = db.collection('products').doc(slug);
      await docRef.set(finalProductData);

      return { id: docRef.id, ...finalProductData } as Product;
    } catch (error) {
      console.error('Error creating product', error);
      throw error;
    }
  },

  // UPDATE PRODUCT
  updateProduct: async (id: string | number, updateData: Partial<Product>): Promise<Product | null> => {
    try {
      // Validate input data
      const parsedData = ProductUpdateSchema.parse(updateData);

      // If the category name was updated, we MUST auto-sync the categorySlug!
      let finalData = { ...parsedData };
      if (parsedData.category) {
        finalData.categorySlug = generateSlug(parsedData.category);
      }

      await db
        .collection('products')
        .doc(id.toString())
        .update(finalData as any);
      return { id: id.toString(), ...finalData } as Product;
    } catch (error) {
      console.error('Error updating product', error);
      return null;
    }
  },

  // DELETE PRODUCT
  deleteProduct: async (id: string | number): Promise<boolean> => {
    try {
      await db.collection('products').doc(id.toString()).delete();
      return true;
    } catch (error) {
      console.error('Error deleting product', error);
      return false;
    }
  },
};
