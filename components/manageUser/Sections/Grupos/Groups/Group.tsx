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
      w={["100%", "310px", null, "270px", "310px"]}
      h={["550px", "500px", null, "550px", "500px"]}
      bgColor="#F7FAFC"
      mt="30px"
      shadow="1px 1px 10px #7c7c7c"
    >
      <Image src={img} w="100%" h="55%" />
      <Text
        w="max-content"
        p="3px 15px"
        mt="10px"
        bgColor={language === "Typescript" ? "#2F74C0" : "#efd81d"}
        color="white"
        borderTopRightRadius="10px"
        borderBottomRightRadius="10px"
      >
        {language}
      </Text>
      <Box px="10px">
        <Text as="b" fontSize="2rem">
          {groupName}
        </Text>
        <Text>{description}</Text>
        <Flex justifyContent="center" mt="10px">
          <Button w="90%">Unirme</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Group
