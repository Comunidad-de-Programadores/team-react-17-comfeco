import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FC } from "react"

type EventProps = {
  img: string
  description: string
  link: string
}

const Event: FC<EventProps> = ({ img, description, link }) => {
  return (
    <Box w="650px" shadow="1px 1px 10px #7c7c7c" mx="auto" mt="30px" h="max-content">
      <Image src={img} w="inherit" h="62%" />
      <Box p="15px">
        <Text textAlign="center">{description}</Text>
        <Flex my="15px" alignItems="center" mx="5%">
          <Link href={link}>
            <Text fontSize={["1rem", "1.2rem"]} color="#636BFB" _hover={{ cursor: "pointer", fontSize: "1.3rem" }}>
              Más información
            </Text>
          </Link>
          <Spacer />
          <Button>Participar</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Event
