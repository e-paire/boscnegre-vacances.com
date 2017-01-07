import React, {Component, PropTypes} from "react"
import classNames from "classnames"

import styles from "./index.css"

import {getUrl} from "utils/urls"

const CLOUDINARY_ID = "v1480958467"

class Image extends Component {
  constructor() {
    super()

    this.state = {
      loaded: false,
    }

    this.handleLoaded = this.handleLoaded.bind(this)
  }

  handleLoaded() {
    this.setState({
      loaded: true
    })
  }

  getUrl() {
    return this.props.src
  }

  getResizeUrl() {
    const {metadata: {pkg}} = this.context
    const {src} = this.props
    const options = [
      "q_auto",
      "c_fill",
    ]

    return `${getUrl("cloudinary_fetch")}/${options.join(",")}/${CLOUDINARY_ID}/${pkg.homepage}${src}`
  }

  getSrc() {
    return process.env.NODE_ENV === "production"
      ? this.getResizeUrl()
      : this.getUrl()
  }

  getSrcSet() {
    const {metadata: {pkg}} = this.context
    const {src} = this.props

    if (process.env.NODE_ENV === "production") {
      return `
        ${getUrl("cloudinary_fetch")}/w_256/${CLOUDINARY_ID}/${pkg.homepage}${src} 256w,
        ${getUrl("cloudinary_fetch")}/w_512/${CLOUDINARY_ID}/${pkg.homepage}${src} 512w,
        ${getUrl("cloudinary_fetch")}/w_1024/${CLOUDINARY_ID}/${pkg.homepage}${src} 1024w,
        ${getUrl("cloudinary_fetch")}/w_2048/${CLOUDINARY_ID}/${pkg.homepage}${src} 2048w
      `
    }

    return null
  }

  render() {
    const {loaded} = this.state
    const {alt, className} = this.props
    return (
      <div className={classNames(styles.wrapper, className)}>
        <img
          className={classNames(styles.image, loaded && styles.image_loaded)}
          src={this.getSrc()}
          srcSet={this.getSrcSet()}
          sizes="100vw"
          alt={alt}
          onLoad={this.handleLoaded}
        />
      </div>
    )
  }
}

Image.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  resize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  })
}

Image.defaultProps = {
  resize: {}
}

export default Image
