import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'
import axios from 'axios'
window.axios = axios

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))


ReactDom.render(
    // <Provider> tag is a REACT component that knows how to read changes from Redux store.
    // Anytime Redux store gets new state produced inside of it, the provider will inform
    // its childern components that new state is available and update them with it.
    <Provider store={store}><App /></Provider>,
     document.getElementById('root')
);

// console.log('STRIPE KEY IS:', process.env.REACT_APP_STRIPE_KEY)
// console.log('Environment is:', process.env.NODE_ENV)