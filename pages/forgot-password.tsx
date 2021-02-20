import Head from "next/head";
import { Box, Button, Spacer, Text } from "@chakra-ui/react";

import RecoverPassword from "@/components/recoverPassword";
import AppBar from "@/components/navBar/AppBar";
import ComfecoLogoSVG from "@/components/navBar/Comfeco logo SVG/ComfecoLogoSVG";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const SignUp = () => {
  return (
    <Box>
      <Head>
        <title>Recuperar Contraseña | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar>
        <>
          <ComfecoLogoSVG/>
          <Spacer/>
            <Link href="/" passHref>
              <Button
                bg="gray.500"
                color="white"
                fontSize='1rem'
                _hover={{
                  bg: "gray.600",
                }}
                leftIcon={<FaArrowLeft />}
              >
                <Text isTruncated>
                  Iniciar sesión
                </Text>
              </Button>
            </Link>
        </>
      </AppBar>

      <RecoverPassword />

      <Footer/>
        
    </Box>
  );
};

export default SignUp;
