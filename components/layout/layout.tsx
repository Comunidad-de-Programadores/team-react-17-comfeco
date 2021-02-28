import React, { FC, useContext } from "react"
import authContext from "context/authContext"

import { Box, Flex, Text, Stack, Spacer, HStack, Button, Divider } from "@chakra-ui/react"
import Link from "next/link"

import { FaFacebook, FaYoutube, FaDiscord, FaArrowLeft, FaRegBell } from "react-icons/fa"
import { useRouter } from "next/router"
import ComfecoLogoSVG from "../navBar/ComfecoSVG"
import UserHeader from "../User/UserHeader"
import SimpleLogoSVG from "../navBar/ComfecoSVG/Simple"
import useWindowDimensions from "hooks/useWindowDimensions"

const Layout: FC = ({ children }) => {
  const isLogged = useContext(authContext)[0]
  const router = useRouter()

  const widthScreen = useWindowDimensions().width

  return (
    <>
      <Flex w="100%" minH="90px" bg="#FFFFFF" top="0">
        <HStack m={["auto 15px auto 15px", "auto 30px auto 30px", null, "auto 65px auto 65px"]} w="100%">
          {router.pathname === "/terms-of-use" ? null : widthScreen > 767 ? (
            <>
              <ComfecoLogoSVG />
              <Spacer />
              {isLogged ? (
                <>
                  <HStack justifyContent="center" w="full" spacing={"10%"}>
                    <Link href="#">Inicio</Link>

                    <Link href="#">Comunidades</Link>

                    <Link href="#">Talleres</Link>

                    <Link href="#">Creadores de contenido</Link>
                  </HStack>
                  <Spacer />
                  <FaRegBell size="35px" />
                  <UserHeader />
                </>
              ) : router.pathname === "/forgot-password" || router.pathname === "/signup" ? (
                <Link href="/login">
                  <Button
                    leftIcon={<FaArrowLeft />}
                    color="white"
                    bg="gray.500"
                    _hover={{
                      bg: "gray.600",
                    }}
                  >
                    Iniciar sesion
                  </Button>
                </Link>
              ) : null}
            </>
          ) : (
            <>
              <ComfecoLogoSVG />
              <Spacer />
              <UserHeader />
            </>
          )}
        </HStack>
      </Flex>
      {router.pathname === "/terms-of-use" ? null : (
        <Divider h="5px" mb="-1px" bgGradient="linear(to-r, #8B1B83, #FFB703)" opacity="1" />
      )}
      <Box as="main" marginBottom="100px">
        {children}
      </Box>

      {router.pathname === "/terms-of-use" ? (
        <Box as="footer" bg="black" w="100%" p={4} marginTop="100px" position="fixed" bottom="0">
          {" "}
          <Flex justify="space-between" align="center">
            <SimpleLogoSVG />
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
      ) : (
        <Box as="footer" bg="black" w="100%" p={4} marginTop="100px" bottom="0">
          <Flex justify="space-between" align="center">
            <SimpleLogoSVG />
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
      )}
    </>
  )
}

export default Layout
