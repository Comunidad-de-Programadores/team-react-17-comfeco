import Head from "next/head"

import LoginForm from "@/components/loginForm"
import { FC } from "react"

const Login: FC = () => {
  return (
    <>
      <Head>
        <title>Login | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />
    </>
  )
}

export default Login
