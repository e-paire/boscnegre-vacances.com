import React, {Component, PropTypes} from "react"

import Cottage from "components/Cottage"

import styles from "./index.css"

class Cottages extends Component {
  render() {
    const {cottages} = this.props
    return cottages && cottages.length > 0
      ? <div className={styles.cottages}>
          {cottages.map((cottage, index) => (
            <div key={index} className={styles.cottage}>
              <Cottage {...cottage} />
            </div>
          ))}
        </div>
      : null
  }
}

Cottages.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Cottages.propTypes = {
  cottages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    cover: PropTypes.shape({
      image: PropTypes.string,
      alt: PropTypes.string,
    }),
    beds: PropTypes.string,
    crush: PropTypes.string,
    ctoutvertId: PropTypes.number,
  })).isRequired,
}

export default Cottages
