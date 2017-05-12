import PropTypes from "prop-types"
import React, {Component} from "react"
import {FormattedMessage} from "react-intl"
import {Link} from "react-router"
import Icon from "react-fa"
import {BodyContainer} from "phenomic"

import ExternalLink from "components/ExternalLink"

import styles from "./index.css"

class TextLink extends Component {
  render() {
    const {url, external, text} = this.props
    return (
      <div>
        {text &&
          <BodyContainer className={styles[url ? "textWithUrl" : "text"]}>
            {text}
          </BodyContainer>
        }
        {url &&
          <div className={styles.button}>
            {external
              ? <ExternalLink className={styles.link} href={url}>
                  <span className={styles.linkText}>
                    <FormattedMessage id="buttons.see_more" />
                  </span>
                  <span className={styles.linkIcon}>
                    <Icon name="plus" />
                  </span>
                </ExternalLink>
              : <Link className={styles.link} to={url}>
                  <span className={styles.linkText}>
                    <FormattedMessage id="buttons.see_more" />
                  </span>
                  <span className={styles.linkIcon}>
                    <Icon name="plus" />
                  </span>
                </Link>
            }

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
  external: PropTypes.bool,
  url: PropTypes.string,
  text: PropTypes.string.isRequired,
}

TextLink.defaultProps = {
  external: false,
}

export default TextLink
