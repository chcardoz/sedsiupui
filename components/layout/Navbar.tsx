import {
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={{ base: 5, sm: 40, md: 50, lg: 130, xl: 250 }}
      position="fixed"
      w="100%"
      background="blackAlpha.500"
      backdropFilter="blur(30px)"
      zindex={10}
    >
      <Link href="/">
        <Image src="/sedslogo.svg" h="60px" />
      </Link>

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={IconButton}
              aria-label="Navigation"
              icon={isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
              variant="outline"
              display={{ base: 'flex', md: 'none' }}
            />
            <MenuList>
              <MenuItem>
                <Link href="/about">About</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/team">Team</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/projects">Projects</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/events">Events</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/blog">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/">Home</Link>
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Stack
        spacing={10}
        direction="row"
        display={{ base: 'none', md: 'block' }}
      >
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/events">Events</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/">Home</Link>
      </Stack>
    </Flex>
  );
};
