import CustomDivider from "@/components/Custom divider component/CustomDivider"
import { Avatar, Box, Text } from "@chakra-ui/react"
import { FC } from "react"

type BadgesCardProps = {
  img?: string
  badgeName: string
  description: string
  howGetIt: string
}

const BadgesCard: FC<BadgesCardProps> = ({ img, badgeName, description, howGetIt }) => {
  return (
    <Box
      mx="auto"
      maxW={["90vw", "350px"]}
      minW={["90vw", "200px"]}
      h="max-content"
      border="1px #d4d4d4 solid"
      borderRadius="10px"
      p="15px"
      textAlign="center"
    >
      <Avatar boxSize="110px" src={img} />
      <Text as="b" d="block" fontSize="2.2rem" my="15px">
        {badgeName}
      </Text>
      <Text>{description}</Text>
      <CustomDivider my="20px" />
      <Text as="b" d="block" fontSize="1.5rem" mb="15px">
        ¿Como ganarla?
      </Text>
      <Text>{howGetIt}</Text>
    </Box>
  )
}

export default BadgesCard
