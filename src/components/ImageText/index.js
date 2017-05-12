import PropTypes from "prop-types"
import React, {Component} from "react"

import Image from "components/Image"
import TextLink from "components/TextLink"

import styles from "./index.css"

class ImageText extends Component {
  render() {
    const {cover, external, url, text} = this.props
    return (
      <div className={styles.wrapper}>
        {cover &&
          <Image className={styles.image} src={cover.image} alt={cover.alt} sizes={["256", "512", "1024", "2048"]} />
        }
        <div className={styles.content}>
          <TextLink text={text} url={url} external={external} />
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
  external: PropTypes.bool,
  url: PropTypes.string,
  text: PropTypes.string.isRequired,
}

TextLink.defaultProps = {
  external: false,
}

export default ImageText
