import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/lib/api';

// The custom React Query hook for categories
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};
