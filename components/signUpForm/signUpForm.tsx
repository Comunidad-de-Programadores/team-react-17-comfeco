import React, { useState } from "react";

import NextLink from "next/link";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
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

import { useForm } from "react-hook-form";

type Inputs = {
  nick: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    errors,
    watch,
  } = useForm<Inputs>();
  const onSubmit = (data) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 1000);
    });
  };

  const passwordsMatch = (confirmPassValue) => {
    return watch("password") == confirmPassValue;
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="user" isInvalid={!!errors?.nick}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUserAlt color="gray.300" />}
                  />
                  <Input
                    focusBorderColor="purple.500"
                    name="nick"
                    placeholder="Nick"
                    ref={register({ required: true })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.nick ? "Este campo es requerido" : ""}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={!!errors?.email}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaEnvelope color="gray.300" />}
                  />
                  <Input
                    focusBorderColor="purple.500"
                    name="email"
                    ref={register({
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      required: true,
                    })}
                    placeholder="Correo Electrónico"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.email?.type == "pattern"
                    ? "Correo Invalido"
                    : "Este campo es requerido"}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={!!errors?.password}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock color="gray.300" />}
                  />
                  <Input
                    focusBorderColor="purple.500"
                    type="password"
                    name="password"
                    ref={register({
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    })}
                    placeholder="Contraseña"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.password?.type == "pattern"
                    ? "La contraseña debe incluir una mayuscula, una minuscula y un numero"
                    : "Este campo es requerido"}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="confirmPassword"
                isInvalid={!!errors?.confirmPassword}
              >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock color="gray.300" />}
                  />
                  <Input
                    focusBorderColor="purple.500"
                    type="password"
                    name="confirmPassword"
                    ref={register({ validate: passwordsMatch, required: true })}
                    placeholder="Confirmar Contraseña"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors?.confirmPassword?.type == "validate"
                    ? "Las contraseñas no coinciden"
                    : "Este campo es requerido"}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
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
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUpForm;
