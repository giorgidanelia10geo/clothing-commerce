import React, { Component } from 'react'
import FormInput from '../forminput/FormInput'
import CostumButton from '../../components/costumButton/CostumButton'
import { googleSignIn } from '../../utils/firebase.utils'

import './Auth.scss'

class SignIn extends Component {
  state = { email: '', password: '' }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CostumButton type='submit'>Sign In</CostumButton>
          <CostumButton onClick={googleSignIn} isGoogleSignIn>Sign in with Google</CostumButton>
        </form>

      </div>
    )
  }
}

export default SignIn
