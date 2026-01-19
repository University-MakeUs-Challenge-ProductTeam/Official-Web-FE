import type { Metadata } from 'next';

import Container from '@/components/common/Container';

import ReleasedProjectView from '@/features/project/components/RelasedProjectView';
import UMCProjectView from '@/features/project/components/UMCProjectView';

export const metadata: Metadata = {
  title: 'UMC - 프로젝트',
  description: 'UMC 프로젝트 목록',
};

function ProjectPage() {
  return (
    <Container className="my-10 flex max-w-[1400px] flex-col gap-20">
      <UMCProjectView />
      <ReleasedProjectView />
    </Container>
  );
}

export default ProjectPage;
