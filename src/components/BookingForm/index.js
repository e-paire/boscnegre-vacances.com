import React, {Component} from "react"
import {injectIntl, intlShape} from "react-intl"

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
            data-wsh-lg={this.props.intl.locale}
          />
        </span>
      </div>
    )
  }
}

BookingForm.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(BookingForm)
