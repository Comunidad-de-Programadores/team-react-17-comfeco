import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "@/styles/Fonts"
import theme from "@/styles/theme"
import { AuthContextProvider } from "../context/authContext"
import { AppProps } from "next/app"
import { FC } from "react"

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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
