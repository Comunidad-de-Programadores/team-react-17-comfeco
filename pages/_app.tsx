import { ChakraProvider } from "@chakra-ui/react"
import { AuthContextProvider } from "../context/authContext"
import Fonts from "@/styles/Fonts"
import theme from "@/styles/theme"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
