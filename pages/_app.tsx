import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "@/styles/Fonts"
import theme from "@/styles/theme"
import { AuthContextProvider } from "../context/authContext"
import { AppProps } from "next/app"
import { FC } from "react"
import Layout from "@/components/layout"

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
