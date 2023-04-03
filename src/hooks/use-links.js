import {graphql, useStaticQuery} from "gatsby"
import {useMemo} from "react"
import {useIntl} from "react-intl"

export const useLinks = () => {
  const {locale} = useIntl()
  const data = useStaticQuery(graphql`
    query LinksQuery {
      fr: allMarkdownRemark(filter: {fields: {locale: {eq: "fr"}}}) {
        group(field: {fields: {template: SELECT}}) {
          template: fieldValue
          totalCount
          nodes {
            fields {
              path
            }
            frontmatter {
              title
              navTitle
            }
          }
        }
      }
      nl: allMarkdownRemark(filter: {fields: {locale: {eq: "nl"}}}) {
        group(field: {fields: {template: SELECT}}) {
          template: fieldValue
          totalCount
          nodes {
            fields {
              path
            }
            frontmatter {
              title
              navTitle
            }
          }
        }
      }
    }
  `)

  const links = useMemo(() => {
    const pages = data[locale].group.filter((group) => group.totalCount === 1)
    const items = data[locale].group.filter((group) => group.totalCount > 1)
    return {
      pages: pages.reduce((acc, group) => {
        const {
          fields: {path},
          frontmatter: {title, navTitle},
        } = group.nodes[0]
        return {...acc, [group.template]: {path, title: navTitle || title}}
      }, {}),
      items: items.reduce((acc, group) => {
        return {
          ...acc,
          [group.template]: group.nodes.map((node) => {
            const {
              fields: {path},
              frontmatter: {title, navTitle},
            } = node
            return {path, title: navTitle || title}
          }),
        }
      }, {}),
    }
  }, [data, locale])

  return links
}
