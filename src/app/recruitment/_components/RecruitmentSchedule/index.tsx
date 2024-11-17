import React from 'react';

import Typography from '@/shared/components/Typography';
import { SCHEDULE_CONTENT } from '@/shared/constants/recruitment';
import type { TRecruitmentScheduleDTO, TShcoolScheduleType } from '@/shared/types/recruitmentDto';
import { formatDateWithDays } from '@/shared/utils/date';

interface IRecruitmentScheduleProps {
  scheduleData?: TRecruitmentScheduleDTO;
}

function RecruitmentSchedule({ scheduleData }: IRecruitmentScheduleProps) {
  function scheduleContent(label: TShcoolScheduleType) {
    if (scheduleData) {
      switch (label) {
        case '서류 접수': {
          const formmatedStart = formatDateWithDays(scheduleData.submissionStart);
          const formmatedEnd = formatDateWithDays(scheduleData.submissionEnd);
          return `${formmatedStart} ~ ${formmatedEnd}`;
        }
        case '1차 합격자 발표': {
          return formatDateWithDays(scheduleData?.firstResultDate);
        }
        case '면접 평가': {
          const formmatedStart = formatDateWithDays(scheduleData.interviewStartDate);
          const formmatedEnd = formatDateWithDays(scheduleData.interviewEndDate);
          return `${formmatedStart} ~ ${formmatedEnd}`;
        }
        case '최종 합격자 발표': {
          return formatDateWithDays(scheduleData.finalResultDate);
        }
        default:
          return null;
      }
    } else {
      return '';
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8">
      <Typography as="h3" size="title-sm" className="font-bold text-[#9D9D9D]">
        모집일정
      </Typography>
      {SCHEDULE_CONTENT.map(({ label }) => (
        <div className="flex flex-row gap-3" key={label}>
          <Typography size="text-lg" className="text-[#818181]">
            {label}
          </Typography>
          <Typography size="text-lg" className="flex-1 text-[#CFCFCF]">
            {scheduleContent(label)}
          </Typography>
        </div>
      ))}
      <Typography size="text-sm" className="mt-auto text-[#818181]">
        * 추가모집, 일정변경 등 자세한 사항은 @해당학교인스타그램아이디를 참고해주세요!
      </Typography>
    </div>
  );
}

export default RecruitmentSchedule;
