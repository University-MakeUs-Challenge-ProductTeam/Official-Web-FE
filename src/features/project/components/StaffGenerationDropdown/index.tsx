'use client';

import type React from 'react';
import { IoChevronDown } from 'react-icons/io5';

import Dropdown from '@/components/common/Dropdown';
import DropdownItem from '@/components/common/Dropdown/DropdownItem';
import DropdownMenu from '@/components/common/Dropdown/DropdownMenu';
import DropdownTrigger from '@/components/common/Dropdown/DropdownTrigger';
import Typography from '@/components/common/Typography';

import { getCentralStaffGenerations } from '@/lib/api/staff';
import { queryKeys } from '@/lib/query';

import { useQuery } from '@tanstack/react-query';

type TStaffGenerationDropdownProps = {
  selected: 'ALL' | number;
  setSelected: React.Dispatch<React.SetStateAction<'ALL' | number>>;
};

const StaffGenerationDropdown = ({ selected, setSelected }: TStaffGenerationDropdownProps) => {
  const { data } = useQuery({
    queryKey: queryKeys.staffs.generations(),
    queryFn: () => getCentralStaffGenerations(),
  });
  const generationList = ['ALL', ...(data?.generationList ?? [])] as Array<'ALL' | number>;

  return (
    <div className="relative">
      <Dropdown>
        <DropdownTrigger>
          <Typography className="text-sm font-black uppercase italic tracking-widest text-white/40">
            {selected !== 'ALL' ? `${selected}th Gen` : 'Generation'}
          </Typography>
          <IoChevronDown size={14} className="text-main-green" />
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
    </div>
  );
};

export default StaffGenerationDropdown;
