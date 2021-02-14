import { extendTheme, ChakraTheme } from "@chakra-ui/react"

const theme: ChakraTheme = extendTheme({
  fonts: {
    heading: 'Londrina Solid',
    body: "Source Sans Pro",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
})

export default theme;