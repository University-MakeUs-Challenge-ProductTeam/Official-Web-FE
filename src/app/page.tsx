import Container from '@/shared/components/Container';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

function Home() {
  return (
    <Container>
      <Typography size="text-lg" color="main-white">
        HomePag
      </Typography>
      <Spacing direction="vertical" size={16} />
      <Typography size="text-lg" color="main-white">
        HomePage
      </Typography>
    </Container>
  );
}

export default Home;
