import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { Layout } from '../components/layout/Layout';
import Image from 'next/image';
import { Navbar } from '../components/layout/Navbar';
import { AnimatedHeading } from '../components/AnimatedHeading';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Stack direction="column">
          <Hero />
        </Stack>
      </Layout>
    </>
  );
};

export default Home;
