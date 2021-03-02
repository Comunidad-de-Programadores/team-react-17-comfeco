import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react"
import { FC } from "react"

const UserProfile: FC = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="15px"
      borderRadius="10px"
      border="1px #d4d4d4 solid"
      w={["100%", null, "50%", "25%"]}
      textAlign="center"
    >
      <Avatar boxSize="150px" />
      <Text as="b" mt="10px">
        Nickname
      </Text>
      <Text color="gray.500">Aria</Text>
      <Text mt="10px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </Text>
      <Button w="100%" mt="15px">
        Editar perfil
      </Button>
    </Flex>
  )
}

export default UserProfile
