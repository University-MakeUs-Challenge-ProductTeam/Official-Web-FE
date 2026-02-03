import Container from '@/components/common/Container';

import FirstBanner from '@/features/sponser/components/FirstBanner';
import SecondBanner from '@/features/sponser/components/SecondBanner';
import ThirdBanner from '@/features/sponser/components/ThirdBanner';
import { getQueryClient, sponsorListQueryOptions } from '@/lib/query';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UMC - 후원사 목록',
  description: 'UMC 후원사 목록 페이지',
};

const SponserPage = async () => {
  const queryClient = getQueryClient();

  // Prefetch sponsor data for SSR
  await queryClient.prefetchQuery(sponsorListQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col overflow-x-hidden bg-black">
        <Container className="mb-32 flex flex-col gap-36">
          <FirstBanner />
          <SecondBanner />
          <ThirdBanner />
        </Container>
      </div>
    </HydrationBoundary>
  );
};

export default SponserPage;
