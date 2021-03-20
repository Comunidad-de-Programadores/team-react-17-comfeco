import { Button, Circle, Divider, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import Link from "next/link"
import { FC } from "react"

type CommunityProps = {
  photo?: string
  name?: string
  link?: string
}

const Community: FC<CommunityProps> = ({ photo, name, link }) => {
  return (
    <>
      <Flex py="15px" justifyContent="center" alignItems="center">
        <Circle border="1px #c4c4c4 solid">
          <Image boxSize="65px" borderRadius="50%" src={photo} />
        </Circle>
        <Spacer />
        <Text fontSize="2xl" textAlign="center">
          {name}
        </Text>
        <Spacer />
        <Link href={link}>
          <a target="_blank">
            <Button>Unirme</Button>
          </a>
        </Link>
      </Flex>
      <Divider />
    </>
  )
}

export default Community
