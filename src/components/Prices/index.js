import React, {PropTypes} from "react"

import ImageText from "components/ImageText"
import Title from "components/Title"

const Prices = ({cover, text, url}) => {
  return (
    <div>
      <Title id="titles.our_prices" theme="green" />
      <ImageText
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
