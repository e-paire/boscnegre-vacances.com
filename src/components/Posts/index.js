import classNames from "classnames"
import {graphql} from "gatsby"
import React, {useState} from "react"
import {Icon} from "react-fa"
import {injectIntl} from "react-intl"
import {Post} from "src/components/Post"

import styles from "./index.module.css"

export const Posts = ({posts}) => {
  const [activeTag, setActiveTag] = useState(null)

  return (
    <>
      {posts.tags.length > 0 && (
        <div className={styles.tags}>
          <span className={styles.tags_icon}>
            <Icon name="tags" />
          </span>
          {posts.tags.map((tag) => (
            <span
              className={classNames(
                styles.tag,
                tag === activeTag && styles.tag_active
              )}
              key={tag}
              onClick={() => setActiveTag((oldTag) => (oldTag ? null : tag))}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {posts && posts.nodes.length > 0 && (
        <div className={styles.posts}>
          {posts.nodes
            .filter(
              (post) => !activeTag || post.frontmatter.tags.includes(activeTag)
            )
            .map((post, i) => (
              <div key={i} className={styles.post}>
                <Post post={post} />
              </div>
            ))}
        </div>
      )}
    </>
  )
}

export const query = graphql`
  fragment PostsFragment on MarkdownRemarkConnection {
    nodes {
      frontmatter {
        tags
      }
      ...PostFragment
    }
    tags: distinct(field: frontmatter___tags)
  }
`
