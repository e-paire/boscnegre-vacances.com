import PropTypes from "prop-types"
import React, {Component} from "react"
import {Link} from "react-router"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import {Icon} from "react-fa"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {getUrl} from "utils/urls"
import {customFilter} from "utils/collection"
import AncvLogo from "components/AncvLogo"
import ExternalLink from "components/ExternalLink"
import Logo from "components/Logo"
import Content from "components/Content"
import NewsletterForm from "components/NewsletterForm"
import TripAdvisorLogo from "components/TripAdvisorLogo"
import ZooverLogo from "components/ZooverLogo"

import Camping2beLogo from "./assets/camping2be.png"
import VillageGitesLogo from "./assets/villages-de-gites.png"

import styles from "./index.css"

class Footer extends Component {
  render() {
    const {collection} = this.context
    const {intl} = this.props

    const contactPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Contact"),
    }).shift()

    const legalNoticesPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "LegalNotices"),
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
              <ul className={styles.nav}>
                <li>
                  <ExternalLink className={styles.link} href="/sitemap.xml">
                    <FormattedMessage id="footer.sitemap" />
                  </ExternalLink>
                </li>
                {contactPage &&
                  <li>
                    <Link className={styles.link} to={contactPage.__url}>
                      {contactPage.navTitle
                        ? contactPage.navTitle
                        : contactPage.title
                      }
                    </Link>
                  </li>
                }
                <li>
                  <ExternalLink className={styles.link} href={getUrl("secureholiday", intl.locale) + "/weekprices"}>
                    <FormattedMessage id="footer.prices" />
                  </ExternalLink>
                </li>
                {legalNoticesPage &&
                  <li>
                    <Link className={styles.link} to={legalNoticesPage.__url}>
                      {legalNoticesPage.navTitle
                        ? legalNoticesPage.navTitle
                        : legalNoticesPage.title
                      }
                    </Link>
                  </li>
                }
              </ul>
            </div>
          </div>
          <div className={styles.partners}>
            <div className={styles.block}>
              <div className={styles.title}>
                <FormattedMessage id="footer.consumer_advisory" />
              </div>
              <div className={styles.consumerReviews}>
                <ExternalLink href={getUrl("camping2be", intl.locale)}>
                  <img className={styles.camping2be} src={Camping2beLogo} alt="Camping2be" />
                </ExternalLink>
                <ExternalLink href={getUrl("zoover", intl.locale)}>
                  <ZooverLogo className={styles.zoover} />
                </ExternalLink>
                <ExternalLink href={getUrl("tripadvisor", intl.locale)}>
                  <TripAdvisorLogo className={styles.tripAdvisor} />
                </ExternalLink>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>
                <FormattedMessage id="footer.our_partners" />
              </div>
              <div className={styles.ourPartners}>
                <ExternalLink href={getUrl("ancv")}>
                  <AncvLogo className={styles.ancv} />
                </ExternalLink>
                <ExternalLink href={getUrl("villagedegites")}>
                  <img className={styles.village2gites} src={VillageGitesLogo} alt="Village de gîtes" />
                </ExternalLink>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.block}>
              <div className={styles.title}>
                <FormattedMessage id="footer.join_us" />
              </div>
              <div className={styles.networks}>
                <ExternalLink className={styles.network} href={getUrl("facebook")}>
                  <Icon name="facebook-square" />
                </ExternalLink>
                <ExternalLink className={styles.network} href={getUrl("youtube")}>
                  <Icon name="youtube-square" />
                </ExternalLink>
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
}

Footer.propTypes = {
  intl: intlShape.isRequired,
}

Footer.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default injectIntl(Footer)
