'use client';

import type { ReactNode } from 'react';
import { IoChevronDown } from 'react-icons/io5';

import cn from '@/lib/utils/style';
import Typography from '../../Typography';
import { useAccordionContext } from '../accordion-context';

import { AnimatePresence, motion } from 'framer-motion';

type TAccordionItemProps = {
  ariaLabel?: string;
  children?: ReactNode;
  index: number;
  title?: string;
};

/**
 * AccordionItem 컴포넌트
 * @param ariaLabel 현재 엘리먼트의 기능 및 목적을 설명합니다.
 * @param children 설명 부분에 들어갈 내용을 지정합니다.
 * @param index 각 Accordion 컴포넌트를 구분할 key를 지정합니다.
 * @param title 제목을 표시합니다.
 */
const AccordionItem = ({ index, title = '제목', ariaLabel, children = '내용' }: TAccordionItemProps) => {
  const { activeIndex, setActiveIndex } = useAccordionContext();
  const isActive = activeIndex === index;

  const handleClick = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className="group/accordion relative mb-6 w-full overflow-visible">
      <motion.button
        whileHover={{ x: typeof window !== 'undefined' && window.innerWidth > 768 ? 10 : 0 }}
        className={cn(
          'relative w-full rounded-2xl border border-white/5 p-6 text-left transition-all duration-300',
          isActive ? 'border-white/20 bg-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]' : 'bg-white/[0.02] hover:bg-white/5',
        )}
        type="button"
        onClick={handleClick}
        aria-expanded={isActive}
        aria-controls={`accordion-content-${index}`}
        aria-label={ariaLabel || title}
      >
        <div className="flex items-center gap-6">
          <span className={cn('text-xs font-black italic tracking-widest transition-colors', isActive ? 'text-main-green' : 'text-white/20')}>
            Q.{index.toString().padStart(2, '0')}
          </span>
          <Typography
            className={cn(
              'flex-1 text-lg font-black italic tracking-tight transition-colors',
              isActive ? 'text-white' : 'text-white/60 group-hover/accordion:text-white',
            )}
          >
            {title}
          </Typography>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isActive ? 180 : 0 }}
            className={cn(
              'flex size-11 items-center justify-center rounded-full border border-white/10 transition-colors',
              isActive ? 'border-main-green bg-main-green text-black' : 'text-white/40 group-hover/accordion:text-white',
            )}
            aria-hidden="true"
          >
            <IoChevronDown size={20} />
          </motion.div>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'circOut' }}
              className="overflow-hidden"
              id={`accordion-content-${index}`}
              role="region"
            >
              <div className="mt-6 border-t border-white/5 pt-6">
                <Typography className="text-sm font-medium leading-relaxed text-white/40">{children}</Typography>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AccordionItem;
