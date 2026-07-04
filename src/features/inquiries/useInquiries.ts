import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchInquiries, deleteInquiry } from '@/lib/api';

export const useInquiries = () => {
  return useQuery({
    queryKey: ['inquiries'],
    queryFn: fetchInquiries,
  });
};

export const useDeleteInquiry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteInquiry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
};
