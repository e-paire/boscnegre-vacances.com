import PropTypes from "prop-types"
import React, {Component} from "react"

import {IntlProvider} from "react-intl"

import {getLocale, getIntl} from "utils/intl"

import "./styles/index.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import GATracker from "./components/GoogleAnalyticsTracker"

class AppContainer extends Component {
  render() {
    const {children, location} = this.props
    const locale = getLocale(location.pathname)
    const intl = getIntl(locale)

    return (
      <GATracker params={this.props.params}>
        <IntlProvider {...intl}>
          <Container>
            <DefaultHeadMeta />
            {children}
          </Container>
        </IntlProvider>
      </GATracker>
    )
  }
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node,
  params: PropTypes.object.isRequired,
}

export default AppContainer
