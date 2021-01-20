import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishKey = 'pk_test_51HUNTHL5CRcu5TaSUKjPklr4JKspfQmhHA833OZjDr8TS6NjwuJvsozJwoAs00dWSwxLuRKilWyFkxU50QgMGMOg00xhSoZgjG'

  const onTokeb = token => {
    console.log(token)
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then((response) => {
      alert('Payment successful')
    }).catch((error) => {
      console.log('Payment error: ', JSON.parse(error))
      alert('Payment error. Make sure you use provided cradit cart')
    })
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
