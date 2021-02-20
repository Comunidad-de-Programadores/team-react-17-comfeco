import Head from "next/head";
import { Box } from "@chakra-ui/react";

import LoginForm from "@/components/loginForm";
import AppBar from "@/components/navBar/AppBar";
import Footer from "@/components/Footer";
import ComfecoLogoSVG from "@/components/navBar/Comfeco logo SVG/ComfecoLogoSVG";

const Home = () => {
  return (
    <Box>
      <Head>
        <title>Login | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar>
        <ComfecoLogoSVG/>
      </AppBar>

      <LoginForm />

      <Footer/>
    </Box>
  );
};

export default Home;
