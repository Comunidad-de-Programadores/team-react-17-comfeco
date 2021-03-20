import { Divider, Flex } from "@chakra-ui/react"
import { FC } from "react"

type CustomDividerProps = {
  mt?: string
  mb?: string
  my?: string
  color?: string
  mx?: string
}

const CustomDivider: FC<CustomDividerProps> = ({ mt, mb, my, color, mx }) => {
  return (
    <Flex my={my} mt={mt} mb={mb}>
      <Divider mx={mx ? mx : "20px"} h="1px" bg={color ? color : "#d4d4d4"} />
      <Divider mx={mx ? mx : "20px"} h="1px" bg={color ? color : "#d4d4d4"} />
    </Flex>
  )
}

export default CustomDivider
