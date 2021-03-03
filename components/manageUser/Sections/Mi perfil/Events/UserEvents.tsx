import { Box, Button, Divider, Flex, Spacer, Text } from "@chakra-ui/react"
import { FC, MouseEventHandler } from "react"
import { data } from "./data"
import EventComponent from "./EventComponent"

type UserEventsProps = {
  onClickToEvents: MouseEventHandler
  valueToUse: number
}

const UserEvents: FC<UserEventsProps> = ({ onClickToEvents, valueToUse }) => {
  return (
    <Box
      borderTop="3px #c4c4c4 solid"
      borderBottom="3px #c4c4c4 solid"
      borderRadius="10px"
      w={["100%", null, "38%", "23%"]}
      p="15px"
      h="max-content"
      maxH="500px"
      overflowX="auto"
      mt={["15px", null, "15px", "0px"]}
      css={{
        "&::-webkit-scrollbar": { width: "0px" },
        "&::-webkit-scrollbar-track": { backgroundColor: "#f1f1f1" },
        "&::-webkit-scrollbar-thumb": { backgroundColor: "#d4d4d4", borderRadius: "15px" },
      }}
    >
      <Flex alignItems="center">
        <Text as="b">Eventos de tu interes</Text>
        <Spacer />
        <Button onClick={onClickToEvents} value={valueToUse}>
          Ver mas
        </Button>
      </Flex>
      <Flex my="20px">
        <Divider mx="10px" h="1px" bg="#d4d4d4" /> <Divider mx="10px" h="1px" bg="#d4d4d4" />
      </Flex>
      {data.map((key, value) => {
        return <EventComponent key={value} photo={key.photo} name={key.name} link={key.link} />
      })}
    </Box>
  )
}

export default UserEvents
