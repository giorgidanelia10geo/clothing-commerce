import { CartActionTypes } from './cartActionTypes'

export const cartToggleHidden = () => ({
  type: CartActionTypes.CURT_TOGGLE_HIDDEN
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeCartItem = item => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
})
