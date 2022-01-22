import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { Layout } from '../components/layout/Layout';
import Image from 'next/image';
import { Navbar } from '../components/layout/Navbar';
import { AnimatedHeading } from '../components/layout/AnimatedHeading';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Stack direction="column" spacing={4}>
          <AnimatedHeading fontSize="5xl">
            Inspiration4 launches first all-civilian mission to orbit.
          </AnimatedHeading>
          <video
            autoPlay
            loop
            muted
            preload="auto"
            src="https://player.vimeo.com/external/505830907.sd.mp4?s=b19157487742eb6246037240bb1867af0eaa12ac&profile_id=165"
          ></video>
          <Text>
            SpaceX launced its first crew of all-civilians to orbit from Kennedy
            Space Center Florida at 8:02 pm EDT on the 16th of Sepetember 2021.
            The four civilians represented leadership, hope, generosity, and
            prosperity - Jared Isaacman,Hayley Arceneaux,Chris Sembroski and Dr.
            Sian Proctor respectively.
          </Text>
        </Stack>
      </Layout>
    </>
  );
};

export default Home;
