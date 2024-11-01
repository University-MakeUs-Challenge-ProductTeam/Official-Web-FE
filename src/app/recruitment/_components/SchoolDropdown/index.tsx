'use client';

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';

import { getShcoolListData } from '@/shared/api/shcool';
import Dropdown from '@/shared/components/Dropdown';
import DropdownItem from '@/shared/components/Dropdown/DropdownItem';
import DropdownMenu from '@/shared/components/Dropdown/DropdownMenu';
import DropdownTrigger from '@/shared/components/Dropdown/DropdownTrigger';
import Typography from '@/shared/components/Typography';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

interface IScheduleDropdownProps {
  selectedSchool: string;
  setSelectedSchool: React.Dispatch<React.SetStateAction<string>>;
}

function ScheduleDropdown({ selectedSchool, setSelectedSchool }: IScheduleDropdownProps) {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.shcools],
    queryFn: () => getShcoolListData(),
  });
  return (
    <Dropdown>
      <DropdownTrigger>
        <Typography size="title-sm" className="px-3 text-[#818181]">
          {selectedSchool || '학교 선택'}
        </Typography>
        <IoIosArrowDown size={20} color="#818181" />
      </DropdownTrigger>
      <DropdownMenu>
        {data?.participateSchoolList.map((item) => (
          <DropdownItem key={item.participateSchoolId} onClick={() => setSelectedSchool(item.schoolName)}>
            <Typography size="text-lg" className={item.schoolName === selectedSchool ? 'text-main-green' : 'text-[#CCCCCC]'}>
              {item.schoolName}
            </Typography>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default ScheduleDropdown;
