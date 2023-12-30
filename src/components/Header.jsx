import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default function Header() {

    return (
        <div className='header-container'>
            <div className='header-wrap'>
                <div className='header-left-wrap'>
                    <Link style={{display: 'flex', alignItems: 'center'}} to='/'>
                        <img style={{ width: "90px", paddingLeft: "40px" }} src={logo} alt="로고"/>
                    </Link>
                    <ul style={{ listStyle:'none' }}>
                        <li>
                            <Link className="header-nav-item" to='/captains'>
                                CAPTAINS
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to="/players">
                                PLAYERS
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to="/auction">
                                AUCTION
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}