import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout";
import Fonts from '@/styles/Fonts'
import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;