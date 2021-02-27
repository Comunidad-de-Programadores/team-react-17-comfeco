import { FC, useState, useEffect } from "react"

import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react"

const Countdown: FC = () => {
  const getTimeLeft = () => {
    const goalDate = new Date(2021, 3, 3).getTime()

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
    <Box>
      <Text fontSize="x-large" fontWeight="medium" textAlign="center" margin="10px">
        Preparate lo bueno esta por venir
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(2, 1fr)" bg="#bababa" w="850px" h="160px" m="auto">
        <GridItem>
          <Text fontSize="70px" align="center" fontWeight="bold">
            {timeLeft.days}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="70px" align="center" fontWeight="bold">
            {timeLeft.hours}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="70px" align="center" fontWeight="bold">
            {timeLeft.minutes}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="70px" align="center" fontWeight="bold">
            {timeLeft.seconds}
          </Text>
        </GridItem>
        <GridItem cente>
          <Text fontSize="x-large" align="center" fontWeight="medium">
            Dias
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="x-large" align="center" fontWeight="medium">
            Horas
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="x-large" align="center" fontWeight="medium">
            Minutos
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="x-large" align="center" fontWeight="medium">
            Segundos
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Countdown
