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
            <Text fontSize="sm">
              © 2021 SEDS at IUPUI. All rights reserved.
            </Text>
            <Link fontSize="sm" href={'/notices/privacypolicy'}>
              Privacy Policy
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text color="secondary.400" fontWeight="semibold">
              Organization
            </Text>
            <Link href={'/about'}>About</Link>
            <Link href={'/join'}>Join us</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href="/donate">Donate</Link>
            <Link href={'/sponsors'}>Sponsors</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text color="secondary.400" fontWeight="semibold">
              Connect with us
            </Text>
            <Link href={'https://www.linkedin.com/company/seds-at-iupui'}>
              Linkedin
            </Link>
            <Link href={'https://twitter.com/sedsiupui'}>Twitter</Link>
            <Link href={'https://www.instagram.com/studentexplorers/'}>
              Instagram
            </Link>
            <Link href="https://www.youtube.com/channel/UCfWspur2Ki34J8oQZUpIkiw#">
              YouTube
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
