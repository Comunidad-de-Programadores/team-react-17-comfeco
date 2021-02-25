import { FC } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import data from "./data"
import CardCreators from "./Cards"

const ContentCreators: FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }
  return (
    <div style={{ width: "50%", height: "300px", margin: "auto auto" }}>
      <Slider {...settings}>
        {data.map((key, value) => {
          return (
            <div key={value}>
              <CardCreators name={key.name} photo={key.photo} tech={key.tech} color={key.color} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default ContentCreators
