import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import classNames from "classnames"
import enhanceCollection from "phenomic/lib/enhance-collection"

import {customFilter} from "utils/collection"
import Carousel from "components/Carousel"
import CottagesCategory from "components/CottagesCategory"
import ImageLightbox from "components/ImageLightbox"
import Title from "components/Title"

import styles from "./index.css"

class CottagesCategories extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIndex: 0,
      isLightboxOpen: false,
    }

    this.handleCloseLightbox = this.handleCloseLightbox.bind(this)
    this.handleClickOnImage = this.handleClickOnImage.bind(this)
  }

  handleCloseLightbox() {
    this.setState({
      lightboxIndex: 0,
      isLightboxOpen: false,
    })
  }

  handleOpenLightbox(index) {
    this.setState({
      lightboxIndex: index,
      isLightboxOpen: true,
    })
  }

  handleClickOnImage(index) {
    this.handleOpenLightbox(index)
  }

  render() {
    const {collection} = this.context
    const {intl} = this.props
    const cottagesCategories = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "CottagesCategory"),
      sort: "capacityMin",
    })

    const {lightboxIndex, isLightboxOpen} = this.state
    const images = cottagesCategories.map(({cover}) => ({
      caption: cover && cover.alt,
      src: cover && cover.image,
    }))

    return cottagesCategories && cottagesCategories.length > 0
      ? <div>
          <Title id="titles.our_cottages" />
          <ImageLightbox
            index={lightboxIndex}
            images={images}
            onClose={this.handleCloseLightbox}
            open={isLightboxOpen}
          >
            <Carousel arrowsClassName={styles.arrow} noKeys={isLightboxOpen}>
              {cottagesCategories.map((category, index) => (
                <div key={index}
                  className={classNames(styles.category, index % 2 == 0 && styles.even)}
                >
                  <CottagesCategory {...category}
                    onClickOnImage={() => this.handleOpenLightbox(index)}
                  />
                </div>
              ))}
            </Carousel>
          </ImageLightbox>
        </div>
      : null
  }
}

CottagesCategories.contextTypes = {
  collection: PropTypes.array.isRequired,
}

CottagesCategories.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(CottagesCategories)
