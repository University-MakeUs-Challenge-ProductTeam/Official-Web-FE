import type { ReactNode } from 'react';
import React from 'react';
import { cva } from 'class-variance-authority';

import { useDropdownContext } from '../dropdown-context';

import cn from '@/shared/utils/style';

const DropdownTriggerVariants = cva('', {
  variants: {
    variant: {
      bordered: '',
    },
  },
  defaultVariants: {},
});

interface IDropdownTriggerProps {
  children: ReactNode;
  variant?: 'bordered';
}

/**
 * DropdownTrigger 컴포넌트
 * @param children DropdownTrigger 컴포넌트 안에 포함될 요소들을 지정합니다.
 * @param onClick DropdownTrigger 컴포넌트를 눌렀을 때 발생할 이벤트를 지정합니다.
 * @param variant DropdownTrigger 컴포넌트의 스타일을 결정합니다.
 */
function DropdownTrigger({ children, variant = 'bordered' }: IDropdownTriggerProps) {
  const { toggleDropdown } = useDropdownContext();
  return (
    <button className={cn(DropdownTriggerVariants({ variant }))} type="button" onClick={toggleDropdown}>
      {children}
    </button>
  );
}

export default DropdownTrigger;
