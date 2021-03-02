import { Box, Button } from "@chakra-ui/react"
import { FC, MouseEventHandler } from "react"

type MyProfileProps = {
  onClickButtonToChange: MouseEventHandler
  valueToChange: number
}

const MyProfile: FC<MyProfileProps> = ({ onClickButtonToChange, valueToChange }) => {
  return (
    <Box>
      <Button value={valueToChange} onClick={onClickButtonToChange}>
        Ver mas
      </Button>
    </Box>
  )
}

export default MyProfile
