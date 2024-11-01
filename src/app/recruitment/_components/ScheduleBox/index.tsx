'use client';

import React, { useState } from 'react';
import { IoSchool } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';

import PartAndSkill from '../PartAndSkill';
import RecruitmentSchedule from '../RecruitmentSchedule';
import ScheduleDropdown from '../SchoolDropdown';
import StaffBox from '../StaffBox';

import { getRequirements } from '@/shared/api/recruitment';
import Typography from '@/shared/components/Typography';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

function ScheduleBox() {
  const [selectedSchool, setSelectedSchool] = useState('');
  const { data: schoolData } = useQuery({
    queryKey: [QUERY_KEYS.requirements, selectedSchool],
    queryFn: () => getRequirements({ schoolName: selectedSchool }),
  });

  return (
    <div className="flex flex-col">
      <Typography as="h1" size="title-smd" className="text-[#ECECEC]">
        모집일정
      </Typography>
      <Typography as="h5" size="text-lg" className="text-[#9D9D9D]">
        모집일정 및 모집파트는 학교별로 상이하니, 꼭 본인 학교를 선택 후 확인해주시기 바랍니다.
      </Typography>
      {schoolData ? (
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex">
            <ScheduleDropdown selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />
          </div>
          <div className="flex flex-col gap-5 sm:flex-row">
            <RecruitmentSchedule scheduleData={schoolData?.recruitmentScheduleDTO} />
            <PartAndSkill partSkillData={schoolData?.requirementPartDTOList} />
          </div>
          <StaffBox staffList={schoolData?.staffDTOList} />
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex">
            <ScheduleDropdown selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />
          </div>
          <div className="flex min-h-[300px] flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8">
            <IoSchool size={30} color="#818181" />
            <Typography size="title-sm" className="font-bold text-[#818181]">
              학교를 선택해주세요
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScheduleBox;
