import React from 'react'
import CostumButton from '../costumButton/CostumButton'

import './CartDropdown.scss'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CostumButton>Check Cart</CostumButton>
    </div>
  )
}

export default CartDropdown
