import React from 'react';
import logo1 from './logo1.png'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const LargeWithNewsletter = () => {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      //position="fixed"
      bottom="0"
      width="100%"
      zIndex="999" /* This ensures it stays on top of other content */
    >
      <Container maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
          alignItems="flex-start"
        >
          {/* Add your logo to the left of the grid with a responsive size in rem units */}
          <Box
            position="relative"
            width="355px" // Set the width to your desired size
            height="150px" // Set the height to match the width
            overflow="hidden"
          >
            <Image
              src={logo1}
              alt="Your Logo"
              width="100%"
              height="100%"
              objectFit="-moz-initial"
              borderRadius="full"
              position="absolute"
              top="-22px"
              left="-30px"
            />
          </Box>

          <Stack spacing={2} align={'flex-start'}>
            <ListHeader>Pages</ListHeader>
            <Box as="a" href={'/'}>
              Home
            </Box>
            <Box as="a" href={'/services'}>
              Movies
            </Box>
            <Box as="a" href={'/contact'}>
              Actors
            </Box>
            <Box as="a" href={'/catalog'}>
              Contact us
            </Box>
            <Box as="a" href={'/about'}>
              About
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Status
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('gray.100', 'whiteAlpha.500')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('#eb2acb', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: '#eb2acb',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box bg="#D6E4E5" p={4} color="teal" textAlign="center">
        <Text fontSize={'sm'} color='#eb2acb'>© 2023 WAVE MOVIES. All rights reserved</Text>
      </Box>
    </Box>
  );
};


export default LargeWithNewsletter;

