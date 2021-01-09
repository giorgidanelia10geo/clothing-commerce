import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishKey = 'pk_test_51HUNTHL5CRcu5TaSUKjPklr4JKspfQmhHA833OZjDr8TS6NjwuJvsozJwoAs00dWSwxLuRKilWyFkxU50QgMGMOg00xhSoZgjG'

  const onTokeb = token => {
    console.log(token)
    alert('Payment Successfully')
  }

  return (
    <StripeCheckout
      label='Pey Now'
      name='CRWN Ltd.'
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your tial is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onTokeb}
      stripeKey={publishKey}
    />
  )
}

export default StripeCheckoutButton
