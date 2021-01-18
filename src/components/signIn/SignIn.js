import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../forminput/FormInput'
import CostumButton from '../costumbutton/CostumButton'
import { googleSignInStart, emailSignInStart } from '../../redux/user/userAction'

import './SignIn.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials

  const handleSubmit = async e => {
    e.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>Have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          name='password'
          type='password'
          label='Password'
          value={password}
          handleChange={handleChange}
          required
        />
        <CostumButton type='submit'>Sign In</CostumButton>
        <CostumButton
          type='button'
          onClick={googleSignInStart}
          isGoogleSignIn
        >
          Google sign in
          </CostumButton>
      </form>
      <div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
