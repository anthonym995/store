import { apiClient } from './axios';
import { Product, Category } from '@/lib/types';

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

export const createProduct = async (data: Partial<Product>): Promise<Product> => {
  const response = await apiClient.post('/product', data);
  return response.data.data;
};

export const updateProduct = async (id: string, data: Partial<Product>): Promise<Product> => {
  const response = await apiClient.put(`/product/${id}`, data);
  return response.data.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await apiClient.delete(`/product/${id}`);
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

export const createCategory = async (data: Partial<Category>): Promise<Category> => {
  const response = await apiClient.post('/category', data);
  return response.data.data;
};

export const updateCategory = async (id: string, data: Partial<Category>): Promise<Category> => {
  const response = await apiClient.put(`/category/${id}`, data);
  return response.data.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
  await apiClient.delete(`/category/${id}`);
};
