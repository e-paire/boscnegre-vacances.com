import PropTypes from "prop-types"
import React from "react"
import {useIntl} from "react-intl"

import {getUrl} from "../../utils/urls"
import {ImageText} from "../ImageText"
import {Title} from "../Title"

export const Offers = ({cover, text}) => {
  const intl = useIntl()
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

  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
