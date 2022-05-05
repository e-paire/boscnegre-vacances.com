import PropTypes from "prop-types"
import React, {Component} from "react"

import {Carousel} from "../Carousel"
import {Image} from "../Image"
import * as styles from "./index.module.css"

class CarouselImages extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIndex: 0,
      isLightboxOpen: false,
    }

    this.handleCloseLightbox = this.handleCloseLightbox.bind(this)
  }

  handleCloseLightbox() {
    this.setState({
      lightboxIndex: 0,
      isLightboxOpen: false,
    })
  }

  handleOpenLightbox(index) {
    this.setState({
      lightboxIndex: index,
      isLightboxOpen: true,
    })
  }

  render() {
    const {lightboxIndex, isLightboxOpen} = this.state
    const {images, theme} = this.props
    return (
      images &&
      images.length > 0 && (
        <Carousel theme={theme} slidesCount={{s: 1, m: 2, l: 5, xl: 5}}>
          {images.map(({image, alt}, i) => (
            <div
              key={i}
              className={styles.image}
              onClick={() => this.handleOpenLightbox(i)}
            >
              <Image src={image} alt={alt} />
            </div>
          ))}
        </Carousel>
      )
    )
  }
}

CarouselImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  theme: PropTypes.oneOf(["green", "yellow"]),
}

CarouselImages.defaultProps = {
  images: [],
  theme: "green",
}

export {CarouselImages}
