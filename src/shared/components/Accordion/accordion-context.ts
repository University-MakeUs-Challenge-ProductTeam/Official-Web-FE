'use client';

import { createContext, useContext } from 'react';

interface IAccordionContextType {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

export const AccordionContext = createContext<IAccordionContextType | undefined>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordionContext는 AccordionProvider 내부에서 사용되어야 합니다.');
  }
  return context;
};
