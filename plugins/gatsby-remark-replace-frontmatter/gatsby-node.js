exports.onCreateNode = ({node}, pluginOptions) => {
  if (node.internal.type !== "MarkdownRemark" && node.internal.type !== "Mdx") {
    return
  }

  const {items} = pluginOptions

  if (!items || !Array.isArray(items)) return

  // console.log(items)
  items.forEach(({from, to}) => {
    const replaceRegex = new RegExp(from, "g")

    // Replace in content
    const content = node.internal.content.replace(replaceRegex, to)
    node.internal.content = content

    // Replace in frontmatter
    let frontmatter = JSON.stringify(node.frontmatter)
    frontmatter = frontmatter.replace(replaceRegex, to)
    node.frontmatter = JSON.parse(frontmatter)
  })

  return
}
