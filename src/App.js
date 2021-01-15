import React, { Component } from 'react'
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

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckOutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser
            ? (<Redirect to="/" />)
            : (<Auth />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
