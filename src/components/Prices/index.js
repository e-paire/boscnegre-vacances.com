import React, {PropTypes} from "react"

import ImageLink from "components/ImageLink"
import Title from "components/Title"

const Prices = ({cover, text, url}) => {
  return (
    <div>
      <Title id="titles.our_prices" theme="green" />
      <ImageLink
        cover={cover}
        text={text}
        url={url}
      />
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

export default Prices
