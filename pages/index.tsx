import Head from "next/head"
import { Box } from "@chakra-ui/react"

import Protected from "@/components/protected"

import Countdown from "@/components/countdown/Countdown"
import { FC } from "react"
import ContentCreators from "@/components/Carousel/Content Creators"
import Sponsors from "@/components/Carousel/Sponsors"

import HomepageHead from "@/components/Homepage Head"

const Home: FC = () => {
  return (
    <Protected to="login" needsAuth>
      <Box>
        <Head>
          <title>Login | Team React #17</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomepageHead />
        <br />
        <ContentCreators />
        <br />
        <br />
        <Sponsors />
        <br />
        <Countdown />
      </Box>
    </Protected>
  )
}

export default Home
