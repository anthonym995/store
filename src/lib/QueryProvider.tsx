'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Data remains fresh for 1 minute before refetching
      retry: 1, // Only retry failed requests once
    },
  },
});

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Devtools only show up in development mode automatically */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
