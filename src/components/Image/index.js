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
    const {resize: {width, height}, src} = this.props
    const options = [
      ...(width ? [`w_${width}`] : []),
      ...(height ? [`h_${height}`] : []),
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

  render() {
    const {loaded} = this.state
    const {alt, className} = this.props
    return (
      <div className={classNames(styles.wrapper, className)}>
        <img
          className={classNames(styles.image, loaded && styles.image_loaded)}
          src={this.getSrc()}
          sizes={`
            (max-width: 669px),
            (min-width: 670px) and (max-width: 1023px),
            (min-width: 1024px) and (max-width: 1359px),
            (min-width: 1360px),
          `}
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
