import { Box, Flex, Text } from "@chakra-ui/react"
import { FC } from "react"

const Events: FC = () => {
  return (
    <Box>
      <Text as="b" d="inherit" fontSize="3rem" textAlign="center">
        Eventos Activos
      </Text>
      <Flex></Flex>
    </Box>
  )
}

export default Events
