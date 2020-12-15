// exports.mutateSource = ({markdownNode}, pluginOptions = {}) => {
//   console.log("replace-frontmatter: start", markdownNode.frontmatter.title)
//   const {items} = pluginOptions

//   if (!items || !Array.isArray(items)) return

//   // console.log(items)
//   items.forEach(({from, to}) => {
//     const replaceRegex = new RegExp(from, "g")

//     // Replace in content
//     const content = markdownNode.internal.content.replace(replaceRegex, to)
//     markdownNode.internal.content = content

//     // Replace in frontmatter
//     let frontmatter = JSON.stringify(markdownNode.frontmatter)
//     frontmatter = frontmatter.replace(replaceRegex, to)
//     markdownNode.frontmatter = JSON.parse(frontmatter)
//   })

//   console.log("replace-frontmatter: end", markdownNode.frontmatter.title)

//   // console.log(markdownNode)
//   // process.exit()
//   return
//   //
//   // return new Promise((resolve, reject) => {
//   //   try {
//   //     // markdownNode.internal.content = emoji[emojiConversion](
//   //     //   markdownNode.internal.content,
//   //     // );
//   //     // markdownNode.internal.content = markdownNode.internal.content.replace(
//   //     //   "/uploads/",
//   //     //   "/"
//   //     // )
//   //     console.log(markdownNode)
//   //     process.exit()
//   //     resolve()
//   //   } catch (err) {
//   //     reject(err)
//   //   }
//   // })
// }

// exports.default = ({markdownAST, markdownNode}) => {
//   console.log("replace-frontmatter: default", markdownNode.frontmatter.title)
//   // visit(markdownAST, ["heading"], (node) => { … })
//   return markdownAST
// }

// module.exports = {
//   mutateSource: ({markdownNode}, pluginOptions = {}) => {
//     console.log("replace-frontmatter: index", markdownNode.frontmatter.title)

//     // return Promise.resolve()
//   },
// }
