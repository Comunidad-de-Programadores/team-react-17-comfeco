import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "@/styles/Fonts"
import theme from "@/styles/theme"
import { AppProps } from "next/app"
import { FC } from "react"
import Layout from "@/components/layout"

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
