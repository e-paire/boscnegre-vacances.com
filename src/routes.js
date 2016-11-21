import React from "react"
import {Route} from "react-router"

import AppContainer from "./AppContainer"
import {PageContainer as PhenomicPageContainer} from "phenomic"

import Cottages from "layouts/Cottages"
import CottagesCategory from "layouts/CottagesCategory"
import Homepage from "layouts/Homepage"
import Groups from "layouts/Groups"
import Group from "layouts/Group"
import Page from "layouts/Page"
import PageError from "layouts/PageError"
import PageLoading from "layouts/PageLoading"
import Post from "layouts/Post"
import Region from "layouts/Region"
import Seminar from "layouts/Seminar"
import Service from "layouts/Service"
import Services from "layouts/Services"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Cottages,
      CottagesCategory,
      Groups,
      Group,
      Homepage,
      Page,
      PageError,
      PageLoading,
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
