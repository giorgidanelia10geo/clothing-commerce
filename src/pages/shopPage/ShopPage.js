
import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collectionoverview/CollectionOverview'
import CollectionPage from '../../pages/CollectionPage/CollectionPage'

import './ShopPage.scss'

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)

export default ShopPage