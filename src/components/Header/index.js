import PropTypes from "prop-types"
import React, {useState} from "react"
import {injectIntl} from "react-intl"

// import {useLinks} from "../../hooks/use-links"
// import BookingForm from "../BookingForm"
import {Image} from "../Image"
// import {Nav} from "../Nav"
// import {TextLink} from "../TextLink"
import {TopBar} from "../TopBar"
import {TopLogo} from "../TopLogo"
import * as styles from "./index.module.css"

const Header = ({cover, slogan, title}) => {
  const [isOpen, setIsOpen] = useState(false)
  // const links = useLinks()

  return (
    <>
      <TopBar onOpenNav={() => setIsOpen(true)} slogan={slogan} />
      <div className={styles.logo}>
        <TopLogo />
      </div>
      {isOpen && (
        <div className={styles.navOverlay} onClick={() => setIsOpen(false)} />
      )}
      {/* <div className={styles.nav}>
        <Nav open={isOpen} />
      </div> */}
      {cover && (
        <div className={styles.photo}>
          <Image
            src={cover.image}
            alt={cover.alt}
            sizes={["256", "512", "1024", "2048"]}
          />
          {title && <h1 className={styles.title}>{title}</h1>}
          {/* {text && layoutToLink && links.pages[layoutToLink] && (
            <div className={styles.text}>
              <TextLink text={text} url={links.pages[layoutToLink].path} />
            </div>
          )} */}
        </div>
      )}
      {/* <div className={styles.form}>
        <BookingForm />
      </div> */}
    </>
  )
}

Header.propTypes = {
  cover: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),

  layoutToLink: PropTypes.string,
  slogan: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default injectIntl(Header)
