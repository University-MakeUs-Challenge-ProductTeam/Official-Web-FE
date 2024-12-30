import type { Metadata } from 'next';
import Link from 'next/link';

import ActivityBox from './_components/ActivityBox';
import FaqAccordions from './_components/FaqAccordions';
import ScheduleBox from './_components/ScheduleBox';

import Container from '@/shared/components/Container';
import Typography from '@/shared/components/Typography';
import { KAKAO_CHAT_LINK } from '@/shared/constants/link';

export const metadata: Metadata = {
  title: 'UMC - 모집 안내',
  description: 'UMC 모집 안내 페이지',
};

function RecruitmentPage() {
  return (
    <Container className="my-10 flex flex-col gap-20">
      <ActivityBox />
      <ScheduleBox />
      <div className="flex flex-col">
        <Typography as="h1" size="title-smd" className="text-[#ECECEC]">
          FAQ
        </Typography>
        <FaqAccordions />
      </div>
      <div className="mt-20 flex flex-row flex-wrap items-center justify-between gap-5">
        <Typography as="h1" size="title-smd" className="mr-5 text-[#ECECEC]">
          UMC에 대해
          <br />더 궁금한 챌린저라면?
        </Typography>
        <Link
          target="_blank"
          href={KAKAO_CHAT_LINK}
          className="flex h-[50px] items-center justify-center rounded-[100px] border-2 border-solid border-main-green bg-[#1F1F1F] px-[24px] text-text-sm font-bold text-main-green transition-colors duration-500 hover:bg-main-green hover:text-[#1F1F1F]"
        >
          문의하러 가기
        </Link>
      </div>
    </Container>
  );
}

export default RecruitmentPage;
