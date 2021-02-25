import { ChevronDownIcon } from "@chakra-ui/icons"
import { Avatar, HStack, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react"
import firebase from "@/lib/firebaseConfig"
import { FC } from "react"
import { FaBars, FaDoorOpen, FaUser } from "react-icons/fa"
import Link from "next/link"
import useWindowDimensions from "hooks/useWindowDimensions"

type User = {
  userName?: string
  photo?: string
}

const UserHeader: FC<User> = ({ userName, photo }) => {
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("sesion cerrada")
      })
  }

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
            <Avatar src={photo} />
            <Text>{userName ? userName : "UserName"}</Text>
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
          <MenuItem icon={<FaUser />}>Manage User</MenuItem>
          <MenuItem onClick={logOut} icon={<FaDoorOpen />}>
            Logout
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default UserHeader
