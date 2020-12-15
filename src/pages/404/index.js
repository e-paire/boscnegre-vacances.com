import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {FormattedMessage, injectIntl} from "react-intl"

import {Content} from "../../components/Content"
import {useLinks} from "../../hooks/use-links"
import {LayoutPage} from "../../layouts/Page"
import coverImage from "./404.jpg"
import styles from "./index.module.css"

export default () => {
  const links = useLinks()
  const page = {
    fields: {},
    frontmatter: {
      cover: {
        image: null /* TODO */,
        alt: "woods",
      },
      title: "404",
      metaTitle: "Error",
    },
  }

  return (
    <LayoutPage page={page} withBradcrumb={false}>
      <Content childrenIsText className={styles.content}>
        <p>
          <FormattedMessage id={"errors.404"} />
        </p>
      </Content>
      <Content className={styles.content}>
        <Link to={links.pages.Homepage.path} className={styles.button}>
          <FormattedMessage id="errors.back_home" />
        </Link>
      </Content>
    </LayoutPage>
  )
}
