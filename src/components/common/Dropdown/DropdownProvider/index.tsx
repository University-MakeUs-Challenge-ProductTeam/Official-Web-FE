import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { DropdownContext } from '../dropdown-context';

type TDropdownProviderProps = {
  children: ReactNode;
};

export const DropdownProvider = ({ children }: TDropdownProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, toggleDropdown, closeDropdown }), [isOpen, toggleDropdown, closeDropdown]);

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};
