import React, {Component, PropTypes} from "react"
import {StickyContainer} from "react-sticky"
import {connect} from "react-redux"
import {IntlProvider} from "react-intl"

import "./styles/index.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"

const ReduxIntlProvider = connect(state => state.intl)(IntlProvider)

class AppContainer extends Component {
  render() {
    const {children} = this.props
    return (
      <ReduxIntlProvider>
        <Container>
          <DefaultHeadMeta />
          <StickyContainer>
            {children}
          </StickyContainer>
        </Container>
      </ReduxIntlProvider>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
