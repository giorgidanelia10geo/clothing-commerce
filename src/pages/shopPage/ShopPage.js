
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CollectionOverview from '../../components/collectionoverview/CollectionOverview'
import CollectionPage from '../../pages/CollectionPage/CollectionPage'
import { firestore, convertCollectionSnapshotToMap } from '../../utils/firebase.utils'
import { updateCollections } from '../../redux/shop/shopAction'
import WithLoader from '../../components/loader/Loader'

import './ShopPage.scss'

const CollectionOverviewLoader = WithLoader(CollectionOverview)
const CollectionPageLoader = WithLoader(CollectionPage)
class ShopPage extends React.Component {
  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => (
          <CollectionOverviewLoader isLoading={loading} {...props} />
        )} />
        <Route path={`${match.path}/:collectionId`} render={(props) => (
          <CollectionPageLoader isLoading={loading} {...props} />
        )} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)