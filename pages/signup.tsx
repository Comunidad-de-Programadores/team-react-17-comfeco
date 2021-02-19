import Head from "next/head";
import { Box } from "@chakra-ui/react";

import SignUpForm from "@/components/signUpForm";
import AppBar from "@/components/navBar/AppBar";
import ComfecoLogoSVG from "@/components/navBar/Comfeco logo SVG/ComfecoLogoSVG";
import Footer from "@/components/Footer";

const SignUp = () => {
  return (
    <Box>
      <Head>
        <title>Registrarse | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar>
        <ComfecoLogoSVG/>
      </AppBar>

      <SignUpForm />

      <Footer>
        <div/>
      </Footer>

    </Box>
  );
};

export default SignUp;
