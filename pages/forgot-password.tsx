import Head from "next/head"

import { Box } from "@chakra-ui/react"

import RecoverPassword from "@/components/recoverPassword"
import { FC } from "react"

const SignUp: FC = () => {
  return (
    <Box>
      <Head>
        <title>Recuperar Contraseña | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RecoverPassword />
    </Box>
  );
};

export default SignUp;
