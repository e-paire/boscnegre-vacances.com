import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import Content from "components/Content"
import Page from "layouts/Page"

import woodsImage from "./assets/woods.jpg"

import styles from "./index.css"

class PageError extends Component {
  render() {
    const {collection} = this.context
    const {error, errorText, intl, ...props} = this.props

    const homePage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Homepage"),
    }).shift()

    return (
      <Page {...props} head={{
        cover: {
          image: woodsImage,
          alt: "woods",
        },
        title: error.toString(),
        metaTitle: "Error",
      }}>
        <Content childrenIsText className={styles.content}>
          <p>
            <FormattedMessage
              id={`errors.${error}`}
              defaultMessage={errorText}
            />
          </p>
        </Content>
        <Content className={styles.content}>
          <Link to={homePage && homePage.__url} className={styles.button}>
            <FormattedMessage id="errors.back_home" />
          </Link>
        </Content>
      </Page>
    )
  }
}

PageError.contextTypes = {
  collection: PropTypes.array.isRequired,
}

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string,
  intl: intlShape.isRequired,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default injectIntl(PageError)
