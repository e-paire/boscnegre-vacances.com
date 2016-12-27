import React, {Component, PropTypes} from "react"
import Lightbox from "react-images"

class ImageLightbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: props.index,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.index !== nextProps.index) {
      this.setState({index: nextProps.index})
    }
  }

  handleClose() {
    this.props.onClose()
  }

  handleNext() {
    const {index} = this.state
    const {images} = this.props
    this.setState({
      index: images
        ? (index + 1) % images.length
        : 0,
    })
  }

  handlePrevious() {
    const {index} = this.state
    const {images} = this.props
    this.setState({
      index: images
        ? (index + images.length - 1) % images.length
        : 0,
    })
  }

  render() {
    const {index} = this.state
    const {children, images, open} = this.props
    return (
      <div>
        <Lightbox
          currentImage={index}
          images={images}
          isOpen={open}
          onClose={this.handleClose}
          onClickPrev={this.handlePrevious}
          onClickNext={this.handleNext}
        />
        {children}
      </div>
    )
  }
}

ImageLightbox.propTypes = {
  children: PropTypes.any.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })),
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default ImageLightbox
