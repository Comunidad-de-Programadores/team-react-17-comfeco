import { Box, Flex, Spacer } from "@chakra-ui/react"
import useWindowDimensions from "hooks/useWindowDimensions"
import { FC, MouseEventHandler } from "react"
import BadgeBanner from "./BadgeBanner"
import UserEvents from "./Events"
import UserProfile from "./UserProfile"

type MyProfileProps = {
  onClickButtonToChange: MouseEventHandler
  valueToChange: number
}

const MyProfile: FC<MyProfileProps> = ({ onClickButtonToChange, valueToChange }) => {
  const widthScreen = useWindowDimensions().width
  return (
    <Box>
      {widthScreen > 768 ? (
        <Flex flexDirection={["column", "row"]}>
          <UserProfile />
          <Spacer />
          <BadgeBanner />
          <Spacer />
          <UserEvents onClickToEvents={onClickButtonToChange} valueToUse={valueToChange} />
        </Flex>
      ) : (
        <>
          <Flex flexDirection={["column", "row"]}>
            <UserProfile />
            <Spacer />
            <BadgeBanner />
            <Spacer />
          </Flex>
          <UserEvents onClickToEvents={onClickButtonToChange} valueToUse={valueToChange} />
        </>
      )}
    </Box>
  )
}

export default MyProfile
