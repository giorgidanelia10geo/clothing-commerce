import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cartIcon/CartIcon'
import CartDropdown from '../cartdropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelector'
import { signOutStart } from '../../redux/user/userAction'

import './Header.scss'

const Header = ({ currentUser, hidden, signOut }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/" className="option">HOME</Link>
        <Link to="/shop" className="option">SHOP</Link>
        {currentUser ? (
          <div className="option" onClick={signOut}>SIGN OUT</div>
        ) : (
            <Link className="option" to="/signin">SIGN IN</Link>)}
        <CartIcon />
      </div>
      {
        hidden ? null : (<CartDropdown />)
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
