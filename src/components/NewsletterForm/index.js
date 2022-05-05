import React, {Component} from "react"
import {FormattedMessage, useIntl} from "react-intl"

import * as styles from "./index.module.css"

export const NewsletterForm = () => {
  const intl = useIntl()

  return (
    <form
      action="//lebosc.us4.list-manage.com/subscribe/post?u=37f9de2a9d643bf85926b318e&id=174aae7d93"
      target="_blank"
      rel="nofollow noopener noreferrer"
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
