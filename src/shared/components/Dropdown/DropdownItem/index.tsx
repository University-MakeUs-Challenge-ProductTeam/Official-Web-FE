import type { ReactNode } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

import { useDropdownContext } from '../dropdown-context';

interface IDropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

function DropdownItem({ children, onClick }: IDropdownItemProps) {
  const { closeDropdown } = useDropdownContext();
  return (
    <motion.li
      whileHover={{ backgroundColor: 'rgba(88, 88, 88, 0.2)' }}
      whileTap={{ scale: 0.9, backgroundColor: 'rgba(88, 88, 88, 0.2)' }}
      className="rounded-12 cursor-pointer px-[20px] py-[8px]"
      onClick={() => {
        if (onClick) onClick();
        closeDropdown();
      }}
    >
      {children}
    </motion.li>
  );
}

export default DropdownItem;
