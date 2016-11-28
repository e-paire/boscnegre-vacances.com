import React, {PropTypes} from "react"

import ImageLink from "components/ImageLink"
import Title from "components/Title"

const Offers = ({cover, text, url}) => {
  return (
    <div>
      <Title id="titles.our_offers" theme="yellow" />
      <ImageLink
        cover={cover}
        text={text}
        url={url}
      />
    </div>
  )
}

Offers.propTypes = {
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Offers
