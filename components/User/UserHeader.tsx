import { FC, useContext } from "react"
import authContext from "context/authContext"
import { Flex, Text } from "@chakra-ui/react"

const UserHeader: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: Record<string, any> = useContext(authContext)[0]

  if (!user) return null

  return (
    <Flex>
      <img src={user.photoURL} alt="User photo" />
      <Text>{user.displayName}</Text>
    </Flex>
  )
}

export default UserHeader
