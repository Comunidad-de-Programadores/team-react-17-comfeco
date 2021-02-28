import { Box, Flex, Spacer, Text } from "@chakra-ui/react"
import { FC } from "react"
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa"
import { SiSvelte } from "react-icons/si"
import SimpleLogoSVG from "../navBar/ComfecoSVG/Simple"

const HomepageHead: FC = () => {
  return (
    <Flex h={["100vh", "87vh"]} flexDirection={["column", "row"]}>
      <Box
        color="white"
        w={["100vw", "50vw"]}
        bgImage="url(/assets/pexels-ovan-57690.jpg)"
        bgPosition="top"
        bgRepeat="no-repeat"
      >
        <Text pt="100px" w={["100vw", "50vw"]} fontSize="60px" fontWeight="normal" textAlign="center">
          Bienvenidos a Community Fest and Code
        </Text>

        <Text w={["100vw", "50vw"]} fontSize="x-large" color="gray" textAlign="center">
          ¡Conoce gente, aprende y gana!
        </Text>
        <br />

        <Text w={["100vw", "50vw"]} px="10" fontSize="large">
          La proxima edicion regresa en el 2022, en la cual se planea involucrar a todos los programadores
          independientemente del area de conocimiento que se encuentre, todo con un mismo proposito, aprender en
          comunidad
        </Text>
      </Box>
      <Box w={["100vw", "50vw"]}>
        <Flex justifyContent="center" mt="30px">
          <SimpleLogoSVG w="50%" h="50%" />
        </Flex>
        <Flex px="50px" mt="50px">
          <FaAngular size="100px" color="#BD002E" />
          <Spacer />
          <FaReact size="100px" color="#50BBD7" />
          <Spacer />
          <FaVuejs size="100px" color="#3FB27F" />
          <Spacer />
          <SiSvelte size="100px" color="#F73C00" />
        </Flex>
      </Box>
    </Flex>
  )
}

export default HomepageHead
