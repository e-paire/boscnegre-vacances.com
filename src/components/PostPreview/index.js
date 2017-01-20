import React, {PropTypes} from "react"
import {Link} from "react-router"
import {FormattedDate} from "react-intl"
import {Icon} from "react-fa"

import Image from "components/Image"

import styles from "./index.css"

const PostPreview = ({__url, cover, date, title, tags}) => {
  const postDate = new Date(date)
  return (
    <Link to={__url} className={styles.post} key={postDate.toISOString()}>
      <div className={styles.cover}>
        {cover &&
          <Image src={cover.image} alt={cover.alt} className={styles.image} />
        }
        <span className={styles.tags}>
          {tags.join(", ")}
        </span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          <span className={styles.date}>
            <span className={styles.icon}>
              <Icon name="calendar-o" />
            </span>
            <time dateTime={postDate.toISOString()}>
              <FormattedDate
                value={postDate}
                day="2-digit"
                month="2-digit"
                year="numeric"
                hour="numeric"
                minute="numeric"
              />
            </time>
          </span>
        </div>
      </div>
    </Link>
  )
}

PostPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

PostPreview.defaultProps = {
  tags: [],
}

export default PostPreview
