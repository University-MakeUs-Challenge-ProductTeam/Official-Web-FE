'use client';

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';

import { getGenerations } from '@/shared/api/project';
import Dropdown from '@/shared/components/Dropdown';
import DropdownItem from '@/shared/components/Dropdown/DropdownItem';
import DropdownMenu from '@/shared/components/Dropdown/DropdownMenu';
import DropdownTrigger from '@/shared/components/Dropdown/DropdownTrigger';
import Typography from '@/shared/components/Typography';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

interface IGenerationDropdownProps {
  selected: 'ALL' | number;
  setSelected: React.Dispatch<React.SetStateAction<'ALL' | number>>;
}

function GenerationDropdown({ selected, setSelected }: IGenerationDropdownProps) {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.generations],
    queryFn: () => getGenerations(),
  });
  const generationList = ['ALL', ...(data?.generationList ?? [])] as Array<'ALL' | number>;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Typography size="title-sm" className="text-[#818181]">
          {selected !== 'ALL' ? `${selected}기` : '기수'}
        </Typography>
        <IoIosArrowDown size={20} color="#818181" />
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onClick={() => setSelected('ALL')}>
          <Typography size="text-lg" className={selected === 'ALL' ? 'text-main-green' : 'text-[#CCCCCC]'}>
            전체
          </Typography>
        </DropdownItem>
        {generationList
          .filter((gen) => gen !== 'ALL')
          .map((gen) => (
            <DropdownItem key={gen} onClick={() => setSelected(Number(gen))}>
              <Typography size="text-lg" className={Number(gen) === selected ? 'text-main-green' : 'text-[#CCCCCC]'}>
                {`${gen}기`}
              </Typography>
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default GenerationDropdown;
