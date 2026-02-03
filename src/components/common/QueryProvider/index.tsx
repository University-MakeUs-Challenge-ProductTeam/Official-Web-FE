'use client';

import type React from 'react';
import { useState } from 'react';

import { env } from '@/lib/env';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

type Props = {
  children: React.ReactNode;
};

export const QueryProvider = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60, // 1min
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {env.isDev && <ReactQueryDevtools initialIsOpen={false} />}
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
};
