import flatten, {unflatten} from "flat"
import remark from "remark"
import html from "remark-html"

export function mdifyText(text) {
  return remark()
    .use(html, {entities: "escape"})
    .process(text, {
      commonmark: true,
    })
    .toString()
}

export function mdifyObject(object) {
  const isMarkdown = /__|\*|\#|(?:\[([^\]]*)\]\([^)]*\))/
  const flattenObject = flatten(object)
  Object.keys(flattenObject).map(key => {
    if (isMarkdown.test(flattenObject[key])) {
      flattenObject[key] = mdifyText(flattenObject[key])
    }
  })

  return unflatten(flattenObject)
}
