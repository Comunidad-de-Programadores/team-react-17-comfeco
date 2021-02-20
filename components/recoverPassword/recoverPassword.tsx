import React from "react"

import NextLink from "next/link"

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react"

import { FaEnvelope, FaArrowLeft } from "react-icons/fa"

const RecoverPassword = () => {
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
          <Divider mb={4} />
          <Stack spacing={4}>
            <Heading as="h1" size="lg">
              Reasignar contraseña
            </Heading>
            <Text size="md" mb={4}>
              Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraseña. Este enlace
              será válido por una hora.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="email">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaEnvelope color="gray.300" />
                </InputLeftElement>
                <Input focusBorderColor="purple.500" type="email" placeholder="Correo Electrónico" />
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
                Enviar enlace
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RecoverPassword
