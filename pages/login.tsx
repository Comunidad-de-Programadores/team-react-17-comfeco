import Head from "next/head"
import LoginForm from "@/components/loginForm"
import Protected from "@/components/protected"

const Login = () => {
  return (
    <Protected to="/" needsAuth={false}>
      <div>
        <Head>
          <title>Login | Team React #17</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <LoginForm />
      </div>
    </Protected>
  )
}

export default Login
