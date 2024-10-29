import type { ReactNode } from 'react';

import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import { DropdownProvider } from './DropdownProvider';
import DropdownTrigger from './DropdownTrigger';

interface IDropdownProps {
  children: ReactNode;
}

/**
 * Dropdown 컴포넌트
 * @param children Dropdown 컴포넌트 안에 포함될 요소들을 지정합니다.
 */
function Dropdown({ children }: IDropdownProps) {
  return (
    <DropdownProvider>
      <div className="relative">{children}</div>
    </DropdownProvider>
  );
}

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Trigger = DropdownTrigger;

export default Dropdown;
