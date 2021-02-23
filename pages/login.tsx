import Head from "next/head"

import LoginForm from "@/components/loginForm"
import Protected from "@/components/protected"
import { FC } from "react"

const Login: FC = () => {
  return (
    <Protected to="/" needsAuth={false}>
      <Head>
        <title>Login | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />
    </Protected>
  )
}

export default Login
