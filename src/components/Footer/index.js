import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"
import {Icon} from "react-fa"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import AncvLogo from "components/AncvLogo"
import Logo from "components/Logo"
import Content from "components/Content"
import NewsletterForm from "components/NewsletterForm"
import TripAdvisorLogo from "components/TripAdvisorLogo"

import Camping2beLogo from "./assets/camping2be.jpg"
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
                  <a
                    className={styles.link}
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.sitemap" />
                  </a>
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
                  <a
                    className={styles.link}
                    href={`https://premium.secureholiday.net/${intl.locale}/14230/weekprices`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer.prices" />
                  </a>
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
                <Link
                  to="https://www.camping2be.com/france/lacapelle-biron/avis-clients-village-de-vacances-bosc-negre"
                  target="_blank"
                >
                  <img className={styles.camping2be} src={Camping2beLogo} alt="Camping2be" />
                </Link>
                <Link to="https://www.tripadvisor.fr/Hotel_Review-g1856959-d2058207-Reviews-Village_de_vacances_Bosc_Negre-Lacapelle_Biron_Lot_et_Garonne_Nouvelle_Aquitaine.html" target="_blank">
                  <TripAdvisorLogo className={styles.tripAdvisor} />
                </Link>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.title}>
                <FormattedMessage id="footer.our_partners" />
              </div>
              <div className={styles.ourPartners}>
                <Link to="http://www.ancv.com/" target="_blank">
                  <AncvLogo className={styles.ancv} />
                </Link>
                <Link
                  to="http://www.villagesdegites.fr/"
                  target="_blank"
                >
                  <img className={styles.village2gites} src={VillageGitesLogo} alt="Village de gîtes" />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.block}>
              <div className={styles.title}>
                <FormattedMessage id="footer.join_us" />
              </div>
              <div className={styles.networks}>
                <Link
                  className={styles.network}
                  to="https://www.facebook.com/BoscNegre"
                  target="_blank"
                >
                  <Icon name="facebook-square" />
                </Link>
                <Link
                  className={styles.network}
                  to="https://www.youtube.com/channel/UCnlRv-Wb9sXyFP9LEUQ4LpQ"
                  target="_blank"
                >
                  <Icon name="youtube-square" />
                </Link>
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
