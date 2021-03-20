import Head from "next/head"

import { FC } from "react"
import { Center, Heading, Text } from "@chakra-ui/react"

const TermsAndConditions: FC = () => {
  return (
    <Center flexDirection="column" mt="2rem" mb="50vh">
      <Head>
        <title>Terminos y condiciones | Team React #17</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading as="h1" mb={10} w={["90vw", "max-content"]}>
        Terminos y condiciones de uso
      </Heading>

      <Text width={["90vw", "60%"]}>
        Terminos y condiciones de uso de ejemplo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos
        molestias deleniti possimus accusantium mollitia fugit nemo id deserunt suscipit! Fugit dolore ipsum nihil
        architecto! Eligendi ex excepturi iste perferendis.
      </Text>
    </Center>
  )
}

export default TermsAndConditions
