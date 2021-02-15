import React from "react";

import NextLink from "next/link";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaFacebook, FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box rounded="xl" bg="white" boxShadow="lg" py={12} px={14}>
          <Stack spacing={4}>
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align="start"
                justify="space-between"
              >
                <Checkbox colorScheme="purple" size="sm">
                  Mantenerme conectado
                </Checkbox>
                <NextLink href="/forgot-password" passHref>
                  <Link color="blue.400" fontSize="sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </NextLink>
              </Stack>
              <Button
                bg="purple.500"
                color="white"
                _hover={{
                  bg: "purple.600",
                }}
              >
                Ingresar
              </Button>

              <Text align="center" fontSize="sm">
                Aún no tienes cuenta?
                <NextLink href="/signup" passHref>
                  <Link color="blue.400" ml={1}>
                    Registrate aquí
                  </Link>
                </NextLink>
              </Text>
            </Stack>
            <Divider />
            <Stack spacing="20px">
              <Text align="center" mt={6}>
                También puedes iniciar sesión con tus redes
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

export default LoginForm;
