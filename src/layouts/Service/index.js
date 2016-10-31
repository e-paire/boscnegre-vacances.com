import React, {PropTypes} from "react"

const Service = ({title}) => {
  return (
    <div>{title}</div>
  )
}

Service.propTypes = {
  title: PropTypes.string,
}

Service.defaultProps = {
  title: PropTypes.string,
}

export default Service
