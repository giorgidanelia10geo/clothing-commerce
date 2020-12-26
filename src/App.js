import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/header/Header'
import SignIn from './components/auth/Auth'
import { auth } from './utils/firebase.utils'

import './App.css';

class App extends Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div >
    );
  }
}

export default App
