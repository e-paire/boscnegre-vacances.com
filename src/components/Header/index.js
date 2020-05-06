import Image from "components/Image";
import Nav from "components/Nav";
import TextLink from "components/TextLink";
import TopBar from "components/TopBar";
import TopLogo from "components/TopLogo";
import enhanceCollection from "phenomic/lib/enhance-collection";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Icon } from "react-fa";
import { injectIntl, intlShape } from "react-intl";
import { connect } from "react-redux";
import { Sticky } from "react-sticky";
import { customFilter } from "utils/collection";
import styles from "./index.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isNavOpen: false,
    };

    this.handleOpenNav = this.handleOpenNav.bind(this);
    this.handleCloseNav = this.handleCloseNav.bind(this);
  }

  handleOpenNav() {
    this.setState({ isNavOpen: true });
  }

  handleCloseNav() {
    this.setState({ isNavOpen: false });
  }

  render() {
    const { collection } = this.context;
    const {
      browser,
      cover,
      intl,
      layoutToLink,
      slogan,
      text,
      title,
    } = this.props;

    const PageToLink = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, layoutToLink),
    }).shift();

    return (
      <header className={styles.header}>
        <TopBar onOpenNav={this.handleOpenNav} slogan={slogan} />
        <Sticky className={styles.logo} isActive={browser.greaterThan.m}>
          <TopLogo />
        </Sticky>
        {this.state.isNavOpen && (
          <div className={styles.navOverlay} onClick={this.handleCloseNav} />
        )}
        <Sticky isActive={browser.greaterThan.m}>
          <Nav open={this.state.isNavOpen} />
        </Sticky>
        {cover && (
          <div className={styles.photo}>
            <Image
              src={cover.image}
              alt={cover.alt}
              sizes={["256", "512", "1024", "2048"]}
            />
            {title && <h1 className={styles.title}>{title}</h1>}
            {text && PageToLink && (
              <div className={styles.text}>
                <TextLink text={text} url={PageToLink.__url} />
              </div>
            )}
            <span
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                background: "#F44336",
                color: "#fff",
                padding: "10px 20px",
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <Icon name="bell" />
              </span>
              {intl.locale === "nl"
                ? "Info Covid-19: voor elke reservering van juni tot oktober 2020 wachten we op de nieuwe overheidsmaatregelen (gepland voor eind mei - begin juni) voordat we een beslissing kunnen nemen over uw reservering."
                : "Info Covid-19 : pour toute réservation de juin à octobre 2020 nous attendons les nouvelles mesures du gouvernement (prévues fin mai - début juin) avant de pouvoir prendre une décision sur votre réservation."}
            </span>
          </div>
        )}
      </header>
    );
  }
}

Header.contextTypes = {
  collection: PropTypes.array.isRequired,
};

Header.propTypes = {
  browser: PropTypes.object.isRequired,
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  intl: intlShape.isRequired,
  layoutToLink: PropTypes.string,
  slogan: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default connect(({ browser }) => ({ browser }))(injectIntl(Header));
