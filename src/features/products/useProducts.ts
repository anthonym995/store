import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProducts, fetchProductById, createProduct, updateProduct, deleteProduct } from '@/lib/api';
import { Product } from '@/lib/types';

// ==========================================
// QUERIES
// ==========================================

export const useProducts = (category?: string) => {
  return useQuery({
    queryKey: category ? ['products', category] : ['products'],
    queryFn: () => fetchProducts(category),
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};

// ==========================================
// MUTATIONS
// ==========================================

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Product>) => createProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Product> }) => updateProduct(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['product', id] });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
