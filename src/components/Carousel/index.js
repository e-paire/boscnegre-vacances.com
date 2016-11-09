import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import Slick from "react-slick"
import {Icon} from "react-fa"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./index.css"

const SLIDES_MQ = {
  "s": 1,
  "m": 2,
  "l": 4,
  "infinity": 4,
}

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
    const {browser} = this.props
    const settings = {
      infinite: true,
      draggable: false,
      slidesToShow: SLIDES_MQ[browser.mediaType],
      slidesToScroll: SLIDES_MQ[browser.mediaType],
    }
    return (
      <div className={styles.slider}>
        <Slick ref={ref => this.ref_slider = ref} {...settings}>
          {this.props.children}
        </Slick>
        <span className={styles.left} onClick={this.handlePrevious}>
          <Icon name="angle-left" />
        </span>
        <span className={styles.right} onClick={this.handleNext}>
          <Icon name="angle-right" />
        </span>
      </div>
    )
  }
}

Carousel.propTypes = {
  browser: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
}

export default connect(
  ({browser}) => ({browser}),
)(Carousel)
