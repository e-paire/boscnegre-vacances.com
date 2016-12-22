import React, {Component, PropTypes} from "react"
import {FormattedMessage} from "react-intl"
import {Link} from "react-router"
import Icon from "react-fa"
import {BodyContainer} from "phenomic"

import styles from "./index.css"

class TextLink extends Component {
  render() {
    const {url, text} = this.props
    return (
      <div>
        <BodyContainer className={styles[url ? "textWithUrl" : "text"]}>
          {text}
        </BodyContainer>
        {url &&
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
        }
      </div>
    )
  }
}

TextLink.propTypes = {
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default TextLink
