import { cache } from 'react';

import { QueryClient } from '@tanstack/react-query';

/**
 * Server-side QueryClient factory with React cache for request deduplication.
 * Each request gets its own QueryClient instance.
 */
export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000, // 1 minute
          gcTime: 5 * 60 * 1000, // 5 minutes (garbage collection)
        },
      },
    }),
);
