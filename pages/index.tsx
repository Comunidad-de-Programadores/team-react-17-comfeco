import Head from "next/head"
import { Box } from "@chakra-ui/react"

import Protected from "@/components/protected"

import { FC } from "react"
import ContentCreators from "@/components/Carousel/Content Creators"
import Sponsors from "@/components/Carousel/Sponsors"

const Home: FC = () => {
  return (
    <Protected to="login" needsAuth>
      <Box>
        <Head>
          <title>Login | Team React #17</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Home</h1>
        <ContentCreators />
        <br />
        <br />
        <Sponsors />
      </Box>
    </Protected>
  )
}

export default Home
