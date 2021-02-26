import { FC } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import data from "./data"
import CardCreators from "./CardsCreators"
import { Box, Heading } from "@chakra-ui/react"

const ContentCreators: FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1276,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 452,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <Box w={["100%", null, null, "60%"]} h="max-content" m="auto auto">
      <Heading as="h1" mb="10px" fontSize="4xl" textAlign="center">
        Ellos ya creen en esta iniciativa
      </Heading>
      <Slider {...settings}>
        {data.map((key, value) => {
          return (
            <div key={value}>
              <CardCreators name={key.name} photo={key.photo} tech={key.tech} color={key.color} />
            </div>
          )
        })}
      </Slider>
    </Box>
  )
}

export default ContentCreators
