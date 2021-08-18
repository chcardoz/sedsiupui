import { Box, Center, Divider, Stack } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface layoutProps {}

export const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <Center>
      <Stack maxW="4xl" direction="column">
        <Navbar />
        <Box>{children}</Box>
        <Divider />
        <Footer />
      </Stack>
    </Center>
  );
};
