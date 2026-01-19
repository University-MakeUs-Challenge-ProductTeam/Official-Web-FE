import type { Metadata } from 'next';

import RedesignCurriculum from '@/components/ui/RedesignCurriculum';

import FifthBanner from '@/features/introduction/components/FifthBanner';
import FirstBanner from '@/features/introduction/components/FirstBanner';
import FourthBanner from '@/features/introduction/components/FourthBanner';
import SecondBanner from '@/features/introduction/components/SecondBanner';

export const metadata: Metadata = {
  title: 'UMC - 소개',
  description: '대학생 개발 연합 동아리 University Make Us Challenge',
};

function IntroductionPage() {
  return (
    <div className="flex flex-col bg-black">
      <div className="container mx-auto px-6">
        <FirstBanner />
      </div>
      <SecondBanner />
      <RedesignCurriculum />
      <div className="container mx-auto px-6">
        <FourthBanner />
        <FifthBanner />
      </div>
    </div>
  );
}

export default IntroductionPage;
