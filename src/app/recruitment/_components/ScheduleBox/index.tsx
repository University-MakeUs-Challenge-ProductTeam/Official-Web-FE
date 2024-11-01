'use client';

import React, { useState } from 'react';

import ScheduleDropdown from '../SchoolDropdown';

import Typography from '@/shared/components/Typography';

function ScheduleBox() {
  const [selectedSchool, setSelectedSchool] = useState('');
  return (
    <div className="flex flex-col">
      <Typography as="h1" size="title-smd" className="text-[#ECECEC]">
        모집일정
      </Typography>
      <Typography as="h5" size="text-lg" className="text-[#9D9D9D]">
        모집일정 및 모집파트는 학교별로 상이하니, 꼭 본인 학교를 선택 후 확인해주시기 바랍니다.
      </Typography>
      <div className="mt-10 flex">
        <ScheduleDropdown selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />
      </div>
    </div>
  );
}

export default ScheduleBox;
