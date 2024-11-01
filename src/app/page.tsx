import Banner from '@/app/_components/Banner';
import Container from '@/shared/components/Container';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

function Home() {
  return (
    <div>
      <Banner />
      <Spacing direction="vertical" size={16} />
      <Typography size="text-lg" color="main-white">
        HomePage
      </Typography>
    </div>
  );
}

export default Home;
