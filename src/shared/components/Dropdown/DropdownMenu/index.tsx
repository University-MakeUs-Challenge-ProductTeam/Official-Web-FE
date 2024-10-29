import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useDropdownContext } from '../dropdown-context';

interface IDropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  position?: string;
}

/**
 * DropdownTrigger 컴포넌트
 * @param children DropdownTrigger 컴포넌트 안에 포함될 요소들을 지정합니다.
 * @param onClick DropdownTrigger 컴포넌트를 눌렀을 때 발생할 이벤트를 지정합니다.
 * @param variant DropdownTrigger 컴포넌트의 스타일을 결정합니다.
 */
function DropdownMenu({ children, position = 'top-30 right-0' }: IDropdownMenuProps) {
  const { isOpen } = useDropdownContext();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${position} w-120 rounded-12 border-border-primary bg-background-secondary text-text-primary absolute z-10 overflow-hidden border`}
          initial={{ opacity: 0, scale: 0.5, x: 20, y: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 20, y: -50 }}
        >
          <ul className="text-center">{children}</ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropdownMenu;
