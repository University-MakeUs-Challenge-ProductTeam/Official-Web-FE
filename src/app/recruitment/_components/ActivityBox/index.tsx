import React from 'react';

import { getActivities } from '@/shared/api/recruitment';
import Typography from '@/shared/components/Typography';
import { ACTIVITY_CONTENT } from '@/shared/constants/activityContent';
import type { TActivity } from '@/shared/types/recruitmentDto';
import { formatDateRange } from '@/shared/utils/date';

async function ActivityBox() {
  const activities = await getActivities();

  function activityContent(label: TActivity): string | null {
    switch (label) {
      case '활동기간': {
        const formattedDate = formatDateRange(activities.activityStartDate, activities.activityEndDate);
        return formattedDate;
      }
      case '모집기간':
        return '학교별 상이';
      case '연합 & 학교 OT':
        return '디자인과 개발 Overall';
      case '연합 OT':
        return activities.unionOTDate;
      case '학교 OT':
        return '학교별 상이';
      case '동아리 회비':
        return `${activities.clubFee}원`;
      case '프로젝트 참가비':
        return `${activities.projectFee}원 (${activities.projectPaybackFee}원 페이백)`;

      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-title-smd text-[#ECECEC]">활동정보</h1>
      <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8">
        {activities ? (
          <>
            {ACTIVITY_CONTENT.map((item) => (
              <div className="flex flex-row gap-4" key={item.label}>
                <Typography size="text-lg" className="text-[#818181]">
                  {item.label}
                </Typography>
                <Typography size="text-lg" className="flex-1 text-[#CFCFCF]">
                  {activityContent(item.label)}
                </Typography>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-row gap-2">
            <Typography size="text-lg" className="text-[#818181]">
              활동 정보가 없습니다.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityBox;
