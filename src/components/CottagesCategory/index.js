import {graphql} from "gatsby"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {FormattedMessage, FormattedNumber} from "react-intl"

import {Image} from "../Image"
import styles from "./index.module.css"

export const CottagesCategory = ({path, cover, priceMin, title}) => {
  return (
    <div className={styles.category}>
      <div className={styles.image}>
        {cover && <Image src={cover.image} alt={cover.alt} />}
      </div>
      <Link to={path} className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.from}>
          <FormattedMessage id="cottage_category.from" />
        </div>
        <div className={styles.price}>
          <FormattedNumber
            value={priceMin}
            style="currency"
            currency="EUR"
            maximumFractionDigits={0}
          />
        </div>
        <div className={styles.from}>
          <FormattedMessage id="cottage_category.the_week" />
        </div>
      </Link>
    </div>
  )
}

CottagesCategory.propTypes = {
  path: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  priceMin: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment CottagesCategoryFragment on MarkdownRemark {
    fields {
      path
    }
    frontmatter {
      title
      cover {
        image
        alt
      }
      priceMin
    }
  }
`
