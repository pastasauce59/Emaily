// import React, { Component } from 'react'
import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
// * means import all actions created from actions folder and import them here
import * as actions from '../actions'
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'

// dummy components
// const Header = () => <h2>Header</h2>
// const Dashboard = () => <h2>Dashboard</h2>
// const SurveyNew = () => <h2>SurveyNew</h2>
// const Landing = () => <h2>Landing</h2>



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
                    {/* testing nested routes below */}
                    {/* <Route path='surveys' element={<Dashboard />}>
                        <Route path='new' element={<div>New Survey</div>} />
                    </Route> */}
                    <Route path='/surveys/new' element={<SurveyNew />} />
                </Routes>
            </BrowserRouter>
        </div>
    );

};

// export default connect(null, actions)(App);
export default App;