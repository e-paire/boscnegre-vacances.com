import React, {Component, PropTypes} from "react"
import classNames from "classnames"
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
    const {arrowsClassName, browser, children, noKeys, slides_number, theme} = this.props
    const settings = {
      arrows: false,
      accessibility: !noKeys,
      infinite: false,
      draggable: false,
      slidesToShow: slides_number[browser.mediaType],
      slidesToScroll: slides_number[browser.mediaType],
    }
    const childrenIsArray = children && Array.isArray(children)
    return (
      <div className={styles.slider}>
        <Slick ref={ref => this.ref_slider = ref} {...settings}>
          {children}
        </Slick>
        {childrenIsArray && slides_number[browser.mediaType] < children.length &&
          <span className={classNames(styles[`left_${theme}`], arrowsClassName)} onClick={this.handlePrevious}>
            <Icon name="angle-left" />
          </span>
        }
        {childrenIsArray && slides_number[browser.mediaType] < children.length &&
        <span className={classNames(styles[`right_${theme}`], arrowsClassName)} onClick={this.handleNext}>
          <Icon name="angle-right" />
        </span>
        }
      </div>
    )
  }
}

Carousel.propTypes = {
  arrowsClassName: PropTypes.string,
  browser: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
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
