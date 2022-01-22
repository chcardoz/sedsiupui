import { Heading } from '@chakra-ui/react';
import { AnimatedHeading } from '../components/layout/AnimatedHeading';
import { Layout } from '../components/layout/Layout';
import { Navbar } from '../components/layout/Navbar';

const Projects: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <AnimatedHeading color="secondary.400">Projects</AnimatedHeading>
      </Layout>
    </>
  );
};

export default Projects;
