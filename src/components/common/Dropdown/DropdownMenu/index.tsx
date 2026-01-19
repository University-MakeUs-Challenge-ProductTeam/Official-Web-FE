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
function DropdownMenu({ children, position = 'top-[calc(100%+8px)] left-0 min-w-full' }: IDropdownMenuProps) {
  const { isOpen } = useDropdownContext();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${position} absolute z-[100] max-h-[450px] overflow-y-auto rounded-3xl border border-white/10 bg-black/80 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1`}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <ul className="flex flex-col gap-1">{children}</ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropdownMenu;
