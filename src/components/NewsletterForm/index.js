import React, {Component, PropTypes} from "react"

import styles from "./index.css"

class NewsletterForm extends Component {
  render() {
    const {intl} = this.context
    return (
      <div id="mc_embed_signup">
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
              <input
                type="submit"
                value={intl.formatMessage({id: "newsletter_form.subscribe"})}
                className={styles.button}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

NewsletterForm.contextTypes = {
  intl: PropTypes.object.isRequired,
}

export default NewsletterForm
