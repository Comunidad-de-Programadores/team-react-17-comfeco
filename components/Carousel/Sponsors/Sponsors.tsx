import { FC } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { data } from "./data"
import { Box } from "@chakra-ui/react"
import CardSponsors from "./CardsSponsors"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return <FaAngleRight className={className} style={{ ...style, display: "block", color: "black" }} onClick={onClick} />
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return <FaAngleLeft className={className} style={{ ...style, display: "block", color: "black" }} onClick={onClick} />
}

const Sponsors: FC = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 450,
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
    <Box w={["80%", "90%", null, "60%"]} m="auto auto">
      <Slider {...settings}>
        {data.map((key, value) => {
          return (
            <div key={value}>
              <CardSponsors photo={key.photo} name={key.name} />
            </div>
          )
        })}
      </Slider>
    </Box>
  )
}

export default Sponsors
