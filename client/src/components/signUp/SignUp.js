import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/userAction'
import FormInput from '../forminput/FormInput'
import CostumButton from '../costumbutton/CostumButton'

import './SignUp.scss'

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  })

  const { password, confirmPassword, displayName, email } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password })
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>You do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CostumButton type='submit'>SIGN UP</CostumButton>
      </form>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch(signUpStart(userData)),
})

export default connect(null, mapDispatchToProps)(SignUp)