import React, {Component, PropTypes} from "react"

import Image from "components/Image"
import TextLink from "components/TextLink"

import styles from "./index.css"

class ImageText extends Component {
  render() {
    const {cover, url, text} = this.props
    return (
      <div className={styles.wrapper}>
        {cover &&
          <Image className={styles.image} src={cover.image} alt={cover.alt} />
        }
        <div className={styles.content}>
          <TextLink text={text} url={url} />
        </div>
      </div>
    )
  }
}

ImageText.propTypes = {
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default ImageText
