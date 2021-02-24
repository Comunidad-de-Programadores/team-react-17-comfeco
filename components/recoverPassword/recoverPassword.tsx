import React, { FC } from "react"

import { useForm } from "react-hook-form"

import firebase from "lib/firebaseConfig"

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react"

import { FaEnvelope } from "react-icons/fa"

type Inputs = {
  email: string
}

const RecoverPassword: FC = () => {
  const { register, handleSubmit, formState, errors } = useForm<Inputs>()

  const onSubmit = data => {
    firebase
      .auth()
      .sendPasswordResetEmail(data.email)
      .then(() => {
        console.log("email enviado")
      })
      .catch(error => {
        console.log(error.message, error.code)
      })
  }

  return (
    <Flex minH="80vh" align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box rounded="xl" bg="white" boxShadow="lg" py={12} border="1px #ebebeb solid" px={[7, null, 14, 14]}>
          <Stack spacing={4}>
            <Heading as="h1" size="lg">
              Reasignar contraseña
            </Heading>
            <Text size="md" mb={4}>
              Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraseña.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl id="email" isInvalid={!!errors.email}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <FaEnvelope color="gray.300" />
                    </InputLeftElement>
                    <Input
                      focusBorderColor="purple.500"
                      name="email"
                      ref={register({
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      })}
                      placeholder="Correo Electrónico"
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors?.email?.type == "pattern" ? "Correo electronico invalido" : "Este campo es requerido"}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg="purple.500"
                    color="white"
                    _hover={{
                      bg: "purple.600",
                    }}
                    disabled={!!errors.email}
                    isLoading={formState.isSubmitting}
                    type="submit"
                  >
                    Enviar enlace
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RecoverPassword
