import Head from "next/head"
import { Box } from "@chakra-ui/react"

import SignUpForm from "@/components/signUpForm"

import { FC } from "react"

const SignUp: FC = () => {
  return (
    <Box>
      <Head>
        <title>Registrarse | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignUpForm />
    </Box>
  )
}

export default SignUp
