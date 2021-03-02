import { Avatar, Box, Flex, Heading, Spacer } from "@chakra-ui/react"
import { FC } from "react"

const BadgeBanner: FC = () => {
  return (
    <Box
      w={["100%", null, "40%", "50%"]}
      p="15px"
      boxShadow="xl"
      h="max-content"
      border={["none", "1px #d4d4d4 solid"]}
      mt={["15px", "0px"]}
    >
      <Heading fontSize="1.8rem" textAlign="center" mb="15px" bgGradient="linear(to-r, #8B1B83, #FFB703)" bgClip="text">
        Insignias
      </Heading>
      <Flex px={["7%", null, "0px", "12%"]} pb="10px">
        <Avatar boxSize="70px" />
        <Spacer />
        <Avatar boxSize="70px" />
        <Spacer />
        <Avatar boxSize="70px" />
        <Spacer />
        <Avatar boxSize="70px" />
      </Flex>
    </Box>
  )
}

export default BadgeBanner
