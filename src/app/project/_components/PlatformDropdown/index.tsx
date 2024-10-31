'use client';

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Dropdown from '@/shared/components/Dropdown';
import DropdownItem from '@/shared/components/Dropdown/DropdownItem';
import DropdownMenu from '@/shared/components/Dropdown/DropdownMenu';
import DropdownTrigger from '@/shared/components/Dropdown/DropdownTrigger';
import Typography from '@/shared/components/Typography';

export const OPlatform = {
  ALL: '전체',
  IOS: 'iOS',
  AOS: 'Android',
  WEB: 'Web',
} as const;

interface IPlatformDropdownProps {
  selected: keyof typeof OPlatform;
  setSelected: React.Dispatch<React.SetStateAction<keyof typeof OPlatform>>;
}

function PlatformDropdown({ selected, setSelected }: IPlatformDropdownProps) {
  const platformList = Object.keys(OPlatform) as Array<keyof typeof OPlatform>;
  return (
    <Dropdown>
      <DropdownTrigger>
        <Typography size="title-sm" className="text-[#818181]">
          {selected !== 'ALL' ? OPlatform[selected] : '플랫폼'}
        </Typography>
        <IoIosArrowDown size={20} color="#818181" />
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onClick={() => setSelected('ALL')}>
          <Typography size="text-lg" className={selected === 'ALL' ? 'text-main-green' : 'text-[#CCCCCC]'}>
            전체
          </Typography>
        </DropdownItem>
        {platformList
          .filter((item) => item !== 'ALL')
          .map((item) => (
            <DropdownItem key={item} onClick={() => setSelected(item)}>
              <Typography size="text-lg" className={item === selected ? 'text-main-green' : 'text-[#CCCCCC]'}>
                {OPlatform[item]}
              </Typography>
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default PlatformDropdown;
