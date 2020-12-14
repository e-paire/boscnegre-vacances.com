import React, {Component} from "react"
import {FormattedMessage, useIntl} from "react-intl"
import {Title} from "src/components/Title"

import styles from "./index.module.css"

export const ContactForm = () => {
  const intl = useIntl()
  return (
    <div className={styles.wrapper}>
      <Title id="contact_form.contact_us" />
      <form method="post" name="contact" className={styles.form} data-netlify>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder={intl.formatMessage({id: "contact_form.email"})}
        />
        <textarea
          className={styles.textarea}
          name="message"
          rows="10"
          placeholder={intl.formatMessage({id: "contact_form.message"})}
        />
        <input type="hidden" name="form-name" value="contact" />
        <div data-netlify-recaptcha />
        <button className={styles.button}>
          <FormattedMessage id="contact_form.send" />
        </button>
      </form>
    </div>
  )
}
