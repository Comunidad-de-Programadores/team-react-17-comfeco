import Head from "next/head"
import { Box } from "@chakra-ui/react"

import firebase from "@/lib/firebaseConfig"
import Protected from "@/components/protected"

import { FC } from "react"

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

        <h1>Home</h1>

        <button onClick={logOut}>Logout</button>
      </Box>
    </Protected>
  )
}

export default Home
