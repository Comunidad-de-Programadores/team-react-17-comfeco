import { Box, Flex, FormControl, Input, Select, Wrap, WrapItem } from "@chakra-ui/react"
import { FC, useEffect, useState } from "react"
import Group from "./Group"
import { data } from "./data"

const Groups: FC = () => {
  /*Filter*/
  const [filter, setFilter] = useState("")
  const [serachGroup, setSearchGroup] = useState("")

  let groupsToShow = data
  const [language, setLanguages] = useState(groupsToShow)

  const handleChangeFilter = event => {
    setFilter(event.target.value)
  }

  const handleChangeSearch = event => {
    setSearchGroup(event.target.value)
  }

  useEffect(() => {
    groupsToShow = data.filter(
      lang =>
        lang.language.toLowerCase().includes(filter.toLowerCase()) &&
        lang.name.toLowerCase().includes(serachGroup.toLowerCase())
    )
    setLanguages(groupsToShow)
  }, [filter, serachGroup])

  return (
    <Box px={["0px", "15px"]}>
      <Flex flexDirection={["column", null, "column", "row"]}>
        <FormControl w={["90vw", "100%", null, "300px"]} mr="15px" mt={["20px", null, null, "0px"]}>
          <Select
            value={filter}
            onChange={handleChangeFilter}
            placeholder="Filtrar por lenguaje"
            borderColor="#888"
            borderRadius="10px"
          >
            <option>Typescript</option>
            <option>JavaScript</option>
          </Select>
        </FormControl>
        <FormControl w={["90vw", "100%", null, "300px", "100%"]} mt={["20px", null, null, "0px"]}>
          <Input
            value={serachGroup}
            onChange={handleChangeSearch}
            placeholder="Buscar grupo"
            borderColor="#888"
            borderRadius="10px"
          />
        </FormControl>
      </Flex>
      <Wrap w="100%" spacing="20px">
        {language.map((key, value) => (
          <WrapItem key={value}>
            <Group img={key.img} language={key.language} groupName={key.name} description={key.description} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}

export default Groups
