import Head from "next/head"

import LoginForm from "@/components/loginForm"
import Protected from "@/components/protected"
import AppBar from "@/components/navBar/AppBar"
import ComfecoLogoSVG from "@/components/navBar/ComfecoSVG"
import Footer from "@/components/Footer"
import { FC } from "react"

const Login: FC = () => {
  return (
    <Protected to="/" needsAuth={false}>
      <Head>
        <title>Login | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar>
        <ComfecoLogoSVG />
      </AppBar>

      <LoginForm />

      <Footer />
    </Protected>
  )
}

export default Login
