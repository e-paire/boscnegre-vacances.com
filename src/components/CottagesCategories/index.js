import classNames from "classnames"
import React, {Component} from "react"
import {injectIntl} from "react-intl"
import {Carousel} from "src/components/Carousel"
import {CottagesCategory} from "src/components/CottagesCategory"
import {Title} from "src/components/Title"

import styles from "./index.module.css"

export const CottagesCategories = ({cottagesCategories}) => {
  if (!cottagesCategories || cottagesCategories.length === 0) {
    return null
  }

  return (
    <div>
      <Title id="titles.our_cottages" />
      <Carousel arrowsClassName={styles.arrow}>
        {cottagesCategories.map((category, index) => (
          <div
            key={index}
            className={classNames(
              styles.category,
              index % 2 == 0 && styles.even
            )}
          >
            <CottagesCategory {...category} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
