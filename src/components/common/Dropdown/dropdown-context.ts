import { createContext, useContext } from 'react';

interface IDropdownContextType {
  closeDropdown: () => void;
  isOpen: boolean;
  toggleDropdown: () => void;
}

export const DropdownContext = createContext<IDropdownContextType | undefined>(undefined);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdownContext는 DropdownProvider 내부에서 사용되어야 합니다.');
  }
  return context;
};
