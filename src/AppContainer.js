import React, {Component, PropTypes} from "react"
import {StickyContainer} from "react-sticky"
import {IntlProvider} from "react-intl"

import {getLocale, getIntl} from "utils/intl"

import "./styles/index.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"

class AppContainer extends Component {
  render() {
    const {location} = this.context
    const {children} = this.props
    const locale = getLocale(location)
    const intl = getIntl(locale)
    return (
      <IntlProvider {...intl}>
        <Container>
          <DefaultHeadMeta />
          <StickyContainer>
            {children}
          </StickyContainer>
        </Container>
      </IntlProvider>
    )
  }
}

AppContainer.contextTypes = {
  location: PropTypes.object.isRequired,
}

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
