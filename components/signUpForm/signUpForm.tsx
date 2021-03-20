import React, { useState, FC } from "react"

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
  Text,
  Link,
} from "@chakra-ui/react"

import { Link as NextLink } from "next/link"

import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa"

import firebase from "lib/firebaseConfig"

import { useForm } from "react-hook-form"
import displayError from "./displayError"

type Inputs = {
  nick: string
  email: string
  password: string
  confirmPassword: string
}

const SignUpForm: FC = () => {
  const { register, handleSubmit, formState, errors, watch } = useForm<Inputs>()
  const [signupError, setSignupError] = useState(null)

  const onSubmit = data => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch(error => {
        const errorCode = error.code
        setSignupError(displayError(errorCode))
      })
  }

  const passwordsMatch = confirmPassValue => {
    return watch("password") === confirmPassValue
  }

  const [formValues, setFormValues] = useState({
    nick: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const { nick, email, password, confirmPassword } = formValues

  const handleForm = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <Flex minH="80vh" align="center" justify="center">
      <Stack w={{ sm: 350, md: 475 }} spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box rounded="xl" bg="white" boxShadow="lg" border="1px #ebebeb solid" py={12} px={[7, null, 12]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="user" isInvalid={!!errors?.nick}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input
                    focusBorderColor="purple.500"
                    name="nick"
                    value={nick}
                    onChange={handleForm}
                    placeholder="Nick"
                    ref={register({ required: true })}
                  />
                </InputGroup>
                <FormErrorMessage>{errors?.nick ? "Este campo es requerido" : ""}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={!!errors?.email}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaEnvelope color="gray.300" />
                  </InputLeftElement>
                  <Input
                    focusBorderColor="purple.500"
                    name="email"
                    value={email}
                    onChange={handleForm}
                    ref={register({
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      required: true,
                    })}
                    placeholder="Correo Electrónico"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.email?.type === "pattern" ? "Correo Invalido" : "Este campo es requerido"}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={!!errors?.password}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    focusBorderColor="purple.500"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleForm}
                    ref={register({
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    })}
                    placeholder="Contraseña"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.password?.type === "pattern"
                    ? "La contraseña debe incluir una mayuscula, una minuscula y un numero"
                    : "Este campo es requerido"}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="confirmPassword" isInvalid={!!errors?.confirmPassword}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    focusBorderColor="purple.500"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleForm}
                    ref={register({ validate: passwordsMatch, required: true })}
                    placeholder="Confirmar Contraseña"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.confirmPassword?.type === "validate"
                    ? "Las contraseñas no coinciden"
                    : "Este campo es requerido"}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={5}>
                <Text fontSize="0.8rem">
                  Al registrarte estas aceptando los{" "}
                  <Link as={NextLink} href="/terms-of-use" color="#6b46c1">
                    Términos y condiciones, y la Política de privacidad y protección de datos
                  </Link>{" "}
                  de COMFECO.
                </Text>
                <Button
                  bg="purple.500"
                  color="white"
                  _hover={{
                    bg: "purple.600",
                  }}
                  type="submit"
                  isLoading={formState.isSubmitting}
                >
                  Crear una cuenta
                </Button>
              </Stack>
            </Stack>
          </form>
          <Box hidden={!!!signupError} mt={5}>
            <Alert status="error">
              <AlertIcon />
              <AlertDescription mr={2}>{signupError}</AlertDescription>
            </Alert>
          </Box>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignUpForm
