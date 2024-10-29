import type { ReactNode } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

interface IDropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

function DropdownItem({ children, onClick }: IDropdownItemProps) {
  return (
    <motion.li
      whileHover={{ backgroundColor: 'rgba(30, 162, 181, 0.2)' }}
      whileTap={{ scale: 0.9, backgroundColor: 'rgba(25, 140, 160, 0.2)' }}
      className="rounded-12 text-md-regular cursor-pointer pb-11 pt-12"
      onClick={onClick}
    >
      {children}
    </motion.li>
  );
}

export default DropdownItem;
