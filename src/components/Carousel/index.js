import "swiper/css"
import "swiper/css/navigation"

import classNames from "classnames"
import PropTypes from "prop-types"
import React, {useMemo} from "react"
import {Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"

import {useBreakpoint} from "../../hooks/use-breakpoint"
import * as styles from "./index.module.css"

const Carousel = ({
  arrowsClassName,
  children,
  navigation,
  slidesCount,
  theme,
}) => {
  const breakpoint = useBreakpoint()
  const settings = useMemo(
    () => ({
      arrows: false,
      infinite: true,
      draggable: true,
      slidesToShow: slidesCount[breakpoint],
      slidesToScroll: slidesCount[breakpoint],
    }),
    [breakpoint]
  )

  return (
    <div className={classNames(styles.slider, styles[`slider_${theme}`])}>
      <Swiper
        modules={[Navigation]}
        navigation={navigation}
        slidesPerView={slidesCount[breakpoint]}
        loop={true}
      >
        {React.Children.map(children, (child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

Carousel.propTypes = {
  arrowsClassName: PropTypes.string,
  children: PropTypes.any.isRequired,
  slides_number: PropTypes.shape({
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
  theme: PropTypes.oneOf(["green", "yellow"]),
}

Carousel.defaultProps = {
  theme: "green",
  navigation: true,
}

export {Carousel}
