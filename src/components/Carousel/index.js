import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import Slick from "react-slick"
import {Icon} from "react-fa"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./index.css"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }

  handleNext() {
    this.ref_slider.slickNext()
  }

  handlePrevious() {
    this.ref_slider.slickPrev()
  }

  render() {
    const {browser, noKeys, noArrows, slides_number, theme} = this.props
    const settings = {
      arrows: false,
      accessibility: !noKeys,
      infinite: true,
      draggable: false,
      slidesToShow: slides_number[browser.mediaType],
      slidesToScroll: slides_number[browser.mediaType],
    }
    return (
      <div className={styles.slider}>
        <Slick ref={ref => this.ref_slider = ref} {...settings}>
          {this.props.children}
        </Slick>
        {!noArrows &&
          <span className={styles[`left_${theme}`]} onClick={this.handlePrevious}>
            <Icon name="angle-left" />
          </span>
        }
        {!noArrows &&
        <span className={styles[`right_${theme}`]} onClick={this.handleNext}>
          <Icon name="angle-right" />
        </span>
        }
      </div>
    )
  }
}

Carousel.propTypes = {
  browser: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  noArrows: PropTypes.bool,
  noKeys: PropTypes.bool,
  slides_number: PropTypes.shape({
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
  theme: PropTypes.oneOf(["green", "yellow"]),
}

Carousel.defaultProps = {
  noArrows: false,
  noKeys: false,
  slides_number: {
    s: 1,
    m: 2,
    l: 4,
    xl: 4,
  },
  theme: "green",
}

export default connect(
  ({browser}) => ({browser}),
)(Carousel)
