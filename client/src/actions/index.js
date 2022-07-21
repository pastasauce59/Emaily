import axios from 'axios'
import { FETCH_USER } from './types'

// async await refactor
export const fetchUser = () => async dispatch => {
       const res = await axios.get('/api/current_user')
        
       // res is the response from the axios.get() request
       dispatch({type: FETCH_USER, payload: res.data })
}

// Older code pre-refactor below

// export const fetchUser = () => {
//     return function(dispatch) {
//         axios.get('/api/current_user')
//         .then(res => dispatch({type: FETCH_USER, payload: res}))
//     }
// }
