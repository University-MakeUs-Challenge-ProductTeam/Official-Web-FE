import Container from '@/shared/components/Container';
import ProjectCard from '@/shared/components/ProjectCard';
import type { TProectDetailDTO } from '@/shared/types/projectDto';

const releasedTestData: TProectDetailDTO = {
  projectId: 0,
  projectName: 'cozymate',
  projectLogoImageUrl: 'string',
  projectLandingImageUrl:
    'https://images.unsplash.com/photo-1730058304300-fa684086e87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  generation: 0,
  projectSchoolList: ['string'],
  startDate: '2024-10-28',
  endDate: '2024-10-28',
  platFormNameList: ['IOS'],
  isReleased: true,
  description:
    '나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간',
  projectMemberDTOList: [
    {
      projectMemberId: 0,
      nickname: 'string',
      name: 'string',
      part: 'PLAN',
    },
  ],
};

const releasedTestData2: TProectDetailDTO = {
  projectId: 0,
  projectName: 'cozymate cozymate cozymate cozymate cozymate cozymate cozymate cozymate cozymate cozymate cozymate',
  projectLogoImageUrl: 'string',
  projectLandingImageUrl:
    'https://images.unsplash.com/photo-1730058304300-fa684086e87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  generation: 0,
  projectSchoolList: ['string'],
  startDate: '2024-10-28',
  endDate: '2024-10-28',
  platFormNameList: ['IOS', 'AOS'],
  isReleased: true,
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

const releasedTestData3: TProectDetailDTO = {
  projectId: 0,
  projectName: 'cozymate',
  projectLogoImageUrl: 'string',
  projectLandingImageUrl:
    'https://images.unsplash.com/photo-1730058304300-fa684086e87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  generation: 0,
  projectSchoolList: ['string'],
  startDate: '2024-10-28',
  endDate: '2024-10-28',
  platFormNameList: ['IOS', 'AOS', 'WEB'],
  isReleased: true,
  description:
    '나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간',
  projectMemberDTOList: [
    {
      projectMemberId: 0,
      nickname: 'string',
      name: 'string',
      part: 'PLAN',
    },
  ],
};

const unReleasedTestData: TProectDetailDTO = {
  projectId: 0,
  projectName: '프로젝트 이름',
  projectLogoImageUrl: 'string',
  projectLandingImageUrl:
    'https://images.unsplash.com/photo-1730058304300-fa684086e87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  generation: 0,
  projectSchoolList: ['string'],
  startDate: '2024-10-28',
  endDate: '2024-10-28',
  platFormNameList: ['WEB'],
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

const unReleasedTestData2: TProectDetailDTO = {
  projectId: 0,
  projectName: '프로젝트 이름',
  projectLogoImageUrl: 'string',
  projectLandingImageUrl:
    'https://images.unsplash.com/photo-1730058304300-fa684086e87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  generation: 0,
  projectSchoolList: ['string'],
  startDate: '2024-10-28',
  endDate: '2024-10-28',
  platFormNameList: ['IOS', 'AOS'],
  isReleased: false,
  description:
    '나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간나와 꼭 맞는 룸메이트와 함께하는 우리만의 공간',
  projectMemberDTOList: [
    {
      projectMemberId: 0,
      nickname: 'string',
      name: 'string',
      part: 'PLAN',
    },
  ],
};

const unReleasedTestData3: TProectDetailDTO = {
  projectId: 0,
  projectName: '프로젝트 이름프로젝트 이름프로젝트 이름프로젝트 이름프로젝트 이름프로젝트 이름프로젝트 이름프로젝트 이름프로젝트 이름',
  projectLogoImageUrl: 'string',
  projectLandingImageUrl:
    'https://images.unsplash.com/photo-1730058304300-fa684086e87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  generation: 0,
  projectSchoolList: ['string'],
  startDate: '2024-10-28',
  endDate: '2024-10-28',
  platFormNameList: ['IOS', 'AOS', 'WEB'],
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

function ProjectPage() {
  return (
    <Container className="flex flex-col gap-20">
      <div className="flex flex-col gap-6 p-3">
        <h1 className="text-title-smd text-[#ECECEC]">실출시된 프로젝트</h1>
        <div className="mx-auto grid w-full grid-cols-1 place-items-center gap-x-7 gap-y-10 lg:grid-cols-2">
          <ProjectCard projectData={releasedTestData} />
          <ProjectCard projectData={releasedTestData2} />
          <ProjectCard projectData={releasedTestData3} />
        </div>
      </div>

      <div className="flex flex-col gap-6 p-3">
        <h1 className="text-title-smd text-[#ECECEC]">UMC 프로젝트 살펴보기</h1>
        <div className="mx-auto grid w-full grid-cols-1 place-items-center gap-x-7 gap-y-10 lg:grid-cols-3">
          <ProjectCard projectData={unReleasedTestData} />
          <ProjectCard projectData={unReleasedTestData2} />
          <ProjectCard projectData={unReleasedTestData3} />
        </div>
      </div>
    </Container>
  );
}

export default ProjectPage;
