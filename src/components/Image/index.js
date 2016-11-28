import React, {Component, PropTypes} from "react"
import classNames from "classnames"

import styles from "./index.css"

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

  render() {
    const {loaded} = this.state
    const {alt, className, src} = this.props
    return (
      <div className={classNames(styles.wrapper, className)}>
        <img
          className={classNames(styles.image, loaded && styles.image_loaded)}
          src={src}
          alt={alt}
          onLoad={this.handleLoaded}
        />
      </div>
    )
  }
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Image
