import { Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { FC, useState } from "react"
import { HiBadgeCheck, HiUser, HiUserGroup } from "react-icons/hi"
import { RiCalendarEventFill } from "react-icons/ri"
import Events from "../Sections/Eventos"
import MyProfile from "../Sections/Mi perfil"

const SubMenu: FC = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleOnClickChange = event => {
    setTabIndex(parseInt(event.target.value))
  }
  const handleTabsChange = index => {
    setTabIndex(index)
  }

  return (
    <Tabs index={tabIndex} onChange={handleTabsChange}>
      <TabList
        justifyContent="center"
        alignItems="center"
        py={["0px", "20px", null, "50px"]}
        px={["0px", "60px", "70px", "150px"]}
      >
        <Tab
          w={["100px", "130px", "130px", "200px"]}
          fontSize={["0.8rem", "1rem", null, "2rem"]}
          bg="#8B1B83"
          color="white"
          borderRadius={["none", "10px"]}
          border={["none", "0.5px #d4d4d4 solid"]}
          _focus={{}}
          _active={{}}
          _selected={{ bg: "#FFB703", color: "#8B1B83", fontWeight: "bold" }}
          flexDirection={["column", "row"]}
        >
          <HiUser style={{ width: "100%" }} /> <Text w={["100%", "70vw"]}>Mi perfil</Text>
        </Tab>
        <Spacer />
        <Tab
          w={["100px", "130px", "130px", "200px"]}
          fontSize={["0.8rem", "1rem", null, "2rem"]}
          bg="#8B1B83"
          color="white"
          borderRadius={["none", "10px"]}
          border={["none", "0.5px #d4d4d4 solid"]}
          _focus={{}}
          _active={{}}
          _selected={{ bg: "#FFB703", color: "#8B1B83", fontWeight: "bold" }}
          flexDirection={["column", "row"]}
        >
          <HiBadgeCheck style={{ width: "100%" }} /> <Text w={["100%", "70vw"]}>Insignias</Text>
        </Tab>
        <Spacer />
        <Tab
          w={["100px", "130px", "130px", "200px"]}
          fontSize={["0.8rem", "1rem", null, "2rem"]}
          bg="#8B1B83"
          color="white"
          borderRadius={["none", "10px"]}
          border={["none", "0.5px #d4d4d4 solid"]}
          _focus={{}}
          _active={{}}
          _selected={{ bg: "#FFB703", color: "#8B1B83", fontWeight: "bold" }}
          flexDirection={["column", "row"]}
        >
          <HiUserGroup style={{ width: "100%" }} /> <Text w={["100%", "70vw"]}>Grupos</Text>
        </Tab>
        <Spacer />
        <Tab
          w={["100px", "130px", "130px", "200px"]}
          fontSize={["0.8rem", "1rem", null, "2rem"]}
          bg="#8B1B83"
          color="white"
          borderRadius={["none", "10px"]}
          border={["none", "0.5px #d4d4d4 solid"]}
          _focus={{}}
          _active={{}}
          _selected={{ bg: "#FFB703", color: "#8B1B83", fontWeight: "bold" }}
          flexDirection={["column", "row"]}
        >
          <RiCalendarEventFill style={{ width: "100%" }} /> <Text w={["100%", "70vw"]}>Eventos</Text>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MyProfile valueToChange={3} onClickButtonToChange={handleOnClickChange} />
        </TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
        <TabPanel>
          <Events />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default SubMenu
