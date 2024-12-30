import type { Metadata } from 'next';

import ReleasedProjectView from './_components/RelasedProjectView';
import UMCProjectView from './_components/UMCProjectView';

import Container from '@/shared/components/Container';

export const metadata: Metadata = {
  title: 'UMC - 프로젝트',
  description: 'UMC 프로젝트 목록',
};

function ProjectPage() {
  return (
    <Container className="my-10 flex flex-col gap-20">
      <UMCProjectView />
      <ReleasedProjectView />
    </Container>
  );
}

export default ProjectPage;
