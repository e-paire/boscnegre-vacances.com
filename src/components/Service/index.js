import {graphql} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Image} from "../Image"
import styles from "./index.module.css"

export const Service = ({
  service: {
    frontmatter: {cover, title},
  },
}) => {
  return (
    <div className={styles.service}>
      {cover && (
        <Image className={styles.image} src={cover.image} alt={cover.alt} />
      )}
      <div className={styles.overlay} />
      <div className={styles.title}>{title}</div>
    </div>
  )
}

Service.propTypes = {
  service: PropTypes.shape({
    cover: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }),
}

export const query = graphql`
  fragment ServiceFragment on MarkdownRemark {
    frontmatter {
      cover {
        image
        alt
      }
      title
    }
  }
`
