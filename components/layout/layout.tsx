import React from "react"

import { Box, Image, Flex, Text, Link, Stack } from "@chakra-ui/react"

import { FaFacebook, FaYoutube, FaDiscord } from "react-icons/fa"

const Layout = ({ children }) => {
  return (
    <>
      <Box as="header" pos="fixed" boxShadow="md" bg="white" w="100%" p={4}>
        <Image w="200px" src="/assets/logo1.png" alt="Logo Comfeco" />
      </Box>
      <Box as="main">{children}</Box>
      <Box as="footer" bg="black" w="100%" p={4}>
        <Flex justify="space-between" align="center">
          <Image w="50px" src="/assets/isotipo-brand.png" alt="Logo Brand Comfeco" />
          <Text fontSize="sm" color="white">
            Copyright ©2021 Developed by Team React #17
          </Text>
          <Stack direction="row" spacing={6}>
            <Link href="https://www.facebook.com/groups/2637132626546045">
              <FaFacebook color="white" size={24} />
            </Link>
            <Link href="https://discord.gg/5Bb5yvzNPr">
              <FaDiscord color="white" size={24} />
            </Link>
            <Link href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew">
              <FaYoutube color="white" size={24} />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default Layout
