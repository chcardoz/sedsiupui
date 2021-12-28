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
    >
      <Image src="/sedslogo.svg" h="60px" />
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
                <Link href="#">About</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#">Team</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#">Projects</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#">Events</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#">Home</Link>
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
        <Link href="#">About</Link>
        <Link href="#">Team</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Events</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Home</Link>
      </Stack>
    </Flex>
  );
};
