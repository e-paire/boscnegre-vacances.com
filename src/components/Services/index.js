import {Link, graphql} from "gatsby"
import React from "react"
import {Service} from "src/components/Service"
import {Title} from "src/components/Title"

import styles from "./index.module.css"

export const Services = ({services}) => {
  return (
    <div>
      <Title id="titles.discover_services" />
      <div className={styles.services}>
        {services.nodes.map((node, index) => (
          <Link to={node.fields.path} key={index} className={styles.service}>
            <Service service={node} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  fragment ServicesFragment on MarkdownRemarkConnection {
    nodes {
      fields {
        path
      }
      ...ServiceFragment
    }
  }
`
