import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { DropdownContext } from '../dropdown-context';

type TDropdownProviderProps = {
  children: ReactNode;
};

export const DropdownProvider = ({ children }: TDropdownProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, closeDropdown]);

  const value = useMemo(() => ({ isOpen, toggleDropdown, closeDropdown }), [isOpen, toggleDropdown, closeDropdown]);

  return (
    <DropdownContext.Provider value={value}>
      <div ref={dropdownRef}>{children}</div>
    </DropdownContext.Provider>
  );
};
