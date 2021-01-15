import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import WithLoader from '../loader/Loader'
import CollectionOverview from '../collectionoverview/CollectionOverview'
import { selectCollectionFetching } from '../../redux/shop/shopSelector'

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching
})

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithLoader,
)(CollectionOverview)

export default CollectionOverviewContainer