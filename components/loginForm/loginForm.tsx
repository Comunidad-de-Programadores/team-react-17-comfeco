import React from "react"

import NextLink from "next/link"

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"

import { FaFacebook, FaGoogle, FaEnvelope, FaLock } from "react-icons/fa"

import { useForm } from "react-hook-form"

import firebase from "../../firebaseConfig"
import { useRouter } from "next/router"

type Inputs = {
  email: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit, formState, errors } = useForm<Inputs>()
  const router = useRouter()
  const onSubmit = data => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {})
      .catch(error => console.log(error.message, error.code))
  }

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box rounded="xl" bg="white" boxShadow="lg" py={12} px={14}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={!!errors?.email}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaEnvelope color="gray.300" />}
                  />
                  <Input
                    focusBorderColor="purple.500"
                    name="email"
                    placeholder="Correo Electrónico"
                    ref={register({
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      required: true,
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.email?.type == "pattern"
                    ? "Correo electronico invalido"
                    : "Este campo es requerido"}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password ? true : false}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300" />} />
                  <Input
                    focusBorderColor="purple.500"
                    type="password"
                    name="password"
                    ref={register({
                      required: true,
                    })}
                    placeholder="Contraseña"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.password ? "Este campo es requerido" : ""}
                </FormErrorMessage>
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
                  type="submit"
                  bg="purple.500"
                  color="white"
                  _hover={{
                    bg: "purple.600",
                  }}
                  disabled={!!errors.email || !!errors.password}
                  isLoading={formState.isSubmitting}
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
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginForm
