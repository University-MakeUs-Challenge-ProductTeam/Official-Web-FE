import { setupServer } from 'msw/node';

import { handlers } from '@/lib/mocks/handler';

export const server = setupServer(...handlers);
