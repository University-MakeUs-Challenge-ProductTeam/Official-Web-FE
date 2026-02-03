import RedesignCurriculum from '@/components/ui/RedesignCurriculum';

import FifthBanner from '@/features/introduction/components/FifthBanner';
import FirstBanner from '@/features/introduction/components/FirstBanner';
import FourthBanner from '@/features/introduction/components/FourthBanner';
import SecondBanner from '@/features/introduction/components/SecondBanner';
import { getQueryClient, projectListQueryOptions, schoolListQueryOptions } from '@/lib/query';
import { generateAboutPageSchema } from '@/lib/schema';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UMC - 소개',
  description: '대학생 개발 연합 동아리 University Make Us Challenge',
};

const IntroductionPage = async () => {
  const queryClient = getQueryClient();

  // Prefetch data for SSR
  await Promise.all([
    queryClient.prefetchQuery(schoolListQueryOptions()),
    queryClient.prefetchQuery(projectListQueryOptions({ page: 0, generation: 'ALL', platformName: 'ALL' })),
  ]);

  const aboutSchema = generateAboutPageSchema();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <div className="flex flex-col overflow-x-hidden bg-black">
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
    </HydrationBoundary>
  );
};

export default IntroductionPage;
