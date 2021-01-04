import React, { Component } from 'react'
import FormInput from '../forminput/FormInput'
import CostumButton from '../costumbutton/CostumButton'
import { auth, googleSignIn } from '../../utils/firebase.utils'

import './SignIn.scss'

class SignIn extends Component {
  state = { email: '', password: '' }

  handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="sign-in">
        <h2>Have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            type='password'
            label='Password'
            value={password}
            handleChange={this.handleChange}
            required
          />
          <CostumButton type='submit'>Sign In</CostumButton>
          <CostumButton onClick={googleSignIn} isGoogleSignIn>Google</CostumButton>
        </form>
        <div>
        </div>
      </div>
    )
  }
}

export default SignIn
