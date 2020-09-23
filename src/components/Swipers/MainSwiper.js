import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Swiper, SwiperSlide } from "swiper/react"

const useStyles = makeStyles(theme => ({
  mainSlider: {
    width: "430px",
    height: "100%",
    margin: 0,
    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "auto",
      marginLeft: "0px",
    },
  },
}))

export default function MainSwiper(props) {
  const classes = useStyles()
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      direction="horizontal"
      effect="fade"
      loop
      navigation
      className={classes.mainSlider}
      thumbs={{ swiper: props.thumbsSwiper }}
    >
      <SwiperSlide>
        <img src={props.data.firstImg} alt="Funny bunny 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.data.scndImg} alt="Funny bunny 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.data.firstImg} alt="Funny bunny 3" />
      </SwiperSlide>
    </Swiper>
  )
}
