import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Payments = () => {

    debugger;

    return (
        <div>
            <StripeCheckout
                amount={500}
                // 'token' is expecting to receieve a callback function and that callback is called
                // after successfully retreiving an authorize token from  Stripe which represents the charge.
                // The token is not actually a token but an object representing the entire charge.
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        </div>
    )
}

export default Payments;