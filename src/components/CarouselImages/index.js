import React, {Component, PropTypes} from "react"

import Carousel from "components/Carousel"
import ImageLightbox from "components/ImageLightbox"

import styles from "./index.css"

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
    return images.length > 0
      ? <ImageLightbox
          index={lightboxIndex}
          images={images.map(image => ({
            caption: image.alt,
            src: image.src,
          }))}
          onClose={this.handleCloseLightbox}
          open={isLightboxOpen}
        >
          <Carousel theme={theme}>
            {images.map((image, i) => (
              <img
                key={i}
                className={styles.image}
                src={image.src}
                alt={image.alt}
                onClick={() => this.handleOpenLightbox(i)}
              />
            ))}
          </Carousel>
        </ImageLightbox>
      : null
  }
}

CarouselImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })),
  theme: PropTypes.oneOf(["green", "yellow"]),
}

CarouselImages.defaultProps = {
  images: [],
  theme: "green",
}

export default CarouselImages
