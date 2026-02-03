'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

import { isMocking } from '@/constants/constants';

import { initMocking } from '@/lib/mocks';

export const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(!isMocking());

  useEffect(() => {
    if (!isReady) {
      (async () => {
        await initMocking();

        setIsReady(true);
      })();
    }
  }, [isReady]);

  if (!isReady) return null;

  return children;
};
