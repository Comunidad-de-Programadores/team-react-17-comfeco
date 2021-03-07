import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react"
import { FC } from "react"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

type EditProfileProps = {
  isOpenProp: boolean
  onCloseProp: () => void
}

const EditProfile: FC<EditProfileProps> = ({ isOpenProp, onCloseProp }) => {
  return (
    <Modal isOpen={isOpenProp} onClose={onCloseProp} size="4xl" scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent css={{ "&::-webkit-scroll": { width: "0px" } }}>
        <ModalHeader>Editar perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={["10px", null, "50px", "100px"]}>
          <Flex justifyContent="center" mb="20px">
            <Avatar boxSize="150px" />
          </Flex>
          <Flex flexDirection={["column", "row"]}>
            <FormControl px="5px" py="10px">
              <FormLabel>Nombre de usuario (Nick)</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl px="5px" py="10px">
              <FormLabel>Correo electrónico</FormLabel>
              <Input type="email" />
            </FormControl>
          </Flex>
          <Flex py="10px" flexDirection={["column", "row"]}>
            <FormControl>
              <FormLabel>Área deconocimiento</FormLabel>
              <Select placeholder="Select option">
                <option>frontend</option>
                <option>backend</option>
                <option>DevOps</option>
                <option>Video Game Developers</option>
                <option>UI/UX</option>
                <option>Database Developer</option>
                <option>Cloud Computing</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex flexDirection={["column", "row"]}>
            <FormControl px="5px" py="10px">
              <FormLabel>Género</FormLabel>
              <Input />
            </FormControl>
            <FormControl px="5px" py="10px">
              <FormLabel>Fecha de nacimiento</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl px="5px" py="10px">
              <FormLabel>País</FormLabel>
              <Input />
            </FormControl>
          </Flex>
          <Flex flexDirection={["column", "row"]}>
            <FormControl px="5px" py="10px">
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl px="5px" py="10px">
              <FormLabel>Repetir contraseña</FormLabel>
              <Input type="password" />
            </FormControl>
          </Flex>
          <Flex flexDirection={["column", "row"]}>
            <FormControl px="5px" py="10px" d="flex" alignItems="baseline">
              <FormLabel d="inherit" alignItems="inherit">
                <Text as="b" d="inherit">
                  <FaFacebook size="20px" style={{ marginLeft: "15px", marginRight: "15px" }} /> facebook.com/
                </Text>
              </FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl px="5px" py="10px" d="flex" alignItems="baseline">
              <FormLabel d="inherit" alignItems="inherit">
                <Text as="b" d="inherit">
                  <FaGithub size="20px" style={{ marginLeft: "15px", marginRight: "15px" }} /> github.com/
                </Text>
              </FormLabel>
              <Input type="text" />
            </FormControl>
          </Flex>
          <Flex flexDirection={["column", "row"]}>
            <FormControl px="5px" py="10px" d="flex" alignItems="baseline">
              <FormLabel d="inherit" alignItems="inherit">
                <Text as="b" d="inherit">
                  <FaLinkedin size="20px" style={{ marginLeft: "15px", marginRight: "15px" }} /> linkedin.com/in/
                </Text>
              </FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl px="5px" py="10px" d="flex" alignItems="baseline">
              <FormLabel d="inherit" alignItems="inherit">
                <Text as="b" d="inherit">
                  <FaTwitter size="20px" style={{ marginLeft: "15px", marginRight: "15px" }} /> twitter.com/
                </Text>
              </FormLabel>
              <Input type="text" />
            </FormControl>
          </Flex>
          <FormControl px="5px" py="10px">
            <FormLabel>Biografía</FormLabel>
            <Textarea maxLength={140} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button>Guardar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditProfile
