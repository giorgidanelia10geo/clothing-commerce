import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsLoaded } from '../../redux/shop/shopSelector'
import WithLoader from '../../components/loader/Loader'
import CollectionPage from './CollectionPage'

const mapStateToProps = createStructuredSelector({
  isLoading: state => selectCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithLoader,
)(CollectionPage)

export default CollectionPageContainer