import { Divider, Flex } from "@chakra-ui/react"
import { FC } from "react"

type CustomDividerProps = {
  mt?: string
  mb?: string
  my?: string
}

const CustomDivider: FC<CustomDividerProps> = ({ mt, mb, my }) => {
  return (
    <Flex my={my} mt={mt} mb={mb}>
      <Divider mx="20px" h="1px" bg="#d4d4d4" /> <Divider mx="20px" h="1px" bg="#d4d4d4" />
    </Flex>
  )
}

export default CustomDivider
