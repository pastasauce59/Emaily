import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'


const App = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(actions.fetchUser())
    }, [])

    

    return (
        <div className='container'>
            <BrowserRouter>
                    <Header />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='surveys' element={<Dashboard />} />
                    <Route path='/surveys/new' element={<SurveyNew />} />
                </Routes>
            </BrowserRouter>
        </div>
    );

};

export default App;