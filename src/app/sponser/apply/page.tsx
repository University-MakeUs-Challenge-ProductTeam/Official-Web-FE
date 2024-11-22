import Form from '@/app/sponser/_components/Form';
import Container from '@/shared/components/Container';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

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
