import React, {Component, PropTypes} from "react"
import {FormattedMessage} from "react-intl"
import {Link} from "react-router"
import Icon from "react-fa"

import Image from "components/Image"

import styles from "./index.css"

class ImageLink extends Component {
  render() {
    const {cover, url, text} = this.props
    return (
      <div className={styles.wrapper}>
        {cover &&
          <Image className={styles.image} src={cover.image} alt={cover.alt} />
        }
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
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ImageLink
