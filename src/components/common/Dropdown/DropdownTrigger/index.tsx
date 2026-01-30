import type { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';

import { useDropdownContext } from '../dropdown-context';

import cn from '@/lib/utils/style';

const DropdownTriggerVariants = cva('flex flex-row items-center gap-3 bg-white/5 px-6 py-3 rounded-full backdrop-blur-3xl transition-all hover:bg-white/10', {
  variants: {
    variant: {
      bordered: 'border border-solid border-white/10',
    },
  },
  defaultVariants: {},
});

type TDropdownTriggerProps = {
  children: ReactNode;
  className?: string;
  variant?: 'bordered';
};

/**
 * DropdownTrigger 컴포넌트
 * @param children DropdownTrigger 컴포넌트 안에 포함될 요소들을 지정합니다.
 * @param onClick DropdownTrigger 컴포넌트를 눌렀을 때 발생할 이벤트를 지정합니다.
 * @param variant DropdownTrigger 컴포넌트의 스타일을 결정합니다.
 */
const DropdownTrigger = ({ children, variant = 'bordered', className }: TDropdownTriggerProps) => {
  const { toggleDropdown, isOpen } = useDropdownContext();

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(DropdownTriggerVariants({ variant }), isOpen ? 'border-main-green shadow-[0_0_20px_rgba(82,229,96,0.3)]' : 'border-white/10', className)}
      type="button"
      onClick={handleInteraction}
      onTouchEnd={handleInteraction}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls="dropdown-menu"
    >
      {children}
    </motion.button>
  );
};

export default DropdownTrigger;
