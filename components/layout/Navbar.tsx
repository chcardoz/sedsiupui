import { Flex, Image, Link, Stack } from '@chakra-ui/react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex
      maxW="4xl"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={3}
    >
      <Image src="/sedslogo.svg" h="60px" />
      <Stack spacing={4} direction="row">
        <Link href="#">Team</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Events</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Home</Link>
      </Stack>
    </Flex>
  );
};
