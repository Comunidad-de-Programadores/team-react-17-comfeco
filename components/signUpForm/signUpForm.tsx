import React from "react";

import NextLink from "next/link";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  FaArrowLeft,
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaLock,
  FaUserAlt,
} from "react-icons/fa";

const SignUpForm = () => {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box rounded="xl" bg="white" boxShadow="lg" py={12} px={14}>
          <Stack spacing={10}>
            <NextLink href="/" passHref>
              <Button
                bg="gray.500"
                color="white"
                _hover={{
                  bg: "gray.600",
                }}
                mb={6}
                leftIcon={<FaArrowLeft />}
              >
                Volver a iniciar sesión
              </Button>
            </NextLink>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="user">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaUserAlt color="gray.300" />}
                />
                <Input
                  focusBorderColor="purple.500"
                  type="text"
                  placeholder="Nick"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="email">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaEnvelope color="gray.300" />}
                />
                <Input
                  focusBorderColor="purple.500"
                  type="email"
                  placeholder="Correo Electrónico"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaLock color="gray.300" />}
                />
                <Input
                  focusBorderColor="purple.500"
                  type="password"
                  placeholder="Contraseña"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="confirmPassword">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaLock color="gray.300" />}
                />
                <Input
                  focusBorderColor="purple.500"
                  type="password"
                  placeholder="Confirmar Contraseña"
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg="purple.500"
                color="white"
                _hover={{
                  bg: "purple.600",
                }}
              >
                Crear una cuenta
              </Button>
            </Stack>
            <Divider />
            <Stack spacing="20px">
              <Text align="center" mt={6}>
                O registrate usando
              </Text>
              <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                Ingresa con Facebook
              </Button>
              <Button colorScheme="gray" leftIcon={<FaGoogle />}>
                Ingresa con Google
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUpForm;
