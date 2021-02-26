import { Box, Text, Image, Circle } from "@chakra-ui/react"
import { FC } from "react"

type Sponsors = {
  photo: string
  name: string
}

const CardSponsors: FC<Sponsors> = ({ photo, name }) => {
  return (
    <Box d="flex" flexDirection="column" w="100px" h="150px" m="auto auto">
      <Circle border="1px #c4c4c4 solid" size="100px">
        <Image borderRadius="50%" src={photo} alt="Sponsor" />
      </Circle>
      <Text as="b" alignItems="center" textAlign="center" h="100%" borderRadius="0px 0px 10px 10px">
        {name}
      </Text>
    </Box>
  )
}

export default CardSponsors
