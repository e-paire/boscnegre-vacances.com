import React, {Component, PropTypes} from "react"
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
    const settings = {
      // dots: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    }
    return (
      <div className={styles.slider}>
        <Slick ref={ref => this.ref_slider = ref} {...settings}>
          {this.props.children}
        </Slick>
        <span className={styles.left} onClick={this.handlePrevious}>
          <Icon name="arrow-left" />
        </span>
        <span className={styles.right} onClick={this.handleNext}>
          <Icon name="arrow-right" />
        </span>
      </div>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Carousel
