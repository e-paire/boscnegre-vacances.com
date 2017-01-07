import React, {Component, PropTypes} from "react"
import ReactGA from "react-ga"

const isProduction = process.env.NODE_ENV === "production"
const isClient = typeof window !== "undefined"

class GoogleAnalyticsTracker extends Component {
  componentWillMount() {
    if (isClient) {
      const {pkg} = this.context.metadata
      if (isProduction) {
        ReactGA.initialize(pkg.googleAnalytics)
      }
      else {
        console.info("ga.create", pkg.googleAnalytics)
      }
      this.logPageview()
    }
  }

  componentWillReceiveProps(props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageview()
    }
  }

  logPageview() {
    if (isClient) {
      if (isProduction) {
        ReactGA.set({page: window.location.pathname})
        ReactGA.pageview(window.location.pathname)
      }
      else {
        console.info("New pageview", window.location.href)
      }
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

GoogleAnalyticsTracker.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

GoogleAnalyticsTracker.propTypes = {
  children: PropTypes.any.isRequired,
  params: PropTypes.object.isRequired,
}

export default GoogleAnalyticsTracker
