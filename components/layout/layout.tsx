import React, { FC, useContext } from "react"
import authContext from "context/authContext"

import { Box, Image, Flex, Text, Stack, Spacer, HStack } from "@chakra-ui/react"
import Link from "next/link"

import { FaFacebook, FaYoutube, FaDiscord } from "react-icons/fa"
import { useRouter } from "next/router"
import UserHeader from "../User/UserHeader"

const Layout: FC = ({ children }) => {
  const isLogged = useContext(authContext)[0]
  const router = useRouter()

  return (
    <>
      <Flex w="100%" minH="90px" bg="#FFFFFF" top="0" borderBottom="1px #f1f1f1 solid" shadow="0px 5px 5px #f1f1f1">
        <HStack m={["auto 5px auto 5px", "auto 65px auto 65px"]} w="100%">
          <Image w="200px" src="/assets/logo1.png" alt="Logo Comfeco" />
          <Spacer />
          {isLogged ? (
            <>
              <Flex w="50%">
                <Link href="#">Inicio</Link>
                <Spacer />
                <Link href="#">Comunidades</Link>
                <Spacer />
                <Link href="#">Talleres</Link>
                <Spacer />
                <Link href="#">Creadores de contenido</Link>
              </Flex>
            </>
          ) : router.pathname === "/forgot-password" ? (
            <Link href="/login">Iniciar sesion</Link>
          ) : null}
        </HStack>
      </Flex>
      <Box as="main" marginBottom="100px">
        {children}
      </Box>

      <Box as="footer" bg="black" w="100%" p={4} position="fixed" bottom="0" marginTop="100px">
        <Flex justify="space-between" align="center">
          <Image w="50px" src="/assets/isotipo-brand.png" alt="Logo Brand Comfeco" />
          <Text fontSize="sm" color="white">
            Copyright ©2021 Developed by Team React #17
          </Text>
          <Stack direction="row" spacing={6}>
            <Link href="https://www.facebook.com/groups/2637132626546045" passHref>
              <a>
                <FaFacebook color="white" size={24} />
              </a>
            </Link>

            <Link href="https://discord.gg/5Bb5yvzNPr" passHref>
              <a>
                <FaDiscord color="white" size={24} />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew" passHref>
              <a>
                <FaYoutube color="white" size={24} />
              </a>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default Layout
