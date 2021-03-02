import { Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { FC, MouseEventHandler } from "react"
import BadgeBanner from "./BadgeBanner"
import UserProfile from "./UserProfile"

type MyProfileProps = {
  onClickButtonToChange: MouseEventHandler
  valueToChange: number
}

const MyProfile: FC<MyProfileProps> = ({ onClickButtonToChange, valueToChange }) => {
  return (
    <Box>
      <Flex flexDirection={["column", "row"]}>
        <UserProfile />
        <Spacer />
        <BadgeBanner />
        <Spacer />
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default MyProfile
