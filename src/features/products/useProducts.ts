import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api';

// The custom React Query hook
export const useProducts = (category?: string) => {
  return useQuery({
    queryKey: category ? ['products', category] : ['products'],
    queryFn: () => fetchProducts(category),
  });
};
