'use client';

import type { ReactNode } from 'react';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';

import Typography from '../../Typography';
import { useAccordionContext } from '../accordion-context';

import cn from '@/shared/utils/style';

interface IAccordionItemProps {
  ariaLabel?: string;
  children?: ReactNode;
  index: number;
  title?: string;
}

/**
 * AccordionItem 컴포넌트
 * @param ariaLabel 현재 엘리먼트의 기능 및 목적을 설명합니다.
 * @param children 설명 부분에 들어갈 내용을 지정합니다.
 * @param index 각 Accordion 컴포넌트를 구분할 key를 지정합니다.
 * @param title 제목을 표시합니다.
 */
function AccordionItem({ index, title = '제목', ariaLabel, children = '내용' }: IAccordionItemProps) {
  const { activeIndex, setActiveIndex } = useAccordionContext();
  const isActive = activeIndex === index;

  const handleClick = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div aria-label={ariaLabel} className="mt-8 w-full border-b-2 border-solid border-[#3A3A3A]">
      <button className="w-full py-3" type="button" onClick={handleClick}>
        <div className="flex flex-row">
          <Typography as="h3" size="title-sm" className={cn(isActive ? 'text-main-green' : 'text-[#9D9D9D]', 'mr-3 font-bold')}>
            {title}
          </Typography>
          <motion.div className="ml-auto" initial={{ rotate: 0 }} animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <IoIosArrowDown size={20} color="#9D9D9D" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="content"
            initial={{ opacity: 0, x: 0, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="py-3"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionItem;
