import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductById } from '@/lib/api';

// The custom React Query hook for all products
export const useProducts = (category?: string) => {
  return useQuery({
    queryKey: category ? ['products', category] : ['products'],
    queryFn: () => fetchProducts(category),
  });
};

// The custom React Query hook for a single product
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, // Only fetch if ID exists
  });
};
