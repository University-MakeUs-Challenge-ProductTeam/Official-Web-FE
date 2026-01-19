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

import { getGenerations } from '@/lib/api/project';

interface IProjectGenerationDropdownProps {
  selected: 'ALL' | number;
  setSelected: React.Dispatch<React.SetStateAction<'ALL' | number>>;
}

function ProjectGenerationDropdown({ selected, setSelected }: IProjectGenerationDropdownProps) {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.projectGenerations],
    queryFn: () => getGenerations(),
  });
  const generationList = ['ALL', ...(data?.generationList ?? [])] as Array<'ALL' | number>;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Typography className="text-sm font-black uppercase italic tracking-widest text-white/40">
          {selected !== 'ALL' ? `${selected}th Gen` : 'Generation'}
        </Typography>
        <IoIosArrowDown size={14} className="text-[#52E560]" />
      </DropdownTrigger>
      <DropdownMenu>
        {generationList.map((gen) => (
          <DropdownItem key={gen} onClick={() => setSelected(gen as any)}>
            <Typography className={`text-sm font-black uppercase italic tracking-widest ${gen === selected ? 'text-[#52E560]' : 'text-white/40'}`}>
              {gen === 'ALL' ? 'ALL' : `${gen}th`}
            </Typography>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default ProjectGenerationDropdown;
