import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import { Swiper, SwiperSlide } from "swiper/react"

const useStyles = makeStyles(theme => ({
  thumbsSlider: {
    width: "430px",
    height: "100%",
    margin: 0,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "52px",
    },
  },
}))

export default function ThumbsSwiper(props) {
  const classes = useStyles()

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={3}
      onSwiper={props.setThumbsSwiper}
      className={classes.thumbsSlider}
      // direction="vertical"
    >
      <SwiperSlide>
        <Img
          fluid={props.data.img1.childImageSharp.fluid}
          alt="Funny bunny 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Img
          fluid={props.data.img2.childImageSharp.fluid}
          alt="Funny bunny 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Img
          fluid={props.data.img3.childImageSharp.fluid}
          alt="Funny bunny 3"
        />
      </SwiperSlide>
    </Swiper>
  )
}
