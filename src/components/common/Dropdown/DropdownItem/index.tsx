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
      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer rounded-2xl px-5 py-3 transition-colors"
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
