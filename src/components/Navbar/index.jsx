import { useState } from 'react';
import { Flex, Link, Box, Grid, GridItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import logo1 from './logo1.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = (e) => {
    const isMenuOrLinkClicked =
      e?.relatedTarget?.closest('a') ||
      e?.relatedTarget?.closest('div') ||
      e?.target?.closest('div') ||
      e?.target?.closest('a');

    if (!isMenuOrLinkClicked) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      fontFamily="Roboto, sans-serif"
      background="linear-gradient(to right, #0C090A, #eb2acb)"
      color="white"
      width="100%"
    >
      <Flex align="center" mr={100}>
        <NextLink href="/" passHref>
          <div style={{ width: '1px', height: '1px' }}></div>
          <Image src={logo1} width={75} />
        </NextLink>
      </Flex>

      <Flex
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        flexGrow={1}
        display={{ base: 'none', md: 'flex' }}
      >
        <Link
          href="/"
          passHref
          mx={4}
          _hover={{
            textDecoration: 'none',
            borderBottom: '2px solid white',
          }}
        >
          Home
        </Link>

        {/* <Box
          position="relative"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownClose}
        >
          <Link
            href="/movies"
            passHref
            mx={4}
            position="relative"
            _hover={{
              textDecoration: 'none',
              borderBottom: '2px solid white',
            }}
            onClick={(e) => {
              e.preventDefault();
              handleDropdownToggle();
            }}
            onMouseLeave={handleDropdownClose}
          >
            Movies
          </Link>
          {isDropdownOpen && (
            <Box
              position="absolute"
              top="calc(100% + 5px)"
              left="50%"
              transform="translateX(-50%)"
              backgroundColor="black"
              zIndex="1"
              p="2"
              mt="2"
              onMouseLeave={handleDropdownClose}
              minWidth="300px"
              boxShadow="0px 8px 16px 0px rgba(0,0,0,0.2)"
              borderRadius="5px"
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                <GridItem>
                  <NextLink href="/movies/category1" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Action
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Adventure
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Animation
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Comedy
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Crime
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Documentary
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Drama
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Family
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Fantasy
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      History
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Horror
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                     Music
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Mystery
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Romance
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Science Fiction
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      TV Movie
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Thriller
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      War
                    </Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <NextLink href="/movies/category2" passHref>
                    <Link
                      color="white"
                      display="block"
                      py="1"
                      onClick={handleDropdownClose}
                      _hover={{ textDecoration: 'none' }}
                    >
                      Western
                    </Link>
                  </NextLink>
                </GridItem>
               
              </Grid>
            </Box>
          )}
        </Box> */}
 <Link
          href="/movies"
          passHref
          mx={4}
          _hover={{
            textDecoration: 'none',
            borderBottom: '2px solid white',
          }}
        >
          Movies
        </Link>
        <Link
          href="/actors/actorspage"
          passHref
          mx={4}
          _hover={{
            textDecoration: 'none',
            borderBottom: '2px solid white',
          }}
        >
          Actors
        </Link>
        <Link
          href="/about"
          passHref
          mx={4}
          _hover={{
            textDecoration: 'none',
            borderBottom: '2px solid white',
          }}
        >
          About
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;





