import { setupWorker } from 'msw/browser';

import { handlers } from '@/lib/mocks/handler';

export const worker = setupWorker(...handlers);
