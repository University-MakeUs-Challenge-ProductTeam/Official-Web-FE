import React from 'react';

import Typography from '@/shared/components/Typography';
import { STAFF_ROLE_CONTENT } from '@/shared/constants/recruitment';
import type { TStaffDTOList } from '@/shared/types/recruitmentDto';

interface IStaffBoxProps {
  staffList?: TStaffDTOList[];
}

function StaffBox({ staffList }: IStaffBoxProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8">
      <Typography as="h3" size="title-sm" className="font-bold text-[#9D9D9D]">
        운영진
      </Typography>
      {STAFF_ROLE_CONTENT.map(({ label }) => {
        const staffMembers = staffList?.filter((member) => member.role === label) || [];

        return (
          <div className="flex flex-row gap-3" key={label}>
            <Typography size="text-lg" className="text-[#818181]">
              {label}
            </Typography>
            <div className="flex flex-1 gap-x-2 whitespace-pre-wrap text-[#CFCFCF]">
              {staffMembers.map((staffMember, index) => (
                <Typography size="text-lg" color="main-white" key={index}>
                  {`${staffMember.nickname}/${staffMember.name}`}
                </Typography>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StaffBox;
