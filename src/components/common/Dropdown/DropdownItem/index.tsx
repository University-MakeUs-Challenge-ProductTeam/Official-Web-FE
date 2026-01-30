import React, { type ReactNode, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

import { useDropdownContext } from '../dropdown-context';

type TDropdownItemProps = {
  children: ReactNode;
  onClick?: (e: React.MouseEvent | React.TouchEvent | React.KeyboardEvent) => void;
};

const DropdownItem = ({ children, onClick }: TDropdownItemProps) => {
  const { closeDropdown } = useDropdownContext();
  const touchHandled = useRef(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (touchHandled.current) {
        touchHandled.current = false;
        return;
      }
      e.stopPropagation();
      if (onClick) onClick(e);
      closeDropdown();
    },
    [onClick, closeDropdown],
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      touchHandled.current = true;
      if (onClick) onClick(e);
      closeDropdown();
      setTimeout(() => {
        touchHandled.current = false;
      }, 0);
    },
    [onClick, closeDropdown],
  );

  return (
    <motion.li
      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer rounded-2xl px-5 py-3 transition-colors"
      onClick={handleClick}
      onTouchEnd={handleTouchEnd}
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
