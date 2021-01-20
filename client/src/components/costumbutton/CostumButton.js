import React from 'react'

import './CostumButton.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...restProps }) => (
  <button className={`
    ${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    custom-button`}
    {...restProps}
  >
    { children}
  </button >
);

export default CustomButton
