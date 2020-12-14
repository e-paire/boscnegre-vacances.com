import PropTypes from "prop-types"
import React from "react"

import {ImageText} from "../ImageText"
import {Title} from "../Title"

export const Prices = ({cover, text, url}) => {
  return (
    <div>
      <Title id="titles.our_prices" theme="green" />
      <ImageText cover={cover} text={text} url={url} />
    </div>
  )
}

Prices.propTypes = {
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
