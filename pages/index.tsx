import { Box, Heading, Stack } from '@chakra-ui/react';
import { Layout } from '../components/layout/Layout';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <Layout>
      <Stack
        direction={{ md: 'row', base: 'column' }}
        spacing={4}
        alignItems={{ base: 'center' }}
        px={5}
      >
        <Box rounded="lg" shadow="lg" p={1}>
          <Image
            src="/space-jeremy-thomas.jpg"
            placeholder="blur"
            layout="intrinsic"
            width="300px"
            height="200px"
          />
        </Box>
        <Heading>WE ALL NEED A LITTLE SPACE IN OUR LIVES</Heading>
      </Stack>
    </Layout>
  );
};

export default Home;
