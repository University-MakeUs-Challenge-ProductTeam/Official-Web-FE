import Image from 'next/image';

import ProjectContentBox from '../_components/ProjectContentBox';

import Container from '@/shared/components/Container';
import Typography from '@/shared/components/Typography';
import type { TProectDetailDTO } from '@/shared/types/projectDto';

const testData: TProectDetailDTO = {
  projectId: 0,
  projectName: '프로젝트 이름',
  projectLogoImageUrl:
    'https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D',
  projectLandingImageUrl:
    'https://images.unsplash.com/photo-1730058304300-fa684086e87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  generation: 1,
  projectSchoolList: ['연세대학교', '상명대학교', '연세대학교', '상명대학교', '연세대학교', '상명대학교'],
  startDate: '2024-10-28',
  endDate: '2024-10-28',
  platFormNameList: ['WEB', 'IOS', 'AOS'],
  isReleased: false,
  description: '나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간',
  projectMemberDTOList: [
    {
      projectMemberId: 0,
      nickname: 'string',
      name: 'string',
      part: 'PLAN',
    },
  ],
};

function ProjectDetailPage() {
  return (
    <Container>
      <div className="h-100px mb-14 flex w-full flex-col gap-3 rounded-b-[60px] bg-gradient-to-t from-[#202020] px-[50px] pb-[48px] pt-[24px] lg:px-[90px]">
        <Image src={testData.projectLogoImageUrl} width={200} height={200} layout="contain" alt="ProjectLogoImage" className="rounded-lg" />
        <Typography as="h1" size="title-smd" className="text-[#ECECEC]">
          {testData.projectName}
        </Typography>
        <Typography as="h5" size="text-lg" className="text-[#818181]">
          나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간
        </Typography>
      </div>
      <div className="flex w-full flex-col place-items-center gap-7 px-[50px] lg:flex-row lg:place-items-stretch lg:px-[90px]">
        <div className="flex w-full flex-col gap-7">
          <div className="relative flex size-full min-h-[350px] w-full flex-1">
            <Image src={testData.projectLogoImageUrl} fill layout="contain" alt="ProjectLogoImage" className="rounded-lg" />
          </div>
          <ProjectContentBox projectData={testData} />
          <div className="flex flex-1 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8" />
        </div>
        <div className="flex-3 flex w-full rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8" />
      </div>
    </Container>
  );
}

export default ProjectDetailPage;
