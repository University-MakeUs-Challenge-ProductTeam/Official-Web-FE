import React from 'react';

import Accordion from '@/shared/components/Accordion';
import AccordionItem from '@/shared/components/Accordion/AccordionItem';

function FaqAccordions() {
  return (
    <Accordion>
      <AccordionItem index={1} title="제목 1">
        <p>내용 1</p>
      </AccordionItem>
      <AccordionItem index={2} title="제목 2">
        <p>내용 2</p>
      </AccordionItem>
      <AccordionItem index={3} title="제목 3">
        <p>내용 3</p>
      </AccordionItem>
      <AccordionItem index={4} title="제목 4">
        <p>내용 4</p>
      </AccordionItem>
    </Accordion>
  );
}

export default FaqAccordions;
