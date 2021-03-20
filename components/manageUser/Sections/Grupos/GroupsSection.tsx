import { Box, Flex } from "@chakra-ui/react"
import { FC } from "react"
import Groups from "./Groups/Groups"
import MyGroup from "./My group"

const GroupsSection: FC = () => {
  return (
    <Box>
      <Flex flexDirection={["column", "row"]}>
        <MyGroup />
        <Groups />
      </Flex>
    </Box>
  )
}

export default GroupsSection
