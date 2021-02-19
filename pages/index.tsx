import Head from "next/head"
import { Box } from "@chakra-ui/react"

import firebase from "../firebaseConfig"

const Home = () => {
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("sesion cerrada")
      })
  }

  return (
    <Box>
      <Head>
        <title>Login | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>

      <button onClick={logOut}>Logout</button>
    </Box>
  )
}

export default Home
