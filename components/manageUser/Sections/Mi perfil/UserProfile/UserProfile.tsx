import { Avatar, Button, Flex, Spacer, Text, useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import { FC } from "react"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import EditProfile from "../EditUserDatas"

const UserProfile: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="15px"
      borderRadius="10px"
      border="1px #d4d4d4 solid"
      w={["100%", "38%", "38%", "23%"]}
      textAlign="center"
      boxShadow="md"
      _hover={{
        shadow: "3px 3px 15px gray",
      }}
      transition="all 0.6s"
    >
      <Avatar boxSize="140px" />
      <Text as="b" mt="10px">
        Nickname
      </Text>
      <Text color="gray.500">Aria</Text>
      <Text mt="10px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim
      </Text>
      <Flex my="20px" w="80%">
        <Link as="button" href="https://facebook.com">
          <FaFacebook size="40px" />
        </Link>
        <Spacer />
        <Link href="https://github.com">
          <FaGithub size="40px" />
        </Link>
        <Spacer />
        <Link href="https://linkedin.com">
          <FaLinkedin size="40px" />
        </Link>
        <Spacer />
        <Link href="https://twitter.com">
          <FaTwitter size="40px" />
        </Link>
      </Flex>
      <Button onClick={onOpen} w="100%">
        Editar perfil
      </Button>
      <EditProfile isOpenProp={isOpen} onCloseProp={onClose} />
    </Flex>
  )
}

export default UserProfile
