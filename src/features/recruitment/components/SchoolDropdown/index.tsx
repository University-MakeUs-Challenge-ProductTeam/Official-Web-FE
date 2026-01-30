'use client';

import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
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
    <div className="relative">
      <Dropdown>
        <DropdownTrigger className="flex h-14 w-full items-center justify-between gap-4 px-6 py-4 md:h-auto md:w-[280px] md:px-8">
          <Typography
            className={`text-xs font-black uppercase italic tracking-[0.2em] transition-colors md:text-sm ${selectedSchool ? 'text-main-green' : 'text-white/40'}`}
          >
            {selectedSchool || 'FIND YOUR CAMPUS'}
          </Typography>
          <div className={`transition-transform duration-300 ${selectedSchool ? 'rotate-0 shadow-[0_0_10px_#52E560]' : ''}`}>
            <IoChevronDown size={14} className={selectedSchool ? 'text-main-green' : 'text-white/40'} />
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
    </div>
  );
};

export default ScheduleDropdown;
