'use client';

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import { QUERY_KEYS } from '@/constants/querykeys/project';

import Dropdown from '@/components/common/Dropdown';
import DropdownItem from '@/components/common/Dropdown/DropdownItem';
import DropdownMenu from '@/components/common/Dropdown/DropdownMenu';
import DropdownTrigger from '@/components/common/Dropdown/DropdownTrigger';
import Typography from '@/components/common/Typography';

import { getSchoolListData } from '@/lib/api/school';

type TScheduleDropdownProps = {
  selectedSchool: string;
  setSelectedSchool: React.Dispatch<React.SetStateAction<string>>;
};

const ScheduleDropdown = ({ selectedSchool, setSelectedSchool }: TScheduleDropdownProps) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.schools],
    queryFn: () => getSchoolListData(),
  });
  return (
    <Dropdown>
      <DropdownTrigger className="flex w-[280px] items-center justify-between gap-4 px-8 py-4">
        <Typography
          className={`text-sm font-black uppercase italic tracking-[0.2em] transition-colors ${selectedSchool ? 'text-main-green' : 'text-white/40'}`}
        >
          {selectedSchool || 'FIND YOUR CAMPUS'}
        </Typography>
        <div className={`transition-transform duration-300 ${selectedSchool ? 'rotate-0 shadow-[0_0_10px_#52E560]' : ''}`}>
          <IoIosArrowDown size={14} className={selectedSchool ? 'text-main-green' : 'text-white/40'} />
        </div>
      </DropdownTrigger>
      <DropdownMenu position="top-[calc(100%+12px)] left-0 min-w-[280px]">
        {data?.participateSchoolList.map((item) => (
          <DropdownItem key={item.participateSchoolId} onClick={() => setSelectedSchool(item.schoolName)}>
            <div className="flex w-full items-center justify-between">
              <Typography
                className={`text-sm font-black uppercase italic tracking-widest ${item.schoolName === selectedSchool ? 'text-main-green' : 'text-white/40'}`}
              >
                {item.schoolName}
              </Typography>
              {item.schoolName === selectedSchool && (
                <motion.div layoutId="active-school" className="size-1.5 rounded-full bg-main-green shadow-[0_0_10px_#52E560]" />
              )}
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ScheduleDropdown;
