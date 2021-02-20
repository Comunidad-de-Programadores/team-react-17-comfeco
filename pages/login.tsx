import Head from "next/head"
import LoginForm from "@/components/loginForm"
import Protected from "@/components/protected"
import AppBar from "@/components/navBar/AppBar"
import ComfecoLogoSVG from "@/components/navBar/Comfeco logo SVG"
import Footer from "@/components/Footer"

const Login = () => {
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
