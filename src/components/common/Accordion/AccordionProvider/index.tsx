'use client';

import type { ReactNode } from 'react';
import React, { useMemo, useState } from 'react';

import { AccordionContext } from '../accordion-context';

interface IAccordionProviderProps {
  children: ReactNode;
}

function AccordionProvider({ children }: IAccordionProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const value = useMemo(() => ({ activeIndex, setActiveIndex }), [activeIndex, setActiveIndex]);

  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
}

export default AccordionProvider;
