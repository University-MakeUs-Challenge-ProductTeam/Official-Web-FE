'use client';

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/querykeys/project';

import Dropdown from '@/components/common/Dropdown';
import DropdownItem from '@/components/common/Dropdown/DropdownItem';
import DropdownMenu from '@/components/common/Dropdown/DropdownMenu';
import DropdownTrigger from '@/components/common/Dropdown/DropdownTrigger';
import Typography from '@/components/common/Typography';

import { getCentralStaffGenerations } from '@/lib/api/staff';

type TStaffGenerationDropdownProps = {
  selected: 'ALL' | number;
  setSelected: React.Dispatch<React.SetStateAction<'ALL' | number>>;
};

const StaffGenerationDropdown = ({ selected, setSelected }: TStaffGenerationDropdownProps) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.staffGenerations],
    queryFn: () => getCentralStaffGenerations(),
  });
  const generationList = ['ALL', ...(data?.generationList ?? [])] as Array<'ALL' | number>;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Typography className="text-sm font-black uppercase italic tracking-widest text-white/40">
          {selected !== 'ALL' ? `${selected}th Gen` : 'Generation'}
        </Typography>
        <IoIosArrowDown size={14} className="text-main-green" />
      </DropdownTrigger>
      <DropdownMenu position="top-[calc(100%+8px)] left-0 min-w-full">
        {generationList.map((gen) => (
          <DropdownItem
            key={gen}
            onClick={(e: any) => {
              e.preventDefault();
              e.stopPropagation();
              setSelected(gen as any);
            }}
          >
            <Typography className={`text-sm font-black uppercase italic tracking-widest ${gen === selected ? 'text-main-green' : 'text-white/40'}`}>
              {gen === 'ALL' ? 'ALL' : `${gen}th`}
            </Typography>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default StaffGenerationDropdown;
