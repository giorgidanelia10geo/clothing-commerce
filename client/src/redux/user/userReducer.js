import UserActionTypes from './userActionTypes'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        currentUser: action.payload,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer