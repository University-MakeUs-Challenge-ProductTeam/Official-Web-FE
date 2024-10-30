import Image from 'next/image';

import DescriptionBox from '../_components/DescriptionBox';
import ProjectContentBox from '../_components/ProjectContentBox';
import ProjectMemberBox from '../_components/ProjectMemberBox';

import { getProjectDetail } from '@/shared/api/project';
import Container from '@/shared/components/Container';
import Typography from '@/shared/components/Typography';

async function ProjectDetailPage({ params }: { params: { id: number } }) {
  const { id } = params;
  const projectData = await getProjectDetail({ id });

  return (
    <Container>
      <div className="h-100px mb-14 flex w-full flex-col gap-3 rounded-b-[60px] bg-gradient-to-t from-[#202020] px-[50px] pb-[48px] pt-[24px] lg:px-[90px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${projectData.projectLogoImageUrl}`}
          width={200}
          height={200}
          layout="contain"
          alt="ProjectLogoImage"
          className="rounded-lg"
        />
        <Typography as="h1" size="title-smd" className="text-[#ECECEC]">
          {projectData.projectName}
        </Typography>
        <Typography as="h5" size="text-lg" className="text-[#818181]">
          {projectData.description}
        </Typography>
      </div>
      <div className="flex w-full flex-col place-items-center gap-7 px-[50px] lg:flex-row lg:place-items-stretch lg:px-[90px]">
        <div className="flex w-full flex-col gap-7">
          <div className="relative flex size-full min-h-[350px] w-full flex-1">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${projectData.projectLandingImageUrl}`}
              fill
              layout="contain"
              alt="ProjectLogoImage"
              className="rounded-lg"
            />
          </div>
          <ProjectContentBox projectData={projectData} />
          <ProjectMemberBox projectMember={projectData.projectMemberDTOList} />
        </div>
        <DescriptionBox description={projectData.description} />
      </div>
    </Container>
  );
}

export default ProjectDetailPage;
