'use client';

import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';

import { AccordionContext } from '../accordion-context';

type TAccordionProviderProps = {
  children: ReactNode;
};

const AccordionProvider = ({ children }: TAccordionProviderProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const value = useMemo(() => ({ activeIndex, setActiveIndex }), [activeIndex, setActiveIndex]);

  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

export default AccordionProvider;
