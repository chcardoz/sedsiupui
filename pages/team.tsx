import { Heading } from '@chakra-ui/react';
import { AnimatedHeading } from '../components/layout/AnimatedHeading';
import { Layout } from '../components/layout/Layout';
import { Navbar } from '../components/layout/Navbar';

const Team: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <AnimatedHeading color="secondary.400">Team</AnimatedHeading>
      </Layout>
    </>
  );
};

export default Team;
