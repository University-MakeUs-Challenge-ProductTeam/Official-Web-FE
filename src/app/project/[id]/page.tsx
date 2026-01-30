import type { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/common/Container';
import Typography from '@/components/common/Typography';

import DescriptionBox from '@/features/project/components/DescriptionBox';
import ProjectContentBox from '@/features/project/components/ProjectContentBox';
import ProjectMemberBox from '@/features/project/components/ProjectMemberBox';
import { getProjectDetail } from '@/lib/api/project';
import { generateSoftwareApplicationSchema } from '@/lib/schema';

export const generateMetadata = async ({
  params,
}: {
  params: {
    id: number;
  };
}): Promise<Metadata> => {
  const { id } = params;
  const projectData = await getProjectDetail({ id });

  return {
    title: projectData.projectName ? projectData.projectName : 'UMC 프로젝트',
    description: projectData.slogan ? projectData.slogan : 'UMC 프로젝트 설명',
    openGraph: {
      images: [
        {
          url: projectData.projectLandingImageUrl ? projectData.projectLandingImageUrl : '/nav_logo.png',
        },
      ],
    },
  };
};

const ProjectDetailPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const projectData = await getProjectDetail({ id });

  const softwareSchema = generateSoftwareApplicationSchema({
    name: projectData.projectName,
    description: projectData.slogan || projectData.description,
    image: projectData.projectLandingImageUrl,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <div className="min-h-screen bg-black pb-40">
        {/* Hero Section */}
        <div className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-neutral-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,229,96,0.15),transparent_70%)] blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
            {projectData.projectLogoImageUrl ? (
              <div className="relative size-40 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(82,229,96,0.2)]">
                <Image src={projectData.projectLogoImageUrl} fill className="object-cover p-6" alt="ProjectLogoImage" />
              </div>
            ) : (
              <div className="flex size-40 items-center justify-center rounded-[40px] border border-white/10 bg-white/5">
                <span className="font-black italic text-white/20">NO LOGO</span>
              </div>
            )}

            <div className="space-y-4">
              <Typography as="h1" className="text-5xl font-black italic tracking-tighter text-white drop-shadow-[0_0_30px_rgba(82,229,96,0.3)] sm:text-7xl">
                {projectData.projectName}
              </Typography>
              <Typography as="h5" className="max-w-2xl text-xl font-medium text-white/60 sm:text-2xl">
                {projectData.slogan}
              </Typography>
            </div>
          </div>
        </div>

        <Container className="relative z-20 -mt-20">
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            {/* Left Column: Image, Info, Members */}
            <div className="flex w-full flex-col gap-8 lg:w-[45%]">
              {/* Thumbnail */}
              {projectData.projectLandingImageUrl ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
                  <Image src={projectData.projectLandingImageUrl} fill className="object-cover" alt="ProjectLandingImage" />
                </div>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center rounded-[32px] border border-white/10 bg-white/5">
                  <span className="text-4xl font-black italic text-white/10">NO PREVIEW</span>
                </div>
              )}

              <ProjectContentBox projectData={projectData} />
              <ProjectMemberBox projectMember={projectData.projectMemberDTOList} />
            </div>

            {/* Right Column: Description */}
            <div className="flex w-full flex-col gap-8 lg:w-[55%]">
              <DescriptionBox description={projectData.description} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProjectDetailPage;
