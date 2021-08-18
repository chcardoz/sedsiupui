import {
  Button,
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
      maxW="4xl"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={3}
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
              display={{ base: 'flex', sm: 'none' }}
            />
            <MenuList>
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
        spacing={4}
        direction="row"
        display={{ base: 'none', sm: 'block' }}
      >
        <Link href="#">Team</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Events</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Home</Link>
      </Stack>
    </Flex>
  );
};
