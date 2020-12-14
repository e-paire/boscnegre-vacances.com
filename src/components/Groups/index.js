import {Link, graphql} from "gatsby"
import React, {Component} from "react"
import {Icon} from "react-fa"
import {Carousel} from "src/components/Carousel"
import {Content} from "src/components/Content"
import {Image} from "src/components/Image"
import {Title} from "src/components/Title"
import {useMediaQuery} from "src/hooks/use-media-query"

import styles from "./index.module.css"

export const Groups = ({groups}) => {
  return (
    groups?.nodes?.length > 0 && (
      <div>
        <Title id="titles.group_holidays" theme="yellow" />
        {/* {groupsPage && groupsPage.cover && (
          <Image
            className={styles.cover}
            src={groupsPage.cover.image}
            alt={groupsPage.cover.alt}
            sizes={["256", "512", "1024", "2048"]}
          />
        )} */}
        <div className={styles.groups}>
          <Content>
            <Carousel theme="yellow">
              {groups.nodes.map(
                ({fields: {path}, frontmatter: {navTitle, title, icon}}) => (
                  <Link key={path} to={path}>
                    <div className={styles.group}>
                      <div className={styles.icon}>
                        <Icon name={icon} />
                      </div>
                      <div className={styles.title}>
                        {navTitle ? navTitle : title}
                      </div>
                    </div>
                  </Link>
                )
              )}
            </Carousel>
          </Content>
        </div>
      </div>
    )
  )
}

export const query = graphql`
  fragment GroupFragment on MarkdownRemark {
    frontmatter {
      icon
      title
      navTitle
    }
  }

  fragment GroupsFragment on MarkdownRemarkConnection {
    nodes {
      fields {
        path
      }
      ...GroupFragment
    }
  }
`
