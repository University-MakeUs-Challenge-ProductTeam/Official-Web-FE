import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

import { useDropdownContext } from '../dropdown-context';

type TDropdownItemProps = {
  children: ReactNode;
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
};

const DropdownItem = ({ children, onClick }: TDropdownItemProps) => {
  const { closeDropdown } = useDropdownContext();
  return (
    <motion.li
      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer rounded-2xl px-5 py-3 transition-colors"
      onClick={(e) => {
        if (onClick) onClick(e);
        closeDropdown();
      }}
      role="menuitem"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onClick) onClick(e);
          closeDropdown();
        }
      }}
    >
      {children}
    </motion.li>
  );
};

export default DropdownItem;
