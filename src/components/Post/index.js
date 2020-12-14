import {Link, graphql} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Icon} from "react-fa"
import {FormattedDate} from "react-intl"

import {Image} from "../Image"
import styles from "./index.module.css"

export const Post = ({
  post: {
    fields: {path},
    frontmatter: {cover, date, title, tags},
  },
}) => {
  // const postDate = new Date(date)
  return (
    <Link to={path} className={styles.post} key={path}>
      <div className={styles.cover}>
        {cover && (
          <Image src={cover.image} alt={cover.alt} className={styles.image} />
        )}
        <span className={styles.tags}>{tags.join(", ")}</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          <span className={styles.date}>
            <span className={styles.icon}>
              <Icon name="calendar-o" />
            </span>
            <time dateTime={date}>
              <FormattedDate
                value={date}
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

Post.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      cover: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }),
      date: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
}

export const query = graphql`
  fragment PostFragment on MarkdownRemark {
    fields {
      path
    }
    frontmatter {
      date
      cover {
        image
        alt
      }
      title
      tags
    }
  }
`
