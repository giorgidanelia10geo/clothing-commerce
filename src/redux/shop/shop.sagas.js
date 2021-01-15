import { takeEvery, all, call, put } from 'redux-saga/effects'
import ShopActionsTypes from './shopActionsTypes'
import { firestore, convertCollectionSnapshotToMap } from '../../utils/firebase.utils'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopAction'


export function* fetchCollectionsStartAsync() {
  try {
    const collectionsRef = firestore.collection('collections')
    const snapshot = yield collectionsRef.get()
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(
    ShopActionsTypes.FETCH_COLLECTION_START,
    fetchCollectionsStartAsync
  )
}

export function* shopSaga() {
  yield all([call(fetchCollectionStart)])
}