import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { cartToggleHidden } from '../../redux/cart/cartAction'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.scss'

const CartIcon = ({ cartToggleHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={cartToggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  cartToggleHidden: () => dispatch(cartToggleHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
