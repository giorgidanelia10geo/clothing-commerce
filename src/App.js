import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/userSelector'
import { createStructuredSelector } from 'reselect'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/header/Header'
import Auth from './pages/auth/Auth'
import CheckOutPage from './pages/checkOutPage/CheckOutPage'
import { checkUserSession } from './redux/user/userAction'

import './App.css'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckOutPage} />
        <Route exact path="/signin" render={() => currentUser
          ? (<Redirect to="/" />)
          : (<Auth />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
