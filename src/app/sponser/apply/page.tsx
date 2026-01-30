import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import Container from '@/components/common/Container';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import Spacing from '@/components/common/Spacing';
import Typography from '@/components/common/Typography';

// Form 컴포넌트를 Dynamic Import (react-hook-form + zod 최적화)
const Form = dynamic(() => import('@/features/sponser/components/Form'), {
  ssr: true, // SEO 유지
  loading: () => (
    <div className="flex min-h-[400px] items-center justify-center">
      <LoadingSpinner />
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'UMC - 후원사 신청',
  description: 'UMC 후원사 신청 페이지',
};

const ApplyPage = () => {
  return (
    <Container>
      <Spacing direction="vertical" size={32} />
      <Typography size="title-smd" color="main-white">
        후원신청 폼
      </Typography>
      <Spacing direction="vertical" size={32} />
      <Form />
    </Container>
  );
};

export default ApplyPage;
