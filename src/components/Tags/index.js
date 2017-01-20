import React, {PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import {Link} from "react-router"
import {Icon} from "react-fa"

import styles from "./index.css"

const Tags = ({intl, tags}) => {
  const url = intl.locale === "nl"
    ? "/nl/tag"
    : "/tag"
  return tags && tags.length > 0
    ? (
      <div className={styles.tags}>
        <span className={styles.icon}>
          <Icon name="tags" />
        </span>
        {tags.map(tag => (
          <Link to={`${url}/${tag}`} className={styles.tag} key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    )
    : null
}

Tags.propTypes = {
  intl: intlShape.isRequired,
  tags: PropTypes.array.isRequired,
}

Tags.defaultProps = {
  tags: [],
}

export default injectIntl(Tags)
