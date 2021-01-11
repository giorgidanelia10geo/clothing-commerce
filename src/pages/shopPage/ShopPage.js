
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionOverview from '../../components/collectionoverview/CollectionOverview'
import CollectionPage from '../../pages/CollectionPage/CollectionPage'
import { fetchCollectionsStartAsync } from '../../redux/shop/shopAction'
import { selectCollectionFetching, selectCollectionsLoaded } from '../../redux/shop/shopSelector'
import WithLoader from '../../components/loader/Loader'

import './ShopPage.scss'

const CollectionOverviewLoader = WithLoader(CollectionOverview)
const CollectionPageLoader = WithLoader(CollectionPage)
class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, selectCollectionsLoaded } = this.props
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => (
          <CollectionOverviewLoader isLoading={!selectCollectionsLoaded} {...props} />
        )} />
        <Route path={`${match.path}/:collectionId`} render={(props) => (
          <CollectionPageLoader isLoading={!selectCollectionsLoaded} {...props} />
        )} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  selectCollectionsLoaded: selectCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)