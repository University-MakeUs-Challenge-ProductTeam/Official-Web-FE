import { handlers } from '@/lib/mocks/handler';

import { setupServer } from 'msw/node';

export const server = setupServer(...handlers);
