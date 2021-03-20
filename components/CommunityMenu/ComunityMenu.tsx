import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FC } from "react"
import Community from "./Comunnity"
import { data } from "./data"

const CommuityMenu: FC = () => {
  return (
    <Box mt="100px">
      <Flex mb="70px">
        <Divider mx="20px" h="1px" bg="#d4d4d4" /> <Divider mx="20px" h="1px" bg="#d4d4d4" />
      </Flex>
      <Flex h="max-content" alignItems="center" flexDirection={["column", "row"]}>
        <Text
          textAlign="center"
          fontSize="4xl"
          w={["100%", "80%", "50vw"]}
          px="3%"
          bgGradient="linear(to-r, #8B1B83, #FFB703)"
          color="white"
          py="15px"
        >
          Únete, explora y aprende en las comunidades de tu preferencia
        </Text>
        <Flex p="2%">
          <Box
            p="15px"
            w={["100%", "80%", "45vw"]}
            borderRadius="10px"
            border={["none", "1px #d4d4d4 solid"]}
            my="auto"
            mx="auto"
          >
            {data.map((key, value) => {
              return <Community key={value} name={key.community} photo={key.photo} link={key.link} />
            })}
            <Flex justifyContent="center" mt="15px">
              <Link href="#">
                <Button>Ver mas</Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex mt="70px">
        <Divider mx="20px" h="1px" bg="#d4d4d4" /> <Divider mx="20px" h="1px" bg="#d4d4d4" />
      </Flex>
    </Box>
  )
}

export default CommuityMenu
