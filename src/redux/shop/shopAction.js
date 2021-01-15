import { firestore, convertCollectionSnapshotToMap } from '../../utils/firebase.utils'
import ShopActionsTypes from './shopActionsTypes'

export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTION_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionsTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionsRef = firestore.collection('collections')
  dispatch(fetchCollectionsStart())

  collectionsRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .then(err => dispatch(fetchCollectionsFailure(err)))
}
