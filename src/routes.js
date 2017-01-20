import React from "react"
import {Route} from "react-router"

import AppContainer from "./AppContainer"
import {PageContainer as PhenomicPageContainer} from "phenomic"

import AfterContact from "layouts/AfterContact"
import Contact from "layouts/Contact"
import Cottage from "layouts/Cottage"
import CottagesCategories from "layouts/CottagesCategories"
import CottagesCategory from "layouts/CottagesCategory"
import Homepage from "layouts/Homepage"
import Groups from "layouts/Groups"
import Group from "layouts/Group"
import LegalNotices from "layouts/LegalNotices"
import Page from "layouts/Page"
import PageError from "layouts/PageError"
import Photos from "layouts/Photos"
import Post from "layouts/Post"
import Posts from "layouts/Posts"
import PostsByTag from "layouts/PostsByTag"
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
      Cottage,
      CottagesCategories,
      CottagesCategory,
      Groups,
      Group,
      Homepage,
      LegalNotices,
      Page,
      PageError,
      Photos,
      Post,
      Posts,
      Region,
      Seminar,
      Service,
      Services,
    }}
  />
)

export default (
  <Route component={AppContainer}>
    <Route path="tag/:tag" component={PostsByTag} />
    <Route path="nl/tag/:tag" component={PostsByTag} />
    <Route path="*" component={PageContainer} />
  </Route>
)
