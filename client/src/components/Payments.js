import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'
import * as actions from '../actions'

const Payments = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <StripeCheckout
                name='Emaily'
                description='$5 for 5 email credits'
                amount={500}
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