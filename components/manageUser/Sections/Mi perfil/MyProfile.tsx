import { Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { FC, MouseEventHandler } from "react"
import UserProfile from "./UserProfile"

type MyProfileProps = {
  onClickButtonToChange: MouseEventHandler
  valueToChange: number
}

const MyProfile: FC<MyProfileProps> = ({ onClickButtonToChange, valueToChange }) => {
  return (
    <Box>
      <Flex>
        <UserProfile />
        <Spacer />
        <Box></Box>
        <Spacer />
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default MyProfile
