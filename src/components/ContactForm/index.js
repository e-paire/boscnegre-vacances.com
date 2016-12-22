import React, {Component, PropTypes} from "react"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import Title from "components/Title"

import styles from "./index.css"

class Contact extends Component {
  render() {
    const {collection} = this.context
    const {intl} = this.props
    const afterContactPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "AfterContact"),
    }).shift()

    return (
      <div className={styles.wrapper}>
        <Title id="contact_form.contact_us" />
        <form
          name="contact"
          className={styles.form}
          action={afterContactPage && afterContactPage.__url}
          netlify
        >
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
          <button className={styles.button} type="submit">
            <FormattedMessage id="contact_form.send" />
          </button>
        </form>
      </div>
    )
  }
}

Contact.contextTypes = {
  collection: PropTypes.array.isRequired,
}

Contact.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Contact)
