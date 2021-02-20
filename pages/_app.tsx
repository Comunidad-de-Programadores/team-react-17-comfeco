import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "@/styles/Fonts"
import theme from "@/styles/theme"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
