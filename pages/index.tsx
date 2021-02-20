import Head from "next/head"
import { Box } from "@chakra-ui/react"

import firebase from "@/lib/firebaseConfig"
import Protected from "@/components/protected"

import LoginForm from "@/components/loginForm"
import AppBar from "@/components/navBar/AppBar"
import Footer from "@/components/Footer"
import ComfecoLogoSVG from "@/components/navBar/Comfeco logo SVG/ComfecoLogoSVG"

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
    <Protected to="login" needsAuth>
      <Box>
        <Head>
          <title>Login | Team React #17</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AppBar>
          <ComfecoLogoSVG />
        </AppBar>

        <h1>Home</h1>

        <button onClick={logOut}>Logout</button>

        <Footer />
      </Box>
    </Protected>
  )
}

export default Home
