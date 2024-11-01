'use client';

import type { ReactNode } from 'react';
import React from 'react';

import { useAccordionContext } from '../accordion-context';

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
    <div aria-label={ariaLabel}>
      <button type="button" onClick={handleClick}>
        {title}
      </button>
      {isActive && <div>{children}</div>}
    </div>
  );
}

export default AccordionItem;
