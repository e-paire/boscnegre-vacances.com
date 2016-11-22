import React, {Component, PropTypes} from "react"
import {FormattedMessage} from "react-intl"
import {Link} from "react-router"
import Icon from "react-fa"

import styles from "./index.css"

class ImageLink extends Component {
  render() {
    const {image, url, text} = this.props
    return (
      <div className={styles.wrapper}>
        <img className={styles.image} src={image.src} alt={image.alt} />
        <div className={styles.content}>
          <p className={styles.text}>{text}</p>
          <div className={styles.button}>
            <Link className={styles.link} to={url}>
              <span className={styles.linkText}>
                <FormattedMessage id="buttons.see_more" />
              </span>
              <span className={styles.linkIcon}>
                <Icon name="plus" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

ImageLink.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ImageLink
