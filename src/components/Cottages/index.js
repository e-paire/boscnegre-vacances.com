import React, {Component, PropTypes} from "react"
import classNames from "classnames"

import Cottage from "components/Cottage"

import styles from "./index.css"

class Cottages extends Component {
  render() {
    const {cottages} = this.props
    return cottages.length > 0
      ? <div>
          {cottages.map((cottage, index) => (
            <div key={index}
              className={classNames(styles.cottage, index % 2 == 0 && styles.even)}
            >
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
