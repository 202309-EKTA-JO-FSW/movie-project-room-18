import { Box, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      onMouseEnter={handleMenuToggle}
      onMouseLeave={handleMenuToggle}
      position="absolute"
      zIndex={10}
      display={isOpen ? 'block' : 'none'}
      backgroundColor="teal" // Change the background color as needed
      p={2}
      mt={2}
    >
      <Stack direction="column" spacing={2}>
        <NextLink href="/movies/category1" passHref>
          <Link color="white">Category 1</Link>
        </NextLink>
        <NextLink href="/movies/category2" passHref>
          <Link color="white">Category 2</Link>
        </NextLink>
        {/* Add more movie categories as needed */}
      </Stack>
    </Box>
  );
};

export default DropdownMenu;
