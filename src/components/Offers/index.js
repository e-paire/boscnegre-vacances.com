import PropTypes from "prop-types"
import React from "react"
import {injectIntl, intlShape} from "react-intl"

import {getUrl} from "utils/urls"
import ImageText from "components/ImageText"
import Title from "components/Title"

const Offers = ({cover, intl, text}) => {
  return (
    <div>
      <Title id="titles.our_offers" theme="yellow" />
      <ImageText
        cover={cover}
        text={text}
        url={getUrl("secureholiday", intl.locale) + "/specialoffers"}
        external
      />
    </div>
  )
}

Offers.propTypes = {
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  intl: intlShape.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default injectIntl(Offers)
