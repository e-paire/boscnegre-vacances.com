import React, {Component, PropTypes} from "react"
import {injectIntl, intlShape} from "react-intl"
import classNames from "classnames"
import enhanceCollection from "phenomic/lib/enhance-collection"
import {browserHistory} from "phenomic/lib/client"

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
    this.handleRedirect = this.handleRedirect.bind(this)
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

  handleRedirect(url) {
    browserHistory.push(url)
  }

  render() {
    console.log(this.props)
    const {collection} = this.context
    const cottagesCategories = enhanceCollection(collection, {
      filter: {layout: "CottagesCategory", locale: this.props.intl.locale},
      sort: "capacityMin",
    })

    const {lightboxIndex, isLightboxOpen} = this.state
    const images = cottagesCategories.map(category => ({
      caption: category.title,
      src: category.cover,
    }))

    return cottagesCategories.length > 0
      ? <div>
          <Title id="titles.our_cottages" />
          <ImageLightbox
            index={lightboxIndex}
            images={images}
            onClose={this.handleCloseLightbox}
            open={isLightboxOpen}
          >
            <Carousel noKeys={isLightboxOpen}>
              {cottagesCategories.map((category, index) => (
                <div key={index}
                  className={classNames(styles.category, index % 2 == 0 && styles.even)}
                >
                  <CottagesCategory {...category}
                    onClickOnImage={() => this.handleOpenLightbox(index)}
                    onClickOnContent={() => this.handleRedirect(category.__url)}
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
