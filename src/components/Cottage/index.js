import PropTypes from "prop-types"
import React from "react"
import {Icon} from "react-fa"
import {FormattedMessage, useIntl} from "react-intl"

import {getUrl} from "../../utils/urls"
import {Content} from "../Content"
import {ExternalLink} from "../ExternalLink"
import {Html} from "../Html"
import {Image} from "../Image"
import styles from "./index.module.css"

export const Cottage = ({
  beds,
  crush,
  cover,
  description,
  ctoutvertId,
  title,
}) => {
  const intl = useIntl()
  return (
    <div className={styles.cottage}>
      <div className={styles.cover}>
        <Image src={cover.image} alt={cover.alt} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          {description && (
            <Content childrenIsText>
              <div className={styles.description}>
                <Html html={description} />
              </div>
            </Content>
          )}
          <div className={styles.meta}>
            {beds && (
              <div className={styles.box}>
                <Icon className={styles.bed} name="bed" />
                {beds}
              </div>
            )}
            {crush && (
              <div className={styles.box}>
                <Icon className={styles.heart} name="heart" />
                {crush}
              </div>
            )}
          </div>
        </div>
        <ExternalLink
          className={styles.button}
          href={`${getUrl(
            "secureholiday",
            intl.locale
          )}/Search/product/${ctoutvertId}`}
        >
          <FormattedMessage id="buttons.check_prices" />
        </ExternalLink>
      </div>
    </div>
  )
}

Cottage.propTypes = {
  beds: PropTypes.string,
  crush: PropTypes.string,
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  ctoutvertId: PropTypes.number.isRequired,
  description: PropTypes.string,

  title: PropTypes.string.isRequired,
}
