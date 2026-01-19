'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import type { TActivity } from '@/types/recruitmentDto';
import { ACTIVITY_CONTENT } from '@/constants/activityContent';
import { QUERY_KEYS } from '@/constants/querykeys/project';

import Typography from '@/components/common/Typography';

import { getActivities } from '@/lib/api/recruitment';
import { formatDateRange } from '@/lib/utils/date';

const ActivityBox = () => {
  const { data: activities, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.activity],
    queryFn: () => getActivities(),
  });

  const activityContent = (label: TActivity): string | null => {
    if (activities) {
      switch (label) {
        case '활동기간': {
          return formatDateRange(activities.activityStartDate, activities.activityEndDate);
        }
        case '모집기간':
          return '학교별 상이';
        case '연합 OT':
          return activities.unionOTDate;
        case '학교 OT':
          return '학교별 상이';
        case '동아리 회비':
          return `${activities.clubFee.toLocaleString()}원`;
        case '프로젝트 참가비':
          return `${activities.projectFee.toLocaleString()}원 (${activities.projectPaybackFee.toLocaleString()}원 페이백)`;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ willChange: 'transform, opacity' }}
        className="mb-12 transform-gpu"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-main-green">Details</span>
        <h2 className="mt-4 text-4xl font-black italic tracking-tighter text-white md:text-5xl">
          RECRUITMENT <span className="text-white/20">INFO</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!isLoading && activities
          ? ACTIVITY_CONTENT.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                style={{ willChange: 'transform, opacity' }}
                className="group relative flex transform-gpu flex-col gap-4 overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-3xl transition-all hover:border-main-green/30 hover:bg-white/[0.08]"
              >
                <div className="absolute right-0 top-0 size-10 opacity-10 transition-opacity group-hover:opacity-100">
                  <div className="absolute right-4 top-4 h-[2px] w-4 rotate-45 bg-main-green" />
                  <div className="absolute right-4 top-4 h-4 w-[2px] rotate-45 bg-main-green" />
                </div>

                <Typography className="text-xs font-black uppercase tracking-widest text-main-green">{item.label}</Typography>
                <Typography className="text-xl font-black italic tracking-tighter text-white transition-transform group-hover:translate-x-1">
                  {activityContent(item.label)}
                </Typography>
              </motion.div>
            ))
          : [...Array(6)].map((_, index) => <div key={index} className="h-32 animate-pulse rounded-3xl bg-white/5" />)}
      </div>
    </div>
  );
};

export default ActivityBox;
