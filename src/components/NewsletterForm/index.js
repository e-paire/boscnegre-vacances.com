import React, {Component} from "react"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"

import styles from "./index.css"

class NewsletterForm extends Component {
  render() {
    const {intl} = this.props
    return (
      <form
        action="//lebosc.us4.list-manage.com/subscribe/post?u=37f9de2a9d643bf85926b318e&id=174aae7d93"
        target="_blank"
        method="post"
      >
        <div>
          <div className={styles.form}>
            <input
              type="email"
              name="EMAIL"
              placeholder={intl.formatMessage({id: "newsletter_form.email"})}
              className={styles.input}
            />
            <button className={styles.button} type="submit">
              <FormattedMessage id="newsletter_form.subscribe" />
            </button>
          </div>
        </div>
      </form>
    )
  }
}

NewsletterForm.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(NewsletterForm)
