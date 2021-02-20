import { Box, Flex, Grid, GridItem, HStack, Spacer, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <Flex mt="70px" bottom="0px" minH="100px" bg="#6b46c1" color="white">
      <Stack direction={["column", "row"]} w="100%" m="auto 30px auto 30px">
        <Text>@Copyright 2021</Text>
        <Spacer />
        <Grid
          justifyContent="center"
          alignItems="center"
          templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
          gap={4}
        >
          <GridItem>
            <Link href="https://www.comfeco.com/" passHref>
              Sitio oficial
            </Link>
          </GridItem>
          <GridItem>
            <Link href="https://www.facebook.com/groups/2637132626546045" passHref>
              Facebook
            </Link>
          </GridItem>
          <Grid>
            <Link href="https://discord.gg/5Bb5yvzNPr" passHref>
              Discord
            </Link>
          </Grid>
          <Grid>
            <Link href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew" passHref>
              YouTube
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Flex>
  )
}

export default Footer
