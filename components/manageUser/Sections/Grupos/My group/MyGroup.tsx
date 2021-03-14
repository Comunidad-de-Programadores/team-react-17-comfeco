import { Avatar, Box, Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { FC } from "react"
import Integrant from "./Integrant"

const MyGroup: FC = () => {
  return (
    <Box
      w={["90vw", "400px"]}
      minW={["90vw", "350px"]}
      h="max-content"
      border="1px #7c7c7c solid"
      borderRadius="10px"
      p="20px"
      shadow="2px 2px 8px #d4d4d4"
    >
      <Text as="b" fontSize={["2.5rem", "2.5rem"]} textAlign={["center", "left"]} d={["block", "flex"]}>
        Mi grupo
      </Text>
      <Flex mx="10px" alignItems="center">
        <Text as="b" fontSize={["1.5rem", "1.5rem"]}>
          Group Name
        </Text>
        <Spacer />
        <Avatar boxSize={["40px", "45px"]} />
      </Flex>
      <Box my="15px">
        <Integrant />
        <Integrant />
        <Integrant />
        <Integrant />
        <Integrant />
      </Box>
      <Flex mx={["10px", "30px"]}>
        <Button border="1px red solid">Abandonar</Button>
        <Spacer />
        <Button>Ir al chat</Button>
      </Flex>
    </Box>
  )
}

export default MyGroup
