import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cartItem/CartItem'
import CostumButton from '../costumButton/CostumButton'
import { selectCartItems } from '../../redux/cart/cartSelectors'

import './CartDropdown.scss'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
      </div>
      <CostumButton>Check Cart</CostumButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
