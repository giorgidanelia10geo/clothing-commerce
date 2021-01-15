import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormInput from '../forminput/FormInput'
import CostumButton from '../costumbutton/CostumButton'
import { googleSignInStart, emailSignInStart } from '../../redux/user/userAction'

import './SignIn.scss'

class SignIn extends Component {
  state = { email: '', password: '' }

  handleSubmit = async e => {
    e.preventDefault()
    const { emailSignInStart } = this.props
    const { email, password } = this.state
    emailSignInStart(email, password)
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    const { googleSignInStart } = this.props
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
          <CostumButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Google
          </CostumButton>
        </form>
        <div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
