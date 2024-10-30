import Container from '@/shared/components/Container';

export default function ProjectLayout({ project, releasedProject }: { project: React.ReactNode; releasedProject: React.ReactNode }) {
  return (
    <Container className="flex flex-col gap-20">
      <div>{releasedProject}</div>
      <div>{project}</div>
    </Container>
  );
}
