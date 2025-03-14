import Head from "next/head"
import { Box } from "@chakra-ui/react"

import SignUpForm from "@/components/signUpForm"

import Protected from "@/components/protected"
import { FC } from "react"

const SignUp: FC = () => {
  return (
    <Protected to="/" needsAuth={false}>
      <Box>
        <Head>
          <title>Registrarse | Team React #17</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <SignUpForm />
      </Box>
    </Protected>
  )
}

export default SignUp
