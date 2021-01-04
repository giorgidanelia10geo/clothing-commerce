import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import CartItem from '../cartItem/CartItem'
import CostumButton from '../costumbutton/CostumButton'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { cartToggleHidden } from '../../redux/cart/cartAction'

import './CartDropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
            <span className="empty-message">Your cart is empty!</span>
          )}
      </div>
      <CostumButton onClick={() => {
        history.push('/checkout')
        dispatch(cartToggleHidden())
      }}>
        Check Cart
      </CostumButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
