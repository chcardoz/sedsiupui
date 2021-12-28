import { Box, Center, Divider, Stack } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface layoutProps {}

export const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <Center paddingTop="8em">
      <Stack maxW="4xl" direction="column">
        <Box>{children}</Box>
        <Divider />
        <Footer />
      </Stack>
    </Center>
  );
};
