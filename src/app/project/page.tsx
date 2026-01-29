import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { Metadata } from 'next';

import Container from '@/components/common/Container';

import ReleasedProjectView from '@/features/project/components/ReleasedProjectView';
import UMCProjectView from '@/features/project/components/UMCProjectView';
import { getQueryClient, projectGenerationsQueryOptions, projectListQueryOptions, releasedProjectQueryOptions } from '@/lib/query';

export const metadata: Metadata = {
  title: 'UMC - 프로젝트',
  description: 'UMC 프로젝트 목록',
};

const ProjectPage = async () => {
  const queryClient = getQueryClient();

  // Prefetch initial data for SSR
  await Promise.all([
    queryClient.prefetchQuery(projectListQueryOptions({ page: 0, generation: 'ALL', platformName: 'ALL' })),
    queryClient.prefetchQuery(releasedProjectQueryOptions(0)),
    queryClient.prefetchQuery(projectGenerationsQueryOptions()),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container className="my-10 flex max-w-[1400px] flex-col gap-20">
        <UMCProjectView />
        <ReleasedProjectView />
      </Container>
    </HydrationBoundary>
  );
};

export default ProjectPage;
