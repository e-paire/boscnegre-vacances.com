import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
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
    const {collection} = this.context
    const cottagesCategories = enhanceCollection(collection, {
      filter: {layout: "CottageCategory", locale: this.props.currentLocale},
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
}

CottagesCategories.propTypes = {
  currentLocale: PropTypes.string.isRequired,
}

export default connect(
  ({intl}) => ({
    currentLocale: intl.locale,
  }),
)(CottagesCategories)
