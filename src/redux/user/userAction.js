import UserActionTypes from './userActionTypes'

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START
})

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
})


export const signInSuccess = user => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user
})

export const signInFailure = error => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
})

export const signUpStart = userData => ({
  type: UserActionTypes.SIGNUP_START,
  payload: userData
})

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData }
})

export const signUpFailure = error => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error
})