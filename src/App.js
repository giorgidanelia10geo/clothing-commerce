import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/userAction'
import { selectCurrentUser } from './redux/user/userSelector'
import { createStructuredSelector } from 'reselect'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/header/Header'
import Auth from './pages/auth/Auth'
import CheckOutPage from './pages/checkOutPage/CheckOutPage'
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from './utils/firebase.utils'
import { selectCollectionsForPreview } from './redux/shop/shopSelector'

import './App.css'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, collectionsArr } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
      addCollectionAndDocuments(
        'collections',
        collectionsArr.map(({ title, items }) => ({ title, items }))
      )
    })
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
  collectionsArr: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
