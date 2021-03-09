import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { FC } from "react"

type GroupProps = {
  img?: string
  language?: string
  groupName?: string
  description?: string
}

const Group: FC<GroupProps> = ({ img, language, groupName, description }) => {
  return (
    <Box
      p="5px"
      bgGradient="linear(to-r, #8B1B83, #FFB703)"
      border="1px black solid"
      borderBottomRightRadius="10px"
      borderBottomLeftRadius="10px"
      mt="30px"
    >
      <Box
        w={["100%", "310px"]}
        h="400px"
        border="1px #888 solid"
        borderBottomLeftRadius="10px"
        borderBottomRightRadius="10px"
        bgColor="#F7FAFC"
      >
        <Image src={img} />
        <Text
          w="max-content"
          p="3px 15px"
          bgColor={language === "Typescript" ? "#2F74C0" : "#efd81d"}
          color="white"
          borderTopRightRadius="10px"
          borderBottomRightRadius="10px"
        >
          {language}
        </Text>
        <Text as="b" fontSize="2rem">
          {groupName}
        </Text>
        <Text>{description}</Text>
        <Flex justifyContent="center">
          <Button w="90%">Unirme</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Group
