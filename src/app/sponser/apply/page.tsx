import type { Metadata } from 'next';

import Form from '@/app/sponser/_components/Form';
import Container from '@/shared/components/Container';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

export const metadata: Metadata = {
  title: 'UMC - 후원사 신청',
  description: 'UMC 후원사 신청 페이지',
};

function ApplyPage() {
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
}

export default ApplyPage;
