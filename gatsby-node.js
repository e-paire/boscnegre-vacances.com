const {resolve} = require("path")

exports.onCreateNode = async ({node, actions: {createNodeField}}) => {
  if (node.internal.type === "MarkdownRemark") {
    const {route, layout} = node.frontmatter

    createNodeField({
      node,
      name: "template",
      value: layout || "Page",
    })

    if (!route) return

    const path = route.startsWith("/") ? route : "/" + route

    createNodeField({
      node,
      name: "path",
      value: path,
    })

    const locale = path.startsWith("/nl") ? "nl" : "fr"

    createNodeField({
      node,
      name: "locale",
      value: locale,
    })
  }
}

exports.createSchemaCustomization = ({actions: {createTypes}}) => {
  createTypes(`
    type MarkdownRemarkFrontmatterCottages {
      description: String @md
    }
    type Frontmatter @infer {
      cottages: [MarkdownRemarkFrontmatterCottages]
    }
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
    }
  `)
}

exports.createPages = async ({graphql, actions: {createPage}, reporter}) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            fields {
              path
              locale
              template
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panic(result.errors)
  }

  try {
    const {allMarkdownRemark} = result.data

    if (allMarkdownRemark) {
      allMarkdownRemark.nodes.forEach((node) => {
        const {path, template, ...context} = node.fields
        if (path) {
          createPage({
            path,
            component: resolve(`src/templates/${template}/index.js`),
            context,
          })
        }
      })
    }
  } catch (e) {
    console.error(e)
  }
}
