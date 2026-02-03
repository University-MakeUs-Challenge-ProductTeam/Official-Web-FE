import { env } from '@/lib/env';

export const isMocking = () => env.mocking === 'true';
