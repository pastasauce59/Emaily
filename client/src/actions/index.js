import axios from 'axios'
import { FETCH_USER, FETCH_SURVEYS } from './types'

// async await refactor
export const fetchUser = () => async dispatch => {
       const res = await axios.get('/api/current_user')
        
       // res is the response from the axios.get() request
       dispatch({type: FETCH_USER, payload: res.data })
}

export const handleToken = (token) => async dispatch => {
       const res = await axios.post('/api/stripe', token)
       
       dispatch({type: FETCH_USER, payload: res.data})
}

export const submitSurvey = (values, navigate) => async dispatch => {
       const res = await axios.post('/api/surveys', values)

       navigate('/surveys')
       dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchSurveys = () => async dispatch => {
       const res = await axios.get('api/surveys')

       dispatch({type: FETCH_SURVEYS, payload: res.data})
}


// Older code pre-refactor below

// export const fetchUser = () => {
//     return function(dispatch) {
//         axios.get('/api/current_user')
//         .then(res => dispatch({type: FETCH_USER, payload: res}))
//     }
// }
