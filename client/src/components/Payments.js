import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'

const Payments = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <StripeCheckout
                name='Emaily'
                description='$5 for 5 email credits'
                amount={500}
                // 'token' is expecting to receieve a callback function and that callback is called
                // after successfully retreiving an authorize token from  Stripe which represents the charge.
                // The token is not actually a token but an object representing the entire charge.
                token={token => dispatch(actions.handleToken(token))}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            
            <button className='btn'>
                Add Credits
            </button>

            </StripeCheckout>
        </div>
    )
}

export default Payments;