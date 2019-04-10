import PropTypes from "prop-types"
import React from "react"

const ExternalLink = ({children, href, ...props}) => (
  <a href={href} target="_blank" rel="noopener noreferrer nofollow" {...props}>
    {children}
  </a>
)

ExternalLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
}

export default ExternalLink
