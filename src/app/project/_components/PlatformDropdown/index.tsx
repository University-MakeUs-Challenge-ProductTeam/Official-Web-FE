'use client';

import React from 'react';

import Dropdown from '@/shared/components/Dropdown';
import DropdownItem from '@/shared/components/Dropdown/DropdownItem';
import DropdownMenu from '@/shared/components/Dropdown/DropdownMenu';
import DropdownTrigger from '@/shared/components/Dropdown/DropdownTrigger';

function PlatformDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <p>플랫폼을 누르세요</p>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>
          <p>메뉴 1</p>
        </DropdownItem>
        <DropdownItem>
          <p>메뉴 2</p>
        </DropdownItem>
        <DropdownItem>
          <p>메뉴 3</p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default PlatformDropdown;
