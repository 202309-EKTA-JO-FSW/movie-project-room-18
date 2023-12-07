import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
//import pink from './pink.jpg';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setIsFailureModalOpen] = useState(false);
  const [isIncompleteModalOpen, setIsIncompleteModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setIsIncompleteModalOpen(true);
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_xrsm8lk", // Replace with your service ID
        "template_3wz4dip", // Replace with your template ID
        templateParams,
        "H_0AEr-kFNdlwI4vv" // Replace with your user ID
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSuccessModalOpen(true);
        // You can reset the form here
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Email could not be sent:', error.text);
        setIsFailureModalOpen(true);
        // You can show an error message here
      });
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const closeFailureModal = () => {
    setIsFailureModalOpen(false);
  };

  const closeIncompleteModal = () => {
    setIsIncompleteModalOpen(false);
  };

  return (
    
    <Container maxW="full" mt={0} centerContent overflow="hidden" position="relative">
      <Image
        src='./pink.jpg'
        alt="Background Image"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
        w="100%"
        h="100%"
        opacity="0.7"
      />
      <Box
        bg="rgba(0, 0, 0, 0.5)"
        position="absolute"
        top="0"
        left="0"
        zIndex="0"
        w="100%"
        h="100%"
      />
      <Flex>
        <Box
          bg="rgba(255, 255, 255, 0.6)"
          color="teal.500"
          borderRadius="10px"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          boxShadow="lg"
          position="relative"
          zIndex="1"
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact Us</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Get in touch with us
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="solid"
                        color="teal.500"
                        _hover={{ bgColor: 'teal.400', color: 'white' }}
                        leftIcon={<MdPhone size="20px" />}
                      >
                        +962-798888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="solid"
                        color="teal.500"
                        _hover={{ bgColor: 'teal.400', color: 'white' }}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        hello@Skillify.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="solid"
                        color="teal.500"
                        _hover={{ bgColor: 'teal.400', color: 'white' }}
                        leftIcon={<MdLocationOn size="20px" />}
                      >
                        Amman, Jordan
                      </Button>
                    </VStack>
                  </Box>
                  <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'teal.400', color: 'white' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'teal.400', color: 'white' }}
                      icon={<FaInstagram size="28px" />}
                    />
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'teal.400', color: 'white' }}
                      icon={<FaTwitter size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  borderRadius="lg"
                  color="white"
                  p={8}
                  boxShadow="lg"
                >
                  <VStack spacing={5}>
                    <form onSubmit={sendEmail}>
                      <FormControl id="name" borderColor="teal.600">
                        <FormLabel color="black">Your Name</FormLabel>
                        <InputGroup borderColor="teal.600">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email" borderColor="teal.600">
                        <FormLabel color="black">Email</FormLabel>
                        <InputGroup borderColor="teal.600">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="email"
                            size="md"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="phone" borderColor="teal.600">
                        <FormLabel color="black">Phone Number</FormLabel>
                        <InputGroup borderColor="teal.600">
                          <InputLeftElement pointerEvents="none">
                            <MdPhone color="gray.800" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message" borderColor="teal.600">
                        <FormLabel color="black">Message</FormLabel>
                        <Textarea
                          borderColor="teal.600"
                          _hover={{
                            borderColor: 'white',
                          }}
                          placeholder="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl id="send" float="right">
                        <Button
                          type="submit"
                          variant="solid"
                          bg="white"
                          color="teal.500"
                          _hover={{ bg: '.600' }}
                          size="lg"
                          width="100%"
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </form>
                  </VStack>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>

      <AlertDialog isOpen={isSuccessModalOpen} leastDestructiveRef={closeSuccessModal} onClose={closeSuccessModal}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Success
            </AlertDialogHeader>

            <AlertDialogBody>Your message has been sent successfully.</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={closeSuccessModal}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog isOpen={isFailureModalOpen} leastDestructiveRef={closeFailureModal} onClose={closeFailureModal}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Failure
            </AlertDialogHeader>

            <AlertDialogBody>Failed to send the message. Please try again later.</AlertDialogBody>
   
   
            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={closeFailureModal}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog isOpen={isIncompleteModalOpen} leastDestructiveRef={closeIncompleteModal} onClose={closeIncompleteModal}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Incomplete
            </AlertDialogHeader>

            <AlertDialogBody>Please fill in all fields before sending the message.</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={closeIncompleteModal}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
}