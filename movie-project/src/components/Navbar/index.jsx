import { Flex, Link, Box, useMediaQuery } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  const teal500 = '#0C090A';
  const cyan400 = '#eb2acb';

  const [isLargerThanMd] = useMediaQuery('(min-width: 48em)');

  // Determine margin value based on screen size
  const linkMargin = isLargerThanMd ? 6 : 4;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      style={{
        background: `linear-gradient(to right, ${teal500}, ${cyan400})`,
        fontFamily: 'Roboto, sans-serif',
      }}
      color="white"
    >
      <Flex align="center" mr={850}>
        <NextLink href="/">
          <Link fontSize="2xl" fontWeight="bold" _hover={{ textDecoration: 'none', color: 'white' }}>
            Your Logo
          </Link>
        </NextLink>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={() => console.log('Mobile menu clicked')}>
        {/* Replace with your mobile menu icon */}
        <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path fill="currentColor" d="M3 9h14M3 4h14M3 14h14" />
        </svg>
      </Box>

      <Flex
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        flexGrow={1}
        display={{ base: 'none', md: 'flex' }}
      >
        <NextLink href="/" passHref>
          <Link
            mx={linkMargin}
            _hover={{
              textDecoration: 'none',
              borderBottom: '2px solid white',
              color: teal500,
              transition: 'color 0.3s ease-in-out',
            }}
          >
            Home
          </Link>
        </NextLink>
        <NextLink href="/movies" passHref>
          <Link
            mx={linkMargin}
            _hover={{
              textDecoration: 'none',
              borderBottom: '2px solid white',
              color: teal500,
              transition: 'color 0.3s ease-in-out',
            }}
          >
            Movies
          </Link>
        </NextLink>
        <NextLink href="/actors" passHref>
          <Link
            mx={linkMargin}
            _hover={{
              textDecoration: 'none',
              borderBottom: '2px solid white',
              color: teal500,
              transition: 'color 0.3s ease-in-out',
            }}
          >
            Actors
          </Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link
            mx={linkMargin}
            _hover={{
              textDecoration: 'none',
              borderBottom: '2px solid white',
              color: teal500,
              transition: 'color 0.3s ease-in-out',
            }}
          >
            About
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
