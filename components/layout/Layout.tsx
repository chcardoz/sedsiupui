import { Box, Center, Divider, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Footer } from './Footer';

const StarBackground = dynamic((() => import('../StarBackground')) as any, {
  ssr: false
});

interface layoutProps {}

export const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      {/* <StarBackground /> */}
      <Center paddingTop="5.5em" zIndex={1}>
        <Stack direction="column">
          <Box>{children}</Box>
          <Box px={10}>
            <Divider />
            <Footer />
          </Box>
        </Stack>
      </Center>
    </>
  );
};
