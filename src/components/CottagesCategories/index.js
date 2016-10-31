import React, {Component, PropTypes} from "react"
import classNames from "classnames"
import enhanceCollection from "phenomic/lib/enhance-collection"
import {FormattedMessage} from "react-intl"

import Carousel from "components/Carousel"
import CottageCategory from "components/CottageCategory"
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

  render() {
    const {collection, store} = this.context
    const locale = store.getState().intl.locale
    const cottagesCategories = enhanceCollection(collection, {
      filter: {layout: "CottageCategory", locale},
      sort: "capacityMin",
    })

    const {lightboxIndex, isLightboxOpen} = this.state
    const images = cottagesCategories.map(category => ({
      caption: category.title,
      src: category.cover,
    }))

    return (
      <div>
        <Title id="cottages_categories.our_cottages" />
        {cottagesCategories.length > 0
          ? <ImageLightbox
              index={lightboxIndex}
              images={images}
              onClose={this.handleCloseLightbox}
              open={isLightboxOpen}
            >
              <Carousel>
                {cottagesCategories.map((category, index) => (
                  <div key={index}
                    className={classNames(styles.category, index % 2 == 0 && styles.even)}
                    onClick={() => this.handleOpenLightbox(index)}
                  >
                    <CottageCategory {...category} />
                  </div>
                ))}
              </Carousel>
            </ImageLightbox>
          : <FormattedMessage id="cottages_categories.no_category" />
        }
      </div>
    )
  }
}

CottagesCategories.contextTypes = {
  collection: PropTypes.array.isRequired,
  store: PropTypes.object.isRequired,
}

export default CottagesCategories
