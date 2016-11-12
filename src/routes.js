import React from "react"
import {Route} from "react-router"

import AppContainer from "./AppContainer"
import {PageContainer as PhenomicPageContainer} from "phenomic"

import Homepage from "./layouts/Homepage"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import PageLoading from "./layouts/PageLoading"
import Post from "./layouts/Post"
import Service from "./layouts/Service"
import Services from "./layouts/Services"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Homepage,
      Page,
      PageError,
      PageLoading,
      Post,
      Service,
      Services
    }}
  />
)

export default (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
)
