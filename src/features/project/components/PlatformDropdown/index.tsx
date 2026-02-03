'use client';

import type React from 'react';
import { IoChevronDown } from 'react-icons/io5';

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

type TPlatformDropdownProps = {
  selected: keyof typeof OPlatform;
  setSelected: React.Dispatch<React.SetStateAction<keyof typeof OPlatform>>;
};

const PlatformDropdown = ({ selected, setSelected }: TPlatformDropdownProps) => {
  const platformList = Object.keys(OPlatform) as Array<keyof typeof OPlatform>;
  return (
    <div className="relative">
      <Dropdown>
        <DropdownTrigger>
          <Typography className="text-sm font-black uppercase italic tracking-widest text-white/40">
            {selected !== 'ALL' ? OPlatform[selected] : 'Platform'}
          </Typography>
          <IoChevronDown size={14} className="text-main-green" />
        </DropdownTrigger>
        <DropdownMenu>
          {platformList.map((item) => (
            <DropdownItem
              key={item}
              onClick={(e: any) => {
                e.preventDefault();
                e.stopPropagation();
                setSelected(item);
              }}
            >
              <Typography className={`text-sm font-black uppercase italic tracking-widest ${item === selected ? 'text-main-green' : 'text-white/40'}`}>
                {OPlatform[item]}
              </Typography>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default PlatformDropdown;
