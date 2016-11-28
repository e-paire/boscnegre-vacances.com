import React, {PropTypes} from "react"
import {Link} from "react-router"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import {Icon} from "react-fa"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {getLocale} from "utils/intl"
import AncvLogo from "components/AncvLogo"
import Logo from "components/Logo"
import Content from "components/Content"
import NewsletterForm from "components/NewsletterForm"

import VillageGitesLogo from "./assets/villages-de-gites.png"

import styles from "./index.css"

const Footer = ({intl}, {collection}) => {
  const contactPage = enhanceCollection(collection, {
    filter: (c) => (c.layout === "Contact" && getLocale(c.__url) === intl.locale),
  }).shift()
  return (
    <footer className={styles.wrapper}>
      <Content className={styles.footer}>
        <div className={styles.infos}>
          <div className={styles.block}>
            <div className={styles.title}>
              <FormattedMessage id="footer.address" />
            </div>
            <div className={styles.addressWrapper}>
              <Logo className={styles.logo} />
              <div className={styles.address}>
                <div>{"Hameau de Bosc Nègre"}</div>
                <div>{"Bois de las putas"}</div>
                <div>{"47150 Lacapelle-Biron"}</div>
                <div>{"Nouvelle-Aquitaine"}</div>
                <div>{"France"}</div>
                <div>{"Lat : 44.597289"}</div>
                <div>{"Long : 0.873702"}</div>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.title}>
              <FormattedMessage id="footer.relevant_information" />
            </div>
            <div className={styles.links}>
              <Link className={styles.link}>
                <FormattedMessage id="footer.sitemap" />
              </Link>
              <Link className={styles.link} to={contactPage && contactPage.__url}>
                <FormattedMessage id="footer.contact" />
              </Link>
              <Link className={styles.link}>
                <FormattedMessage id="footer.prices" />
              </Link>
              <Link className={styles.link}>
                <FormattedMessage id="footer.legal_notices" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.partners}>
          <div className={styles.block}>
            <div className={styles.title}>
              <FormattedMessage id="footer.consumer_advisory" />
            </div>
            <div className={styles.consumerReviews}>
              <iframe
                src="//www.camping2be.com/widget/14230"
                scrolling="no"
                width="120" height="120"
                frameBorder="0"
              />
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.title}>
              <FormattedMessage id="footer.our_partners" />
            </div>
            <div className={styles.ourPartners}>
              <AncvLogo className={styles.ancv} />
              <div className={styles.villagedegites}>
                <img src={VillageGitesLogo} alt="Village de gîtes" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.block}>
            <div className={styles.title}>
              <FormattedMessage id="footer.join_us" />
            </div>
            <div className={styles.networks}>
              <div className={styles.network}>
                <Icon name="facebook-square" />
              </div>
              <div className={styles.network}>
                <Icon name="youtube-square" />
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.title}>
              <FormattedMessage id="footer.subscribe_newsletter" />
            </div>
            <div className={styles.newsletter}>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Content>
    </footer>
  )
}

Footer.propTypes = {
  intl: intlShape.isRequired,
}

Footer.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default injectIntl(Footer)
