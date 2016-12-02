import React, {PropTypes} from "react"
import {Link} from "react-router"
import {FormattedDate} from "react-intl"

import styles from "./index.css"

const PostPreview = ({__url, date, title}) => {
  const postDate = new Date(date)
  return (
    <div key={postDate.toISOString()}>
      <Link to={__url}>
        <time dateTime={postDate.toISOString()} className={styles.date}>
          <FormattedDate
            value={postDate} 
            day="2-digit"
            month="2-digit"
            year="numeric"
            hour="numeric"
            minute="numeric"
          />
        </time>
        {" - "}
        {title}
      </Link>
    </div>
  )
}

PostPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostPreview
