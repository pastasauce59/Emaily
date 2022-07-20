import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware())


ReactDom.render(
    // <Provider> tag is a REACT component that knows how to read changes from Redux store.
    // Anytime Redux store gets new state produced inside of it, the provider will inform
    // its childern components that new state is available and update them with it.
    <Provider store={store}><App /></Provider>,
     document.getElementById('root')
);