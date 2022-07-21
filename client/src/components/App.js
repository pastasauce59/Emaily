import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from './Header'

// dummy components
// const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>



const App = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
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

export default App;