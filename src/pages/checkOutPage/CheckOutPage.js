import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cartSelectors'
import CheckoutItem from '../../components/checkoutitem/CheckoutItem'

import './CheckOutPage.scss'

const CheckOutPage = ({ cartItems, total, removeItem }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckOutPage)
