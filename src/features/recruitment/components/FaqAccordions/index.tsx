import React from 'react';

import { FAQ_CONTENT } from '@/constants/FaqContent';

import Accordion from '@/components/common/Accordion';
import AccordionItem from '@/components/common/Accordion/AccordionItem';
import Typography from '@/components/common/Typography';

const FaqAccordions = () => {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  return (
    <Accordion>
      {FAQ_CONTENT.map((item) => (
        <AccordionItem key={item.id} index={item.id} title={item.question}>
          <Typography size="text-sm" className="text-neutral-400">
            {item.answer || defaultContent}
          </Typography>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordions;
