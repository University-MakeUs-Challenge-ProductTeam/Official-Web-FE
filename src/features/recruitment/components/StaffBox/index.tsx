import React from 'react';

import type { TStaffDTOList } from '@/types/recruitmentDto';
import { STAFF_ROLE_CONTENT } from '@/constants/recruitment';

import Typography from '@/components/common/Typography';

interface IStaffBoxProps {
  staffList?: TStaffDTOList[];
}

function StaffBox({ staffList }: IStaffBoxProps) {
  return (
    <div className="group relative flex flex-1 flex-col gap-8 rounded-[40px] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-3xl transition-all hover:border-[#52E560]/20 md:p-10">
      <div className="flex items-center justify-between">
        <Typography as="h3" className="text-xl font-black italic tracking-tighter text-white">
          UNIVERSITY <span className="text-[#52E560]">OPERATIONS</span>
        </Typography>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="size-1 rounded-full bg-[#52E560]/20" />
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {STAFF_ROLE_CONTENT.map(({ label }) => {
          const staffMembers = staffList?.filter((member) => member.role === label) || [];
          if (staffMembers.length === 0) return null;

          const isExecutive = label === '회장' || label === '부회장';

          return (
            <div className="group/item flex flex-col gap-3" key={label}>
              <div className="flex items-center gap-2">
                <div className={`rounded-full transition-all ${isExecutive ? 'size-2 bg-[#52E560] shadow-[0_0_10px_#52E560]' : 'size-1.5 bg-[#52E560]/50'}`} />
                <Typography
                  className={`${isExecutive ? 'text-lg text-[#52E560] drop-shadow-[0_0_10px_rgba(82,229,96,0.3)]' : 'text-xs text-[#52E560]/70'} font-black uppercase tracking-widest transition-colors`}
                >
                  {label}
                </Typography>
              </div>
              <div className="flex flex-wrap gap-4 pl-4">
                {staffMembers.map((member, index) => (
                  <div key={index} className="flex flex-col">
                    <Typography
                      className={`${isExecutive ? 'text-2xl' : 'text-lg'} font-black italic tracking-tight text-white/90 transition-colors group-hover/item:text-white`}
                    >
                      {member.nickname}
                    </Typography>
                    <Typography className="text-[10px] font-bold uppercase tracking-widest text-white/30">{member.name}</Typography>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StaffBox;
