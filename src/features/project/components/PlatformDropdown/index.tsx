'use client';

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Dropdown from '@/components/common/Dropdown';
import DropdownItem from '@/components/common/Dropdown/DropdownItem';
import DropdownMenu from '@/components/common/Dropdown/DropdownMenu';
import DropdownTrigger from '@/components/common/Dropdown/DropdownTrigger';
import Typography from '@/components/common/Typography';

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
        <Typography className="text-sm font-black uppercase italic tracking-widest text-white/40">
          {selected !== 'ALL' ? OPlatform[selected] : 'Platform'}
        </Typography>
        <IoIosArrowDown size={14} className="text-[#52E560]" />
      </DropdownTrigger>
      <DropdownMenu>
        {platformList.map((item) => (
          <DropdownItem key={item} onClick={() => setSelected(item)}>
            <Typography className={`text-sm font-black uppercase italic tracking-widest ${item === selected ? 'text-[#52E560]' : 'text-white/40'}`}>
              {OPlatform[item]}
            </Typography>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default PlatformDropdown;
