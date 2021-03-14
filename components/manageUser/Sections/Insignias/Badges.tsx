import CustomDivider from "@/components/Custom divider component/CustomDivider"
import { Box, Flex, GridItem, SimpleGrid } from "@chakra-ui/react"
import useWindowDimensions from "hooks/useWindowDimensions"
import { FC } from "react"
import BadgesCard from "./BadgeCard"
import { data } from "./data"

const BadgesSection: FC = () => {
  const widthScreen = useWindowDimensions().width
  return (
    <Box>
      {widthScreen > 767 && widthScreen < 991 ? (
        <>
          <Flex>
            <BadgesCard
              img=""
              badgeName="Sociable"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
              howGetIt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat."
            />
            <BadgesCard
              img=""
              badgeName="Sociable"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
              howGetIt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat."
            />
          </Flex>
          <CustomDivider my="20px" />
          <Flex>
            <BadgesCard
              img=""
              badgeName="Sociable"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
              howGetIt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat."
            />
            <BadgesCard
              img=""
              badgeName="Sociable"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
              howGetIt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat."
            />
          </Flex>
        </>
      ) : (
        <SimpleGrid
          d="flex"
          flexDirection={["column", "row"]}
          justifyContent="center"
          spacingX={["0px", "20px"]}
          spacingY={["20px", "0px"]}
        >
          {data.map((key, value) => {
            return (
              <GridItem key={value}>
                <BadgesCard
                  img={key.photo}
                  badgeName={key.badgeName}
                  description={key.description}
                  howGetIt={key.howGetIt}
                />
              </GridItem>
            )
          })}
        </SimpleGrid>
      )}
    </Box>
  )
}

export default BadgesSection
