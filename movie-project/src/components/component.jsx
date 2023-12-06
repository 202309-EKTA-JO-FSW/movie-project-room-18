
// 1. import `ChakraProvider` component
import React from 'react';
import Navbar from './Navbar';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  )
}