import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box>
      <Container as={Stack} maxW="4xl" py={5}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={3}>
            <Box>
              <Image src="/sedslogo.svg" h="60px" />
            </Box>
            <Text fontSize="sm">© 2021 SEDS at IUPUI. All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight="semibold">Organization</Text>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Join us</Link>
            <Link href={'#'}>Contact</Link>
            <Link href="#">Donate</Link>
            <Link href={'#'}>Sponsors</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight="semibold">Connect with us</Text>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href="#">YouTube</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
