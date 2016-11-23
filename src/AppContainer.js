import React, {Component, PropTypes} from "react"

import {IntlProvider} from "react-intl"

import {getLocale, getIntl} from "utils/intl"

import "./styles/index.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"

class AppContainer extends Component {
  render() {
    const {children, location} = this.props
    const locale = getLocale(location.pathname)
    const intl = getIntl(locale)
    return (
      <IntlProvider {...intl}>
        <Container>
          <DefaultHeadMeta />
          {children}
        </Container>
      </IntlProvider>
    )
  }
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default AppContainer
