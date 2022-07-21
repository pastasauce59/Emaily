import { startSession } from 'mongoose';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

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
                        <a href='/api/logout'>Logout</a>
                    </li>
                );
        }
    }

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link 
                to={ value.auth ? '/surveys' : '/'} 
                className='left brand-logo'
                >
                    Emaily
                </Link>
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