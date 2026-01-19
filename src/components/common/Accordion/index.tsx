import type { ReactNode } from 'react';

import AccordionItem from './AccordionItem';
import AccordionProvider from './AccordionProvider';

type TAccordionProps = {
  children: ReactNode;
};

/**
 * Accordion 컴포넌트
 * @param children Accordion 컴포넌트 안에 포함될 요소들을 지정합니다.
 */
const Accordion = ({ children }: TAccordionProps) => {
  return (
    <AccordionProvider>
      <div>{children}</div>
    </AccordionProvider>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
