import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FC } from "react"

type EventComponentProps = {
  photo?: string
  name?: string
  link?: string
}

const EventComponent: FC<EventComponentProps> = ({ photo, name, link }) => {
  return (
    <Box my="10px">
      <Image src={photo} />
      <Text textAlign="center" my="10px">
        {name}
      </Text>
      <Link href={link}>
        <Button w="100%">Mas Información</Button>
      </Link>
      <Flex my="20px">
        <Divider mx="10px" h="0.5px" bg="#d4d4d4" /> <Divider mx="10px" h="0.5px" bg="#d4d4d4" />
      </Flex>
    </Box>
  )
}

export default EventComponent
