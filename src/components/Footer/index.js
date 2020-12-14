import {Link} from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import {Icon} from "react-fa"
import {FormattedMessage, useIntl} from "react-intl"

import {useLinks} from "../../hooks/use-links"
import {getUrl} from "../../utils/urls"
import {AncvLogo} from "../AncvLogo"
import {Content} from "../Content"
import {ExternalLink} from "../ExternalLink"
import {Logo} from "../Logo"
import {NewsletterForm} from "../NewsletterForm"
import {TripAdvisorLogo} from "../TripAdvisorLogo"
import {ZooverLogo} from "../ZooverLogo"
import Camping2beLogo from "./assets/camping2be.png"
import VillageGitesLogo from "./assets/villages-de-gites.png"
import styles from "./index.module.css"

export const Footer = () => {
  const intl = useIntl()
  const links = useLinks()
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
              {links.pages.Contact && (
                <li>
                  <Link className={styles.link} to={links.pages.Contact.path}>
                    {links.pages.Contact.title}
                  </Link>
                </li>
              )}
              <li>
                <ExternalLink
                  className={styles.link}
                  href={getUrl("secureholiday", intl.locale) + "/weekprices"}
                >
                  <FormattedMessage id="footer.prices" />
                </ExternalLink>
              </li>
              {links.pages.LegalNotices && (
                <li>
                  <Link
                    className={styles.link}
                    to={links.pages.LegalNotices.path}
                  >
                    {links.pages.LegalNotices.title}
                  </Link>
                </li>
              )}
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
                <img
                  className={styles.camping2be}
                  src={Camping2beLogo}
                  alt="Camping2be"
                />
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
                <img
                  className={styles.village2gites}
                  src={VillageGitesLogo}
                  alt="Village de gîtes"
                />
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
              <ExternalLink
                className={styles.network}
                href={getUrl("facebook")}
              >
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
