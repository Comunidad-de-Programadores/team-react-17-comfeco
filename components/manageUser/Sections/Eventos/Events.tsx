import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { FC } from "react"
import { data } from "./data"
import Event from "./Event"

const Events: FC = () => {
  return (
    <Box>
      <Text as="b" d="inherit" fontSize={["2rem", "3rem"]} textAlign="center" my="20px">
        Eventos Activos
      </Text>
      <Wrap>
        {data.map((key, index) => (
          <WrapItem key={index} mx="auto">
            <Event img={key.img} description={key.description} link={key.link} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}

export default Events
