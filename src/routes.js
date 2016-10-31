import React from "react"
import {Route} from "react-router"

import AppContainer from "./AppContainer"
import {PageContainer as PhenomicPageContainer} from "phenomic"

import Cottage from "./layouts/Cottage"
import Homepage from "./layouts/Homepage"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import PageLoading from "./layouts/PageLoading"
import Post from "./layouts/Post"
import Service from "./layouts/Service"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Cottage,
      Homepage,
      Page,
      PageError,
      PageLoading,
      Post,
      Service,
    }}
  />
)

export default (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
)
