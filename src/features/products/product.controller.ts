import { Product } from '@/types';
import { products as dummyProducts } from '@/data/products';

export const productController = {
  // GET ALL PRODUCTS
  getAllProducts: async (filters?: { category?: string }): Promise<Product[]> => {
    let result = [...dummyProducts] as Product[];

    if (filters?.category) {
      result = result.filter((p) => p.category.toLowerCase().includes(filters.category!.toLowerCase()));
    }

    return result;
  },

  // GET PRODUCT BY ID
  getProductById: async (id: string | number): Promise<Product | null> => {
    const product = dummyProducts.find((p) => p.id.toString() === id.toString());
    return (product as Product) || null;
  },

  // CREATE PRODUCT
  createProduct: async (productData: Partial<Product>): Promise<Product> => {
    // In a real app with a DB, you would insert into MongoDB/PostgreSQL here
    const newProduct = {
      id: Date.now(),
      ...productData,
    } as Product;

    return newProduct;
  },

  // UPDATE PRODUCT
  updateProduct: async (id: string | number, updateData: Partial<Product>): Promise<Product | null> => {
    // Mock DB update
    return { id, ...updateData } as Product;
  },

  // DELETE PRODUCT
  deleteProduct: async (id: string | number): Promise<boolean> => {
    // Mock DB delete
    return true;
  },
};
