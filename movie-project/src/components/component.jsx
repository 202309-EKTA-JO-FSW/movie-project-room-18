
// 1. import `ChakraProvider` component
import React from 'react';
import Navbar from './Navbar';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  )
}