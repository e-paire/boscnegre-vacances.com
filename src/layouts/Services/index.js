import React, {PropTypes} from "react"

import Content from "components/Content"
import Page from "layouts/Page"
import AllServices from "components/Services"

const Services = (props) => {
  return (
    <Page {...props}>
      <Content>
        <AllServices />
      </Content>
    </Page>
  )
}

Services.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Services
