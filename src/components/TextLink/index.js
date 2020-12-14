import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import Icon from "react-fa"
import {FormattedMessage} from "react-intl"
import {ExternalLink} from "src/components/ExternalLink"
import {Html} from "src/components/Html"

import styles from "./index.module.css"

export const TextLink = ({url, external, text}) => {
  return (
    <div className={styles.box}>
      {text && (
        <span className={styles[url ? "textWithUrl" : "text"]}>{text}</span>
      )}
      {url && (
        <div className={styles.button}>
          {external ? (
            <ExternalLink className={styles.link} href={url}>
              <span className={styles.linkText}>
                <FormattedMessage id="buttons.see_more" />
              </span>
              <span className={styles.linkIcon}>
                <Icon name="plus" />
              </span>
            </ExternalLink>
          ) : (
            <Link className={styles.link} to={url}>
              <span className={styles.linkText}>
                <FormattedMessage id="buttons.see_more" />
              </span>
              <span className={styles.linkIcon}>
                <Icon name="plus" />
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  )
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
