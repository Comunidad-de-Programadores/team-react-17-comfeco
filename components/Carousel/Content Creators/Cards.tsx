import { Box, Circle, Image, Text } from "@chakra-ui/react"
import { FC } from "react"

type Creators = {
  photo: string
  name: string
  tech?: JSX.Element
  color?: string
}

const CardCreators: FC<Creators> = ({ photo, name, tech, color }) => {
  return (
    <Box bgGradient="linear(to-br, #FFB703, #8B1B83)" p="5px" borderRadius="10px" w="140px" h="220px" m="auto auto">
      <Image borderRadius="10px" boxSize="140px" src={photo} alt="Creator image" />
      <Circle m="auto auto" boxShadow="md" size="40px" bg="white" mt={-5} position="relative" zIndex={10} color={color}>
        {tech}
      </Circle>
      <Text as="b" mt="5px" display="flex" textAlign="center" justifyContent="center" color="white">
        {name}
      </Text>
    </Box>
  )
}

export default CardCreators
