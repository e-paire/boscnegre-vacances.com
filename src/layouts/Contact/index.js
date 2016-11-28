import React, {PropTypes} from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import ContactForm from "components/ContactForm"
import Content from "components/Content"
import Page from "layouts/Page"

import styles from "./index.css"

const Contact = ({body, head, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Content>
        <Breadcrumb head={head} />
      </Content>
      <Content className={styles.content}>
        <div classNames={styles.text}>
          {body &&
            <BodyContainer>
              {body}
            </BodyContainer>
          }
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </Content>
    </Page>
  )
}

Contact.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Contact
