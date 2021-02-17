import { extendTheme, ChakraTheme } from "@chakra-ui/react"

const theme: ChakraTheme = extendTheme({
  fonts: {
    heading: 'Londrina Solid',
    body: `Source Sans Pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 600,
    bold: 700
  },
})

export default theme;