import { Flex, Link, Box, useMediaQuery } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import logo1 from './logo1.png';


const Navbar = () => {
  const teal500 = '#0C090A';
  const cyan400 = '#eb2acb';

  const [isLargerThanMd] = useMediaQuery('(min-width: 48em)');
  //المسافة بين الأزرار فوق
  const linkMargin = isLargerThanMd ? 50 : 4;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      style={{
        background: `linear-gradient(to right, ${teal500}, ${cyan400})`,
        fontFamily: 'Roboto, sans-serif',
         width: '100%',
      }}
      color="white"
    >
      {/* البعد عن المركز */}
      <Flex align="center" mr={100}>
        <NextLink href="" passHref>
        <div style={{ width: '1px', height: '1px' }}></div>
        <Image src={logo1} width={75}/>
        </NextLink>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={() => console.log('Mobile menu clicked')}>
        {/* Replace with your mobile menu icon */}
        <svg fill="white" width="1px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
          <Link href="" passHref
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
          <Link href="/movies" passHref
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
          <Link href="/actors" passHref
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
          <Link href="/about" passHref
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
      </Flex>
    </Flex>
  );
};

export default Navbar;
