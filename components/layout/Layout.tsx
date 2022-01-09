import { Box, Center, Divider, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const StarBackground = dynamic((() => import('./StarBackground')) as any, {
  ssr: false
});

interface layoutProps {}

export const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <StarBackground />
      <Center paddingTop="8em">
        <Stack maxW="4xl" direction="column">
          <Box>{children}</Box>
          <Divider />
          <Footer />
        </Stack>
      </Center>
    </>
  );
};
