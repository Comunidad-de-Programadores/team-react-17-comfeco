import { ChevronDownIcon } from "@chakra-ui/icons"
import { Avatar, HStack, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { FC } from "react"
import { FaBars, FaDoorOpen, FaUser } from "react-icons/fa"
import Link from "next/link"
import useWindowDimensions from "hooks/useWindowDimensions"
const UserHeader: FC = () => {
  const width = useWindowDimensions().width

  return (
    <Menu>
      {width > 767 && width < 900 ? (
        <MenuButton>
          <FaBars width="40px" />
        </MenuButton>
      ) : (
        <MenuButton bg="transparent" p="5px" borderBottom="1px #f1f1f1 solid">
          <HStack>
            <Avatar />
            <Text>UserName</Text>
            <ChevronDownIcon />
          </HStack>
        </MenuButton>
      )}

      <MenuList>
        <MenuGroup title="Navigative" d={["block", null, "none"]}>
          <MenuItem d={["block", null, "none"]}>
            <Link href="#">Inicio</Link>
          </MenuItem>
          <MenuItem d={["block", null, "none"]}>
            <Link href="#">Comunidades</Link>
          </MenuItem>
          <MenuItem d={["block", null, "none"]}>
            <Link href="#">Talleres</Link>
          </MenuItem>
          <MenuItem d={["block", null, "none"]}>
            <Link href="#">Creadores de contenido</Link>
          </MenuItem>
        </MenuGroup>
        <MenuDivider d={["block", null, "none"]} />
        <MenuGroup title="User" d={["block", null, "none"]}>
          <Link href="/manage-user">
            <MenuItem icon={<FaUser />}>Manage User</MenuItem>
          </Link>
          <MenuItem icon={<FaDoorOpen />}>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default UserHeader
