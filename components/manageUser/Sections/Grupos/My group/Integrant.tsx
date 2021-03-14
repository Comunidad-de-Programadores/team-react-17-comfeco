import { Avatar, Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react"
import { FC } from "react"

type IntegrantProps = {
  nickname?: string
  level?: string
  functionAsIntegrant?: string
}

const Integrant: FC<IntegrantProps> = ({ nickname, level, functionAsIntegrant }) => {
  return (
    <Box my="10px">
      <Flex alignItems="center">
        <Avatar boxSize={["50px", "60px"]} />
        <Box ml="10px" fontSize={["0.9rem", "1rem"]}>
          <Text>{nickname ? nickname : "Nickname"}</Text>
          <Text>{level ? level : "Level"}</Text>
        </Box>
        <Spacer />
        <Text>{functionAsIntegrant ? functionAsIntegrant : "Function"}</Text>
      </Flex>
      <Divider mt="10px" />
    </Box>
  )
}

export default Integrant
