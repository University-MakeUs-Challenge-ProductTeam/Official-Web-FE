import type { Metadata } from 'next';

import Container from '@/components/common/Container';
import Spacing from '@/components/common/Spacing';
import Typography from '@/components/common/Typography';

import Form from '@/features/sponser/components/Form';

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
