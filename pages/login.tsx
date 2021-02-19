import Head from "next/head"
import LoginForm from "@/components/loginForm"

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />
    </div>
  )
}

export default Login
