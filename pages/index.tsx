import Head from "next/head"
import { Box } from "@chakra-ui/react"

import firebase from "@/lib/firebaseConfig"
import Protected from "@/components/protected"

import AppBar from "@/components/navBar/AppBar"
import Footer from "@/components/Footer"
import ComfecoLogoSVG from "@/components/navBar/ComfecoSVG"
import Countdown from "@/components/countdown/Countdown"
import { FC } from "react"

import { Text } from "@chakra-ui/react"

const Home: FC = () => {
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("sesion cerrada")
      })
  }

  return (
    <Protected to="login" needsAuth>
      <Box>
        <Head>
          <title>Login | Team React #17</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AppBar>
          <ComfecoLogoSVG />
        </AppBar>

        <Text fontSize="40px" fontWeight="normal" textAlign="center">
          Bienvenidos a Community Fest and Code
        </Text>

        <Text fontSize="x-large" color="gray" textAlign="center">
          ¡Conoce gente, aprende y gana!
        </Text>
        <br />

        <Text m="0 500px" fontSize="large">
          La proxima edicion regresa en el 2022, en la cual se planea involucrar a todos los programadores
          independientemente del area de conocimiento que se encuentre, todo con un mismo proposito, aprender en
          comunidad
        </Text>
        <br />

        <Countdown />

        <button onClick={logOut}>Logout</button>

        <Footer />
      </Box>
    </Protected>
  )
}

export default Home
