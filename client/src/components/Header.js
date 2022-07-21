import { startSession } from 'mongoose';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Header(props) {

    const value = useSelector(state => state)
    // console.log(value)

    let renderContent = () => {
        switch (value.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href='/auth/google'>Login With Google</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a>Logout</a>
                    </li>
                );
        }
    }

    return (
        <nav>
            <div className='nav-wrapper'>
                <a className='left brand-logo'>
                    Emaily
                </a>
                <ul className='right'>
                    {renderContent()}
                    {/* <li>
                        <a>Login With Google</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
};

export default Header;