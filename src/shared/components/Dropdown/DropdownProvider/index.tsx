import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { DropdownContext } from '../dropdown-context';

interface IDropdownProviderProps {
  children: ReactNode;
}

export function DropdownProvider({ children }: IDropdownProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, toggleDropdown, closeDropdown }), [isOpen, toggleDropdown, closeDropdown]);

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
}
