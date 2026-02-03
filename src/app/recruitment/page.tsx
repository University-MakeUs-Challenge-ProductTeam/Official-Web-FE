import { KAKAO_CHAT_LINK } from '@/constants/link';

import Typography from '@/components/common/Typography';

import ActivityBox from '@/features/recruitment/components/ActivityBox';
import FaqAccordions from '@/features/recruitment/components/FaqAccordions';
import ScheduleBox from '@/features/recruitment/components/ScheduleBox';
import { env } from '@/lib/env';
import { activitiesQueryOptions, getQueryClient } from '@/lib/query';
import { generateEventSchema } from '@/lib/schema';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UMC - 모집 안내',
  description: 'UMC 모집 안내 페이지',
};

const RecruitmentPage = async () => {
  const queryClient = getQueryClient();

  // Prefetch activity data for SSR
  const activityData = await queryClient.fetchQuery(activitiesQueryOptions());

  const eventSchema = generateEventSchema({
    name: 'UMC 10기 모집',
    description: 'UMC 10기 신입 부원 모집 안내. 대학생 연합 IT 벤처 창업 동아리에서 함께 성장할 기획자, 디자이너, 개발자를 찾습니다.',
    startDate: activityData.activityStartDate,
    endDate: activityData.activityEndDate,
    image: new URL('/opengraph-image', env.siteUrl).toString(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <div className="flex flex-col overflow-x-hidden bg-black">
        <div className="container mx-auto px-6">
          <h1 className="sr-only">UMC Recruitment</h1>
          <ActivityBox />
          <ScheduleBox />

          <div className="flex flex-col border-t border-white/5 py-32">
            <div className="mb-20 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-main-green">Support</span>
              <Typography className="mt-4 text-4xl font-black italic tracking-tighter text-white md:text-6xl">
                COMMON <span className="text-main-green">FAQ</span>
              </Typography>
              <p className="mx-auto mt-6 max-w-lg font-medium text-white/40">
                지원자분들이 자주 묻는 질문들을 모았습니다. <br />더 궁금한 점이 있다면 언제든 문의해주세요.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl">
              <FaqAccordions />
            </div>
          </div>

          <div className="relative z-20 mb-40 mt-20 overflow-hidden rounded-[40px] border border-white/5 bg-white/[0.02] p-8 text-center md:p-24">
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-main-green to-transparent" />

            <Typography className="text-2xl font-black italic leading-tight tracking-tighter text-white md:text-5xl">
              STILL HAVE <span className="text-main-green">QUESTIONS?</span>
            </Typography>
            <p className="mt-6 text-sm font-medium text-white/40 md:text-base">UMC에 대해 더 궁금한 점이 있다면 언제든 문의해주세요.</p>

            <Link
              target="_blank"
              href={KAKAO_CHAT_LINK}
              className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-main-green px-8 text-xs font-black italic tracking-tighter text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(82,229,96,0.3)] md:h-16 md:px-10 md:text-sm"
            >
              CONTACT US NOW
            </Link>
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default RecruitmentPage;
