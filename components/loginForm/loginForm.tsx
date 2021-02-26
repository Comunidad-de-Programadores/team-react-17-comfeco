import React, { FC, useState } from "react"

import NextLink from "next/link"

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react"

import { FaEnvelope, FaLock } from "react-icons/fa"

import { useForm } from "react-hook-form"

import firebase from "lib/firebaseConfig"
import displayError from "../signUpForm/displayError"

type Inputs = {
  email: string
  password: string
}

const LoginForm: FC = () => {
  const { register, handleSubmit, formState, errors } = useForm<Inputs>()
  const [loginError, setLoginError] = useState(null)

  const onSubmit = data => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log("login")
      })
      .catch(error => {
        setLoginError(displayError(error.code))
      })
  }

  return (
    <Flex minH="80vh" align="center" justify="center">
      <Stack w={{ sm: 350, md: 475 }} spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box rounded="xl" bg="white" boxShadow="lg" py={12} px={[7, null, 12]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={!!errors?.email}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaEnvelope color="gray.300" />
                  </InputLeftElement>
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
                  {errors?.email?.type === "pattern" ? "Correo electronico invalido" : "Este campo es requerido"}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password ? true : false}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaLock color="gray.300" />
                  </InputLeftElement>
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
                <FormErrorMessage>{errors?.password ? "Este campo es requerido" : ""}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: "column", sm: "row" }} align="start" justify="space-between">
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
              </Stack>
            </Stack>
          </form>
          <Box hidden={!!!loginError} mt={5} mb={5}>
            <Alert status="error">
              <AlertIcon />
              <AlertDescription mr={2}>{loginError}</AlertDescription>
            </Alert>
          </Box>
          <Text align="center" fontSize="sm">
            Aún no tienes cuenta?
            <NextLink href="/signup" passHref>
              <Link color="blue.400" ml={1}>
                Registrate aquí
              </Link>
            </NextLink>
          </Text>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginForm
