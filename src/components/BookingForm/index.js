import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"

import styles from "./index.css"

class BookingForm extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIndex: 0,
      isLightboxOpen: false,
    }

    this.handleCloseLightbox = this.handleCloseLightbox.bind(this)
  }

  handleCloseLightbox() {
    this.setState({
      lightboxIndex: 0,
      isLightboxOpen: false,
    })
  }

  handleOpenLightbox(index) {
    this.setState({
      lightboxIndex: index,
      isLightboxOpen: true,
    })
  }

  render() {
    return (
      <div className={styles.form}>
        <span>
          <script
            data-wsh-id="WSHMSM0Njk5IzE0MjMwIw=="
            data-wsh-subdomain="boscnegrevacancesfr"
            data-wsh-lg={this.props.currentLocale}
          />
        </span>
      </div>
    )
  }
}

BookingForm.propTypes = {
  currentLocale: PropTypes.string.isRequired,
}

export default connect(
  ({intl}) => ({
    currentLocale: intl.locale,
  }),
)(BookingForm)
