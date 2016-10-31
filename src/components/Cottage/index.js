import React, {PropTypes} from "react"
import Slick from "react-slick"

import Cottage from "layouts/Cottage"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CottagesList = ({cottages}) => {
  const settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <div>
    {
      cottages.length
      ? (
        <Slick {...settings}>
          {
            cottages.map((cottage) => (
              <div key={cottage.number}><Cottage { ...cottage } /></div>
            ))
          }
        </Slick>
      )
      : "No cottages yet."
    }
    </div>
  )
}

CottagesList.propTypes = {
  cottages: PropTypes.array.isRequired,
}

export default CottagesList
