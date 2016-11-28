import React from "react"
import {Route} from "react-router"

import AppContainer from "./AppContainer"
import {PageContainer as PhenomicPageContainer} from "phenomic"

import AfterContact from "layouts/AfterContact"
import Contact from "layouts/Contact"
import Cottages from "layouts/Cottages"
import CottagesCategory from "layouts/CottagesCategory"
import Homepage from "layouts/Homepage"
import Groups from "layouts/Groups"
import Group from "layouts/Group"
import Page from "layouts/Page"
import PageError from "layouts/PageError"
import Photos from "layouts/Photos"
import Post from "layouts/Post"
import Region from "layouts/Region"
import Seminar from "layouts/Seminar"
import Service from "layouts/Service"
import Services from "layouts/Services"

const PageContainer = (props) => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      AfterContact,
      Contact,
      Cottages,
      CottagesCategory,
      Groups,
      Group,
      Homepage,
      Page,
      PageError,
      Photos,
      Post,
      Region,
      Seminar,
      Service,
      Services,
    }}
  />
)

export default (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
)
