import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HxrfuJ8Bx6LJalYfUNBauLfoVYls88Ih38003okFp0lyhP0PFmfdbQEHOoWKdWrGHe81jcIPSm1obDEcMcYKJsk00MZ66eQ5O'

    const onToken = token => {
        console.log('TOKEN: ', token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label='Pay now'
        name='CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}></StripeCheckout>
    )
}

export default StripeCheckoutButton