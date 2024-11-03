import React from 'react';

import Accordion from '@/shared/components/Accordion';
import AccordionItem from '@/shared/components/Accordion/AccordionItem';
import Typography from '@/shared/components/Typography';
import { FAQ_CONTENT } from '@/shared/constants/FaqContent';

function FaqAccordions() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  return (
    <Accordion>
      {FAQ_CONTENT.map((item) => (
        <AccordionItem key={item.id} index={item.id} title={item.question}>
          <Typography size="text-sm" className="text-[#9D9D9D]">
            {item.answer || defaultContent}
          </Typography>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FaqAccordions;
