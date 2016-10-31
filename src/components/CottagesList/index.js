import React, {PropTypes} from "react"

import Cottage from "layouts/Cottage"
import Carousel from "components/Carousel"

const CottagesList = ({cottages}) => {
  return (
    <div>
    {
      cottages.length
      ? (
        <Carousel>
          {
            cottages.map((cottage) => (
              <div key={cottage.number}><Cottage { ...cottage } /></div>
            ))
          }
        </Carousel>
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
