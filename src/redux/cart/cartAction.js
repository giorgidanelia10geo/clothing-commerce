import { CartActionTypes } from './cartActionTypes'

export const cartToggleHidden = () => ({
  type: CartActionTypes.CURT_TOGGLE_HIDDEN
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
