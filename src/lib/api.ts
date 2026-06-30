import { apiClient } from './axios';
import { Product, Category } from '@/types';

// ==========================================
// PRODUCTS API
// ==========================================

export const fetchProducts = async (category?: string): Promise<Product[]> => {
  const response = await apiClient.get('/product', {
    params: { category },
  });
  return response.data.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await apiClient.get(`/product/${id}`);
  return response.data.data;
};

// ==========================================
// CATEGORIES API
// ==========================================

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await apiClient.get('/category');
  return response.data.data;
};

export const fetchCategoryById = async (id: string): Promise<Category> => {
  const response = await apiClient.get(`/category/${id}`);
  return response.data.data;
};

// You can continue adding all your global fetch functions here (Cart, Auth, etc.)
