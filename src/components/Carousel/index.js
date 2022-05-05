import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import classNames from "classnames"
import PropTypes from "prop-types"
import React, {useCallback, useMemo, useRef} from "react"
import {Icon} from "react-fa"
import Slick from "react-slick"

import {useBreakpoint} from "../../hooks/use-breakpoint"
import * as styles from "./index.module.css"

const Carousel = ({arrowsClassName, children, noKeys, slidesCount, theme}) => {
  const ref = useRef()
  const breakpoint = useBreakpoint()
  const settings = useMemo(
    () => ({
      arrows: false,
      infinite: true,
      draggable: true,
      slidesToShow: slidesCount[breakpoint],
      slidesToScroll: slidesCount[breakpoint],
    }),
    [noKeys, breakpoint]
  )

  const goPrev = useCallback(() => {
    if (ref.current) {
      ref.current.slickPrev()
    }
  }, [ref])

  const goNext = useCallback(() => {
    if (ref.current) {
      ref.current.slickNext()
    }
  }, [ref])

  return (
    <div className={styles.slider}>
      <Slick ref={ref} {...settings}>
        {children}
      </Slick>
      {slidesCount[breakpoint] < children.length && (
        <span
          className={classNames(styles[`left_${theme}`], arrowsClassName)}
          onClick={goPrev}
        >
          <Icon name="angle-left" />
        </span>
      )}
      {slidesCount[breakpoint] < children.length && (
        <span
          className={classNames(styles[`right_${theme}`], arrowsClassName)}
          onClick={goNext}
        >
          <Icon name="angle-right" />
        </span>
      )}
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
}

export {Carousel}
