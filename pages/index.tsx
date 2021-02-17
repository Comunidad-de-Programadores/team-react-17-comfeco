import Head from "next/head";
import { Box } from "@chakra-ui/react";

import LoginForm from "@/components/loginForm";

const Home = () => {
  return (
    <Box>
      <Head>
        <title>Login | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />
    </Box>
  );
};

export default Home;
