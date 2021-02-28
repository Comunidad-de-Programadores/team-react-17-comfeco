import { FC, useState, useEffect } from "react"

import { Box, Center, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react"

const Countdown: FC = () => {
  const getTimeLeft = () => {
    const goalDate = new Date(2021, 2, 6).getTime()

    const msLeft = goalDate - new Date().getTime()
    const days = msLeft / (1000 * 60 * 60 * 24)
    const hours = (days % 1) * 24
    const minutes = (hours % 1) * 60
    const seconds = (minutes % 1) * 60

    return {
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(getTimeLeft()), 1000)

    return () => clearTimeout(timer)
  })

  return (
    <Flex mt="115px" flexDirection="column" color="white" bgGradient="linear(to-r, #8B1B83, #FFB703)" w={["100%", "100px", "100%", "60%"]} mx={["0px", null, "auto"]} justifyContent="center">
      <Text mt="25px" fontSize="x-large" fontWeight="medium" textAlign="center">
        Preparate lo bueno esta por venir
      </Text>
      <Flex px={["15px", "15px", "45px"]} w="100%" h={["120px", "220px"]} justifyContent="center" alignItems="center">
        <Grid my="auto" templateRows="repeat(2, 1fr)" h="auto">
          <Text fontSize={["3rem", "5rem", "6rem", "7rem"]} textAlign="center" fontWeight="bold">
            {timeLeft.days} 
          </Text>
          <Text mt="0px" fontSize="medium" textAlign="center" fontWeight="medium">
            Dias
          </Text>
        </Grid>
        <Spacer />
        <Grid my="auto" templateRows="repeat(2, 1fr)">
          <Text fontSize={["3rem", "5rem", "6rem", "7rem"]} fontWeight="bold">
            {timeLeft.hours}
          </Text>
          <Text mt="0px" fontSize="medium" textAlign="center" fontWeight="medium">
            Horas
          </Text>
        </Grid>
        <Spacer />
        <Grid my="auto" templateRows="repeat(2, 1fr)">
          <Text fontSize={["3rem", "5rem", "6rem", "7rem"]} textAlign="center" fontWeight="bold">
            {timeLeft.minutes}
          </Text>
          <Text mt="0px" fontSize="medium" textAlign="center" fontWeight="medium">
            Minutos
          </Text>
        </Grid>
        <Spacer />
        <Grid my="auto" templateRows="repeat(2, 1fr)">
          <Text fontSize={["3rem", "5rem", "6rem", "7rem"]} textAlign="center" fontWeight="bold">
            {timeLeft.seconds}
          </Text>
          <Text mt="0px" fontSize="medium" textAlign="center" fontWeight="medium">
            Segundos
          </Text>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Countdown
