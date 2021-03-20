import { Avatar, Box, Flex, Heading, Spacer } from "@chakra-ui/react"
import { FC } from "react"

const BadgeBanner: FC = () => {
  return (
    <Box
      w={["100%", "60%", "58%", "50%"]}
      p="7px"
      h="max-content"
      border={["none", "1px #d4d4d4 solid"]}
      mt={["15px", "0px"]}
      borderRadius="10px"
      bgGradient="linear(to-r, #8B1B83, #FFB703)"
    >
      <Heading fontSize="1.8rem" textAlign="center" mb="15px" color="white">
        Insignias
      </Heading>
      <Box border="1px black solid" bg="white" borderRadius="10px" boxShadow="xl">
        <Flex px={["2%", null, "0px", "12%"]} py="15px">
          <Avatar boxSize={["60px", "70px"]} />
          <Spacer />
          <Avatar boxSize={["60px", "70px"]} />
          <Spacer />
          <Avatar boxSize={["60px", "70px"]} />
          <Spacer />
          <Avatar boxSize={["60px", "70px"]} />
        </Flex>
      </Box>
    </Box>
  )
}

export default BadgeBanner
