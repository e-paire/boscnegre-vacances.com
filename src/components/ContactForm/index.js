import React, {Component, PropTypes} from "react"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {getLocale} from "utils/intl"
import Title from "components/Title"

import styles from "./index.css"

class Contact extends Component {
  render() {
    const {collection} = this.context
    const {intl} = this.props
    const afterContactPage = enhanceCollection(collection, {
      filter: (c) => (c.layout === "AfterContact" && getLocale(c.__url) === intl.locale),
    }).shift()

    return (
      <div className={styles.wrapper}>
        <Title id="contact_form.contact_us" />
        <form
          className={styles.form}
          method="POST"
          action="//formspree.io/cyberced1190@gmail.com"
          target={afterContactPage ? "_self" : "_blank"}
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
          {afterContactPage &&
            <input type="hidden" name="_next" value={afterContactPage.__url} />
          }
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
