import type { TRecruitmentScheduleDTO, TShcoolScheduleType } from '@/types/recruitment/dto';
import { SCHEDULE_CONTENT } from '@/constants/recruitment';

import Typography from '@/components/common/Typography';

import { formatDateWithDays } from '@/lib/utils/date';

type TRecruitmentScheduleProps = {
  scheduleData?: TRecruitmentScheduleDTO;
};

const RecruitmentSchedule = ({ scheduleData }: TRecruitmentScheduleProps) => {
  const scheduleContent = (label: TShcoolScheduleType) => {
    if (!scheduleData) return 'TBD';

    switch (label) {
      case '서류 접수': {
        const start = formatDateWithDays(scheduleData.submissionStart);
        const end = formatDateWithDays(scheduleData.submissionEnd);
        return { value: `${start} ~ ${end}`, isRange: true };
      }
      case '1차 합격자 발표': {
        return { value: formatDateWithDays(scheduleData.firstResultDate), isRange: false };
      }
      case '면접 평가': {
        const start = formatDateWithDays(scheduleData.interviewStartDate);
        const end = formatDateWithDays(scheduleData.interviewEndDate);
        return { value: `${start} ~ ${end}`, isRange: true };
      }
      case '최종 합격자 발표': {
        return { value: formatDateWithDays(scheduleData.finalResultDate), isRange: false };
      }
      default:
        return { value: 'N/A', isRange: false };
    }
  };

  return (
    <div className="group relative flex flex-1 flex-col gap-8 rounded-[40px] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-3xl transition-all hover:border-main-green/20 md:p-10">
      <div className="flex items-center justify-between">
        <Typography as="h3" className="text-xl font-black italic tracking-tighter text-white">
          RECRUITMENT <span className="text-main-green">TIMELINE</span>
        </Typography>
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="size-1 rounded-full bg-main-green/20" />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {SCHEDULE_CONTENT.map(({ label }) => {
          const content = scheduleContent(label);
          return (
            <div className="group/item relative flex flex-col gap-2" key={label}>
              <div className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-main-green opacity-50 shadow-[0_0_10px_#52E560] transition-opacity group-hover/item:opacity-100" />
                <Typography className="text-[10px] font-black uppercase tracking-[0.2em] text-main-green/60">{label}</Typography>
              </div>
              <Typography className="pl-4.5 text-lg font-black italic tracking-tight text-white/80 transition-colors group-hover/item:text-white">
                {typeof content === 'string' ? content : content.value}
              </Typography>
              {label !== '최종 합격자 발표' && <div className="absolute left-[3px] top-6 h-10 w-px bg-gradient-to-b from-main-green/20 to-transparent" />}
            </div>
          );
        })}
      </div>

      <div className="mt-auto border-t border-white/5 pt-6">
        <Typography className="text-[10px] font-medium leading-relaxed text-white/20">
          * 추가모집, 일정변경 등 자세한 사항은 <span className="text-main-green/40">@학교 인스타그램</span>을 참고해주세요.
        </Typography>
      </div>
    </div>
  );
};

export default RecruitmentSchedule;
