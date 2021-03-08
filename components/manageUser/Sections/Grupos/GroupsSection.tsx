import { Box, Flex, Spacer } from "@chakra-ui/react"
import { FC } from "react"
import MyGroup from "./My group"

const GroupsSection: FC = () => {
  return (
    <Box>
      <Flex>
        <MyGroup />
        <Spacer />
        <Spacer />
      </Flex>
    </Box>
  )
}

export default GroupsSection
