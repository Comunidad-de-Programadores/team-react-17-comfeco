import Head from "next/head"
import { Box } from "@chakra-ui/react"

import Countdown from "@/components/countdown/Countdown"
import { FC } from "react"
import ContentCreators from "@/components/Carousel/Content Creators"
import Sponsors from "@/components/Carousel/Sponsors"

import HomepageHead from "@/components/Homepage Head"
import CommuityMenu from "@/components/CommunityMenu"

const Home: FC = () => {
  return (
    <Box>
      <Head>
        <title>Login | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageHead />
      <ContentCreators />
      <CommuityMenu />
      <Sponsors />
      <Countdown />
    </Box>
  )
}

export default Home
