import { takeLatest, put, call, all } from 'redux-saga/effects'
import UserActionTypes from '../user/userActionTypes'
import { clearCart } from '../cart/cartAction'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)])
}