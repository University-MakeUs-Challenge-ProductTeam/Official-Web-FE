import ReleasedProjectView from './_components/RelasedProjectView';
import UMCProjectView from './_components/UMCProjectView';

import Container from '@/shared/components/Container';

function ProjectPage() {
  return (
    <Container className="my-10 flex flex-col gap-20">
      <ReleasedProjectView />
      <UMCProjectView />
    </Container>
  );
}

export default ProjectPage;
